import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Quels sont les horaires du festival ?',
      answer: 'Le festival commence à 10h00 et se termine à 23h00 chaque jour.',
    },
    {
      question: 'Puis-je acheter des billets sur place ?',
      answer: 'Oui, mais nous vous recommandons de les acheter en ligne à l’avance.',
    },
    {
      question: 'Quels types de nourriture sont disponibles ?',
      answer: 'Vous trouverez une variété de stands, y compris des options végétariennes et véganes.',
    },
    {
      question: 'Les enfants peuvent-ils venir au festival ?',
      answer: 'Oui, le festival est adapté aux familles, avec des espaces dédiés aux enfants.',
    },
  ];

  return (
    <div>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="mb-4">
            <h4 className="font-semibold text-lg">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
