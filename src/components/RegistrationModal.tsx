import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        whatsappNo: '',
        email: '',
        city: '',
        height: '',
        weight: '',
        diseases: ''
    });

    const handleSubmit = () => {
        // Let the browser submit the form natively to the hidden iframe
        // Do NOT prevent default
        setIsSubmitting(true);
    };

    const handleIframeLoad = () => {
        if (isSubmitting) {
            setIsSubmitted(true);
            setIsSubmitting(false);
            setTimeout(() => {
                onClose();
                setIsSubmitted(false);
                setFormData({ fullName: '', whatsappNo: '', email: '', city: '', height: '', weight: '', diseases: '' });
            }, 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateBMI = () => {
        if (formData.weight && formData.height) {
            const weight = parseFloat(formData.weight);
            const height = parseFloat(formData.height) / 100;
            if (height > 0) {
                const bmiNum = weight / (height * height);
                return bmiNum.toFixed(1);
            }
        }
        return null;
    };

    const bmi = calculateBMI();
    let bmiCategory = '';
    let bmiColor = '';

    if (bmi) {
        const bmiVal = parseFloat(bmi);
        if (bmiVal < 18.5) {
            bmiCategory = 'Underweight';
            bmiColor = '#3B82F6'; // Blue
        } else if (bmiVal < 25) {
            bmiCategory = 'Normal Weight';
            bmiColor = '#10B981'; // Green
        } else if (bmiVal < 30) {
            bmiCategory = 'Overweight';
            bmiColor = '#F59E0B'; // Amber
        } else {
            bmiCategory = 'Obese';
            bmiColor = '#EF4444'; // Red
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem'
                }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(4px)'
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{
                            background: '#FFFFFF',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            width: '100%',
                            maxWidth: '500px',
                            position: 'relative',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#6B7280'
                            }}
                        >
                            <X size={24} />
                        </button>

                        {isSubmitted ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                >
                                    <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 1.5rem auto' }} />
                                </motion.div>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-brand-blue)', marginBottom: '1rem' }}>Registration Successful!</h2>
                                <p style={{ color: 'var(--color-secondary)' }}>Thank you for registering. You will receive the Zoom link details on your WhatsApp shortly.</p>
                            </div>
                        ) : (
                            <>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-brand-blue)', marginBottom: '0.5rem' }}>Join the Masterclass</h2>
                                <p style={{ color: 'var(--color-secondary)', marginBottom: '2rem' }}>Please fill out your details below to reserve your spot.</p>

                                <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>

                                <form
                                    action="https://crm.zoho.in/crm/WebToLeadForm"
                                    name="WebToLeads1207261000000439323"
                                    method="POST"
                                    acceptCharset="UTF-8"
                                    target="hidden_iframe"
                                    onSubmit={handleSubmit}
                                    style={{ display: 'grid', gap: '1.25rem' }}
                                >
                                    {/* Zoho Hidden Fields (New Webform) */}
                                    <input type="hidden" name="xnQsjsdp" value="ad6dd777bf77e5f8c2d0edf5211767ce79249c3b66ac669ff969effc721e252f" />
                                    <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                                    <input type="hidden" name="xmIwtLD" value="51dbd4fcaedf5d5c8fab0b59e474c164abd5c726546ea4750cb255c5f26726a64e70ccd85fa9909bbbc3e47b25c48768" />
                                    <input type="hidden" name="actionType" value="TGVhZHM=" />
                                    <input type="hidden" name="returnURL" value="null" />
                                    <input type="hidden" name="aG9uZXlwb3Q" value="" />

                                    {/* Mapping React State to Zoho Field Names (Mapped correctly based on user's custom form) */}
                                    {/* We must split the user's Full Name into First/Last name for Zoho */}
                                    <input type="hidden" name="First Name" value={formData.fullName.split(' ').slice(0, -1).join(' ') || formData.fullName.split(' ')[0]} />
                                    <input type="hidden" name="Last Name" value={formData.fullName.split(' ').slice(-1).join(' ') || 'User'} />

                                    <input type="hidden" name="Mobile" value={formData.whatsappNo} />
                                    <input type="hidden" name="Email" value={formData.email} />
                                    <input type="hidden" name="Phone" value={formData.city} /> {/* City mapped to Phone */}

                                    {/* Custom Fields (User repurposed Company, Designation, Fax, Website, No_of_Employees) */}
                                    <input type="hidden" name="Company" value={formData.height} /> {/* Height -> Company */}
                                    <input type="hidden" name="Designation" value={formData.weight} /> {/* Weight -> Designation */}
                                    <input type="hidden" name="Fax" value={bmi || ''} /> {/* BMI -> Fax */}
                                    <input type="hidden" name="Website" value={formData.diseases} /> {/* Diseases 1 -> Website */}

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '1rem' }}
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>WhatsApp No *</label>
                                            <input
                                                type="tel"
                                                name="whatsappNo"
                                                required
                                                value={formData.whatsappNo}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '1rem' }}
                                                placeholder="+91"
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Email Adderss</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '1rem' }}
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '1rem' }}
                                            placeholder="Mumbai"
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Height (cm)</label>
                                            <input
                                                type="number"
                                                name="height"
                                                value={formData.height}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '1rem' }}
                                                placeholder="165"
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Weight (kg)</label>
                                            <input
                                                type="number"
                                                name="weight"
                                                value={formData.weight}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '1rem' }}
                                                placeholder="85"
                                            />
                                        </div>
                                    </div>

                                    {bmi && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: -5 }}
                                            style={{
                                                padding: '1rem',
                                                background: `${bmiColor}15`,
                                                borderRadius: '8px',
                                                border: `1px solid ${bmiColor}30`,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <span style={{ fontWeight: 600, color: '#374151' }}>Estimated BMI: <span style={{ color: bmiColor, fontSize: '1.2rem', marginLeft: '0.5rem' }}>{bmi}</span></span>
                                            <span style={{
                                                fontSize: '0.9rem',
                                                fontWeight: 700,
                                                color: bmiColor,
                                                background: 'white',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                boxShadow: `0 1px 2px ${bmiColor}20`
                                            }}>{bmiCategory}</span>
                                        </motion.div>
                                    )}

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Any Pre-existing Diseases?</label>
                                        <select
                                            name="diseases"
                                            value={formData.diseases}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '1rem', backgroundColor: 'white' }}
                                        >
                                            <option value="">Select (Optional)</option>
                                            <option value="None">None</option>
                                            <option value="Diabetes Typ2 2">Diabetes (Type 2)</option>
                                            <option value="Thyroid">Thyroid Issues</option>
                                            <option value="PCOS/PCOD">PCOS / PCOD</option>
                                            <option value="Hypertension">Hypertension (High BP)</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', opacity: isSubmitting ? 0.7 : 1 }}
                                    >
                                        {isSubmitting ? 'Registering...' : 'Confirm Registration'}
                                    </button>
                                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6B7280', marginTop: '0.5rem' }}>
                                        Your information is secure. We will only use this to send you webinar updates.
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
