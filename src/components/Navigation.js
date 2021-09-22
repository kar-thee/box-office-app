import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navlinks = [
    {
      to: '/',
      value: 'Home',
    },
    {
      to: '/starred',
      value: 'Starred',
    },
  ];
  return (
    <>
      <nav>
        <ul>
          {navlinks.map(element => (
            <li key={element.value}>
              <Link to={element.to}>{element.value}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
