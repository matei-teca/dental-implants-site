import React from 'react';
import './styles/PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
    return (
        <div>
            <header className="privacy-header">
                <h1>Privacy Policy</h1>
                <p>Your data privacy is important to us</p>
            </header>
            <div className="privacy-info">
                <section>
                <h2>Introduction</h2>
                <p>
                    We value your privacy and ensure that all personal data collected on
                    this website is handled in compliance with GDPR regulations.
                </p>
                </section>

                <section>
                <h2>What Data We Collect</h2>
                <ul>
                    <li>Names and contact details (email, phone, etc.)</li>
                    <li>Usage data, such as browsing behavior on our website</li>
                    <li>Any information you voluntarily submit via forms</li>
                </ul>
                </section>

                <section>
                <h2>How We Use Your Data</h2>
                <p>
                    We use the collected data to:
                </p>
                <ul>
                    <li>Provide and improve our services</li>
                    <li>Respond to inquiries and provide support</li>
                    <li>Comply with legal obligations</li>
                </ul>
                </section>

                <section>
                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access, correct, or delete your personal data</li>
                    <li>Withdraw consent for data processing</li>
                    <li>File a complaint with the appropriate data protection authority</li>
                </ul>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
