import React from 'react';
import { MessageCircle, Brain, Settings } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Features = () => {
    const features = [
        {
            icon: <MessageCircle className="w-12 h-12 text-brand-cyan" />,
            title: "Conversation Naturelle",
            description: "Des assistants intelligents qui comprennent le langage naturel et maintiennent des conversations fluides et contextuelles avec vos clients.",
            points: ["Traitement du langage naturel avancé", "Compréhension contextuelle", "Réponses personnalisées"]
        },
        {
            icon: <Brain className="w-12 h-12 text-brand-blue" />,
            title: "Intelligence Adaptative",
            description: "Notre IA s'adapte à toutes les industries : immobilier, e-commerce, santé, finance, tourisme. Elle apprend le vocabulaire et les processus spécifiques à votre secteur d'activité.",
            points: ["Adaptation multi-secteurs", "Vocabulaire métier", "Processus personnalisés"]
        },
        {
            icon: <Settings className="w-12 h-12 text-brand-purple" />,
            title: "Intégration Facile",
            description: "Déployez votre assistant intelligent en quelques clics sur votre site web ou applications mobiles.",
            points: ["Script simple à intégrer", "Widgets pré-configurés", "Escalade vers l'humain"]
        }
    ];

    return (
        <section id="services" className="py-24 bg-background/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-purple/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                                Notre Solution IA
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Découvrez comment Suggesto révolutionne l'expérience client avec des technologies d'intelligence artificielle de pointe.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <RevealOnScroll key={index} delay={index * 200}>
                            <div className="p-8 rounded-2xl bg-card border border-border hover:border-brand-purple/50 transition-all duration-300 hover:shadow-glow group h-full">
                                <div className="mb-6 p-4 bg-background/50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-2">
                                    {feature.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mr-2" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* Bottom CTA */}
                <RevealOnScroll delay={400}>
                    <div className="text-center bg-card/50 border border-border rounded-3xl p-12 max-w-4xl mx-auto backdrop-blur-sm hover:border-brand-purple/50 transition-all duration-300 hover:shadow-glow">
                        <h3 className="text-3xl font-bold mb-4 text-foreground">Prêt à transformer votre service client ?</h3>
                        <p className="text-lg text-muted-foreground mb-8">
                            Rejoignez les entreprises innovantes qui font confiance à Suggesto pour leur communication client.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-brand-cyan">
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                                Setup en 7 jours
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                                Support dédié
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                                ROI garanti
                            </span>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Features;
