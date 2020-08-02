import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const { contacts, filtered } = useContext(ContactContext);

    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>;
    }

    const renderContacts = filtered === null ? contacts : filtered;
    return (
        <TransitionGroup>
            {renderContacts.map((contact) => (
                <CSSTransition key={contact.id} timeout={500} className='item'>
                    <ContactItem contact={contact} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default Contacts;
