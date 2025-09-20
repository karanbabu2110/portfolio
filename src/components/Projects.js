import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, CheckCircle, Clock, Play, Code, Database, Cloud, Shield } from 'lucide-react';

const Projects = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Production':
        return <Play className="h-4 w-4 text-green-600" />;
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4 text-amber-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
    }
  };

  const getProjectIcon = (title) => {
    if (title.includes('Security')) return <Shield className="h-6 w-6" />;
    if (title.includes('Performance')) return <Database className="h-6 w-6" />;
    if (title.includes('Migration')) return <Code className="h-6 w-6" />;
    if (title.includes('Policy')) return <Cloud className="h-6 w-6" />;
    return <Code className="h-6 w-6" />;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real-world solutions that demonstrate impact-driven development and technical excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                        {getProjectIcon(project.title)}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge className={`flex items-center space-x-1 ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      <span>{project.status}</span>
                    </Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <motion.li 
                          key={achievementIndex} 
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: (index * 0.3) + (achievementIndex * 0.1) }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-emerald-50 dark:hover:bg-emerald-900 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center space-x-2 hover:bg-emerald-50 dark:hover:bg-emerald-900 hover:border-emerald-300 dark:hover:border-emerald-600"
                      onClick={() => alert('Demo link will be available soon!')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Demo</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex items-center space-x-2 hover:bg-slate-100 dark:hover:bg-slate-700"
                      onClick={() => alert('Source code access restricted for enterprise projects')}
                    >
                      <Github className="h-4 w-4" />
                      <span>Source</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Impact Summary
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">40%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Security Risk Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">20%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Traffic Capacity Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Services Migrated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Test Coverage Achieved</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;