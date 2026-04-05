import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Code, Users } from "lucide-react";
import GlassCard from "./ui/GlassCard";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <GlassCard className="p-6 md:p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
              About <span className="heading-gradient">HACKTRONIX</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-4xl">
              HACKTRONIX 2.0 is a 24-hour hackathon bringing together the brightest minds in technology
              to solve real-world problems through innovation and collaboration. Join us for an
              unforgettable experience of creativity, coding, and competition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Date</p>
                  <p className="text-white font-medium">Coming Soon</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Duration</p>
                  <p className="text-white font-medium">24 Hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium">TBA</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-6 flex flex-col items-start h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Innovative Challenges</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tackle real-world problems with cutting-edge technology and creative solutions.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="p-6 flex flex-col items-start h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Networking Opportunities</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with industry leaders, mentors, and fellow innovators.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
