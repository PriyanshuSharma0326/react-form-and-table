import React, { useContext, useState } from 'react';
import './form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { CountryContext } from '../context/CountryContext';

function Form() {
    const defaultFormFields = {
        name: '',
        email: '',
        phone: '',
        serviceRating: '',
        beverageRating: '',
        cleanlinessRating: '',
        overallRating: '',
        nation: {},
    };

    const { countryDetails } = useContext(CountryContext);

    const [formInputs, setFormInputs] = useState(defaultFormFields);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormInputs({...formInputs, [name]: value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log({...formInputs, nation: countryDetails});
    }

    return (
        <form action="" className='form-container'>
            <FormInput 
                labelText='Customer Name' 
                inputType='text'
                inputOptions={{
                    placeholder: 'Your name',
                    type: 'text',
                    required: true,
                    id: 'name',
                    name: 'name',
                    onChange: changeHandler,
                    value: formInputs.name
                }}
            />

            <FormInput 
                labelText='Email' 
                inputType='text'
                inputOptions={{
                    placeholder: 'Your email',
                    type: 'email',
                    required: true,
                    id: 'email',
                    name: 'email',
                    onChange: changeHandler,
                    value: formInputs.email
                }}
            />

            <FormInput 
                labelText='Phone' 
                inputType='number' 
                inputOptions={{
                    placeholder: 'Phone number',
                    type: 'number',
                    required: true,
                    id: 'phone',
                    name: 'phone',
                    onChange: changeHandler,
                    value: formInputs.phone
                }}
            />
            
            <div></div>

            <FormInput 
                labelText='Please rate the quality of the service you received from your host.' 
                inputType='checkbox' 
                inputOptions={{
                    required: true,
                    type: 'checkbox',
                    name: 'serviceRating',
                    value1: 'Excellent',
                    value2: 'Good',
                    value3: 'Fair',
                    value4: 'Bad',
                    onChange: changeHandler,
                    checked: formInputs.serviceRating
                }}
            />

            <FormInput 
                labelText='Please rate the quality of the beverage.' 
                inputType='checkbox' 
                inputOptions={{
                    required: true,
                    type: 'checkbox',
                    name: 'beverageRating',
                    value1: 'Excellent',
                    value2: 'Good',
                    value3: 'Fair',
                    value4: 'Bad',
                    onChange: changeHandler,
                    checked: formInputs.beverageRating
                }}
            />

            <FormInput 
                labelText='Was our restaurant clean?' 
                inputType='checkbox' 
                inputOptions={{
                    required: true,
                    type: 'checkbox',
                    name: 'cleanlinessRating',
                    value1: 'Excellent',
                    value2: 'Good',
                    value3: 'Fair',
                    value4: 'Bad',
                    onChange: changeHandler,
                    checked: formInputs.cleanlinessRating
                }}
            />

            <FormInput 
                labelText='Please rate your overall dining experience.' 
                inputType='checkbox' 
                inputOptions={{
                    required: true,
                    type: 'checkbox',
                    name: 'overallRating',
                    value1: 'Excellent',
                    value2: 'Good',
                    value3: 'Fair',
                    value4: 'Bad',
                    onChange: changeHandler,
                    checked: formInputs.overallRating
                }}
            />

            <div></div>

            <Button 
                buttonText='Submit Review' 
                type='submit' 
                onClick={submitHandler} 
            />
        </form>
    )
}

export default Form;
