"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, Calendar, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const categories = ["All", "IoT", "Web Development", "Machine Learning", "Python"]

  const projects = [
    {
      title: "Secure Cardiac Monitoring",
      category: "IoT",
      date: "October 2024",
      description: "Smart cardiac monitoring system with blockchain security",
      fullDescription:
        "Developed a comprehensive smart cardiac monitoring system leveraging AD8232 (ECG) and MAX30102 (Heart Rate and SpO2) sensors, with a Raspberry Pi 4B handling edge processing for low-latency data analysis. Implemented Hyperledger Fabric blockchain to ensure secure data storage, integrity, and authentication, combined with Attribute-Based Encryption to mitigate unauthorized access and tampering risks.",
      technologies: ["Raspberry Pi", "Blockchain", "IoT", "Python", "AWS IoT", "Hyperledger Fabric"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      highlights: [
        "Real-time cardiac monitoring with multiple sensors",
        "Blockchain-based secure data storage",
        "Edge processing for low-latency analysis",
        "AWS IoT Greengrass integration",
      ],
    },
    {
      title: "Smart Dustbin",
      category: "IoT",
      date: "May 2024",
      description: "Automated waste segregation system using AI",
      fullDescription:
        "Developed an automated waste segregation system using a Raspberry Pi 4B and TensorFlow Lite for on-device classification into four categories: Paper/Cardboard, Glass, Plastic, and Metal. Achieved 91% classification accuracy across 15 trials using a 720p HD webcam for real-time waste detection.",
      technologies: ["TensorFlow Lite", "Raspberry Pi", "Computer Vision", "Python", "OpenCV"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      highlights: [
        "91% classification accuracy",
        "Real-time waste detection",
        "Automated sorting mechanism",
        "Eco-friendly waste disposal",
      ],
    },
    {
      title: "SmartLib",
      category: "IoT",
      date: "October 2023",
      description: "RFID-based library management system",
      fullDescription:
        "Developed an efficient library management system using an MFRC522 RFID module (13.56 MHz) for passive card scanning, integrated with an Arduino Uno R3 connected to a laptop via SPI for seamless data transfer, and a device camera for barcode recognition.",
      technologies: ["Arduino", "RFID", "Python", "Tkinter", "OpenCV", "Excel"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      highlights: [
        "RFID-based book tracking",
        "Barcode recognition system",
        "Automated fine calculations",
        "User-friendly interface",
      ],
    },
    {
      title: "Intrusion Detection System",
      category: "Machine Learning",
      date: "April 2025",
      description: "ML-based network security system",
      fullDescription:
        "Implemented an Intrusion Detection System (IDS) using machine learning models including RandomForest, XGBoost, and MLP on the UNSW-NB15 dataset, achieving high accuracy in detecting network attacks. Simulated real-world attacks and deployed the trained IDS model on an industrial edge device.",
      technologies: ["Python", "Machine Learning", "XGBoost", "RandomForest", "Cybersecurity"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      highlights: [
        "Multiple ML model implementation",
        "High accuracy attack detection",
        "Real-world attack simulation",
        "Industrial edge deployment",
      ],
    },
    {
      title: "CCTV Monitoring System",
      category: "Web Development",
      date: "2023",
      description: "Real-time CCTV feed monitoring application",
      fullDescription:
        "Developed a web-based application for monitoring CCTV feeds in real-time using HTTP Live Streaming (HLS) protocols, JSON data structures, and Python server hosting. Designed a user-friendly interface for switching between single and multiple CCTV feeds.",
      technologies: ["Python", "HLS", "Web Development", "JSON", "Real-time Streaming"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      highlights: [
        "Real-time video streaming",
        "Multiple feed management",
        "User-friendly interface",
        "HLS protocol implementation",
      ],
    },
    {
      title: "Restaurant Data Analysis",
      category: "Python",
      date: "2024",
      description: "Comprehensive restaurant dataset analysis",
      fullDescription:
        "Analyzed a comprehensive restaurant dataset using Python, matplotlib library and Power BI. Identified patterns and distributions and performed geographic analysis using advanced data visualization tools.",
      technologies: ["Python", "Matplotlib", "Power BI", "Data Analysis", "Visualization"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      highlights: ["Pattern identification", "Geographic analysis", "Data visualization", "Business insights"],
    },
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="cursor-pointer"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                        View Details
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{project.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 cursor-pointer bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 cursor-pointer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 cursor-pointer"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-500">{selectedProject.date}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedProject.title}</h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight: string, index: number) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 cursor-pointer">
                      <Github className="h-5 w-5 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline" className="flex-1 cursor-pointer bg-transparent">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
