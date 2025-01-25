import ContactUsButton from '@/components/contactButton';
import { Gauge, MessageCircle, MessageSquare, Phone } from 'lucide-react';
import type { NextPage } from 'next';
import Image from "next/image";
import styles from '../styles/contactUs.module.css';

const Desktop: NextPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section with Parallax Effect */}
      <div className={styles.heroSection}>
        <div className={styles.parallaxOverlay}>
          <Image 
            src="/23779.jpg" 
            alt="Luxury Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>Elevate Your Experience</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.leftColumn}>
          <div className={styles.messageCard}>
            <p className={styles.welcomeMessage}>
              We&apos;d love to hear from you! Our dedicated team is ready to assist you
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>
                <Image width={30} height={30} alt="Facebook" src="/facebook_svgrepo.com.svg" />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Image width={30} height={30} alt="Instagram" src="/instagram_svgrepo.com.svg" />
              </a>
             
            </div>
          </div>
          
          
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.contactButtons}>
            <ContactUsButton 
              label="Begin Your Journey" 
              body="Get Started" 
              icon={Gauge}
            
            />
            <ContactUsButton 
              label="Email" 
              body="eventAgent@DenBar.online"
              icon={MessageSquare}
             
            />
            <ContactUsButton 
              label="Text Us" 
              body="786 123456789" 
              icon={MessageCircle}
            
            />
            <ContactUsButton 
              label="Call Us" 
              body="786 123456789" 
              icon={Phone}
             
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;

