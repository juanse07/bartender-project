import styles from '@/styles/LastSection.module.css';
import Image from 'next/image';
interface LastSectionProps {
    title: string; // Title text
    description: string; // Description text
    backgroundImage: string; // URL or path for the background image
  }

  import React from 'react';

const LastSection: React.FC<LastSectionProps> = ({ title, description, backgroundImage }) => {
  return (
    <section
      className={styles.lastSection}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
        {/* <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit='cover'
        priority={true}/> */}
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default LastSection;