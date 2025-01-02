import styles from '@/styles/Thankyou.module.css';

const ThankYouPage = () => {
    return (
        <section
            className={styles.thankYou}
            style={{
                backgroundImage: `url('/hand3.jpeg')`, // Set the background image directly
                backgroundSize: 'cover', // Ensure the image covers the section
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent tiling
                height: '100vh', // Full viewport height
                width: '100%', // Full width
            }}
        >
            <div className={styles.content}>
                <h1>Thank you for choosing DenverBartenders!</h1>
                <p>We look forward to serving you soon</p>
            </div>
        </section>
    );
};

export default ThankYouPage;