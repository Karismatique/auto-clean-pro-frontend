
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../data/faq';

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={item.id}
          className={`border rounded-lg overflow-hidden transition-all ${
            openIndex === index ? 'shadow-md' : ''
          }`}
        >
          <button
            className={`w-full flex justify-between items-center p-4 text-left font-medium ${
              openIndex === index ? 'bg-primary/10' : 'bg-white'
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="text-primary flex-shrink-0" size={20} />
            ) : (
              <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
            )}
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 bg-white">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
