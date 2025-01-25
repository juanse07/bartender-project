import styles from '@/styles/contactButton.module.css';
import { Copy, LucideIcon, MessageSquare } from 'lucide-react';
import { Button } from 'react-bootstrap';
interface ContactUsButtonProps {
    body: string;
    label: string;
    icon?: LucideIcon;  // Make icon optional
}

const ContactUsButton = ({ label, body, icon: Icon = MessageSquare }: ContactUsButtonProps) => {
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


   <Icon className="w-6 h-6" />
   <span style={{ margin: '0 auto' }}>{label} {body}</span>
 </Button>
 <Copy style={{ 
   width: '1.25rem', 
   height: '1.25rem',
   position: 'absolute',
   right: '-30px',
   top: '50%',
   transform: 'translateY(-50%)'
 }} />
</div>
    );
};

export default ContactUsButton;