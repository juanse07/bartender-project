
import LastSection from '@/components/LastSection';
import ServiceSection from '@/components/ServiceSection';
import styles from '@/styles/facepage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

interface Service {
  category: string;
  title: string;
  description: string;
  // price: number;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
  backgroundHandler?: string;
  fontColor?: string; // For dynamic font color
  buttonStyle?: 'primary' | 'outline-primary' | 'outline-secondary'; // For dynamic button style
  hightLightsBackgroundColor?: string; // For dynamic button style
  HLbodyFont?: string;
  HlTitleFont?: string;
  highLightTitle1?: string;
  highLightTitle2?: string;
  highLightTitle3?: string;
  // highLightTitle4?: string;
  highLightBody1?: string;
  highLightBody2?: string;
  highLightBody3?: string;
  highLightBody4?: string; 
  buttonText?: string;
  onClick?: () => void;
  onClickNavPath?: string;
}

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const desktopContent = [
    {
      type: 'video',
      src: '/barfilmnoir.mp4',
      heading: 'DenverBartenders',
      subheading: 'Unforgettable Moments'
    },
    {
      type: 'image',
      src: '/bartools6.jpg',
      heading: 'Mobile Bars',
      subheading: 'Incredible Bar Setups'

    },
    {
      type: 'image',
      src: '/glasschampaigne.jpg',
      heading: 'Special Events',
      subheading: 'Memorable Experiences'
    },
   
  ];
  const mobileContent = [
    {
      type: 'video',
      src: '/videos/barfilmnoir.mp4',
      heading: 'DenverBartenders',
      subheading: 'Unforgettable Moments'
    },
    {
      type: 'image',
      src: '/bartools2.png',
      heading: 'Premium Service',
      subheading: 'Professional Bartenders'
    },
    {
      type: 'image',
      src: '/champagneBottle.jpg',
      heading: 'Special Events',
      subheading: 'Memorable Experiences'
    }
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1090);
    };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

const heroContent = isMobile ? mobileContent : desktopContent;
  const services: Service[] = [
    {
      category: "BARTENDING SERVICES",
title: "Craft Cocktails, Unforgettable Moments!",
description: "Elevating events with premium mobile bartending across the metro area.",
// price: 0.1,
imageUrl: "/bon-vivant-FcS257Cw9es-unsplash.jpg",
imagePosition: "left" as const,
backgroundHandler: "#000000",
buttonStyle: "outline-secondary",
buttonText: "see our menu",
fontColor: "#f9f9f9",
hightLightsBackgroundColor: "linear-gradient(135deg,rgb(0, 0, 0),rgb(41, 41, 43))",
HlTitleFont: "#B8860B",
HLbodyFont: "#F7F7FF",
highLightTitle1: 'Signature Cocktails:',
highLightTitle2: "Private Events:",
highLightTitle3: 'Corporate Functions:',
highLightBody1: 'Experience our curated selection of handcrafted cocktails, tailored to your taste and event theme.',
highLightBody2: 'Transform your special occasions with our professional bartending service and custom drink menus.',
highLightBody3: "Impress your clients and team with sophisticated cocktail service and professional presentation.",

onClickNavPath: '/',
    },
    {
      category: "Premium Bartenders",
      title: "Reliable. Professional. Exceptional.",
      description: "Experienced mixologists at your service, ready to elevate your event today.",
      // price: 0.12,
      imageUrl: "/alex-voulgaris-6Dx-6MfDTI8-unsplash.jpg",
      imagePosition: "right" as const,
      backgroundHandler: "#D6CFC7",
      buttonStyle: "primary",
      buttonText: "Request an Estimate",
      fontColor: "#4E3629",
      hightLightsBackgroundColor: "linear-gradient(135deg,rgb(161, 162, 167), #f4f4f4)",
      HlTitleFont: "#B8860B",
      HLbodyFont: "#1d1d1d",
      highLightTitle1: "Elite Bartenders",
      highLightTitle2: "Custom Bar Service",
      highLightTitle3: "Event Support",
      highLightBody1: "Need exceptional service? Our bartenders will craft perfect cocktails every time.",
      highLightBody2: "Custom drink menus, signature cocktails, and more! We'll design it for you.",
      highLightBody3: "We'll handle your entire bar service so you can enjoy your event worry-free.",
      onClickNavPath: '/new-estimate',
    },
    
    {
      category: "MOBILE BARS",
title: "Premium Bars, Unforgettable Experiences!",
description: "Transforming events with stunning mobile bar setups across the metro area.",
// price: 0.1,
imageUrl: "/joseph-gonzalez-EOnHT42R1a8-unsplash.jpg",
imagePosition: "left" as const,
backgroundHandler: "#000000",
buttonStyle: "outline-secondary",
buttonText: "Learn More",
fontColor: "#f9f9f9",
hightLightsBackgroundColor: "linear-gradient(135deg,rgb(0, 0, 0),rgb(41, 41, 43))",
HlTitleFont: "#B8860B",
HLbodyFont: "#F7F7FF",
highLightTitle1: 'Classic LED Bar:',
highLightTitle2: "Rustic Wood Bar:",
highLightTitle3: 'Premium Mirror Bar:',
highLightBody1: 'Sleek and modern LED-illuminated bar, perfect for upscale events and nighttime celebrations.',
highLightBody2: 'Handcrafted wooden bar with rustic charm, ideal for weddings and outdoor gatherings.',
highLightBody3: "Mirror-finished luxury bar that adds glamour and sophistication to any high-end event.",
onClickNavPath: '/',
      
    },
    {
      category: "Moving",
      title: "Making Your Move Smooth and Simple",
      description: "From packing to unloading, trust us to care for your belongings..",
      // price: 0.12,
      imageUrl: "/benjamin-begin-FSDYJNNh2uk-unsplash.jpg",
      imagePosition: "right" as const,
      hightLightsBackgroundColor: "linear-gradient(135deg,rgb(161, 162, 167), #f4f4f4)",
      HlTitleFont: "#B8860B",
      HLbodyFont: "#1d1d1d",
      highLightTitle1:"Loading and Unloading",
      highLightTitle2:"Packing Services",
      highLightTitle3:"Furniture Disassembly",
      backgroundHandler: "#D6CFC7",
      fontColor: "#4E3629",
      buttonText: "Request an Estimate",
      highLightBody1:"We'll load and unload your belongings with care and precision.",
      highLightBody2:"We'll pack your belongings safely and securely for your move.",
      highLightBody3:"  We'll disassemble your furniture so it's ready for moving day.",
      onClickNavPath: '/new-estimate',
    },
    // ... other services
  ];
  return (

    <div className={styles.container}>
    <Carousel fade interval={5000} className={styles.carousel}>
      {heroContent.map((content, index) => (
        <Carousel.Item key={index} className={styles.carouselItem}>
          {content.type === 'video' ? (
            <div className={styles.videoWrapper}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              >
                <source src={content.src} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className={styles.imageWrapper}>
              <Image
                src={content.src}
                alt={content.heading}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </div>
          )}
          <Carousel.Caption className={styles.carouselCaption}>
            <h1>{content.heading}</h1>
            <p>{content.subheading}</p>

             {/* Transparent Button */}
        <button
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
            // backgroundColor: 'rgba(231, 208, 7, 0.2)',
            
            border: '2px solid white',
            borderRadius: '5px',
            padding: '15px 30px',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            (e.target as HTMLButtonElement).style.color = 'black';
            // (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(224, 192, 151, 0.2)';
            // (e.target as HTMLButtonElement).style.color = '#66500f';
            (e.target as HTMLButtonElement).style.fontWeight = '600';
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            (e.target as HTMLButtonElement).style.color = 'white';
            // (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(231, 208, 7, 0.2)';
            // (e.target as HTMLButtonElement).style.color = '#e0c097';
          }}
          onClick={() => router.push('/estimate-event')}
        >
          Start here
        </button>

          </Carousel.Caption>
          
        </Carousel.Item>
      ))}
    </Carousel>
    {/* ...existing code... */}
    {services.map((service, index) => (
        <ServiceSection
          key={index}
          category={service.category}
          title={service.title}
          description={service.description}
          // price={service.price}
          imageUrl={service.imageUrl}
          imagePosition={service.imagePosition}
          backgroundHandler={service.backgroundHandler}
          fontColor={service.fontColor}
          buttonStyle={service.buttonStyle}
          hightLightsBackgroundColor={service.hightLightsBackgroundColor}
          HLbodyFont={service.HLbodyFont}
          HlTitleFont={service.HlTitleFont}
          highLightBody1={service.highLightBody1}
          highLightBody2={service.highLightBody2}
          highLightBody3={service.highLightBody3}
          // highLightBody4={service.highLightBody4}
          highLightTitle1={service.highLightTitle1}
          highLightTitle2={service.highLightTitle2}
          highLightTitle3={service.highLightTitle3}
          // highLightTitle4={service.highLightTitle4}
          buttonText={service.buttonText}
          onClickNavPath={service.onClickNavPath}
        />
      ))}
     
      <LastSection
      // title="Thank you for choosing DenverBartenders!"
      // description="We look forward to serving you soon."
      // title=''
      // description=''
      backgroundImage="/hand2.jpeg"
      />
  </div>
    
 
    
    
    
  );
  
  
  
}