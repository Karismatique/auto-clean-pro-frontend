
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AccountPage: React.FC = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleForm = () => setIsLogin(!isLogin);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send to an API
    console.log(isLogin ? 'Login data:' : 'Register data:', data);
    
    // Show a confirmation message
    alert(isLogin ? 'Connexion réussie!' : 'Inscription réussie!');
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </h1>
          
          <Tabs defaultValue="login" onValueChange={(val) => setIsLogin(val === 'login')}>
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="register">Inscription</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password">Mot de passe</Label>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Mot de passe oublié?
                    </a>
                  </div>
                  <Input id="login-password" name="password" type="password" required />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Se connecter
                </button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-firstName">Prénom</Label>
                    <Input id="register-firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-lastName">Nom</Label>
                    <Input id="register-lastName" name="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-phone">Téléphone</Label>
                  <Input id="register-phone" name="phone" type="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Mot de passe</Label>
                  <Input id="register-password" name="password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-confirm-password">Confirmer le mot de passe</Label>
                  <Input id="register-confirm-password" name="confirmPassword" type="password" required />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    J'accepte les <a href="#" className="text-primary hover:underline">termes et conditions</a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Créer un compte
                </button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
            <p>
              {isLogin ? "Vous n'avez pas de compte? " : "Vous avez déjà un compte? "}
              <button 
                type="button"
                onClick={toggleForm} 
                className="text-primary hover:underline"
              >
                {isLogin ? "S'inscrire" : "Se connecter"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
