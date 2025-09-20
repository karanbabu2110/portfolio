import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Settings, GitBranch, Cpu } from 'lucide-react';

const Skills = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: data.languages,
      color: "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
    },
    {
      title: "Frameworks",
      icon: <Settings className="h-5 w-5" />,
      skills: data.frameworks,
      color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: data.databases,
      color: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
    },
    {
      title: "Tools",
      icon: <GitBranch className="h-5 w-5" />,
      skills: data.tools,
      color: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800"
    },
    {
      title: "Cloud",
      icon: <Cloud className="h-5 w-5" />,
      skills: data.cloud,
      color: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800"
    },
    {
      title: "Practices",
      icon: <Cpu className="h-5 w-5" />,
      skills: data.practices,
      color: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in enterprise software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-slate-900 dark:text-white">
                    <div className="text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <span className="text-lg font-semibold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      >
                        <Badge 
                          variant="outline"
                          className={`${category.color} font-medium hover:scale-105 transition-transform cursor-default border`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Development Philosophy</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-lg font-semibold mb-1">Focus</div>
                  <div className="text-blue-100 text-sm">Scalable, secure solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-1">Methodology</div>
                  <div className="text-blue-100 text-sm">Test-driven development</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-1">Optimization</div>
                  <div className="text-blue-100 text-sm">Performance & reliability</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-1">Collaboration</div>
                  <div className="text-blue-100 text-sm">Mentoring & knowledge sharing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;