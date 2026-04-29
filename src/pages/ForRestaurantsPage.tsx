import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Page specific components
import RestaurantHero from '../components/restaurants/RestaurantHero';
import { FAQ1, FAQ2, FAQ3, FAQ4 } from '../components/restaurants/RestaurantContent';
import PlatformComparison from '../components/restaurants/PlatformComparison';
import WhoIsItFor from '../components/restaurants/WhoIsItFor';
import OnboardingProcess from '../components/restaurants/OnboardingProcess';
import RestaurantCTA from '../components/restaurants/RestaurantCTA';

const ForRestaurantsPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="for-restaurants-page">
      <Navbar />
      
      <main>
        <RestaurantHero />
        
        <FAQ1 />
        
        <PlatformComparison />
        
        <FAQ2 />
        
        <FAQ3 />
        
        <FAQ4 />
        
        <WhoIsItFor />
        
        <OnboardingProcess />
        
        <RestaurantCTA />
      </main>

      <Footer />
    </div>
  );
};

export default ForRestaurantsPage;
