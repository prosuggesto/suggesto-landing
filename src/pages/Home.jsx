import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-brand-cyan/30 selection:text-brand-cyan">
            <Navbar />
            <Hero />
            <Features />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
