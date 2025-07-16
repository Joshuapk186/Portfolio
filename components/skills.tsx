"use client"

import { motion } from "framer-motion"
import { Code, Database, Cpu, Globe, Shield, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 85 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "IoT & Hardware",
      icon: Cpu,
      skills: [
        { name: "Raspberry Pi", level: 95 },
        { name: "Arduino", level: 90 },
        { name: "Sensors & Actuators", level: 85 },
        { name: "RFID/NFC", level: 80 },
        { name: "Edge Computing", level: 85 },
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Responsive Design", level: 90 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Data & Analytics",
      icon: BarChart,
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Matplotlib", level: 85 },
        { name: "Machine Learning", level: 75 },
        { name: "TensorFlow", level: 70 },
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "AWS IoT", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "Docker", level: 70 },
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Security & Blockchain",
      icon: Shield,
      skills: [
        { name: "Cybersecurity", level: 80 },
        { name: "Blockchain", level: 75 },
        { name: "Hyperledger Fabric", level: 70 },
        { name: "Encryption", level: 75 },
        { name: "Network Security", level: 80 },
      ],
      color: "from-red-500 to-pink-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Certifications</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "RedHat System Administration",
              "Introduction to Cybersecurity - Cisco",
              "GPU Architectures - IIT Kharagpur",
              "WISE-PaaS Core Level I, II, III",
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{cert}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
