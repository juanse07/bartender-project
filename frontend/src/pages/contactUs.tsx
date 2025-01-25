import ContactUsButton from '@/components/contactButton';
import { Gauge, MessageCircle, Phone } from 'lucide-react';
import type { NextPage } from 'next';
import Image from "next/image";
import styles from '../styles/contactUs.module.css';

const Desktop:NextPage = () => {
  
  	return (
    		<div className={styles.desktop1}>
        
          <div className={styles.imageside}>
      			 
                <div className={styles.imageContainer}>

        			 <Image className={styles.imagelayerIcon} width={720} height={800} alt="" src="goldenglitterblackshadow.png" /> 

               <div className={styles.contactUsContainer}>


                <b className={styles.contactUs}>Contact Us</b>
           
        				<b className={styles.wedLoveTo}>{` We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you and ensure you have the best experience possible. .  Thank you for reaching out to us – we value your input and look forward to connecting with you! `}</b>
                
                <div className={styles.socialMediaContainer}>
        				<Image width={86} height={63} alt="" src="facebook_svgrepo.com.svg" />
        				<Image width={86} height={63} alt="" src="instagram_svgrepo.com.svg" />
                </div>
                </div>
           

               </div>
          


        			
                  
        				
        		
               
        			
      			  
      			
      		
          </div>

          <div className={styles.buttonside}>
      			<div className={styles.contactUsButtonContainer}>
              <ContactUsButton label="Start Here" body="Easiest way" icon={Gauge} />
              <ContactUsButton label="Email" body="eventAgent@DenBar.online" />
              <ContactUsButton label="Text Us" body="786 123456789" icon={MessageCircle} />
              <ContactUsButton label="Call Us" body="786 123456789" icon={Phone} />	
      			</div>




          </div>
        
        </div>
        );
};

export default Desktop;

