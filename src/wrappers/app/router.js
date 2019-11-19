import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, NavLink as Link } from 'react-router-dom';
import { Route } from 'react-router';

import Search from '../search';
import Dashboard from '../dashboard';
import List from '../list';


import loadable from 'react-loadable';

const LoadingComponent = () => <h3>please wait...</h3>;
const ContactComponentPromise = () => {
    return import('../dashboard/index');
}
const AsyncContactComponent = loadable( {
    loader: ContactComponentPromise,
    loading: LoadingComponent
} );

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<div className="menu">
					<Link exact to="/" activeClassName="active">Search</Link>
					<Link to="/dashboard" activeClassName="active">Dashboard</Link>
					<Link to="/list" activeClassName="active">List</Link>
				</div>
				<Switch>
					<Route key="index" exact path='/' render={(routerProps) => { return <Search {...routerProps} /> }} />
					{/* <Route key="index" exact path='/dashboard' render={(routerProps) => { return <AsyncContactComponent {...routerProps} /> }} value="1" /> */}
					<Route key="index" exact path='/list' render={(routerProps) => { return <List {...routerProps} /> }} />
					<Route path="/dashboard" render={ 
					( props ) => <AsyncContactComponent { ...props } value="1" />
					} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default Router;