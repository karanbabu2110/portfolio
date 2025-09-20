import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getCertificationIcon = (title) => {
    if (title.includes('Java')) return '☕';
    if (title.includes('Spring')) return '🍃';
    if (title.includes('Programming')) return '💻';
    if (title.includes('English')) return '🗣️';
    return '🎓';
  };

  const getCertificationColor = (issuer) => {
    if (issuer === 'Udemy') return 'from-purple-500 to-purple-600';
    if (issuer === 'NPTEL') return 'from-blue-500 to-blue-600';
    if (issuer === 'Cambridge University') return 'from-emerald-500 to-emerald-600';
    return 'from-slate-500 to-slate-600';
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {data.map((certification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 overflow-hidden relative h-full`}>
                {/* Certificate badge */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-bl-full"></div>
                <div className="absolute top-3 right-3 text-2xl">
                  {getCertificationIcon(certification.title)}
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 bg-gradient-to-r ${getCertificationColor(certification.issuer)} rounded-lg shadow-sm`}>
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-600 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-500">
                      {certification.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                    {certification.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 text-sm mb-4">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{certification.issuer}</span>
                  </div>
                  
                  <div className="flex justify-center">
                    <Badge className={`bg-gradient-to-r ${getCertificationColor(certification.issuer)} text-white border-0 text-xs px-3 py-1 shadow-sm`}>
                      CERTIFIED
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 shadow-lg h-full">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-emerald-500 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Technical Expertise
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-600 rounded-lg border border-slate-200 dark:border-slate-500">
                    <span className="font-medium text-slate-900 dark:text-white">Java 17 Mastery</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Advanced
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-600 rounded-lg border border-slate-200 dark:border-slate-500">
                    <span className="font-medium text-slate-900 dark:text-white">Spring Boot 3 & Framework 6</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Expert
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-600 rounded-lg border border-slate-200 dark:border-slate-500">
                    <span className="font-medium text-slate-900 dark:text-white">Core Programming (C)</span>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Certified
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 shadow-lg h-full">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Learning Timeline
                  </h3>
                </div>
                <div className="space-y-4">
                  {data.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-white dark:bg-slate-600 rounded-lg border border-slate-200 dark:border-slate-500">
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                        {cert.year}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-slate-900 dark:text-white text-sm">
                          {cert.title}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-xs">
                          {cert.issuer}
                        </div>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Commitment to Excellence</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Staying current with industry trends and continuously expanding technical capabilities through structured learning and hands-on practice.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">4</div>
                  <div className="text-blue-100 text-sm">Professional Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-blue-100 text-sm">Major Platforms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100 text-sm">Completion Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;