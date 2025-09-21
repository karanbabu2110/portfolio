import { useTheme } from '../contexts/ThemeContext';
import { mockData } from '../data/mock';

const Header = ({ scrollToSection }) => {
  const { theme, toggleTheme } = useTheme();

  const downloadPDF = () => {
    // Mock PDF download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Karan_Babu_Resume.pdf';
    alert('PDF download functionality will be implemented soon!');
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Education', id: 'education' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {mockData.contact.name}
            </h1>
            <span className="hidden sm:block text-sm text-slate-600 dark:text-slate-400">
              {mockData.contact.role}
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* <Button
              onClick={downloadPDF}
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </Button> */}
{/*             
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;