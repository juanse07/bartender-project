import ContactUsButton from '@/components/contactButton';
import type { NextPage } from 'next';
import Image from "next/image";
import styles from '../styles/contactUs.module.css';

interface ContactPageProps {
  heroContent: {
    image: string;
    title: string;
    subtitle: string;
  };
  contactInfo: {
    welcomeMessage: string;
    socialLinks: Array<{
      platform: string;
      icon: string;
      url: string;
    }>;
    buttons: Array<{
      label: string;
      body: string;
      iconType: string;
    }>;
  };
}

const Desktop: NextPage<ContactPageProps> = ({ heroContent, contactInfo }) => {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section with Parallax Effect */}
      <div className={styles.heroSection}>
        <div className={styles.parallaxOverlay}>
          <Image 
            src={heroContent.image}
            alt="Luxury Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{heroContent.title}</h1>
            <p className={styles.subtitle}>{heroContent.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.leftColumn}>
          <div className={styles.messageCard}>
            <p className={styles.welcomeMessage}>
              {contactInfo.welcomeMessage}
            </p>
            <div className={styles.socialLinks}>
              {contactInfo.socialLinks.map((link, index) => (
                <a key={index} href={link.url} className={styles.socialIcon}>
                  <Image 
                    width={30} 
                    height={30} 
                    alt={link.platform} 
                    src={link.icon} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.contactButtons}>
            {contactInfo.buttons.map((button, index) => (
              <ContactUsButton 
                key={index}
                label={button.label}
                body={button.body}
                iconType={button.iconType}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const heroContent = {
      image: "/23779.webp",
      title: "Contact Us",
      subtitle: "Elevate Your Experience"
    };

    const contactInfo = {
      welcomeMessage: "We'd love to hear from you! Our dedicated team is ready to assist you",
      socialLinks: [
        {
          platform: "Facebook",
          icon: "/facebook_svgrepo.com.svg",
          url: "#"
        },
        {
          platform: "Instagram",
          icon: "/instagram_svgrepo.com.svg",
          url: "#"
        }
      ],
      buttons: [
        {
          label: "Begin Your Journey",
          body: "Get Started",
          iconType: "gauge"
        },
        {
          label: "Email",
          body: "eventAgent@DenBar.online",
          iconType: "mail"
        },
        {
          label: "Text Us",
          body: "786 123456789",
          iconType: "messageCircle"
        },
        {
          label: "Call Us",
          body: "786 123456789",
          iconType: "phone"
        }
      ]
    };

    return {
      props: {
        heroContent,
        contactInfo
      },
      revalidate: 86400,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        heroContent: {
          image: "/23779.webp",
          title: "Contact Us",
          subtitle: "Elevate Your Experience"
        },
        contactInfo: {
          welcomeMessage: "",
          socialLinks: [],
          buttons: []
        }
      },
      revalidate: 86400,
    };
  }
};

export default Desktop;

