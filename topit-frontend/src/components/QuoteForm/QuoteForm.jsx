import React from 'react'
import styles from './QuoteForm.module.css'
import { useState } from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom'
import Form, {
  Input,
  Select,
  FormButton,
  TextArea,
} from 'react-form-component'

function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        comments: ''
    });

    const handleInputChange = (name, value) => {
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleSubmit = async () => {
        try {
            // Placeholder: Simulate making a POST request to a server
            const response = await axios.post('/api/submitForm', formData);

            // Check the response from the server
            if (response.status === 200) {
            console.log('Form submitted successfully!');
            } else {
            console.error('Error submitting form:', response.data);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.quoteFormContainer}>
                <span className={styles.subHeading}>ANY <span className={styles.subHeadingRedU}>QUESTIONS</span>/<span className={styles.subHeadingRedU}>COMMENTS</span>?</span>
                <Form fields={['name', 'email', 'type', 'phone', 'comment']}>
                    <div className={styles.inputContainer}>
                        <Input
                            name='name'
                            // label='User name'
                            placeholder='Name'
                            className={styles.bodyRedU}
                            style={{height: '6vh', width:'40vw', fontSize:'20px', borderWidth:'0px', borderColor:'red'}}
                            onChange={(value) => handleInputChange('name', value)}

                        />
                    </div>
                    <Input
                        name='email'
                        // label='User name'
                        placeholder='E-mail'
                        className={styles.bodyRedU}
                        style={{height: '6vh', width:'40vw', fontSize:'20px', borderWidth:'0px', borderColor:'red'}}
                        onChange={(value) => handleInputChange('email', value)}

                    />
                    <Input
                        name='phone'
                        // label='User name'
                        placeholder='Phone number'
                        className={styles.bodyRedU}
                        style={{height: '6vh', width:'40vw', fontSize:'20px', borderWidth:'0px', borderRadius:'5px'}}
                        onChange={(value) => handleInputChange('phoneNumber', value)}

                    />
                    <TextArea
                        name='comment'
                        // label='User name'
                        placeholder='Comments'
                        // className={styles.bodyRedU}
                    />
                    <div style={{width:'40vw'}}>
                    <FormButton
                        onClick={handleSubmit}
                        style={{height: '6vh', width:'40vw', fontSize:'20px', borderWidth:'0px', borderRadius:'5px', color:'red'}}
                        onChange={(value) => handleInputChange('comments', value)}

                        >Send</FormButton>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default QuoteForm
