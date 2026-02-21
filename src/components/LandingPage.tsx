import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import GLP1LifestyleSection from './GLP1LifestyleSection';
import CredibilitySection from './CredibilitySection';
import ProcessSection from './ProcessSection';
import ProgramDetails from './ProgramDetails';
import { WebinarDetails, AudienceSection, TestimonialsSection, FAQSection, Footer } from './AdditionalSections';
import RegistrationModal from './RegistrationModal';

const LandingPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="landing-page">
            <Header openModal={openModal} />
            <main>
                <Hero openModal={openModal} />
                <ProblemSection />
                <SolutionSection />
                <GLP1LifestyleSection />
                <CredibilitySection />
                <ProcessSection />
                <ProgramDetails openModal={openModal} />
                <WebinarDetails />
                <AudienceSection />
                <TestimonialsSection />
                <FAQSection />
            </main>
            <Footer openModal={openModal} />

            <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default LandingPage;
