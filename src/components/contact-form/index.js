import React, { Component, Fragment } from 'react';
import * as emailjs from 'emailjs-com';
import { userName } from  '../../config/keys';
import styles from './form.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, subject, message} = this.state;
    const user_id = userName;

    let templateParams = {
      from_name: name,
      reply_to: email,
      subject: subject,
      message_html: message
    };

    emailjs.send(
      'gmail',
      'contact_form',
      templateParams,
      user_id,
    ).then(function(response) {
        // alert('Thank you - your message has been sent.')
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      // alert('Message not sent - please try again.')
       console.log('FAILED...', error);
    });

    this.resetForm();
  }



  resetForm(){
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
    return (
      <Fragment>
        <h2 className={styles.heading}>Get in Touch</h2>
        <form className={styles.form} onSubmit={this.handleSubmit.bind(this)}>
          <div className={styles.formField} >
            <label htmlFor='name'>
              Your name
            </label>
            <input
              type='text'
              name='text'
              autoComplete='off'
              className={styles.input}
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
            />
          </div>
          <div className={styles.formField} >
            <label htmlFor='email'>
              Your email
            </label>
            <input
              type='email'
              name='email'
              autoComplete='off'
              className={styles.input}
              value={this.state.email}
              onChange={this.handleChange.bind(this, 'email')}
            />
          </div>
          <div className={styles.formField} >
            <label htmlFor='subject'>
              Subject
            </label>
            <input
              type='text'
              name='subject'
              autoComplete='off'
              className={styles.input}
              value={this.state.subject}
              onChange={this.handleChange.bind(this, 'subject')}
            />
          </div>
          <div className={styles.formField} >
            <label htmlFor='message'>
              Message
            </label>
            <textarea
              type='text'
              name='message'
              className={styles.textArea}
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
            />
          </div>
          <button className={styles.button} type='submit'>Submit</button>
        </form>
      </Fragment>
    )
  }
}

export default ContactForm;
