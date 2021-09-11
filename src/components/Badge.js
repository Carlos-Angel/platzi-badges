import React from 'react';
import PropTypes from 'prop-types';
import Gravatar from './Gravatar';
import './styles/Badge.css';

function Badge({ firstName, lastName, jobTitle, twitter, email }) {
  return (
    <div className='Badge'>
      <div className='Badge__header'>
        <img
          src='https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-4.Estilos/src/images/badge-header.svg'
          alt='Logo de la conferencia'
        />
      </div>

      <div className='Badge__section-name'>
        <Gravatar estilo='Badge__avatar' email={email} />
        <h1>
          {firstName} <br /> {lastName}
        </h1>
      </div>

      <div className='Badge__section-info'>
        <h3>{jobTitle}</h3>
        <div>@{twitter}</div>
      </div>

      <div className='Badge__footer'>#platziconf</div>
    </div>
  );
}

Badge.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default Badge;
