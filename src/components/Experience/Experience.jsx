import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  // {
  //   title: "Senior Developer",
  //   company: "Tech Corp",
  //   date: "2022 - Present",
  //   description: "Led development of multiple web applications using React and Node.js.",
  //   skills: ["React", "Node.js", "AWS"]
  // },
  {
    title: "Full Stack MERN-Developer",
    company: "Euphoria Genx Kolkata",
    date: "Feb 2025 - Aug 2025",
    description: "Worked on developing and maintaining web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Collaborated with cross-functional teams to deliver high-quality software solutions.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "HTML", "CSS" ,"Git"]
  },
  // {
  //   title: "Junior Developer",
  //   company: "StartUp Inc",
  //   date: "2019 - 2020",
  //   description: "Worked on frontend development using React and Vue.js.",
  //   skills: ["React", "Vue.js", "CSS"]
  // }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 sm:px-8 bg-tertiary">
      <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={exp.date}
            iconStyle={{ background: '#915eff', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <h4 className="text-lg text-[#915eff]">{exp.company}</h4>
            <p className="text-secondary">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;