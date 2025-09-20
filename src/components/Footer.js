import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ArrowUp } from 'lucide-react';

const Footer = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const contactItems = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: data.email,
      link: `mailto:${data.email}`,
      color: 'hover:text-red-500'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: data.phone,
      link: `tel:${data.phone}`,
      color: 'hover:text-green-500'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: data.location,
      link: '#',
      color: 'hover:text-blue-500'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: data.linkedin,
      color: 'hover:text-blue-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Let's Connect
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
                <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Ready to discuss opportunities, collaborate on projects, or just have a technical conversation? 
                  I'm always excited to connect with fellow developers and potential collaborators.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {contactItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.label === 'LinkedIn' ? '_blank' : '_self'}
                    rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                    className={`group flex flex-col items-center space-y-3 p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 ${item.color} dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                        {item.label}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-xs">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <Separator className="my-8 bg-slate-200 dark:bg-slate-600" />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <motion.div 
                  className="text-center sm:text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {data.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {data.role} • Available for opportunities
                  </p>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Button
                    onClick={scrollToTop}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 hover:bg-emerald-50 dark:hover:bg-emerald-900 hover:border-emerald-300 dark:hover:border-emerald-600"
                  >
                    <ArrowUp className="h-4 w-4" />
                    <span>Back to Top</span>
                  </Button>

                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-600"
                      onClick={() => alert('GitHub profile will be available soon!')}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-600"
                      onClick={() => alert('Twitter profile will be available soon!')}
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © 2024 {data.name}. Built with React, Tailwind CSS, and attention to detail.
          </p>
          <p className="text-slate-400 dark:text-slate-600 text-xs mt-2">
            Designed for impact. Optimized for performance. Ready for production.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;