import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle2, Loader2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // FormData sera créé plus bas avec la clé d'accès
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Honeypot check
        if (data._honey) {
            setIsSubmitting(false);
            return;
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

            // Utilisation de Web3Forms (plus fiable et rapide)
            const formData = new FormData(e.target);

            // Clé d'accès Web3Forms
            formData.append("access_key", "2e5ecd43-add1-4807-bead-beb32b428c6d");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body: formData,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            const result = await response.json();

            if (response.ok) {
                // On stocke le message du serveur pour le montrer à l'utilisateur (debug)
                setIsSuccess(result.message || "Succès confirmé par le serveur");
                e.target.reset();
            } else {
                // Tenter de récupérer le message d'erreur spécifique du service
                const errorMessage = result.message || result.error || 'Erreur serveur';
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            // Afficher le message d'erreur spécifique si disponible
            if (error.name === 'AbortError' || error.message.includes('aborted')) {
                setError("Le serveur met trop de temps à répondre. Veuillez réessayer plus tard.");
            } else {
                setError(`Erreur: ${error.message || "Une erreur est survenue."}`);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-background/80 backdrop-blur-sm relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <RevealOnScroll>
                            <h2 className="text-4xl font-bold mb-6">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple">
                                    Parlons de votre projet
                                </span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                Prêt à transformer votre expérience client ? Nos experts sont là pour vous accompagner dans votre démarche d'automatisation.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-cyan/10 rounded-lg text-brand-cyan">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-foreground">Email</h3>
                                        <p className="text-muted-foreground">pro.suggesto.ai@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-blue/10 rounded-lg text-brand-blue">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-foreground">Téléphone</h3>
                                        <p className="text-muted-foreground">07 67 56 92 24</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-purple/10 rounded-lg text-brand-purple">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-foreground">Bureaux</h3>
                                        <p className="text-muted-foreground">374 route du bedat<br />47450 Colayrac-Saint-Cirq</p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={400}>
                            <div className="mt-12 p-6 bg-card rounded-2xl border border-border">
                                <div className="flex items-center gap-4 mb-4">
                                    <Calendar className="w-8 h-8 text-brand-cyan" />
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">Appel découverte</h3>
                                        <p className="text-sm text-muted-foreground">Échangeons sur votre projet</p>
                                    </div>
                                </div>
                                <a
                                    href="https://calendar.app.google/QJ7SPGrECVWZuJTM7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-3 rounded-lg border border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white transition-all duration-300 font-medium"
                                >
                                    Réserver un créneau
                                </a>
                            </div>
                        </RevealOnScroll>
                    </div>

                    <RevealOnScroll delay={300}>
                        <div className="bg-card p-8 rounded-3xl border border-border shadow-card relative overflow-hidden">
                            {isSuccess ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10 animate-in fade-in duration-500">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-green-500 animate-in zoom-in duration-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                                    <p className="text-muted-foreground text-center max-w-xs mb-4">
                                        Merci de nous avoir contactés. Nous reviendrons vers vous très rapidement.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-4 text-brand-cyan hover:underline"
                                    >
                                        Envoyer un autre message
                                    </button>
                                </div>
                            ) : null}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Honeypot for spam protection */}
                                <input type="text" name="_honey" style={{ display: 'none' }} />
                                {/* Disable Captcha */}
                                <input type="hidden" name="_captcha" value="false" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-muted-foreground mb-2">Nom</label>
                                        <input type="text" name="name" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-colors" placeholder="Votre nom" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                                        <input type="email" name="email" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-colors" placeholder="votre@email.com" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted-foreground mb-2">Entreprise</label>
                                    <input type="text" name="company" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-colors" placeholder="Nom de votre entreprise" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                                    <textarea name="message" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-colors h-32 resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                                </div>

                                {error && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg shadow-glow hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Envoi en cours...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Envoyer le message</span>
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Contact;
