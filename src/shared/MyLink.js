import React from 'react';
import { Link } from 'react-router-dom';

const MyLink = ({ children, ...state }) => {
    return (
        <Link {...state} style={{ textDecoration: 'none', color: 'inherit' }}>
            {children}
        </Link>
    );
};

export default MyLink;
