import React from 'react'
import styles from './QuoteForm.module.css'
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

    return (
        <div className={styles.background}>
            <div className={styles.quoteFormContainer}>
                <Form fields={['name', 'email', 'type', 'phone', 'comment']}>
                    <div className={styles.inputContainer}>
                        <Input
                            name='name'
                            // label='User name'
                            placeholder='Name'
                            className={styles.bodyRedU}
                            style={{height: '6vh', width:'40vw', fontSize:'20px', borderWidth:'0px', borderColor:'red'}}
                        />
                    </div>
                    <Input
                        name='email'
                        // label='User name'
                        placeholder='E-mail'
                        className={styles.bodyRedU}
                        style={{height: '6vh', width:'40vw', fontSize:'20px', borderWidth:'0px', borderColor:'red'}}
                    />
                    <Input
                        name='phone'
                        // label='User name'
                        placeholder='Phone number'
                        className={styles.bodyRedU}
                        style={{height: '6vh', width:'40vw', fontSize:'20px', borderWidth:'0px', borderRadius:'5px'}}
                    />
                    <TextArea
                        name='comment'
                        // label='User name'
                        placeholder='Comments'
                        // className={styles.bodyRedU}
                    />
                    <div style={{width:'40vw'}}>
                    <FormButton
                        onClick={fields => console.log(fields)}
                        style={{height: '6vh', width:'40vw', fontSize:'20px', borderWidth:'0px', borderRadius:'5px', color:'red'}}

                        >Send</FormButton>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default QuoteForm
