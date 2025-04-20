import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            I'm a Computer Science Engineering student with a passion for problem-solving and innovation.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-50 rounded-xl shadow-md p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I am an aspiring computer engineer currently pursuing my B.Tech degree at Lovely Professional University. 
                My academic journey is focused on developing practical skills in machine learning, data analysis, and web development.
              </p>
              <p className="text-gray-600 mb-4">
                I'm driven by curiosity and a commitment to continuous learning. My goal is to apply my technical knowledge to solve real-world problems
                through innovative technological solutions.
              </p>
              <p className="text-gray-600">
                When I'm not coding, I enjoy participating in hackathons, cultural events, and expanding my knowledge through online courses and certifications.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-primary font-medium mb-2">Name</h4>
                  <p className="text-gray-600">Abhishek Kumar Singh</p>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">Email</h4>
                  <p className="text-gray-600">abhi6265kaushik@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">Phone</h4>
                  <p className="text-gray-600">+91-6265433095</p>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">Location</h4>
                  <p className="text-gray-600">Punjab, India</p>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">University</h4>
                  <p className="text-gray-600">Lovely Professional University</p>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">Degree</h4>
                  <p className="text-gray-600">B.Tech in Computer Science</p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://linkedin.com/in/abhisheksingh124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  <i className="fab fa-linkedin mr-2"></i> LinkedIn
                </a>
                <a
                  href="https://github.com/AbhishekSingh6265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  <i className="fab fa-github mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
