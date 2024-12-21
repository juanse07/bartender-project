import CustomGoldDatePicker from "@/components/DatePickerComponent";
import FormInputField from "@/components/FormInputField";
import LoadingButton from "@/components/LoadingButton";
import CustomNumberInput from "@/components/numberInputComponent";
import ServiceSelector from "@/components/ServicesCheckBoxes";
import * as BarServiceApi from "@/network/api/BarService";
import styles from "@/styles/formStyle.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Wine } from 'lucide-react';
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

const validationSchema = yup.object({
    clientName: yup.string().required("Client name is required"),
    companyName: yup.string().optional(),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().optional().matches(/^\d+$/, "Phone number must contain only digits"),
    address: yup.string().required("Address is required"),
    eventDate: yup.date().required("Event date is required"),
    startTime: yup.string().required("Start time is required"),
    endTime: yup.string().required("End time is required"),
    numberOfGuests: yup
        .number()
        .required("Number of guests is required")
        .min(1, "At least one guest is required"),
    servicesRequested: yup
        .array()
        .of(yup.string().required())
        .min(1, "At least one service must be selected"),
    notes: yup.string().optional(),
});

type BarServiceQuotationFormData = yup.InferType<typeof validationSchema>;

export default function CreateQuotationPage() {
    const router = useRouter();
    const methods = useForm<BarServiceQuotationFormData>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            clientName: "",
            companyName: undefined, // Optional field
            email: "",
            phone: undefined, // Optional field
            address: "",
            eventDate: undefined, // Ensure this is properly handled in your API
            startTime: "",
            endTime: "",
            numberOfGuests: 1,
            servicesRequested: [], // Default to an empty array
            notes: undefined, // Optional field
        },
    });

    const { handleSubmit, formState: { errors }, setValue, watch } = methods;

    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit({clientName, companyName, email, phone, address, eventDate, startTime, endTime, numberOfGuests, servicesRequested, notes}: BarServiceQuotationFormData) {
        alert (JSON.stringify({ clientName, companyName, email, phone, address, eventDate, startTime, endTime, numberOfGuests, servicesRequested, notes}));
        try {
            await BarServiceApi.createBarService({
                clientName,
                companyName,
                email,
                phone,
                address,
                eventDate,
                startTime,
                endTime,  
                numberOfGuests, 
                servicesRequested,  
                notes,  
            });

                await router.push("/BarService/quotations");


            setIsLoading(true);
            // console.log("Submitted Data:", data);
            alert("Quotation successfully created!");
            await router.push("/quotations");
        } catch (error) {
            console.error(error);
            alert("Error creating quotation. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    function handleDateChange(date: Date | null, setValue: Function, fieldName: string) {
        if (date) {
            // Ensure the date is valid
            const isValidDate = !isNaN(date.getTime());
            if (isValidDate) {
                setValue(fieldName, date, { shouldValidate: true });
            } else {
                setValue(fieldName, null, { shouldValidate: true });
            }
        } else {
            // If no date is provided, clear the field
            setValue(fieldName, null, { shouldValidate: true });
        }
    }
    

    return (
        <div className="container">
            <Head>
                <title>Bar Service Quotation</title>
            </Head>
            <div className={styles.brand}>
                <span className={styles.brandText}>Bar Service Quotation</span>
            </div>
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <FormInputField
                                register={methods.register("clientName")}
                                label="Client Name"
                                placeholder="e.g., John Doe"
                                error={errors.clientName}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInputField
                                register={methods.register("companyName")}
                                label="Company Name (Optional)"
                                placeholder="e.g., ABC Corp"
                                error={errors.companyName}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormInputField
                                register={methods.register("email")}
                                label="Email"
                                placeholder="e.g., john.doe@example.com"
                                error={errors.email}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInputField
                                register={methods.register("phone")}
                                label="Phone (Optional)"
                                placeholder="e.g., 1234567890"
                                error={errors.phone}
                            />
                        </Col>
                    </Row>

                    <FormInputField
                        register={methods.register("address")}
                        label="Address"
                        placeholder="e.g., 123 Main Street"
                        error={errors.address}
                    />
                    <div className="mb-3">
                        <label>Event Date</label>
                        <CustomGoldDatePicker
                            value={watch("eventDate")}
                            onChange={(date) => handleDateChange(date, setValue, "eventDate")}
                            label="Event Date"
                        />
                        {errors.eventDate && <div className="text-danger">{errors.eventDate.message}</div>}
                    </div>

                    <Row>
                        <Col md={6}>
                            <FormInputField
                                register={methods.register("startTime")}
                                label="Start Time"
                                placeholder="e.g., 6:00 PM"
                                error={errors.startTime}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInputField
                                register={methods.register("endTime")}
                                label="End Time"
                                placeholder="e.g., 10:00 PM"
                                error={errors.endTime}
                            />
                        </Col>
                    </Row>

                    <CustomNumberInput
                    value={watch('numberOfGuests')}
                    onChange={(value) => setValue('numberOfGuests', value)}
                    label="Number of Guests"
                    min={1}
                    max={1000}
                    />

                    <div className="mb-3">
                        <ServiceSelector
                            name="servicesRequested"
                            options={["Full Bar Bartending", "Beer & Wine Bartending",
                                 "Craft Cocktail Bartending", "Wedding Bartending",
                                  "Corporate Event Bartending", "Private Party Bartending",
                                   "Flair Bartending", "Mobile Bar Bartending", 
                                   "VIP Event Bartending", "Festival Bartending",
                                    "Holiday Event Bartending", "Nightclub Bartending", 
                                    "Beachside Bartending", "Yacht & Boat Bartending", 
                                    "Celebrity Event Bartending", "Mixology Class Bartending", 
                                    "Graduation Party Bartending", "Birthday Party Bartending", 
                                    "Anniversary Party Bartending", "Poolside Bartending"]}
                            multiple={true}
                            label="Services Requested"
                        />
                        {errors.servicesRequested && (
                            <p className="text-danger">{errors.servicesRequested.message}</p>
                        )}
                    </div>

                    <FormInputField
                        register={methods.register("notes")}
                        label="Notes (Optional)"
                        placeholder="Additional notes"
                        error={errors.notes}
                        as="textarea"
                    />

                    <LoadingButton className={styles.submitButton} type="submit" isloading={isLoading}>
                        Create Quotation
                        <Wine size={24} />
                    </LoadingButton>
                </Form>
            </FormProvider>
        </div>
    );
}
