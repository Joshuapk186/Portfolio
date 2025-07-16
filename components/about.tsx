"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Users, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "8.1/10" },
    { icon: Award, label: "Certifications", value: "4+" },
    { icon: Users, label: "Internships", value: "3" },
    { icon: Code, label: "Projects", value: "10+" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Joshua PK Kurian"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Computer Science & IoT Graduate</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Computer Science and IoT graduate from CHRIST (Deemed to be University), Bengaluru, with
              a strong foundation in both hardware and software technologies. My journey spans across IoT development,
              software engineering, and innovative problem-solving.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With hands-on experience from internships at leading companies like Advantech, Cognifyz Technologies, and
              Rapid Info Solutions, I've developed expertise in IoT solutions, data analysis, and web development. I'm
              passionate about creating technology that makes a real-world impact.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
