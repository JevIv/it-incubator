import React from 'react';
import style from './ContactForm.module.css';


export const ContactForm = () => {
    return (
        <form className={style.ContactForm}>
            <input type={"text"}
                   placeholder={"Title of message"}
                   className={style.contactInput}/>
            <input type={"email"}
                   placeholder={"Your email"}
                   className={style.contactInput}/>
            <textarea placeholder={"Your message"}
                      minLength={10}
                      className={style.contactText}/>
        </form>
    );
};
