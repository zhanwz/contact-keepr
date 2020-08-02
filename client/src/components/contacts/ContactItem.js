import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact;
    const { delectContact, setCurrent, clearCurrent } = useContext(ContactContext);
    const badge = type === 'professional' ? 'badge-success' : 'badge-primary';
    const onDelete = () => {
        delectContact(id);
        clearCurrent();
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span style={{ float: 'right' }} className={'badge ' + badge}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {email && (
                    <li>
                        <i className='fas fa-envelope-open' />
                        &nbsp;
                        {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className='fas fa-phone' />
                        &nbsp;
                        {phone}
                    </li>
                )}
                <p>
                    <button className='btn btn-dark btn-sm' onClick={() => setCurrent(contact)}>
                        Edit
                    </button>
                    <button className='btn btn-danger btn-sm' onClick={onDelete}>
                        Delete
                    </button>
                </p>
            </ul>
        </div>
    );
};

ContactItem.prototype = {
    contacts: PropTypes.object.isRequired,
};

export default ContactItem;
