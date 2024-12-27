
import ServiceSection from '@/components/ServiceSection';
import VideoContainer from '@/components/VideoContainer';
interface Service {
  category: string;
  title: string;
  description: string;
  price: number;
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
  highLightTitle4?: string;
  highLightBody1?: string;
  highLightBody2?: string;
  highLightBody3?: string;
  highLightBody4?: string; 
}

export default function Home() {
  const services: Service[] = [
    {
      category: "BARTENDING SERVICES",
title: "Craft Cocktails, Unforgettable Moments!",
description: "Elevating events with premium mobile bartending across the metro area.",
price: 0.1,
imageUrl: "/bon-vivant-FcS257Cw9es-unsplash.jpg",
imagePosition: "left" as const,
backgroundHandler: "#000000",
buttonStyle: "outline-secondary",
fontColor: "#f9f9f9",
hightLightsBackgroundColor: "linear-gradient(135deg,rgb(0, 0, 0),rgb(41, 41, 43))",
HlTitleFont: "#B8860B",
HLbodyFont: "#F7F7FF",
highLightTitle1: 'Signature Cocktails:',
highLightTitle2: "Private Events:",
highLightTitle3: 'Corporate Functions:',
highLightBody1: 'Experience our curated selection of handcrafted cocktails, tailored to your taste and event theme.',
highLightBody2: 'Transform your special occasions with our professional bartending service and custom drink menus.',
highLightBody3: "Impress your clients and team with sophisticated cocktail service and professional presentation."
    },
    {
      category: "Premium Bartenders",
      title: "Reliable. Professional. Exceptional.",
      description: "Experienced mixologists at your service, ready to elevate your event today.",
      price: 0.12,
      imageUrl: "/alex-voulgaris-6Dx-6MfDTI8-unsplash.jpg",
      imagePosition: "right" as const,
      backgroundHandler: "#D6CFC7",
      buttonStyle: "primary",
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
    },
    
    {
      category: "MOBILE BARS",
title: "Premium Bars, Unforgettable Experiences!",
description: "Transforming events with stunning mobile bar setups across the metro area.",
price: 0.1,
imageUrl: "/bon-vivant-FcS257Cw9es-unsplash.jpg",
imagePosition: "left" as const,
backgroundHandler: "#000000",
buttonStyle: "outline-secondary",
fontColor: "#f9f9f9",
hightLightsBackgroundColor: "linear-gradient(135deg,rgb(0, 0, 0),rgb(41, 41, 43))",
HlTitleFont: "#B8860B",
HLbodyFont: "#F7F7FF",
highLightTitle1: 'Classic LED Bar:',
highLightTitle2: "Rustic Wood Bar:",
highLightTitle3: 'Premium Mirror Bar:',
highLightBody1: 'Sleek and modern LED-illuminated bar, perfect for upscale events and nighttime celebrations.',
highLightBody2: 'Handcrafted wooden bar with rustic charm, ideal for weddings and outdoor gatherings.',
highLightBody3: "Mirror-finished luxury bar that adds glamour and sophistication to any high-end event."
      
    },
    {
      category: "Moving",
      title: "Making Your Move Smooth and Simple",
      description: "From packing to unloading, trust us to care for your belongings..",
      price: 0.12,
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
    
      highLightBody1:"We'll load and unload your belongings with care and precision.",
      highLightBody2:"We'll pack your belongings safely and securely for your move.",
      highLightBody3:"  We'll disassemble your furniture so it's ready for moving day.",
    },
    // ... other services
  ];
  return (
    <div className="relative h-screen w-full flex justify-center items-center"> {/* Centers VideoContainer */}
      <VideoContainer
        videoSrc="/bartender720.mp4"
        overlay={true}
        overlayOpacity={0.5}
      >
        <div className="relative z-10 text-center"> {/* Ensures content is centered on top of video */}
          <h1>Your Content Here</h1>
          <p>This will now span the full width of the container</p>
        </div>
      </VideoContainer>
      
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          category={service.category}
          title={service.title}
          description={service.description}
          price={service.price}
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
          highLightBody4={service.highLightBody4}
          highLightTitle1={service.highLightTitle1}
          highLightTitle2={service.highLightTitle2}
          highLightTitle3={service.highLightTitle3}
          highLightTitle4={service.highLightTitle4}
        />
      ))}
    </div>
  );
  
  
  
}
