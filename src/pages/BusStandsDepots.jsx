import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DepotFinder } from '../components/DepotFinder';

export const BusStandsDepots = () => {
  const { lang } = useLanguage();

  return (
    <div className="py-6">
      <DepotFinder />
    </div>
  );
};
