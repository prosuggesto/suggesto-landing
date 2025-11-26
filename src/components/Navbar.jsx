import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Suggesto Logo" className="h-10 w-auto" />
                    <span className="text-2xl font-bold tracking-tight text-foreground">SUGGESTO</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <a href="/#home" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Accueil</a>
                    <a href="/#services" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Services</a>
                    <a href="/demo" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Démonstration</a>
                    <a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</a>
                </div>

                <a href="/#contact" className="btn-primary shadow-glow hover:shadow-lg">
                    Réserver un rdv
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
