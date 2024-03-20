import React from "react";
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl,text }) => {
    return(
        <section className="contact-details-card">
            <div className="icon">
                <img src={iconUrl} alt={text}/>
            </div>
            <p>{text}</p>
        </section>
    );
};

export default ContactInfoCard;