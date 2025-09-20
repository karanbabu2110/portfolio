import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const Education = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving approach
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 overflow-hidden">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {data.degree}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium">{data.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{data.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="secondary"
                  className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 w-fit"
                >
                  Computer Science & Engineering
                </Badge>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="flex items-center space-x-2 font-semibold text-slate-900 dark:text-white mb-4">
                    <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Academic Highlights</span>
                  </h4>
                  <div className="grid gap-3">
                    {data.highlights.map((highlight, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-500 transition-colors border border-slate-200 dark:border-slate-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 shadow-lg text-center h-full">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">Years</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Academic Journey</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 shadow-lg text-center h-full">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">CSE</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">Specialization</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Core Engineering</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 shadow-lg text-center h-full">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">🏆</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">Top Performer</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">In Batch</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                A solid foundation in computer science principles, algorithms, and software engineering practices, complemented by hands-on experience in competitive programming and technical leadership.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">2015-2019</div>
                  <div className="text-blue-100 text-sm">Engineering Degree</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">🏆</div>
                  <div className="text-blue-100 text-sm">Top Programmer</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">👥</div>
                  <div className="text-blue-100 text-sm">Student Leadership</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;