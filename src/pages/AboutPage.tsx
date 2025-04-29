
import React from 'react';
import { useTranslation } from 'react-i18next';
import FAQAccordion from '../components/FAQAccordion';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{t('about')}</h1>
        
        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('ourMission')}</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2010, Auto Clean Pro s'est donné pour mission de transformer l'industrie du nettoyage automobile en France. Notre objectif est de fournir un service exceptionnel qui dépasse les attentes de nos clients, tout en respectant l'environnement.
              </p>
              <p className="text-gray-600">
                Nous nous efforçons d'offrir une expérience client inégalée, combinant expertise technique, produits de qualité supérieure et service personnalisé. Notre ambition est de devenir la référence nationale en matière de nettoyage automobile premium.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1520222791882-fee7e9ade82a?q=80&w=600" 
                alt="Mission d'Auto Clean Pro" 
                className="rounded-lg shadow-md w-full object-cover h-80"
              />
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="mb-16 bg-primary/5 py-12 px-6 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t('ourValues')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir un service de la plus haute qualité, sans compromis, à chaque client.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Durabilité</h3>
              <p className="text-gray-600">
                Nous utilisons des produits écologiques et des techniques économes en eau pour minimiser notre impact environnemental.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous investissons continuellement dans de nouvelles technologies et formations pour améliorer nos services.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t('ourTeam')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" 
                alt="Philippe Durand" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">Philippe Durand</h3>
                <p className="text-primary mb-3">Fondateur & PDG</p>
                <p className="text-gray-600">
                  Philippe a fondé Auto Clean Pro avec la vision de redéfinir les standards du nettoyage automobile en France.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" 
                alt="Sophie Martin" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">Sophie Martin</h3>
                <p className="text-primary mb-3">Directrice des Opérations</p>
                <p className="text-gray-600">
                  Sophie supervise les opérations quotidiennes de nos 10 agences, assurant une qualité constante des services.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?q=80&w=400" 
                alt="Thomas Leclerc" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">Thomas Leclerc</h3>
                <p className="text-primary mb-3">Chef de l'Innovation</p>
                <p className="text-gray-600">
                  Thomas dirige notre recherche de nouvelles techniques et produits pour améliorer continuellement nos services.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t('faq')}</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
