import React from 'react';

const Mentionlegal = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-semibold text-center mb-6 text-blue-600">
          Mentions Légales
        </h1>
        <div className="text-gray-700 space-y-6">
          <p>
            En conformité avec les dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, les informations suivantes sont fournies aux utilisateurs du site :
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-600">1. Éditeur du Site</h2>
          <p>
            Nom de l'éditeur : [Nom de votre société] <br />
            Adresse : [Adresse de votre société] <br />
            Téléphone : [Numéro de téléphone] <br />
            Email : [Adresse email de contact]
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-600">2. Hébergement du Site</h2>
          <p>
            Le site est hébergé par [Nom de l'hébergeur], situé à [adresse de l'hébergeur]. Vous pouvez les contacter au numéro [numéro de téléphone de l'hébergeur].
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-600">3. Propriété Intellectuelle</h2>
          <p>
            Le contenu du site, incluant mais non limité aux textes, images, et graphiques, est la propriété de [Nom de votre société] et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-600">4. Limitation de Responsabilité</h2>
          <p>
            [Nom de votre société] décline toute responsabilité quant aux dommages directs ou indirects pouvant résulter de l'utilisation de ce site. L'utilisateur est seul responsable de la protection de ses données et de ses équipements.
          </p>

          <p className="mt-6 text-center text-gray-500">
            Dernière mise à jour : Novembre 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mentionlegal;
