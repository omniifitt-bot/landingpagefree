import React from 'react';

const ProblemSection: React.FC = () => {
    const problems = [
        {
            title: "Yo-Yo Dieting",
            desc: "Lost weight, but gained it back (+ more)? You're fighting your biology.",
            sub: "परत परत वजन वाढते?",
            icon: "⚖️"
        },
        {
            title: "Constant Food Noise",
            desc: "Can't stop thinking about food? It's not lack of willpower, it's hormones.",
            sub: "सतत भूक लागते?",
            icon: "🧠"
        },
        {
            title: "Metabolic Slowdown",
            desc: "Eating less but not losing? Your body is resisting weight loss.",
            sub: "कमी खाऊनही वजन घटत नाही?",
            icon: "📉"
        },
        {
            title: "Chronic Stress",
            desc: "High cortisol levels lock your body in fat-storage mode.",
            sub: "तणावामुळे पोटाचा घेर वाढतो?",
            icon: "😫"
        },
        {
            title: "Wrong Exercise",
            desc: "Cardio without strength training can slow your metabolism further.",
            sub: "चुकीचा व्यायाम, दुप्पट भूक?",
            icon: "🏃‍♂️"
        },
        {
            title: "No Expert Guidance",
            desc: "Generic diet plans ignore your medical history and bloodwork.",
            sub: "योग्य मार्गदर्शनाचा अभाव?",
            icon: "🤷‍♂️"
        }
    ];

    return (
        <section id="problems" className="section section-white">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: '#EF4444', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>The Hard Truth</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--color-brand-blue)' }}>
                        Why Willpower <span style={{ color: '#EF4444' }}>Fails</span>
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-secondary)' }}>
                        It’s not your fault. It’s your biology.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {problems.map((item, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '2.5rem',
                            borderTop: '4px solid #EF4444', // Red top border for "problem"
                            background: '#FFFFFF',
                            boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '1.1rem' }}>{item.desc}</p>
                            <p className="marathi" style={{ color: '#EF4444', fontWeight: 500, borderTop: '1px solid #F3F4F6', paddingTop: '1rem' }}>
                                {item.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
