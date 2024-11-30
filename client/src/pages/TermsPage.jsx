import React from 'react';
import './styles/TermsPage.css';
import { useLanguage } from '../LanguageContext';

const texts = {
    en: [
        {
            title: "Terms of Collaboration",
            description: "Understand our terms and conditions for partnerships"
        },
        {
            title: "Scope of Collaboration",
            description: "These terms outline the framework for collaboration between [Your Name/Practice] and partnering dental practices. By entering into this collaboration, you agree to the following terms and conditions."
        },
        {
            title: "Responsibilities",
            description: ["The partnering practice agrees to provide necessary patient details and medical history in compliance with GDPR.", "[Your Name/Practice] is responsible for delivering high-quality dental implant services."]
        },
        {
            title: "Payment Terms",
            description: "Invoices will be issued upon service completion. Payments are due within 14 days unless otherwise agreed in writing."
        },
        {
            title: "Cancellation Policy",
            description: "Cancellations must be communicated at least 48 hours in advance. Late cancellations may incur fees."
        },
        {
            title: "Liability",
            description: "[Your Name/Practice] is insured for professional liability and adheres to all legal requirements. Any disputes will be addressed under the laws of Germany."
        },
        {
            title: "Termination",
            description: "Either party may terminate this agreement with 30 days' written notice."
        }
    ],
    de: [
        {
            title: "Bedingungen der Zusammenarbeit",
            description: "Verstehen Sie unsere Geschäftsbedingungen für Partnerschaften"
        },
        {
            title: "Umfang der Zusammenarbeit",
            description: "Diese Bedingungen umreißen den Rahmen für die Zusammenarbeit zwischen [Ihrem Namen/Ihrer Praxis] und Partnerzahnarztpraxen. Durch den Abschluss dieser Zusammenarbeit stimmen Sie den folgenden Geschäftsbedingungen zu."
        },
        {
            title: "Verantwortlichkeiten",
            description: ["Die Partnerpraxis verpflichtet sich, die notwendigen Patientendaten und die Krankengeschichte in Übereinstimmung mit der DSGVO bereitzustellen.", "[Ihr Name/Ihre Praxis] ist für die Bereitstellung hochwertiger Zahnimplantatdienstleistungen verantwortlich."]
        },
        {
            title: "Zahlungsbedingungen",
            description: "Rechnungen werden nach Abschluss der Dienstleistung ausgestellt. Zahlungen sind innerhalb von 14 Tagen fällig, sofern nichts anderes schriftlich vereinbart wurde."
        },
        {
            title: "Stornierungsbedingungen",
            description: "Stornierungen müssen mindestens 48 Stunden im Voraus mitgeteilt werden. Bei verspäteter Stornierung können Gebühren anfallen."
        },
        {
            title: "Haftung",
            description: "[Ihr Name/Ihre Praxis] ist berufshaftpflichtversichert und hält sich an alle gesetzlichen Vorschriften. Alle Streitigkeiten werden nach den Gesetzen Deutschlands geklärt."
        },
        {
            title: "Beendigung",
            description: "Jede Partei kann diesen Vertrag mit einer Frist von 30 Tagen schriftlich kündigen."
        }
    ]
}

const TermsPage = () => {

    const { language } = useLanguage();

    return (
        <div>
            <header className="terms-header">
                <h1>{texts[language][0].title}</h1>
                <p>{texts[language][0].description}</p>
            </header>
            <div className="terms-content">
                <section>
                    <h2>{texts[language][1].title}</h2>
                    <p>
                        {texts[language][1].description}
                    </p>
                </section>

                <section>
                    <h2>{texts[language][2].title}</h2>
                    <ul>
                        <li>
                            {texts[language][2].description[0]}
                        </li>
                        <li>
                            {texts[language][2].description[1]}
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>{texts[language][3].title}</h2>
                    <p>
                        {texts[language][3].description}
                    </p>
                </section>

                <h2>{texts[language][4].title}</h2>
                <p>
                    {texts[language][4].description}
                </p>

                <section>
                    <h2>{texts[language][5].title}</h2>
                    <p>
                        {texts[language][5].description}
                    </p>
                </section>

                <section>
                    <h2>{texts[language][6].title}</h2>
                    <p>
                        {texts[language][6].description}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsPage;
