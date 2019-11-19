import React from 'react';
import loadable from 'react-loadable';

const LoadingComponent = () => <h3>please wait...</h3>;

const ContactComponentPromise = () => {
    return import('../dashboard/index');
}
const AsyncContactComponent = loadable( {
    loader: ContactComponentPromise,
    loading: LoadingComponent
} );

export default AsyncContactComponent;