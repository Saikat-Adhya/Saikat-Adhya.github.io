import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and interactive web applications using modern frameworks.',
    icon: FaCode,
  },
  {
    title: 'Backend Development',
    description: 'Building scalable server-side applications and APIs.',
    icon: FaServer,
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database structures.',
    icon: FaDatabase,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;