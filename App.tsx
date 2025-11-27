import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NewsList } from './components/NewsList';
import { PublicationItem } from './components/PublicationItem';
import { SITE_CONFIG, PUBLICATIONS, PROJECTS, TEACHING, SOCIAL_LINKS } from './constants';
import { PublicationType } from './types';
import { ChevronDown, Users, Search, Mail, MapPin, ExternalLink, Bot, BoxSelect, HeartHandshake, Github, Linkedin, Twitter, GraduationCap } from 'lucide-react';

// --- Icon Helper ---
const getIcon = (name: string, size: number = 16) => {
    switch(name) {
      case 'Github': return <Github size={size} />;
      case 'Linkedin': return <Linkedin size={size} />;
      case 'Twitter': return <Twitter size={size} />;
      case 'GraduationCap': return <GraduationCap size={size} />;
      case 'Bot': return <Bot size={size} />;
      case 'BoxSelect': return <BoxSelect size={size} />;
      case 'HeartHandshake': return <HeartHandshake size={size} />;
      default: return <ExternalLink size={size} />;
    }
};

// --- HomePage Component (New Layout) ---

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-[1024px] mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        
        {/* --- LEFT COLUMN (Sidebar: Profile, Contact, News) --- */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-8">
          
          {/* Profile Block */}
          <div className="text-left">
             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-google-bgSecondary mb-5">
                <img 
                  src="https://picsum.photos/seed/wafajohal/400/400" 
                  alt={SITE_CONFIG.name}
                  className="w-full h-full object-cover"
                />
             </div>
             
             <h1 className="text-2xl font-normal text-google-dark mb-1">{SITE_CONFIG.name}</h1>
             <p className="text-sm font-medium text-google-blue mb-1">{SITE_CONFIG.role}</p>
             <p className="text-sm text-google-dark mb-4">{SITE_CONFIG.affiliation}</p>
             
             <div className="flex flex-col gap-2 text-sm text-google-gray mb-6">
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-google-blue transition-colors">
                  <Mail size={14} /> {SITE_CONFIG.email}
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={14} /> {SITE_CONFIG.location}
                </div>
             </div>

             <div className="flex gap-3 mb-8">
                {SOCIAL_LINKS.map(link => (
                  <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-google-gray hover:text-google-blue transition-colors" title={link.platform}>
                    {getIcon(link.iconName, 18)}
                  </a>
                ))}
             </div>
          </div>

          {/* News Block (Desktop Sidebar) */}
          <div className="hidden md:block pt-6 border-t border-google-border">
             <NewsList />
          </div>
        </div>

        {/* --- RIGHT COLUMN (Main Content: Bio, Research, Pubs) --- */}
        <div className="md:col-span-8 lg:col-span-9">
          
          {/* Bio Section */}
          <div className="mb-10">
            <h2 className="text-xl font-normal text-google-dark border-b border-google-border pb-2 mb-4">About Me</h2>
            <div className="prose prose-stone max-w-none text-google-dark text-[15px] leading-7 whitespace-pre-line">
              {SITE_CONFIG.fullBio}
            </div>
          </div>

          {/* Featured Projects (Replaces Research Interests) */}
          <div className="mb-10">
            <h2 className="text-xl font-normal text-google-dark border-b border-google-border pb-2 mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
               {PROJECTS.slice(0, 3).map(project => (
                 <NavLink to="/projects" key={project.id} className="group border border-google-border rounded overflow-hidden hover:shadow-card transition-all bg-white flex flex-col h-full">
                    <div className="h-32 overflow-hidden relative bg-google-bgSecondary border-b border-google-border">
                       <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-sm font-medium text-google-blue mb-2 group-hover:underline leading-tight">
                            {project.title}
                        </h3>
                        <p className="text-xs text-google-dark leading-relaxed line-clamp-3 mb-3">{project.description}</p>
                        
                        <div className="mt-auto flex flex-wrap gap-1.5">
                             {project.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-wider text-google-gray bg-google-bgSecondary px-1.5 py-0.5 rounded border border-google-border">
                                  {tag}
                                </span>
                             ))}
                        </div>
                    </div>
                 </NavLink>
               ))}
            </div>
          </div>

          {/* Selected Pubs */}
          <div className="mb-8">
             <div className="flex justify-between items-baseline border-b border-google-border pb-2 mb-4">
                <h2 className="text-xl font-normal text-google-dark">Selected Publications</h2>
                <NavLink to="/publications" className="text-sm font-medium text-google-blue hover:underline">View All</NavLink>
             </div>
             <div className="space-y-1">
                 {PUBLICATIONS.slice(0, 3).map(p => (
                     <div key={p.id} className="border-b border-google-border/50 last:border-0">
                       <PublicationItem pub={p} />
                     </div>
                 ))}
             </div>
          </div>

          {/* Mobile News (Visible only on small screens) */}
          <div className="md:hidden pt-8 border-t border-google-border">
             <NewsList />
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Other Pages (Kept consistent with new styling) ---

const PublicationsPage: React.FC = () => {
  const [filter, setFilter] = useState<PublicationType | 'All'>('All');
  const [search, setSearch] = useState('');
  
  const filteredPubs = useMemo(() => {
    let pubs = PUBLICATIONS;
    if (filter !== 'All') {
        pubs = pubs.filter(p => p.type === filter);
    }
    if (search) {
        const lowerSearch = search.toLowerCase();
        pubs = pubs.filter(p => 
            p.title.toLowerCase().includes(lowerSearch) || 
            p.authors.some(a => a.toLowerCase().includes(lowerSearch))
        );
    }
    return pubs;
  }, [filter, search]);

  const sortedPubs = useMemo(() => {
    return [...filteredPubs].sort((a, b) => b.year - a.year);
  }, [filteredPubs]);

  return (
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-2 border-b border-google-border gap-4">
        <div>
           <h1 className="text-2xl font-normal text-google-dark mb-1">Publications</h1>
           <p className="text-sm text-google-gray">Showing {sortedPubs.length} results</p>
        </div>
        
        <div className="flex items-center gap-3">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-8 pr-3 py-1.5 border border-google-border rounded text-sm focus:outline-none focus:border-google-blue w-40 sm:w-64 transition-colors"
                />
                <Search size={14} className="absolute left-2.5 top-2.5 text-google-gray" />
            </div>

            <div className="relative inline-block text-left">
              <select 
                className="bg-white border border-google-border text-sm text-google-dark pl-3 pr-8 py-1.5 rounded focus:outline-none focus:border-google-blue cursor-pointer appearance-none"
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
              >
                <option value="All">All Types</option>
                <option value={PublicationType.JOURNAL}>Journals</option>
                <option value={PublicationType.CONFERENCE}>Conferences</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-2.5 text-google-gray pointer-events-none"/>
            </div>
        </div>
      </div>

      <div className="space-y-0">
        {sortedPubs.map(pub => (
          <div key={pub.id} className="border-b border-google-bgSecondary last:border-0">
             <PublicationItem pub={pub} />
          </div>
        ))}
        {sortedPubs.length === 0 && (
           <div className="text-center py-12 text-google-gray">
             No publications found matching your criteria.
           </div>
        )}
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 animate-fade-in">
       <h1 className="text-2xl font-normal text-google-dark mb-6 border-b border-google-border pb-4">Research Projects</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(project => (
            <div key={project.id} className="bg-white rounded-lg border border-google-border overflow-hidden hover:shadow-card transition-shadow duration-200 flex flex-col h-full group">
              <div className="h-40 overflow-hidden relative bg-google-bgSecondary border-b border-google-border">
                 <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-medium text-google-blue mb-2 group-hover:underline">{project.title}</h3>
                <p className="text-google-dark text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-google-gray bg-google-bgSecondary px-2 py-1 rounded border border-google-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
       </div>
    </div>
  );
};

const TeachingPage: React.FC = () => (
  <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 animate-fade-in">
    <h1 className="text-2xl font-normal text-google-dark mb-6 border-b border-google-border pb-4">Teaching</h1>
    <div className="grid gap-4">
      {TEACHING.map(course => (
        <div key={course.id} className="p-4 rounded border border-google-border hover:border-google-blue transition-colors flex flex-col sm:flex-row justify-between sm:items-center bg-white">
            <div>
              <div className="flex items-center gap-2 mb-1">
                 <h3 className="text-base font-medium text-google-blue">{course.title}</h3>
                 <span className="text-xs text-google-gray border border-google-border px-1.5 rounded">
                   {course.code}
                 </span>
              </div>
              <p className="text-sm text-google-dark">{course.institution}</p>
            </div>
            <div className="mt-2 sm:mt-0 sm:text-right">
               <div className="text-sm font-medium text-google-dark">{course.role}</div>
               <div className="text-sm text-google-gray">{course.period}</div>
            </div>
        </div>
      ))}
    </div>
  </div>
);

const TeamPage: React.FC = () => (
  <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 animate-fade-in">
    <h1 className="text-2xl font-normal text-google-dark mb-4">Inclusive Technology Lab</h1>
    <p className="text-base text-google-gray mb-8 max-w-2xl leading-relaxed">
      We are a group of researchers and students passionate about designing technologies that include everyone.
    </p>

    <h2 className="text-lg font-normal text-google-dark border-b border-google-border pb-2 mb-4">Current Members</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
       {[1, 2, 3, 4].map(i => (
         <div key={i} className="flex items-center gap-4 p-4 rounded border border-google-border hover:shadow-sm transition-shadow bg-white">
            <div className="w-12 h-12 bg-google-bgSecondary rounded-full flex items-center justify-center text-google-gray flex-shrink-0">
              <Users size={20} />
            </div>
            <div>
               <h3 className="font-medium text-google-dark text-base">Research Student {i}</h3>
               <p className="text-sm text-google-gray">PhD Candidate</p>
            </div>
         </div>
       ))}
    </div>
    
    <div className="p-6 border border-google-border rounded bg-google-bgSecondary">
      <h3 className="text-base font-medium text-google-dark mb-2">Prospective Students</h3>
      <p className="text-sm text-google-gray mb-4 max-w-2xl">
        I am always looking for motivated students interested in HRI, Educational Technology, and Tangible Interfaces. 
        If you are interested in joining the lab, please read my recent papers and send me an email with your CV and research interests.
      </p>
      <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-medium text-google-blue hover:underline">
         Contact Wafa Johal &rarr;
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white font-sans text-google-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;