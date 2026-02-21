import React from 'react';
import { Pill, Lightbulb, Users } from 'lucide-react';

const SolutionSection: React.FC = () => {
    return (
        <section className="section section-light">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{
                        color: 'var(--color-accent)',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '1rem',
                        fontSize: '0.9rem'
                    }}>
                        The Omnifit Difference
                    </span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-brand-blue)' }}>
                        Medical Science + <span className="text-gradient-accent">Helper Habits</span>
                    </h2>
                </div>

                <div className="solution-grid-container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    <style>{`
                        @media (min-width: 768px) {
                            .solution-grid-container { 
                                grid-template-columns: 1fr 1fr !important;
                                gap: 2rem;
                            }
                        }
                    `}</style>

                    {/* Item 1: GLP-1 Support */}
                    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem', height: '100%', justifyContent: 'flex-start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                minWidth: '3.5rem', height: '3.5rem',
                                background: '#E0E7FF', // Soft Indigo
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#4338CA', // Indigo 700
                                flexShrink: 0
                            }}>
                                <Pill size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'var(--color-brand-blue)', lineHeight: 1.2 }}>
                                GLP-1 Medication Support
                            </h3>
                        </div>
                        <div>
                            <p style={{ color: 'var(--color-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                                FDA-approved approach to reset your hunger signals and reduce food noise.
                            </p>
                            <p className="marathi" style={{ fontSize: '1rem', color: 'var(--color-primary)', opacity: 0.8 }}>
                                भूक नियंत्रित करण्यासाठी वैद्यकीय मदत.
                            </p>
                        </div>
                    </div>

                    {/* Item 2: Doctor Support */}
                    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem', height: '100%', justifyContent: 'flex-start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                minWidth: '3.5rem', height: '3.5rem',
                                background: '#DCFCE7', // Soft Green
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#15803D', // Green 700
                                flexShrink: 0
                            }}>
                                <Users size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'var(--color-brand-blue)', lineHeight: 1.2 }}>
                                Doctor & Community Support
                            </h3>
                        </div>
                        <div>
                            <p style={{ color: 'var(--color-secondary)', fontSize: '1.1rem' }}>
                                Continuous monitoring by Dr. Omkar and motivation from Coach Niilesh.
                            </p>
                        </div>
                    </div>

                    {/* Item 3: Habit Coaching */}
                    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem', height: '100%', justifyContent: 'flex-start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                minWidth: '3.5rem', height: '3.5rem',
                                background: '#FEF3C7', // Soft Amber
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#B45309', // Amber 700
                                flexShrink: 0
                            }}>
                                <Lightbulb size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'var(--color-brand-blue)', lineHeight: 1.2 }}>
                                Habit & Lifestyle Coaching
                            </h3>
                        </div>
                        <div>
                            <p style={{ color: 'var(--color-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                                Build sustainable habits that last a lifetime, not just a few weeks.
                            </p>
                            <p className="marathi" style={{ fontSize: '1rem', color: 'var(--color-primary)', opacity: 0.8 }}>
                                चांगल्या सवयी, निरोगी जीवन.
                            </p>
                        </div>
                    </div>

                    {/* Item 4: Success Rate Card */}
                    <div className="glass-card" style={{
                        padding: '2.5rem',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        background: 'linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 100%)', // Very light orange tint
                        border: '1px solid #FFEDD5'
                    }}>
                        <div style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem', color: '#EA580C' }}>90%</div>
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-brand-blue)', fontWeight: 700 }}>Success Rate</div>
                        <p style={{ color: 'var(--color-secondary)', fontSize: '1rem' }}>Combine the power of biology and psychology.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
