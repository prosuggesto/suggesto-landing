import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-32">
                <div className="max-w-4xl mx-auto prose prose-invert">
                    <h1 className="text-4xl font-bold mb-8 text-foreground">Politique de Confidentialité</h1>

                    <div className="space-y-8 text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                            <p>
                                La présente politique de confidentialité a pour but de vous informer sur la manière dont Suggesto AI collecte, utilise et protège vos données personnelles.
                                En utilisant notre site web et notre assistant conversationnel, vous acceptez pleinement et sans réserve les termes de la présente politique.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Utilisation de l'Assistant Suggesto</h2>
                            <div className="p-6 bg-card border border-brand-purple/30 rounded-xl shadow-glow">
                                <p className="font-medium text-foreground mb-2">⚠️ Important : Consentement de l'utilisateur</p>
                                <p>
                                    L'utilisation de l'assistant conversationnel présent sur ce site implique votre consentement explicite à la collecte et au traitement des données que vous choisissez de lui transmettre.
                                    Ces données sont utilisées exclusivement pour :
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Répondre à vos demandes et questions en temps réel.</li>
                                    <li>Améliorer la qualité de nos services et de l'intelligence artificielle.</li>
                                    <li>Vous mettre en relation avec notre équipe si nécessaire.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Collecte des Données</h2>
                            <p>Nous collectons les informations suivantes :</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Informations fournies volontairement via le formulaire de contact (Nom, Email, Entreprise, Message).</li>
                                <li>Données échangées lors des conversations avec l'assistant Suggesto.</li>
                                <li>Données techniques de navigation (cookies, adresse IP) à des fins statistiques et de sécurité.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Protection des Données (RGPD)</h2>
                            <p>
                                Conformément au Règlement Général sur la Protection des Données (RGPD), Suggesto AI s'engage à :
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Ne jamais vendre vos données à des tiers.</li>
                                <li>Sécuriser vos informations avec les standards les plus élevés de l'industrie.</li>
                                <li>Vous garantir un droit d'accès, de rectification et de suppression de vos données sur simple demande à <a href="mailto:pro.suggesto.ai@gmail.com" className="text-brand-cyan hover:underline">pro.suggesto.ai@gmail.com</a>.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact</h2>
                            <p>
                                Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à :<br />
                                <strong>Email :</strong> pro.suggesto.ai@gmail.com<br />
                                <strong>Adresse :</strong> 374 route du bedat, 47450 Colayrac-Saint-Cirq
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
