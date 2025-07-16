"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Experience = () => {
  const experiences = [
    {
      company: "Advantech",
      position: "Technical Intern",
      duration: "2025",
      location: "India",
      description: [
        "Completed a 3-month technical internship gaining hands-on training across CTOS, Application Engineering, Sales, RMA, and SCM departments",
        "Worked with Advantech's Wise-PaaS platform for IoT solution deployment and integration in industrial applications",
        "Represented Advantech at India Electronics Week (IEW), engaging with industry professionals and showcasing IoT hardware solutions",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Cognifyz Technologies",
      position: "Data Analyst Intern",
      duration: "2024",
      location: "Remote",
      description: [
        "Analyzed restaurant dataset using Python, matplotlib library and Power BI",
        "Identified patterns and distributions in data",
        "Performed geographic analysis using advanced data visualization tools",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "Rapid Info Solutions",
      position: "Web Development Intern",
      duration: "2023",
      location: "Remote",
      description: [
        "Developed web-based application for real-time CCTV feed monitoring using HTTP Live Streaming (HLS) protocols",
        "Designed user-friendly interface for switching between single and multiple CCTV feeds",
        "Managed version control via GitHub and gained insights into web media technologies and collaborative development",
      ],
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="h-5 w-5 text-blue-600" />
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                        </div>

                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">{exp.position}</h4>

                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
