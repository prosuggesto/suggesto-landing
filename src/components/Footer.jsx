import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-transparent border-t border-border pt-20 pb-10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/assets/logo.png" alt="Suggesto Logo" className="h-8 w-auto" />
                            <span className="text-xl font-bold tracking-tight text-foreground">SUGGESTO</span>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            L'intelligence artificielle au service de votre croissance.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/diego-lamperim-8b5475298/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-cyan transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/suggesto.assistant/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-purple transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>

                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-muted-foreground hover:text-brand-cyan transition-colors">Accueil</a></li>
                            <li><a href="#services" className="text-muted-foreground hover:text-brand-cyan transition-colors">Services</a></li>
                            <li><Link to="/demo" className="text-muted-foreground hover:text-brand-cyan transition-colors">Démonstration</Link></li>
                            <li><a href="#contact" className="text-muted-foreground hover:text-brand-cyan transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 text-brand-cyan shrink-0" />
                                <a href="mailto:pro.suggesto.ai@gmail.com" className="hover:text-brand-cyan transition-colors">pro.suggesto.ai@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
                                <span>07 67 56 92 24</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-1" />
                                <span>374 route du bedat<br />47450 Colayrac-Saint-Cirq</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6">Légal</h4>
                        <ul className="space-y-4">
                            <li><Link to="/privacy" className="text-muted-foreground hover:text-brand-cyan transition-colors">Confidentialité</Link></li>
                            <li><Link to="/terms" className="text-muted-foreground hover:text-brand-cyan transition-colors">CGU</Link></li>
                            <li><Link to="/legal" className="text-muted-foreground hover:text-brand-cyan transition-colors">Mentions légales</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        © 2024 Suggesto AI. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
