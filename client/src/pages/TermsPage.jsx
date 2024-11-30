import React from 'react';
import './styles/TermsPage.css';

const TermsPage = () => {
    return (
        <div>
            <header className="terms-header">
                <h1>Terms of Collaboration</h1>
                <p>Understand our terms and conditions for partnerships</p>
            </header>
            <div className="terms-content">
                <section>
                <h2>Scope of Collaboration</h2>
                <p>
                    These terms outline the framework for collaboration between
                    [Your Name/Practice] and partnering dental practices. By
                    entering into this collaboration, you agree to the following
                    terms and conditions.
                </p>
                </section>

                <section>
                <h2>Responsibilities</h2>
                <ul>
                    <li>
                        The partnering practice agrees to provide necessary
                        patient details and medical history in compliance with GDPR.
                    </li>
                    <li>
                        [Your Name/Practice] is responsible for delivering high-quality
                        dental implant services.
                    </li>
                </ul>
                </section>

                <section>
                <h2>Payment Terms</h2>
                <p>
                    Invoices will be issued upon service completion. Payments are due
                    within 14 days unless otherwise agreed in writing.
                </p>
                </section>

                <h2>Cancellation Policy</h2>
                <p>
                    Cancellations must be communicated at least 48 hours in advance. 
                    Late cancellations may incur fees.
                </p>

                <section>
                <h2>Liability</h2>
                <p>
                    [Your Name/Practice] is insured for professional liability and adheres 
                    to all legal requirements. Any disputes will be addressed under the 
                    laws of Germany.
                </p>
                </section>

                <section>
                <h2>Termination</h2>
                <p>
                    Either party may terminate this agreement with 30 days' written notice.
                </p>
                </section>
            </div>
        </div>
    );
};

export default TermsPage;
