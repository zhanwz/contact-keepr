import React, { useContext, useEffect, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {
    const { contacts, filtered, getContacts, loading } = useContext(ContactContext);

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>;
    }

    const renderContacts = filtered.length === 0 ? contacts : filtered;
    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
                <TransitionGroup>
                    {(renderContacts || []).map((contact) => (
                        <CSSTransition key={contact._id} timeout={500} className='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            )}
        </Fragment>
    );
};

export default Contacts;
