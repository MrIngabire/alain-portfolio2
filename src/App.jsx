import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { 
  Code, Briefcase, GraduationCap, Mail, Phone, Linkedin, Github, 
  ChevronDown, Sparkles, User, Cpu, Globe, Database, 
  Terminal, Brain, Server, Award, Smartphone, MessageSquare, Shield, Zap, 
  Sun, Moon, TrendingUp, BarChart3, Rocket, CheckCircle, Menu, X
} from 'lucide-react';

const certifications = [
  { name: "Legacy Responsive Web Design", org: "freeCodeCamp", date: "Sept 2025", icon: <Code className="text-orange-500" /> },
  { name: "Virtual Assistant (Digital Age)", org: "ALX", date: "March 2025", icon: <Globe className="text-blue-400" /> },
  { name: "Software Development", org: "IDA", date: "Jan 2026", icon: <Terminal className="text-emerald-400" /> },
  { name: "Professional Foundations", org: "ALX", date: "August 2024", icon: <Award className="text-purple-400" /> },
  { name: "Work Ready Now", org: "Akazi Kanoze Access", date: "2023", icon: <Zap className="text-yellow-500" /> }
];

const competencies = [
  { subject: "ICT in Business & E-commerce", level: "Advanced Proficiency", grade: "Grade A (81%)" },
  { subject: "Database Design & Management", level: "Technical Mastery", grade: "Grade B (76%)" },
  { subject: "Human Computer Interaction", level: "UI/UX Specialist", grade: "Grade B (76%)" },
  { subject: "Computer Networks", level: "Infrastructure Logic", grade: "Grade B (75%)" }
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile Menu State
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryText = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const cardBg = isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50';

  return (
    <div className={`${isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-500`}>
      
      {/* QUICK CONTACT FAB (Adjusted for mobile touch) */}
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/250791058764" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 bg-emerald-500 rounded-full shadow-2xl z-50 text-white border border-emerald-400/30"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>

      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'glass-effect py-3 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-emerald-500 rounded-lg shadow-lg shadow-emerald-600/20"><Rocket className="w-4 h-4 text-white" /></div>
            <span className={`font-bold text-lg sm:text-xl uppercase tracking-widest ${primaryText}`}>Mr<span className="text-emerald-500"> INGABIRE</span></span>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-8">
            {/* Desktop Links */}
            <div className="hidden lg:flex space-x-6 uppercase tracking-widest text-[10px] font-bold">
              {navItems.map(item => (
                <a key={item.id} href={`#${item.id}`} className={`${secondaryText} hover:text-emerald-500 transition-colors`}>{item.label}</a>
              ))}
            </div>

            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}>
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-emerald-600" />}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 text-emerald-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-950/95 backdrop-blur-lg border-b border-gray-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navItems.map(item => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold uppercase tracking-widest text-gray-400 hover:text-emerald-500"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="h-[2px] bg-emerald-500 origin-left" style={{ scaleX: scrollYProgress }} />
      </nav>

      <main className="container mx-auto px-5 sm:px-10">
        
        {/* HERO SECTION (Responsive Order & Sizing) */}
        <section id="home" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] sm:text-xs font-bold mb-6 italic tracking-widest">
              <Sparkles className="w-3 h-3 mr-2" /> Bridging Business Logic & Technical Architecture
            </div>
            <h1 className={`text-4xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter italic ${primaryText}`}>Engineering <span className="text-emerald-500">VALUE.</span></h1>
            <h2 className={`text-3xl sm:text-6xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter  ${primaryText}`}>INGABIRE Alain.</h2>
            <p className={`${secondaryText} text-md sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed`}>
              Final-year BBICT student at Mount Kigali University. Architecting <span className={`${primaryText} font-medium`}>Scalable Backend Systems</span> and <span className={`${primaryText} font-medium`}>Enterprise Solutions</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#projects" className="w-full sm:w-auto px-10 py-4 bg-emerald-500 text-white rounded-2xl font-bold shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all">View Work</a>
              <div className="flex items-center space-x-4 px-4 border-l border-gray-800">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${secondaryText}`}>Forex Strategy & <br className="hidden sm:block" />QuickBooks Proficient</span>
              </div>
            </div>
          </motion.div>

          {/* PROFILE IMAGE (Adjusted for Mobile Aspect Ratio) */}
          <div className="order-1 lg:order-2 relative w-56 h-72 sm:w-72 sm:h-80 md:w-96 md:h-[28rem]">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-[2rem] sm:rounded-[3rem] blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full bg-gray-900 rounded-[2rem] sm:rounded-[3rem] border-2 border-emerald-500/30 overflow-hidden shadow-2xl">
              <img 
                src="alain-profile.jpg" 
                alt="Alain Ingabire" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-effect p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-emerald-500/30 shadow-2xl animate-float">
              <div className="flex items-center space-x-3 text-left">
                <div className="p-1.5 sm:p-2 bg-emerald-500 rounded-lg text-white"><Shield className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                <div>
                  <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-emerald-500">Reg No</p>
                  <p className={`text-[10px] sm:text-xs font-mono ${primaryText}`}>BBICTR/2023/69217</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS BENTO GRID (Stacking for Mobile) */}
        <section id="skills" className="py-20 border-t border-gray-900">
          <h2 className={`text-2xl sm:text-3xl font-black mb-12 italic text-center uppercase tracking-widest underline decoration-emerald-500 underline-offset-8 ${primaryText}`}>Capability_Grid</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`glass-effect p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] ${cardBg}`}>
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 mb-6" />
              <h3 className={`text-lg sm:text-xl font-bold mb-4 ${primaryText}`}>High-Conversion Interfaces</h3>
              <p className={`text-xs ${secondaryText} leading-relaxed`}>Developing performant React + Vite and React Native applications that drive user engagement.</p>
            </div>
            <div className={`glass-effect p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] ${cardBg}`}>
              <Server className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 mb-6" />
              <h3 className={`text-lg sm:text-xl font-bold mb-4 ${primaryText}`}>Scalable Backend Logic</h3>
              <p className={`text-xs ${secondaryText} leading-relaxed`}>Designing secure Django systems and PostgreSQL databases with Technical Mastery.</p>
            </div>
            <div className={`glass-effect p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] ${cardBg}`}>
              <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 mb-6" />
              <h3 className={`text-lg sm:text-xl font-bold mb-4 ${primaryText}`}>Business Intelligence</h3>
              <p className={`text-xs ${secondaryText} leading-relaxed`}>Applying BBICT principles, QuickBooks, and E-commerce Strategy to solve enterprise challenges.</p>
            </div>
          </div>
        </section>

        {/* ACADEMIC COMPETENCIES (Grid for all screens) */}
        <section className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competencies.map((comp, i) => (
            <div key={i} className={`glass-effect p-6 rounded-2xl border border-gray-800 text-center ${cardBg}`}>
              <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto mb-3" />
              <h4 className={`text-[10px] uppercase font-bold ${secondaryText} mb-1 leading-tight`}>{comp.subject}</h4>
              <p className="text-xs font-bold text-emerald-500">{comp.level}</p>
              <p className={`text-[9px] ${secondaryText} mt-2 italic`}>{comp.grade}</p>
            </div>
          ))}
        </section>

        {/* PROJECTS (Stacking for Mobile) */}
        <section id="projects" className="py-20 border-t border-gray-900">
          <h2 className={`text-3xl sm:text-4xl font-black mb-12 italic tracking-tighter uppercase ${primaryText}`}>Selected_Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div whileHover={{ y: -5 }} className="p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-gray-900/50 border-2 border-emerald-500/30">
              <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-500 mb-6 sm:mb-8" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">AI Task Streamliner</h3>
              <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-xs sm:text-sm">Automating business allocation using Python and AI logic. Focuses on reducing operational overhead with custom algorithms.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="w-full sm:w-auto px-6 py-2 bg-emerald-500 text-white rounded-xl font-bold text-xs">Case Study</button>
                <button className="w-full sm:w-auto px-6 py-2 border border-emerald-500/30 text-white rounded-xl font-bold text-xs">Logic Flow</button>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className={`p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border-2 border-gray-800 ${cardBg}`}>
              <Database className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mb-6 sm:mb-8" />
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${primaryText}`}>Business Solution</h3>
              <p className={`${secondaryText} mb-10 leading-relaxed text-xs sm:text-sm`}>Built a secure Django-React web application managing inventory and transactions, leveraging E-commerce proficiency.</p>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE (Improved padding for touch) */}
        <section id="experience" className="py-20 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-12 text-center italic uppercase underline underline-offset-8 decoration-emerald-500 ${primaryText}`}>Professional_Journey</h2>
            <div className="space-y-6 sm:space-y-12">
              <div className={`glass-effect p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-800 ${cardBg}`}>
                <span className="text-emerald-500 font-mono text-[10px] mb-2 block uppercase tracking-widest">2024 — 2025</span>
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tighter ${primaryText}`}>Marketing Manager & Store Keeper</h3>
                <p className={`${secondaryText} text-xs sm:text-sm font-medium italic mb-2`}>Cards From Africa (CFA)</p>
              </div>
              <div className={`glass-effect p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-800 ${cardBg}`}>
                <span className="text-purple-500 font-mono text-[10px] mb-2 block uppercase tracking-widest">2023 — 2024</span>
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tighter ${primaryText}`}>Facilitator Intern</h3>
                <p className={`${secondaryText} text-xs sm:text-sm font-medium italic mb-2`}>TRI-RWANDA+ & Gold YOUTH</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER (Responsive Flex) */}
      <footer id="contact" className="bg-gray-900/50 py-16 sm:py-24 border-t border-gray-800 mt-20 text-center md:text-left">
        <div className="container mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl sm:text-5xl font-black mb-6 italic tracking-tighter uppercase ${primaryText}`}>Let's_Build.</h2>
            <div className="space-y-4">
              <a href="mailto:alaingabire5@gmail.com" className="block text-xl sm:text-2xl font-bold text-emerald-500 hover:text-emerald-400 transition-colors underline decoration-emerald-500 italic break-all">alaingabire5@gmail.com</a>
              <p className={`text-lg sm:text-xl ${secondaryText} font-mono tracking-tighter`}>+250 791 058 764</p>
            </div>
          </div>
          <div className="text-right flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
                <a href="https://github.com/MrIngabire" target='_blank' className="text-gray-500 hover:text-white transition-colors"><Github size={20}/></a>
                <a href="www.linkedin.com/in/ingabire-alain-893327309" target='_blank' className="text-gray-500 hover:text-emerald-500 transition-colors"><Linkedin size={20}/></a>
            </div>
            <p className="font-mono text-[9px] text-gray-700 uppercase tracking-[0.3em]">ID: BBICTR/2023/69217</p>
            <p className="text-[10px] text-gray-800 mt-2 italic font-bold">Mount Kigali University | BBICT Dept</p>
          </div>
        </div>
      </footer>
    </div>
  );
}