import React from 'react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Code, Database, Cloud, User } from 'lucide-react';

const About = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const iconMap = {
    0: <Code className="h-5 w-5" />,
    1: <CheckCircle className="h-5 w-5" />,
    2: <Database className="h-5 w-5" />,
    3: <Cloud className="h-5 w-5" />
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {data.summary}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {data.highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {iconMap[index] || <CheckCircle className="h-5 w-5" />}
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                      <User className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Backend Java Developer
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Building scalable, secure systems
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">4+</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Years Experience</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">40%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Risk Reduction</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Performance Boost</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">95%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Test Coverage</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;