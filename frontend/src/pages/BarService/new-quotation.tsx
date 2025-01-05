import { yupResolver } from "@hookform/resolvers/yup";
import { Wine } from 'lucide-react';
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from 'react';
import { Col, Form, Modal, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

import CustomGoldDatePicker from "@/components/DatePickerComponent";
import FormInputField from "@/components/FormInputField";
import LoadingButton from "@/components/LoadingButton";
import CustomNumberInput from "@/components/numberInputComponent";
import ServiceSelector from "@/components/ServicesCheckBoxes";
import * as BarServiceApi from "@/network/api/BarService";
import styles from "@/styles/formStyle.module.css";

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
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const methods = useForm<BarServiceQuotationFormData>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            clientName: "",
            companyName: "",
            email: "",
            phone: "",
            address: "",
            eventDate: undefined,
            startTime: "",
            endTime: "",
            numberOfGuests: 0,
            servicesRequested: [] as string[], // Explicitly type as string[]
            notes: "",
        },
    });

    const { handleSubmit, formState: { errors }, setValue, watch } = methods;

    function handleDateChange(date: Date | null, setValue: Function, fieldName: string) {
        if (date) {
            const isValidDate = !isNaN(date.getTime());
            if (isValidDate) {
                setValue(fieldName, date, { shouldValidate: true });
                setShowDatePicker(false);
            } else {
                setValue(fieldName, null, { shouldValidate: true });
            }
        } else {
            setValue(fieldName, null, { shouldValidate: true });
        }
    }

    async function onSubmit(data: BarServiceQuotationFormData) {
        setIsLoading(true);
        try {
            // Ensure servicesRequested is never undefined
            const formData = {
                ...data,
                servicesRequested: data.servicesRequested || [],
                companyName: data.companyName || undefined,
                phone: data.phone || undefined,
                notes: data.notes || undefined
            };

            await BarServiceApi.createBarService(formData);
            alert("Quotation successfully created!");
            await router.push("/BarService/thankyou");
        } catch (error) {
            console.error(error);
            alert("Error creating quotation. Please try again." + error);
        } finally {
            setIsLoading(false);
        }
    }

    // Time options for the dropdowns
    const timeOptions = Array.from({ length: 48 }, (_, i) => {
        const hour = Math.floor(i / 2);
        const minute = i % 2 === 0 ? '00' : '30';
        const ampm = hour < 12 ? 'AM' : 'PM';
        const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        return `${displayHour}:${minute} ${ampm}`;
    });

    return (
        <div className="container px-4">
            <Head>
                <title>Get in touch with us</title>
            </Head>
            
            <div className={`${styles.brand} py-4`}>
                <span className={`${styles.brandText} text-center text-3xl font-bold`}>
                    Get in touch with us
                </span>
            </div>

            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <Row className="mb-4">
                        <Col xs={12} md={6} className="mb-4">
                            <FormInputField
                                register={methods.register("clientName")}
                                label="Client Name"
                                placeholder="e.g., John Doe"
                                error={errors.clientName}
                                className="py-3 text-lg"
                            />
                        </Col>
                        <Col xs={12} md={6} className="mb-4">
                            <FormInputField
                                register={methods.register("companyName")}
                                label="Company Name (Optional)"
                                placeholder="e.g., ABC Corp"
                                error={errors.companyName}
                                className="py-3 text-lg"
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col xs={12} md={6} className="mb-4">
                            <FormInputField
                                register={methods.register("email")}
                                label="Email"
                                placeholder="e.g., john.doe@example.com"
                                error={errors.email}
                                className="py-3 text-lg"
                            />
                        </Col>
                        <Col xs={12} md={6} className="mb-4">
                            <FormInputField
                                register={methods.register("phone")}
                                label="Phone (Optional)"
                                placeholder="e.g., 1234567890"
                                error={errors.phone}
                                className="py-3 text-lg"
                            />
                        </Col>
                    </Row>

                    <div className="mb-4">
                        <FormInputField
                            register={methods.register("address")}
                            label="Address"
                            placeholder="e.g., 123 Main Street"
                            error={errors.address}
                            className="py-3 text-lg"
                        />
                    </div>

                    {/* Mobile-friendly date picker */}
                    <div className="mb-4">
                        <label className="form-label">Event Date</label>
                        <div 
                            className="form-control py-3 text-lg cursor-pointer"
                            onClick={() => setShowDatePicker(true)}
                        >
                            {watch("eventDate") ? 
                                new Date(watch("eventDate")).toLocaleDateString() : 
                                "Select Date"
                            }
                        </div>
                        <Modal
                            show={showDatePicker}
                            onHide={() => setShowDatePicker(false)}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Select Event Date</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <CustomGoldDatePicker
                                    value={watch("eventDate")}
                                    onChange={(date) => handleDateChange(date, setValue, "eventDate")}
                                    label="Event Date"
                                />
                            </Modal.Body>
                        </Modal>
                        {errors.eventDate && 
                            <div className="text-danger">{errors.eventDate.message}</div>
                        }
                    </div>

                    <Row className="mb-4">
                        <Col xs={12} md={6} className="mb-4">
                            <label className="form-label">Start Time</label>
                            <select
                                {...methods.register("startTime")}
                                className="form-select py-3 text-lg"
                            >
                                <option value="">Select Start Time</option>
                                {timeOptions.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            {errors.startTime && 
                                <div className="text-danger">{errors.startTime.message}</div>
                            }
                        </Col>
                        <Col xs={12} md={6} className="mb-4">
                            <label className="form-label">End Time</label>
                            <select
                                {...methods.register("endTime")}
                                className="form-select py-3 text-lg"
                            >
                                <option value="">Select End Time</option>
                                {timeOptions.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            {errors.endTime && 
                                <div className="text-danger">{errors.endTime.message}</div>
                            }
                        </Col>
                    </Row>

                    <div className="mb-4">
                        <CustomNumberInput
                            value={watch('numberOfGuests')}
                            onChange={(value) => setValue('numberOfGuests', value)}
                            label="Number of Guests"
                            min={1}
                            max={1000}
                            className="py-3 text-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <ServiceSelector
                            name="servicesRequested"
                            options={[
                                "Bartender",
                                "Barback",
                                "Cocktail Waitress/Waiter",
                                "Luxury Personal Mixologist Service"
                            ]}
                            multiple={true}
                            label="Services Requested"
                        />
                        {errors.servicesRequested && (
                            <p className="text-danger">{errors.servicesRequested.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <FormInputField
                            register={methods.register("notes")}
                            label="Notes (Optional)"
                            placeholder="Additional notes"
                            error={errors.notes}
                            as="textarea"
                            className="py-3 text-lg"
                            style={{ minHeight: '120px' }}
                        />
                    </div>

                    <div className="mb-5 pb-4">
                        <LoadingButton 
                            className={`${styles.submitButton} w-100 py-3 text-lg`} 
                            type="submit" 
                            isloading={isLoading}
                        >
                            Request an Estimate
                            <Wine size={24} className="ms-2" />
                        </LoadingButton>
                    </div>
                </Form>
            </FormProvider>
        </div>
    );
}