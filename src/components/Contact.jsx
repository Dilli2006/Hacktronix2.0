import { motion } from "framer-motion";
import { MapPin, Phone, Mail, User } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const contactPeople = [
  {
    name: "Rahul Sharma",
    role: "Event Coordinator",
    phone: "+91 98765 43210",
    email: "rahul.sharma@hacktronix.in",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Priya Verma",
    role: "Technical Lead",
    phone: "+91 87654 32109",
    email: "priya.verma@hacktronix.in",
    gradient: "from-purple-500 to-pink-400",
  },
];

const contactInfo = [
  {
    label: "Address",
    value: "KIET Group of Institutions, Ghaziabad, UP",
    icon: MapPin,
    gradient: "from-red-500 to-orange-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 mt-4">
            Get in <span className="heading-gradient">Touch</span>
          </h2>
          <p className="muted max-w-xl mx-auto text-lg">
            Have questions? We&apos;d love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactPeople.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <GlassCard className="p-5 md:p-6 rounded-sm" interactive>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-sm bg-gradient-to-r flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:shadow-[0_0_16px_rgba(0,245,255,0.15)] transition-shadow duration-300"
                      style={{ background: `linear-gradient(135deg, ${person.gradient.replace("from-", "")})` }}
                    >
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base font-mono">{person.name}</p>
                      <p className="text-gray-400 text-sm">{person.role}</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a href={`tel:${person.phone}`} className="text-white font-mono text-sm hover:text-cyan-400 transition-colors">
                        {person.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a href={`mailto:${person.email}`} className="text-white font-mono text-sm hover:text-cyan-400 transition-colors truncate">
                        {person.email}
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (contactPeople.length + idx) * 0.1 }}
                className="group relative"
              >
                <GlassCard className="p-5 md:p-6 flex items-center gap-4 rounded-sm" interactive>
                  <div
                    className="w-12 h-12 rounded-sm bg-gradient-to-r flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:shadow-[0_0_16px_rgba(0,245,255,0.15)] transition-shadow duration-300"
                    style={{ background: `linear-gradient(135deg, ${info.gradient.replace("from-", "")})` }}
                  >
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="sw-label mb-0.5">{info.label}</p>
                    <p className="text-white font-medium text-base font-mono">{info.value}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <GlassCard className="overflow-hidden h-full min-h-[300px] rounded-sm" interactive>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d77.0!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAwJzAwLjAiTiA3N0KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
