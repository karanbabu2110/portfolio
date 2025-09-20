import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Achievements from './Achievements';
import Certifications from './Certifications';
import Education from './Education';
import Footer from './Footer';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const { theme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans">
        <Header scrollToSection={scrollToSection} />
        <main className="pt-20">
          <About data={mockData.about} />
          <Skills data={mockData.skills} />
          <Projects data={mockData.projects} />
          <Experience data={mockData.experience} />
          <Achievements data={mockData.achievements} />
          <Certifications data={mockData.certifications} />
          <Education data={mockData.education} />
        </main>
        <Footer data={mockData.contact} />
        
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 rounded-full p-3 bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 shadow-lg border border-slate-600 dark:border-slate-500"
            size="sm"
          >
            <ChevronUp className="h-5 w-5 text-white" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;