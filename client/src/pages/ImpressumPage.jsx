import React from 'react';
import './styles/ImpressumPage.css';

const ImpressumPage = () => {
    return (
        <div>
            <header className="impressum-header">
                <h1>Impressum</h1>
                <p>Legal Notice and Contact Information</p>
            </header>
            <div className="impressum-info">
                <h2>Contact Details</h2>
                <p><strong>Name:</strong> [Your Full Name]</p>
                <p><strong>Address:</strong> [Your Address]</p>
                <p><strong>Email:</strong> [Your Email]</p>
                <p><strong>Phone:</strong> [Your Phone Number]</p>
                <p><strong>Professional Registration:</strong> [Zahnärztekammer registration number]</p>
                <p><strong>VAT ID:</strong> [Your VAT ID, if applicable]</p>
            </div>
        </div>
    );
};

export default ImpressumPage;
