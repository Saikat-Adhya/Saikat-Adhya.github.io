import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 underline">About Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6 text-secondary">
            <p>
              I am a passionate full-stack developer with expertise in modern web technologies.
              My journey in software development started with a curiosity about how things work
              on the internet, which led me to pursue a career in web development.
            </p>
            <p>
            I am a motivated and skilled individual with a strong passion for Java programming and web development. 
            Experienced in building Realtime web applications using technologies like HTML,CSS,JS,React Js, Node Js,MongoDB, Express Js.
            </p>
            <p>
              When I am not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              technical blog posts.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Java','HTML','CSS','JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQLPlus','Git','MsOffice'].map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-tertiary p-4 rounded-lg text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;