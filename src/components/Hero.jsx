import React, { useCallback } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-hero z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center flex-grow flex flex-col justify-center">
                <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight animate-fade-in-up">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                        L'IA Conversationnelle
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
                        Nouvelle Génération
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up delay-100">
                    Révolutionnez votre service client avec Suggesto. Des assistants intelligents qui comprennent, apprennent et évoluent avec vos besoins.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-in-up delay-200">
                    <a href="/#contact" className="btn-primary flex items-center gap-2 group text-lg px-8 py-3 shadow-glow hover:shadow-lg transition-all duration-300">
                        Commencez maintenant
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a href="/demo" className="px-8 py-3 rounded-lg border border-border hover:border-brand-cyan hover:text-brand-cyan transition-all duration-300 flex items-center gap-2 bg-card/50 backdrop-blur-sm text-lg font-medium text-foreground">
                        <Play className="w-5 h-5" />
                        Accéder à la démo
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center mb-12 animate-fade-in-up delay-300">
                    <div className="p-4">
                        <div className="text-brand-cyan font-bold text-lg mb-2">IA Avancée</div>
                        <div className="text-muted-foreground">Traitement du langage naturel de pointe</div>
                    </div>
                    <div className="p-4">
                        <div className="text-brand-cyan font-bold text-lg mb-2">Intégration Rapide</div>
                        <div className="text-muted-foreground">Déployé en quelques minutes</div>
                    </div>
                    <div className="p-4">
                        <div className="text-brand-cyan font-bold text-lg mb-2">Sécurisé & Fiable</div>
                        <div className="text-muted-foreground">Protection des données garantie</div>
                    </div>
                </div>
            </div >

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-brand-cyan rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-brand-cyan rounded-full animate-scroll" />
                </div>
            </div>

            {/* Bottom Separator Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent z-20" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </section >
    );
};

export default Hero;
