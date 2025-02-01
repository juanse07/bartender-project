import styles from '@/styles/DatePicker.module.css';
import { Calendar } from 'lucide-react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerInputProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
}

export default function CustomGoldDatePicker({ value, onChange, label }: DatePickerInputProps) {
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (date: Date | null) => {
    onChange(date);
    setShowModal(false);
  };

  const formattedDate = value ? value.toLocaleDateString() : 'Select event date';

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      <div 
        className={styles.container}
        onClick={() => setShowModal(true)}
        style={{ cursor: 'pointer' }}
      >
        <div className={styles.iconWrapper}>
          <Calendar className={styles.icon} />
        </div>
        <div className={styles.dateDisplay}>
          {formattedDate}
        </div>
      </div>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        centered
        className={styles.modalWrapper}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DatePicker
            selected={value}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            inline
            calendarStartDay={1}
            className={styles.datePicker}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}