import React from 'react';
import { Link } from 'react-router-dom';
import getToken from '../lib/tokenGenerator';
import * as ls from 'local-storage';

const NewListButton = props => {
    const onClick = event => {
        const newToken = getToken();
        ls.set('shoppingListToken', newToken);
        props.setToken(newToken);
    };
    return (
        <Link to="/ShoppingList" onClick={onClick}>
            <button className="NewList-button">Create a New List</button>
        </Link>
    );
};

export default NewListButton;
