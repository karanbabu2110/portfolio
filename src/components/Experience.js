import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, ChevronRight, MapPin } from 'lucide-react';

const Experience = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional journey focused on delivering scalable solutions and mentoring teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500 hidden md:block"></div>
          
          <div className="space-y-8">
            {data.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.01] bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 md:ml-16 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-20 top-8 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg group-hover:scale-125 transition-transform"></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {experience.role}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-600 dark:text-slate-400">
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4" />
                            <span className="font-semibold">{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary"
                        className={`${index === 0 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' 
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        } self-start sm:self-center`}
                      >
                        {index === 0 ? 'Current' : 'Previous'}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Key Responsibilities & Achievements</h4>
                      <div className="space-y-3">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <motion.div 
                            key={respIndex} 
                            className="flex items-start space-x-3 group/item hover:bg-slate-50 dark:hover:bg-slate-600 p-3 rounded-lg transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: (index * 0.3) + (respIndex * 0.1) }}
                          >
                            <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                            <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              {responsibility}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Career Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-blue-100">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2</div>
                  <div className="text-blue-100">Major Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Project Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;