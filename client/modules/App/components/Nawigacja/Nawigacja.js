import React from 'react';
import { Link } from 'react-router';

const Nawigacja = () => {
  return (
    <div>
      <Link to="/">{'Blog'}</Link>
      <Link to="/home">{'Home'}</Link>
      <Link to="/about">{'About Mary-Kate'}</Link>
    </div>
  );
};

Nawigacja.propTypes = {
};

export default Nawigacja;
