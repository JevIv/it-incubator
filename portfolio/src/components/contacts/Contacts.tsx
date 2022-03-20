import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import {ContactForm} from "./contactForm/ContactForm";
import {Title} from "../../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                {/*<h2 className={style.title}>Contact me</h2>*/}
                <Title text={"Contact me"}/>
                <div className={style.formBlock}>
                    <ContactForm />
                    <button className={style.button}>Send</button>
                </div>
            </div>
        </div>
    );
};
