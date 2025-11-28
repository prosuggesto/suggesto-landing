import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowDownRight, Sparkles, Pill, Palette } from 'lucide-react';

const Demo = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center relative overflow-hidden">

                {/* Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

                <div className="max-w-3xl mx-auto z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple mb-8 animate-fade-in-up">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">Expérience Interactive</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight animate-fade-in-up delay-100">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple">
                            Testez Suggesto
                        </span>
                        <br />
                        <span className="text-foreground">en temps réel</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up delay-200">
                        Découvrez la puissance de notre assistant intelligent directement sur cette page.
                        Interagissez avec l'assistant conversationnel en bas à droite pour voir comment il gère des scénarios spécifiques.
                    </p>

                    <div className="flex justify-center mb-16 animate-fade-in-up delay-300">
                        <div className="w-full max-w-md p-6 rounded-2xl bg-card border border-border hover:border-brand-cyan/50 transition-all duration-300 group text-left">
                            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Pill className="w-6 h-6 text-brand-cyan" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Compléments Alimentaires</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Demandez des conseils sur les vitamines, les dosages ou les interactions.
                            </p>
                            <div className="bg-background/50 p-3 rounded-lg border border-border text-xs font-mono text-muted-foreground">
                                "Quels compléments pour le sommeil ?"
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Arrow pointing to Chatbot */}
                    <div className="fixed bottom-32 right-32 hidden md:flex flex-col items-end animate-bounce z-50 pointer-events-none">
                        <span className="text-2xl font-handwriting text-brand-cyan mb-2 -rotate-12">C'est par ici !</span>
                        <ArrowDownRight className="w-16 h-16 text-brand-cyan" />
                    </div>

                    {/* Mobile version of the pointer */}
                    <div className="md:hidden flex flex-col items-center animate-bounce mt-8">
                        <span className="text-xl font-handwriting text-brand-cyan mb-2">Cliquez sur la bulle 👇</span>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Demo;
