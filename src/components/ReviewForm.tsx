
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Upload } from 'lucide-react';

const ReviewForm: React.FC = () => {
  const { t } = useTranslation();
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [serviceType, setServiceType] = useState<string>('');
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically submit the review to an API
    console.log({
      name,
      rating,
      comment,
      serviceType,
      hasImage: imagePreview !== null
    });
    
    // Reset form
    setRating(0);
    setComment('');
    setName('');
    setServiceType('');
    setImagePreview(null);
    
    // Show success message
    alert('Votre avis a été soumis avec succès !');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-lg font-medium mb-1">Votre nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      
      <div>
        <label className="block text-lg font-medium mb-1">Service utilisé</label>
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        >
          <option value="" disabled>Sélectionnez un service</option>
          <option value="interior">Nettoyage Intérieur</option>
          <option value="exterior">Nettoyage Extérieur</option>
          <option value="complete">Nettoyage Complet</option>
        </select>
      </div>
      
      <div>
        <label className="block text-lg font-medium mb-2">Votre note</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={32}
              className="cursor-pointer transition-colors"
              onClick={() => handleRatingClick(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(null)}
              fill={star <= (hoveredRating || rating) ? "#FFD700" : "none"}
              color={star <= (hoveredRating || rating) ? "#FFD700" : "#D1D5DB"}
            />
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-lg font-medium mb-1">Votre commentaire</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      
      <div>
        <label className="block text-lg font-medium mb-1">Ajouter une photo (optionnel)</label>
        <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
          {imagePreview ? (
            <div className="relative">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="max-h-60 mx-auto rounded" 
              />
              <button 
                type="button"
                onClick={() => setImagePreview(null)}
                className="mt-2 text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ) : (
            <div>
              <Upload className="mx-auto text-gray-400 mb-2" size={36} />
              <p className="text-gray-500 mb-2">Cliquez ou glissez une image ici</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="opacity-0 absolute inset-0 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      
      <div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg shadow transition-colors"
        >
          Soumettre l'avis
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
