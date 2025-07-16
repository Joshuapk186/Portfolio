"use client"

import { motion } from "framer-motion"
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Resume = () => {
  const resumeStats = [
    { icon: GraduationCap, label: "Education", value: "B.Tech CSE", color: "from-blue-500 to-cyan-500" },
    { icon: Briefcase, label: "Experience", value: "3 Internships", color: "from-green-500 to-teal-500" },
    { icon: Award, label: "Certifications", value: "4+ Certified", color: "from-purple-500 to-pink-500" },
    { icon: FileText, label: "Projects", value: "10+ Completed", color: "from-orange-500 to-red-500" },
  ]

  const handleDownload = () => {
    // In a real application, this would download the actual resume PDF
    const link = document.createElement("a")
    link.href = "/placeholder.pdf" // Replace with actual resume PDF path
    link.download = "Joshua_PK_Kurian_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Joshua PK Kurian</h3>
                <p className="text-blue-100">Computer Science & IoT Graduate</p>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">joshua.pk@btech.christuniversity.in</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">+91 9845128683</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech - CHRIST University</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CGPA: 8.1/10</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "IoT", "React", "Machine Learning"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"
            />
          </motion.div>

          {/* Resume Stats & Download */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Dedicated Computer Science and IoT graduate with hands-on experience in developing innovative solutions
                across hardware and software domains. Proven track record in IoT development, data analysis, and web
                technologies through multiple internships and successful project implementations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {resumeStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                      >
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* Additional Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Recent Achievements</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Third place in ConnectXpo, Foobar-2024 for "Automated Irrigation System"</li>
                <li>• Second place in JAM competition at Blossoms among 80 participants</li>
                <li>• Third place in Ace Clutch esports competition at Foobar 2024</li>
                <li>• Master of Ceremonies for multiple IIIC events (2022-2024)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume
