import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { ChevronRight } from 'lucide-react';

export const NewsList: React.FC = () => {
  return (
    <div className="bg-white">
      <h3 className="text-xs font-bold text-google-gray uppercase tracking-wider mb-4">Latest Updates</h3>
      <ul className="space-y-5">
        {NEWS_ITEMS.map((item) => (
          <li key={item.id} className="group">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-google-gray mb-1">{item.date}</span>
              <a href={item.link || '#'} className={`text-sm font-medium text-google-dark leading-snug ${item.link ? 'hover:text-google-blue' : ''}`}>
                {item.title}
              </a>
              <p className="text-xs text-google-gray mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-2">
        <a href="#" className="text-xs font-medium text-google-blue hover:underline flex items-center gap-1">
            View archive <ChevronRight size={12} />
        </a>
      </div>
    </div>
  );
};