"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Abhishek Kumar Singh</h3>
            <p className="text-gray-400 mt-2">Computer Science Engineering Student</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/abhisheksingh124"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://github.com/AbhishekSingh6265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="mailto:abhi6265kaushik@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a
              href="tel:+916265433095"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Phone"
            >
              <i className="fas fa-phone-alt text-xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Abhishek Kumar Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
