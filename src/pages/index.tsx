import React from 'react';
import Header from '../components/Header';
import ContactMethods from '../components/ContactMethods';
import VirtualOffice from '../components/VirtualOffice';
import CallbackForm from '../components/CallbackForm';
import OfficeLocations from '../components/OfficeLocations';
import Footer from '../components/Footer';
import '../styles/App.css';

const Home: React.FC = () => (
    <div className="app">
        <Header />
        <ContactMethods />
        <VirtualOffice />
        <div className="form-container">
            <CallbackForm />
            <OfficeLocations />
        </div>
        <Footer />
    </div>
);

export default Home;
