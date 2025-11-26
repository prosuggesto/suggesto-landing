import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-32">
                <div className="max-w-4xl mx-auto prose prose-invert">
                    <h1 className="text-4xl font-bold mb-8 text-foreground">Conditions Générales d'Utilisation (CGU)</h1>

                    <div className="space-y-8 text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Objet</h2>
                            <p>
                                Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités de mise à disposition des services du site Suggesto AI et les conditions d'utilisation du service par l'utilisateur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description des Services</h2>
                            <p>
                                Suggesto AI fournit des solutions d'automatisation par intelligence artificielle pour le service client. Le site permet de découvrir nos offres, de tester notre assistant conversationnel et de prendre contact avec notre équipe.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Propriété Intellectuelle</h2>
                            <p>
                                L'ensemble du contenu de ce site (structure, textes, logos, images, vidéos) est la propriété exclusive de Suggesto AI. Toute reproduction, totale ou partielle, est soumise à autorisation préalable.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Responsabilité</h2>
                            <p>
                                Suggesto AI s'efforce de fournir des informations aussi précises que possible. Toutefois, nous ne pourrons être tenus responsables des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de notre fait ou du fait des tiers partenaires qui nous fournissent ces informations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Modification des CGU</h2>
                            <p>
                                Suggesto AI se réserve le droit de modifier les présentes conditions à tout moment. L'utilisateur est donc invité à les consulter régulièrement.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
