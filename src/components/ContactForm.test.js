import React from 'react'
import ContactForm from './ContactForm'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


import 'mutationobserver-shim';

test('Contact form renders correctly', () => {
    //Arrange  
    const { getByText } = render(<ContactForm />);

    //Act
    const text = getByText(/First Name/i); 

    //Assert
    expect(text).toBeInTheDocument();
    
});

test('first name, last name, email and message inputs are rendered ', () => {
    const { queryByLabelText } = render(<ContactForm />);

    queryByLabelText(/first name/i);
    queryByLabelText(/last name/i);
    queryByLabelText(/email/i);
    queryByLabelText(/message/i);
})

test('form submit adds new user to to the list ', async () => {
    const { getByLabelText } = render(<ContactForm />);

   
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);



    fireEvent.change(firstNameInput, { target: { value: 'Test Firstn' } })
    fireEvent.change(lastNameInput, { target: { value: 'Test Lastn' } })
    fireEvent.change(emailInput, { target: { value: 'Test email' } })


    expect(firstNameInput.value).toBe('Test Firstn');
    expect(lastNameInput.value).toBe('Test Lastn');
    expect(emailInput.value).toBe('Test email');



})






