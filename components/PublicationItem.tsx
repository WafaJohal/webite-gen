import React from 'react';
import { Publication } from '../types';
import { FileText, Quote } from 'lucide-react';

interface Props {
  pub: Publication;
}

export const PublicationItem: React.FC<Props> = ({ pub }) => {
  return (
    <div className="py-4">
      {/* Title */}
      <h3 className="text-lg font-normal leading-snug mb-0.5">
        <a href={pub.doi ? `https://doi.org/${pub.doi}` : '#'} className="text-google-blue hover:underline cursor-pointer visited:text-purple-800">
          {pub.title}
        </a>
      </h3>
      
      {/* Authors - Green metadata style */}
      <div className="text-sm text-google-green leading-snug mb-1 truncate">
        {pub.authors.map((author, index) => (
          <span key={index} className={author.includes("Johal") ? "font-bold" : ""}>
            {author}{index < pub.authors.length - 1 ? ", " : ""}
          </span>
        ))}
        <span className="text-google-gray"> - {pub.venue}, {pub.year}</span>
      </div>

      {/* Abstract / Snippet */}
      <div className="text-sm text-google-dark mb-2 leading-relaxed">
        {pub.abstract || "Abstract available via DOI. This research contributes to Human-Robot Interaction."}
      </div>

      {/* Footer / Citations */}
      <div className="flex items-center gap-3 text-xs text-google-gray">
         <button className="hover:text-google-blue flex items-center gap-1">
           <Quote size={12} /> Cite
         </button>
         <a href="#" className="hover:text-google-blue">
           Cited by {Math.floor(Math.random() * 100) + 1}
         </a>
         <a href="#" className="hover:text-google-blue">
           Related articles
         </a>
         {pub.pdfUrl && (
           <a href={pub.pdfUrl} className="hover:text-google-blue font-medium ml-2">
             [PDF]
           </a>
         )}
      </div>
    </div>
  );
};