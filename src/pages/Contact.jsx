import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="h-screen">
            <div className="h-1/6 sm:h-1/4">
                <h1 className="text-primary text-4xl sm:text-6xl pt-16 pl-4 sm:pl-28 font-semibold">KONTAKT</h1>
            </div>
            <div className="flex flex-col sm:flex-row w-screen h-1/3 sm:h-3/4 justify-center sm:justify-around">
                <div className="w-full sm:w-1/3 flex flex-col items-center">
                    <MdOutlineMail size={60} sm:size={100} className="pb-4" color={"#69727d"}/>
                    <p className="text-black text-center font-semibold text-2xl sm:text-3xl pt-4 hover:text-primary transition duration-300 ease-in-out">
                        <a href="mailto:biuro.lordstal@gmail.com">biuro.lordstal@gmail.com</a>
                    </p>
                </div>
                <div className="w-full sm:w-1/3 flex flex-col items-center mt-8 sm:mt-0">
                    <FaPhone size={60} sm:size={100} className="pb-4" color={"#69727d"}/>
                    <p className="text-black text-center font-medium pb-2 pt-4 text-2xl sm:text-3xl hover:text-primary transition duration-300 ease-in-out">
                        <a href="tel:+48 735 953 057">🇵🇱+48 735 953 057</a>
                    </p>
                    <p className="text-black text-center font-medium pb-2 text-2xl sm:text-3xl hover:text-primary transition duration-300 ease-in-out">
                        <a href="tel:+421 949 225 583">🇸🇰+421 949 225 583</a>
                    </p>
                    <p className="text-black text-center font-medium text-2xl sm:text-3xl hover:text-primary transition duration-300 ease-in-out">
                        <a href="tel:+421 911 747 799">🇸🇰+421 911 747 799</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
