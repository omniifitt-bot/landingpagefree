import React from 'react';
import { Check } from 'lucide-react';

interface ProgramDetailsProps {
    openModal: () => void;
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ openModal }) => {
    const features = [
        "Unlimited Chat with Coach Niilesh",
        "Weekly Progress Review by Doctor",
        "Personalized Diet Plans (Maharashtrian Friendly)",
        "Home Workout Guidance",
        "GLP-1 Medication Prescription (if eligible)",
        "Metabolic Health Analysis",
        "Daily Accountability Tracking",
        "Access to Omnifit Community"
    ];

    return (
        <section id="program" className="section" style={{ background: '#1E3A8A', color: 'white' }}>
            <div className="container">
                <div className="glass-card" style={{
                    padding: '4rem',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.05)', // Subtle transparent white on blue
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: 'none'
                }}>

                    <div className="program-grid-container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
                        <style>{`
                            @media (min-width: 768px) {
                                .program-grid-container { grid-template-columns: 1fr 1fr !important; }
                            }
                        `}</style>
                        {/* Text and CTA on Left */}
                        <div>
                            <span style={{ color: '#FCD34D', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Everything Included</span>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: '#FFFFFF' }}>
                                The Complete<br /> Ecocystem
                            </h2>
                            <p className="marathi" style={{ fontSize: '1.25rem', color: '#E0E7FF', marginBottom: '2rem' }}>
                                सर्वसमावेशक प्रोग्राम जो तुमची जीवनशैली बदलतो.
                            </p>
                            <button onClick={openModal} className="btn btn-primary" style={{
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                background: '#FFFFFF',
                                color: '#1E3A8A',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}>
                                Check Eligibility Now
                            </button>
                        </div>

                        {/* Feature List on Right */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '1rem'
                        }}>
                            {features.map((feature, index) => (
                                <div key={index} style={{
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    padding: '1.25rem',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '0.5rem',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div style={{ background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', padding: '0.25rem', flexShrink: 0 }}>
                                        <Check size={20} color="#34D399" />
                                    </div>
                                    <span style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramDetails;
