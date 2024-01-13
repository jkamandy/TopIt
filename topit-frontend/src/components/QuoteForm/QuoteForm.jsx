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
    const intialFormData = {
        name: '',
        email: '',
        phoneNumber: '',
        comments: ''
    }

    const [formData, setFormData] = useState(intialFormData);


    const handleInputChange = (name, value) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            // Placeholder: Simulate making a POST request to a server

            console.log(formData)
            const response = await axios.post('http://localhost:8000/api/submitForm/', formData);
            // const response = await axios.post('http://localhost:8000/api/submitForm/', formData
            

            // Check the response from the server
            if (response.status === 200) {
                alert("Form submitted successfully!")
                setFormData(intialFormData)
                console.log('Form submitted successfully!');
                window.location.reload(); // reload current page to rest form 
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
                            style={{height: '6vh', width:'88vw', fontSize:'20px', borderWidth:'0px', borderColor:'red'}}
                            onChange={(value) => handleInputChange('name', value)}

                        />
                    </div>
                    <Input
                        name='email'
                        // label='User name'
                        placeholder='E-mail'
                        className={styles.bodyRedU}
                        style={{height: '6vh', width:'88vw', fontSize:'20px', borderWidth:'0px', borderColor:'red'}}
                        onChange={(value) => handleInputChange('email', value)}

                    />
                    <Input
                        name='phone'
                        // label='User name'
                        placeholder='Phone number'
                        className={styles.bodyRedU}
                        style={{height: '6vh', width:'88vw', fontSize:'20px', borderWidth:'0px', borderRadius:'5px'}}
                        onChange={(value) => handleInputChange('phoneNumber', value)}

                    />
                    <textarea style={{width: '88vw', borderRadius:'5px', height:'14vh'}}
                        name='comment'
                        className={styles.comment}
                        // label='User name'
                        placeholder='Comments'
                        // onChange={(value) => handleInputChange('comments', value)}
                        onChange={(e) => handleInputChange('comments', e.target.value)}
                        // value={formData.comments} 
                    />
                    <div style={{width:'40vw'}}>
                    <FormButton
                        onClick={handleSubmit}
                        style={{height: '6vh', width:'40vw', fontSize:'20px', borderWidth:'0px', borderRadius:'5px', color:'red'}}

                        >Send</FormButton>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default QuoteForm
