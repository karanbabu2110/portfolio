import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Target, Zap, Award } from 'lucide-react';

const Achievements = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const iconMap = {
    0: <Zap className="h-6 w-6" />,
    1: <Trophy className="h-6 w-6" />,
    2: <Star className="h-6 w-6" />,
    3: <Target className="h-6 w-6" />
  };

  const colors = [
    'from-yellow-400 to-orange-500',
    'from-emerald-400 to-teal-500', 
    'from-blue-400 to-indigo-500',
    'from-purple-400 to-pink-500'
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Milestones that reflect commitment to excellence and continuous improvement
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden relative h-full">
                {/* Achievement badge indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 bg-gradient-to-r ${colors[index]} rounded-full flex items-center justify-center shadow-lg`}>
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-3 bg-gradient-to-r ${colors[index]} rounded-lg text-white group-hover:scale-110 transition-transform shadow-lg`}>
                      {iconMap[index] || <Trophy className="h-6 w-6" />}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <Badge className={`bg-gradient-to-r ${colors[index]} text-white border-0 px-3 py-1 shadow-sm`}>
                      ACHIEVED
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Professional Impact
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Consistently delivering results that drive business value and technical excellence
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div 
                  className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">40%</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">Security</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Vulnerability Reduction</div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">Migration</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Services Upgraded</div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">20%</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">Performance</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Traffic Increase</div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">Downtime</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">During Optimization</div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;