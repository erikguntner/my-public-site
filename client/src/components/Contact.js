import React from 'react';
import { Formik, Form, Field } from 'formik';
import Input from './Input';
import * as Yup from 'yup';

import styles from '../stylesheets/Contact.module.scss';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required('username is required')
    .min(4, 'username must be between 4-16 characters')
    .max(16, 'username must be between 4-16 characters'),
  password: Yup.string().required('password is required'),
});

const Contact = () => (
  <section>
    <h1>Get In Touch</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            type="text"
            name="username"
            render={({ field, form }) => (
              <Input
                type="text"
                field={field}
                form={form}
                id="username"
                label="username"
              />
            )}
          />
          <Field
            type="password"
            name="password"
            render={({ field, form }) => (
              <Input
                type="password"
                field={field}
                form={form}
                id="password"
                label="password"
              />
            )}
          />
          <button type="submit" className={styles.btn} data-text="Send It">
            <span className={styles.btnOverlay} />
            <span className={styles.btnText}>Send It</span>
          </button>
        </Form>
      )}
    </Formik>
  </section>
);

export default Contact;
