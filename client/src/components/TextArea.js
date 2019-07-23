import React from 'react';
import PropTypes from 'prop-types';

import styles from '../stylesheets/TextArea.module.scss';

const TextArea = ({ field = {}, form = {}, type, label, placeholder }) => {
  const { name } = field;
  const { touched, errors } = form;

  return (
    <div>
      <div
        className={`${styles.inputGroup} ${
          touched[name] && errors[name] ? styles.error : ''
        }`}
      >
        <textarea
          type={type}
          {...field}
          className={styles.input}
          placeholder={placeholder}
        />
        <label
          className={`${styles.label} ${
            touched[name] && errors[name] ? styles.error : ''
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      <div />
      {touched[name] && errors[name] && (
        <div className={styles.errorMessage}>{errors[name]}</div>
      )}
    </div>
  );
};

TextArea.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextArea;
