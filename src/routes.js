import React from 'react';
import {Route, Switch} from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';

import AccountLoginPage from './containers/pages/AccountLoginPage'
import ErrorPage from './containers/pages/ErrorPage'
import SellerExistedPage from './containers/pages/SellerExistedPage'
import SellerRegistrationPage from './containers/pages/SellerRegistrationPage'
import SellerRegistrationResultPage from './containers/pages/SellerRegistrationResultPage'
import TermsAndConditionsPage from './containers/pages/TermsAndConditionsPage'

export default(
				<Switch>
								<Route exact path="/" component={FilterableTable}/>
								<Route path="/about" component={About}/>
								<Route path="/terms-conditions" component={TermsAndConditionsPage}/>
								<Route path="/account-creation" component={AccountLoginPage}/>
								<Route path="/seller-registration" component={SellerRegistrationPage}/>
								<Route
												path="/seller-registration/result"
												component={SellerRegistrationResultPage}/>
								<Route path="/error" component={ErrorPage}/>
								<Route path="/seller-existed" component={SellerExistedPage}/>
				</Switch>
);
