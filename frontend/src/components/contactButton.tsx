import styles from '@/styles/contactButton.module.css';
import { Copy, Gauge, MessageCircle, MessageSquare, Phone } from 'lucide-react';
import { Button } from 'react-bootstrap';

interface ContactUsButtonProps {
    body: string;
    label: string;
    iconType?: string;
}

const ContactUsButton = ({ label, body, iconType = "messageSquare" }: ContactUsButtonProps) => {
    const getIcon = (type: string) => {
        switch (type) {
            case "gauge":
                return <Gauge className="w-6 h-6" />;
            case "messageSquare":
                return <MessageSquare className="w-6 h-6" />;
            case "messageCircle":
                return <MessageCircle className="w-6 h-6" />;
            case "phone":
                return <Phone className="w-6 h-6" />;
            default:
                return <MessageSquare className="w-6 h-6" />;
        }
    };

    const phoneNumber = '786123456789';

    const handleCopy = () => {
        navigator.clipboard.writeText(phoneNumber);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Button 
                onClick={handleCopy}
                className={styles.responsiveButton}
            >
                {getIcon(iconType)}
                <span style={{ margin: '0 auto' }}>{label} {body}</span>
            </Button>
            <Copy className={styles.copyIcon} />
        </div>
    );
};

export default ContactUsButton;