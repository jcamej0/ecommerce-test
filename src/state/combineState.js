import React from 'react';
import useGlobalHook from './store';
import products from '../services/products';

const state = {
    products: {
        ...products.state,
    },
};

const actions = {
    products: {
        ...products.actions,
    }
};

const useGlobalState = useGlobalHook(React, state, actions);

export default useGlobalState;

