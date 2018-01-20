import React from 'react';
import {Link} from 'react-router-dom';
import {footer} from '../styles/footer.scss';
import Routes from '../routes';

const App = () => <div>
    <h1>Filter table1</h1>
    {Routes}
    <footer className={footer}>
        <Link to="/">Filterable Table1</Link>
        <Link to="/about">About</Link>
        <Link to="/terms-conditions">Terms And Conditions</Link>
        <Link to="/account-creation">Account Login</Link>
        <Link to="/seller-registration">Seller Registration</Link>
        <Link to="/seller-registration/result">Seller Registration Result</Link>
    </footer>
</div>;

export default App;
