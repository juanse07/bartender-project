import styles from '@/styles/contactButton.module.css';
import { Check, Copy, Gauge, MessageCircle, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

interface ContactUsButtonProps {
    body: string;
    label: string;
    iconType?: string;
}

const ContactUsButton = ({ label, body, iconType = "messageSquare" }: ContactUsButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);
    const [showTag, setShowTag] = useState(false);
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

    const handleCopy = () => {
        navigator.clipboard.writeText(body);
        setIsCopied(true);
        setShowTag(true);
        setTimeout(() => {
            setIsCopied(false);
            setShowTag(false);
        }, 2000);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Button 
                onClick={() => handleCopy()}
                className={styles.responsiveButton}
            >
                {getIcon(iconType)}
                <span style={{ margin: '0 auto' }}>{label} {body}</span>
            </Button>
            
            {iconType !== "gauge" && (
                isCopied ? (
                    <Check
                        className={styles.copyIcon}
                        style={{cursor: 'default', color: 'green' }}
                    />
                ) : (
                    <Copy 
                        className={styles.copyIcon}
                        onClick={() => handleCopy()}
                        style={{ cursor: 'pointer' }}
                    />
                )
            )}
            {showTag && (
                <div className={styles.copyTag}>
                    Copied to clipboard
                </div>
            )}
        </div>
    );
};

export default ContactUsButton;