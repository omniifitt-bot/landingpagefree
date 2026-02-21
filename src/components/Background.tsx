import React from 'react';
import { motion } from 'framer-motion';
import {
    Pill, Heart, Leaf, Dumbbell, Calendar, MessageCircle, Syringe, Apple, Footprints,
    Brain, Droplets, Sun, Activity, Weight, Moon, Flower, Wind
} from 'lucide-react';

const Background: React.FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            overflow: 'hidden',
        }}>
            {/* 
               Light Wellness Background:
               1. Soft Pastel Gradients (Blobs)
               2. Large Semi-Transparent Icons (Line Art)
               3. Positioned at edges to avoid main content overlap
            */}

            {/* --- Soft Pastel Globs --- */}

            {/* Soft Blue Top Left */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', top: '-15%', left: '-10%', width: '70vw', height: '70vw',
                    background: 'radial-gradient(circle, rgba(224, 231, 255, 0.6) 0%, transparent 70%)', // Stronger Blue
                    borderRadius: '50%', filter: 'blur(80px)',
                }}
            />

            {/* Soft Peach Bottom Right */}
            <motion.div
                animate={{
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', bottom: '-15%', right: '-10%', width: '70vw', height: '70vw',
                    background: 'radial-gradient(circle, rgba(255, 228, 230, 0.7) 0%, transparent 70%)', // Stronger Peach
                    borderRadius: '50%', filter: 'blur(80px)',
                }}
            />

            {/* Soft Lavender Mid Left */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', top: '40%', left: '-20%', width: '50vw', height: '50vw',
                    background: 'radial-gradient(circle, rgba(243, 232, 255, 0.6) 0%, transparent 70%)', // Stronger Purple
                    borderRadius: '50%', filter: 'blur(60px)',
                }}
            />

            {/* --- Background Icons (More Variety, Smaller Size, Better Visibility) --- */}

            {/* 1. Medicine & Science */}
            <motion.div
                style={{ position: 'absolute', top: '8%', left: '5%', opacity: 0.35, transform: 'rotate(-15deg)', color: '#93C5FD' }} // Blue 300
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
                <Pill size={80} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', top: '18%', left: '15%', opacity: 0.3, transform: 'rotate(20deg)', color: '#93C5FD' }}
                animate={{ rotate: [20, 25, 20] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            >
                <Syringe size={70} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', top: '12%', left: '25%', opacity: 0.3, transform: 'rotate(10deg)', color: '#93C5FD' }}
            >
                <Activity size={60} strokeWidth={1} />
            </motion.div>


            {/* 2. Health & Heart */}
            <motion.div
                style={{ position: 'absolute', top: '5%', right: '10%', opacity: 0.35, transform: 'rotate(10deg)', color: '#FCA5A5' }} // Red 300
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
                <Heart size={90} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', top: '15%', right: '20%', opacity: 0.3, transform: 'rotate(-5deg)', color: '#FCA5A5' }}
            >
                <Brain size={70} strokeWidth={1} />
            </motion.div>

            {/* 3. Nutrition & Hydration */}
            <motion.div
                style={{ position: 'absolute', top: '35%', right: '2%', opacity: 0.35, transform: 'rotate(-10deg)', color: '#6EE7B7' }} // Emerald 300
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            >
                <Leaf size={100} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', top: '45%', right: '12%', opacity: 0.3, transform: 'rotate(15deg)', color: '#6EE7B7' }}
            >
                <Apple size={70} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', top: '30%', right: '15%', opacity: 0.3, transform: 'rotate(0deg)', color: '#6EE7B7' }}
            >
                <Droplets size={60} strokeWidth={1} />
            </motion.div>

            {/* 4. Exercise & Movement */}
            <motion.div
                style={{ position: 'absolute', bottom: '15%', left: '5%', opacity: 0.3, transform: 'rotate(-10deg)', color: '#D1D5DB' }} // Gray 300
                animate={{ rotate: [-10, 0, -10] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            >
                <Dumbbell size={90} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', bottom: '25%', left: '15%', opacity: 0.25, transform: 'rotate(30deg)', color: '#D1D5DB' }}
            >
                <Footprints size={60} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', bottom: '10%', left: '18%', opacity: 0.25, transform: 'rotate(-5deg)', color: '#D1D5DB' }}
            >
                <Weight size={70} strokeWidth={1} />
            </motion.div>

            {/* 5. Lifestyle & Routine */}
            <motion.div
                style={{ position: 'absolute', top: '40%', left: '5%', opacity: 0.35, transform: 'rotate(5deg)', color: '#FCD34D' }} // Amber 300
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            >
                <Calendar size={100} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', top: '55%', left: '8%', opacity: 0.3, transform: 'rotate(10deg)', color: '#FCD34D' }}
            >
                <Sun size={80} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', top: '50%', left: '-2%', opacity: 0.25, transform: 'rotate(-10deg)', color: '#FCD34D' }}
            >
                <Moon size={60} strokeWidth={1} />
            </motion.div>

            {/* 6. Community & Support */}
            <motion.div
                style={{ position: 'absolute', bottom: '8%', right: '5%', opacity: 0.35, color: '#C4B5FD' }} // Violet 300
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
                <MessageCircle size={100} strokeWidth={1} />
            </motion.div>

            {/* 7. Yoga & Breathwork */}
            <motion.div
                style={{ position: 'absolute', top: '25%', right: '8%', opacity: 0.3, transform: 'rotate(15deg)', color: '#FDBA74' }} // Orange 300
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
                <Flower size={80} strokeWidth={1} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', bottom: '35%', right: '5%', opacity: 0.3, transform: 'rotate(-10deg)', color: '#A5B4FC' }} // Indigo 300
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
                <Wind size={70} strokeWidth={1} />
            </motion.div>

        </div>
    );
};

export default Background;
