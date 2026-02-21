import { motion } from 'framer-motion';
import { ClipboardCheck, Stethoscope, Syringe, Users, TrendingUp, Unlock } from 'lucide-react';

const GLP1LifestyleSection: React.FC = () => {
    const steps = [
        {
            icon: <ClipboardCheck size={32} color="#1E3A8A" />,
            title: "Check Eligibility",
            desc: "We check your BMI, health history, and lifestyle diseases to ensure this is right for you.",
            color: "#DBEAFE" // Blue 100
        },
        {
            icon: <Stethoscope size={32} color="#059669" />,
            title: "Doctor Consultation",
            desc: "Medical evaluation by Dr. Omkar. GLP-1 is prescribed (if suitable) as per WHO & national guidelines.",
            color: "#D1FAE5" // Emerald 100
        },
        {
            icon: <Syringe size={32} color="#D97706" />,
            title: "Start GLP-1 Safely",
            desc: "Receive your prescription, dosage instructions, and continuous monitoring by the doctor.",
            color: "#FEF3C7" // Amber 100
        },
        {
            icon: <Users size={32} color="#7C3AED" />,
            title: "Lifestyle Companion Coaching",
            desc: "Personalized diet, exercise, and mindset coaching with Coach Niilesh via app & WhatsApp.",
            color: "#EDE9FE" // Violet 100
        },
        {
            icon: <TrendingUp size={32} color="#DB2777" />,
            title: "Smoother, Sustainable Progress",
            desc: "Cravings are better controlled, allowing for steady progress without fighting your biology.",
            color: "#FCE7F3" // Pink 100
        },
        {
            icon: <Unlock size={32} color="#2563EB" />,
            title: "Transition to Maintenance",
            desc: "Once goals are achieved, we guide you to a medication-free, lifestyle-only maintenance plan.",
            color: "#E0F2FE" // Sky 100
        }
    ];

    return (
        <section id="glp1" className="section section-light">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>The Science-Backed Path</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--color-brand-blue)' }}>
                        What is GLP-1?
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', lineHeight: 1.6 }}>
                        GLP-1 (Glucagon-like Peptide-1) is a hormone your body naturally produces after eating. It tells your brain you are full. In people with obesity, this signal is often broken. The medication fixes this signal.
                    </p>
                </div>

                {/* What is GLP-1 Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem'
                }}>
                    <div className="glass-card" style={{ padding: '2rem', background: '#F0F9FF', border: '1px solid #BAE6FD' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0369A1', marginBottom: '0.5rem' }}>🧠 Quiets "Food Noise"</h3>
                        <p style={{ color: '#334155' }}>Stops the constant mental chatter about food so you can focus on living.</p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#15803D', marginBottom: '0.5rem' }}>🥗 Signals Fullness</h3>
                        <p style={{ color: '#334155' }}>Slows digestion slightly so you feel satisfied with smaller, healthier portions.</p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem', background: '#FEF3C7', border: '1px solid #FDE68A' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#B45309', marginBottom: '0.5rem' }}>⚡ Metabolic Reset</h3>
                        <p style={{ color: '#334155' }}>Improve insulin sensitivity and helps your body burn fat effectively.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-brand-blue)' }}>
                        Your 6-Step Journey
                    </h2>
                </div>

                {/* 6-Step Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    {steps.map((step, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '2rem',
                            position: 'relative',
                            background: '#FFFFFF',
                            borderTop: `4px solid ${step.color.replace('100', '500')}` // Darker border
                        }}>
                            <div style={{
                                width: '4rem', height: '4rem',
                                background: step.color,
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-brand-blue)' }}>
                                {index + 1}. {step.title}
                            </h3>
                            <p style={{ color: 'var(--color-secondary)', lineHeight: 1.5 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Callout Box */}
                {/* Callout Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="glass-card"
                    style={{
                        background: '#FFFBEB', // Amber 50
                        border: '1px solid #FCD34D',
                        padding: '2rem',
                        borderRadius: '1rem',
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#B45309', margin: 0 }}>
                        ⚠️ &nbsp; Note: GLP-1 is not a magic pill – it works best when combined with lifestyle changes and medical supervision.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default GLP1LifestyleSection;
