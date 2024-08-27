import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import './Contact.scss';

const Contact = () => {
    return (
        <main className="contact">
            <div className="contact-header">
                <h1 className="contact-title">KONTAKT</h1>
            </div>
            <div className="contact-content">
                <div className="contact-item">
                    <MdOutlineMail className="contact-icon" />
                    <p className="contact-info">
                        <a href="mailto:biuro.lordstal@gmail.com">biuro.lordstal@gmail.com</a>
                    </p>
                </div>
                <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <p className="contact-info">
                        <a href="tel:+48 735 953 057">🇵🇱+48 735 953 057</a>
                    </p>
                    <p className="contact-info">
                        <a href="tel:+421 949 225 583">🇸🇰+421 949 225 583</a>
                    </p>
                    <p className="contact-info">
                        <a href="tel:+421 911 747 799">🇸🇰+421 911 747 799</a>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Contact;
