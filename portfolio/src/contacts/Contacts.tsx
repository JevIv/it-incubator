import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {ContactForm} from "./contactForm/ContactForm";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contact me</h2>
                <div className={style.formBlock}>
                    <ContactForm />
                    <button className={style.button}>Send</button>
                </div>
            </div>
        </div>
    );
};
