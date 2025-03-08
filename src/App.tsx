import React from 'react';
import { Github, Mail, MapPin, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter']">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-black text-white p-8">
        <div className="max-w-4xl w-full">
          <h1 className="text-7xl font-black tracking-tighter mb-6">MACHA PRAVEEN</h1>
          <h2 className="text-2xl font-light tracking-widest mb-8">AI/ML ENGINEER & FULL STACK DEVELOPER</h2>
          <div className="flex gap-6 text-sm">
            <a href="mailto:praveenmacha777@gmail.com" className="flex items-center gap-2 hover:text-gray-300">
              <Mail size={16} /> praveenmacha777@gmail.com
            </a>
            <a href="tel:9700652777" className="flex items-center gap-2 hover:text-gray-300">
              <Phone size={16} /> 9700652777
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Kakinada
            </span>
          </div>
        </div>
      </header>

      {/* Career Objective */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 tracking-tight">Career Objective</h2>
          <p className="text-lg leading-relaxed">
            Passionate AI/ML Engineer, Data Scientist, Prompt Engineer, and Full Stack Developer with hands-on experience 
            in building intelligent and scalable applications using Next.js, Progressive Web Applications, and Python. 
            Skilled in solving real-world problems through innovative AI, DS, and ML solutions.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">Work Experience</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-2">AWS Intern</h3>
              <p className="text-gray-400 mb-4">Internship Studio, Virtual | Jul 2024 - Aug 2024</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Gained hands-on experience with AWS cloud services</li>
                <li>Built and deployed cloud computing solutions</li>
                <li>Implemented security best practices in AWS infrastructure</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Cloud Computing Intern</h3>
              <p className="text-gray-400 mb-4">Studio, Virtual | Jul 2024 - Aug 2024</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Worked with AWS cloud services, handling deployment, security, and optimization</li>
                <li>Developed and tested serverless applications using AWS Lambda and DynamoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-black p-6">
              <h3 className="text-xl font-bold mb-3">Aluminum Forecast Genius</h3>
              <p className="text-gray-600 mb-4">ML model predicting aluminum procurement costs</p>
              <a href="https://github.com/machapraveen/aluminum-forecast-genius" 
                 className="inline-flex items-center gap-2 text-sm hover:text-gray-600">
                <Github size={16} /> View on GitHub
              </a>
            </div>

            <div className="border border-black p-6">
              <h3 className="text-xl font-bold mb-3">Plant Disease Recognition</h3>
              <p className="text-gray-600 mb-4">AI model for detecting plant diseases</p>
              <a href="https://github.com/machapraveen/PLANT-DISEASE-RECOGNITION-SYSTEM" 
                 className="inline-flex items-center gap-2 text-sm hover:text-gray-600">
                <Github size={16} /> View on GitHub
              </a>
            </div>

            <div className="border border-black p-6">
              <h3 className="text-xl font-bold mb-3">Dev-Trackr</h3>
              <p className="text-gray-600 mb-4">Full-fledged LMS for course creation and management</p>
              <a href="https://github.com/machapraveen/Dev-Trackr" 
                 className="inline-flex items-center gap-2 text-sm hover:text-gray-600">
                <Github size={16} /> View on GitHub
              </a>
            </div>

            <div className="border border-black p-6">
              <h3 className="text-xl font-bold mb-3">OCR Tool</h3>
              <p className="text-gray-600 mb-4">Converts printed/handwritten text into machine-readable formats</p>
              <a href="https://github.com/machapraveen/OCR-Optical-Character-Recognition-tool" 
                 className="inline-flex items-center gap-2 text-sm hover:text-gray-600">
                <Github size={16} /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'HTML', 'CSS'].map(skill => (
                  <span key={skill} className="px-3 py-1 border border-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'ReactJS', 'Node.js', 'Express.js', 'Django'].map(skill => (
                  <span key={skill} className="px-3 py-1 border border-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <a href="https://github.com/machapraveen" 
             className="inline-flex items-center gap-2 text-lg hover:text-gray-600">
            <Github size={24} /> View All Projects on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;