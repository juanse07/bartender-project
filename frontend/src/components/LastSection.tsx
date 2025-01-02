import styles from '@/styles/LastSection.module.css';
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
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default LastSection;