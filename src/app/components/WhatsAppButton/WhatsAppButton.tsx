import Image from "next/image";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/79299015045" className={styles.whatsappFloat} target="_blank" rel="noopener noreferrer">
            <Image
                src="/nextImages/whatsapp.svg"
                alt="WhatsApp"
                width={60}
                height={60}
                className={styles.whatsappIcon}
            />
        </a>
    );
};

export default WhatsAppButton;
