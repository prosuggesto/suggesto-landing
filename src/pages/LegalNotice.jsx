import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LegalNotice = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-32">
                <div className="max-w-4xl mx-auto prose prose-invert">
                    <h1 className="text-4xl font-bold mb-8 text-foreground">Mentions Légales</h1>

                    <div className="space-y-8 text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Éditeur du Site</h2>
                            <p>
                                Le site Suggesto AI est édité par :<br />
                                <strong>Nom de l'entreprise :</strong> Suggesto AI<br />
                                <strong>Adresse :</strong> 374 route du bedat, 47450 Colayrac-Saint-Cirq<br />
                                <strong>Email :</strong> pro.suggesto.ai@gmail.com<br />
                                <strong>Téléphone :</strong> 07 67 56 92 24
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Hébergement</h2>
                            <p>
                                Ce site est hébergé par :<br />
                                <strong>Netlify, Inc.</strong><br />
                                2325 3rd Street, Suite 215<br />
                                San Francisco, California 94107<br />
                                États-Unis
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Propriété Intellectuelle</h2>
                            <p>
                                La marque Suggesto AI ainsi que les logos figurant sur le site sont des marques déposées. Toute reproduction totale ou partielle de ces marques ou de ces logos effectués à partir des éléments du site sans l'autorisation expresse de Suggesto AI est prohibée.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LegalNotice;
