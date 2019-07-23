import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Input from './Input';
import TextArea from './TextArea';

import styles from '../stylesheets/Contact.module.scss';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  subject: Yup.string().required('subject is required'),
  email: Yup.string()
    .email()
    .required('email is required'),
  message: Yup.string().required('message is required'),
});

const Contact = () => {
  const transform = useSpring({
    from: {
      transform: 'translate3d(0, 100% ,0)',
    },
    to: {
      transform: 'translate3d(0, 0%, 0)',
    },
  });

  const translate = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, 50px ,0)',
    },
    to: { opacity: 1, transform: 'translate3d(0, 0 ,0)' },
    delay: 500,
  });

  const [message, setMessage] = useState({
    type: undefined,
    message: '',
  });

  const handleInterval = () => {
    setInterval(() => {
      setMessage({
        type: undefined,
        message: '',
      });
    }, 3000);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1>
          <animated.span style={transform}>Get In Touch</animated.span>
        </h1>
        <animated.div style={translate}>
          <div className={styles.divider}>
            <span />
          </div>
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              axios
                .post('/api/contact', values)
                .then(res => {
                  setMessage({
                    type: 'success',
                    message:
                      'Message sent successfully. Look forward to speaking with you soon',
                  });
                  handleInterval();
                })
                .catch(err => {
                  setMessage({
                    type: 'success',
                    message:
                      'There seems to have been an issue on my end, please try again',
                  });
                  handleInterval();
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="text"
                  name="name"
                  render={({ field, form }) => (
                    <Input
                      type="text"
                      field={field}
                      form={form}
                      id="name"
                      label="name"
                      placeholder="John Doe"
                    />
                  )}
                />
                <Field
                  type="text"
                  name="email"
                  render={({ field, form }) => (
                    <Input
                      type="email"
                      field={field}
                      form={form}
                      id="email"
                      label="email"
                      placeholder="johndoe@email.com"
                    />
                  )}
                />
                <Field
                  type="text"
                  name="subject"
                  render={({ field, form }) => (
                    <Input
                      type="subject"
                      field={field}
                      form={form}
                      id="subject"
                      label="subject"
                      placeholder="Subject"
                    />
                  )}
                />
                <Field
                  name="message"
                  render={({ field, form }) => (
                    <TextArea
                      type="text"
                      field={field}
                      form={form}
                      id="message"
                      label="message"
                      placeholder="Message..."
                    />
                  )}
                />
                <button
                  type="submit"
                  className={styles.btn}
                  data-text="Send It"
                >
                  <span className={styles.btnOverlay} />
                  <span className={styles.btnText}>Send It</span>
                </button>
              </Form>
            )}
          </Formik>
        </animated.div>
      </div>
      {message.type && (
        <div className={styles.alert}>
          <div className={styles[message.type]}>
            <FontAwesomeIcon
              icon={
                message.type === 'success' ? faCheckCircle : faExclamationCircle
              }
            />
          </div>
          <div>{message.message}</div>
        </div>
      )}
    </div>
  );
};

export default Contact;
