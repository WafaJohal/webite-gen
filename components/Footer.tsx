import React from 'react';
import { SITE_CONFIG } from '../constants';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-google-border mt-12 py-6 bg-google-bgSecondary">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-google-gray">
          &copy; {year} {SITE_CONFIG.name}
        </p>
        <p className="text-xs text-google-gray mt-1 opacity-70">
          Dept. of Computing and Information Systems &middot; {SITE_CONFIG.affiliation}
        </p>
      </div>
    </footer>
  );
};