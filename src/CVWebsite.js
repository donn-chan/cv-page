import React from 'react';
import { Phone, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const CVWebsite = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-gray-900">
      {/* Header */}
      <header className="bg-teal-700 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Donn Lester Regalado</h1>
          <h2 className="text-xl md:text-2xl font-light mb-4">Full Stack Web Developer</h2>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a href="tel:+66620169745" className="flex items-center gap-2 hover:text-orange-200 transition-colors">
              <Phone size={18} />
              <span>+6662-016-9745</span>
            </a>
            <a href="mailto:donn.regalado2@gmail.com" className="flex items-center gap-2 hover:text-orange-200 transition-colors">
              <Mail size={18} />
              <span>donn.regalado2@gmail.com</span>
            </a>
            <a href="https://github.com/donn-chan" className="flex items-center gap-2 hover:text-orange-200 transition-colors">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/donn-lester-regalado/" className="flex items-center gap-2 hover:text-orange-200 transition-colors">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <p className="mt-6 max-w-2xl">
            I'm a full stack web developer passionate about building responsive, high-performance web applications that put users first. My expertise spans both frontend and backend technologies.
          </p>
          <p className="mt-2 font-semibold">
            My motto: Build with purpose, optimize relentlessly, and help others grow.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 md:px-8 py-8">
        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-slate-200">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillBox title="Frontend" skills={["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Bootstrap", "jQuery"]} />
            <SkillBox title="Backend" skills={["PHP", "Node.js"]} />
            <SkillBox title="UI/UX" skills={["Figma", "Responsive Design", "Cross-browser Testing"]} />
            <SkillBox title="Dev Tools" skills={["Git", "Webpack", "Docker", "CI/CD Pipelines"]} />
            <SkillBox title="Cloud & Server" skills={["GCP", "Apache"]} />
            <SkillBox title="Performance" skills={["Web Optimization", "Bundle Analysis", "Code Splitting"]} />
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-slate-200">Professional Experience</h2>
          
          <ExperienceItem 
            company="Neighbors and Friends" 
            position="Full Stack Web Developer" 
            period="Jul 2022 – Present"
            achievements={[
              "Developed responsive web interfaces with React and TypeScript, ensuring WCAG compliance",
              "Reduced page load times by 40% through bundle optimization and code splitting",
              "Built and maintained a reusable component library, boosting development efficiency by 30%",
              "Established automated testing and CI/CD pipelines using Docker"
            ]}
          />
          
          <ExperienceItem 
            company="House of Cards Ltd." 
            position="Web Developer" 
            period="Jul 2018 – Jun 2022"
            achievements={[
              "Built e-commerce interfaces using React and Bootstrap for frontend and backend systems",
              "Improved Core Web Vitals scores by 25% via lazy loading and caching strategies",
              "Developed and integrated SDKs with a focus on seamless implementation",
              "Implemented accessibility standards and SEO best practices"
            ]}
          />
          
          <ExperienceItem 
            company="Web Courses Bangkok" 
            position="Junior Web Developer" 
            period="Sep 2017 – Mar 2018"
            achievements={[
              "Developed responsive UI components using JavaScript, PHP, and jQuery",
              "Improved page load times by 20% through frontend optimizations",
              "Worked with design teams to enhance UI/UX"
            ]}
            isLast={true}
          />
        </section>
        
        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-slate-200">Education</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">New Era University</h3>
            <p className="text-gray-600">Bachelor of Science in Computer Science (2009–2013)</p>
            <p className="text-gray-600 italic">Focus: Software Development and Web Technologies</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Web Courses Bangkok</h3>
            <p className="text-gray-600">Web Professional Course (2016)</p>
            <p className="text-gray-600 italic">Specialization: Frontend Development and Modern JavaScript</p>
          </div>
        </section>
        
        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Testimonials</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="text-gray-600 italic mb-4">
                "Donn is a reliable and driven developer who consistently delivers high-quality, production-ready code. His attention to detail and commitment to performance optimization made a measurable impact on our products."
              </p>
            </blockquote>
            
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="text-gray-600 italic mb-4">
                "I've worked with Donn on several demanding projects. He's an excellent front-end developer with the ability to translate designs into pixel-perfect, accessible interfaces."
              </p>
            </blockquote>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h3 className="text-xl font-bold mb-4">Let's Build Something Great</h3>
          <p className="mb-4">
            If you're looking for a developer who combines technical expertise with a user-centric mindset 
            and a drive for continuous improvement, let's connect.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:donn.regalado2@gmail.com" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors flex items-center gap-2">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            © {new Date().getFullYear()} Donn Lester Regalado. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Components
const SkillBox = ({ title, skills }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg text-teal-700 mb-2">{title}</h3>
    <ul>
      {skills.map((skill, index) => (
        <li key={index} className="flex items-start mb-1">
          <ArrowRight size={16} className="text-orange-400 mt-1 mr-2 flex-shrink-0" />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceItem = ({ company, position, period, achievements, isLast = false }) => (
  <div className={`${!isLast ? 'mb-6 pb-6 border-b border-slate-100' : ''}`}>
    <h3 className="text-lg font-semibold text-gray-900">{company}</h3>
    <div className="flex flex-wrap justify-between mb-2">
      <p className="text-teal-600">{position}</p>
      <p className="text-gray-500">{period}</p>
    </div>
    <ul className="pl-5">
      {achievements.map((achievement, index) => (
        <li key={index} className="list-disc text-gray-700 mb-1">{achievement}</li>
      ))}
    </ul>
  </div>
);

export default CVWebsite;