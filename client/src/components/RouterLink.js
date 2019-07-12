import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import styles from '../stylesheets/Link.module.scss';

const RouterLink = ({ type, title, to }) => {
  return (
    <Link to={to}>
      <Button type={type} title={title} />
    </Link>
  );
};

export default RouterLink;
