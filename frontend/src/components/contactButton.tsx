import styles from '@/styles/contactButton.module.css';
import { Check, Copy, Gauge, MessageCircle, MessageSquare, Phone } from 'lucide-react';
import { useRouter } from 'next/router';
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
    const router = useRouter();
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
    const handleClick = () => {
        // More reliable mobile detection
        const isMobile = () => {
            return (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                (navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
            );
        };
        
        if (iconType === "phone") {
            if (isMobile()) {
                // Use standard tel: protocol with no _blank
                window.location.href = `tel:${body}`;
            } else {
                handleCopy();
            }
        } else if (iconType === "messageCircle") {
            if (isMobile()) {
                // Use standard mailto: protocol with no _blank
                window.location.href = `mailto:${body}`;
            } else {
                handleCopy();
            }
        } else if (iconType === "messageSquare") {
            if (isMobile()) {
                // Use standard sms: protocol with no _blank
                // Add body parameter for better compatibility
                window.location.href = `sms:${body}?body=`;
            } else {
                handleCopy();
            }
        } else {
            router.push(`/estimate`);
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Button 
                onClick={() => handleClick()}
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