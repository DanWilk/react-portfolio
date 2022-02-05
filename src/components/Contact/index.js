import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({name: '', email: '', message: '' });
    const { name, email, message} = formState

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            console.log(isValid);
            if(!isValid) {
                setErrorMessage('Your Email is invalid');
            } else {
                setErrorMessage('');
            } 
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    console.log(formState);
    return (
        <section>
            <h1 className='text' >Contact me</h1>
            <form id='name' className='body-text flex-row' onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-inputs' defaultValue={formState.name} onBlur={handleChange}/>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' className='form-inputs' defaultValue={formState.email} onBlur={handleChange}/>
                </div>
                <div className='form-inputs'>
                    <label className='message' htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' className='form-inputs' defaultValue={formState.message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div className='error'>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <div className='lg-button'>
                    <button type='submit' className='form-submit' >Submit</button>
                </div>
            </form>
            {/* <button type='submit' className='form-submit' >Submit</button> */}
        </section>
    )
}

export default ContactForm;