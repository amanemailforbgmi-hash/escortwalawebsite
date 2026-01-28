import { motion } from "framer-motion";
import { Shield, Lock, UserCheck, Clock, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Verified",
    description:
      "Every companion undergoes a thorough verification process to ensure authenticity and professionalism.",
  },
  {
    icon: Lock,
    title: "Complete Discretion",
    description:
      "Your privacy is paramount. All interactions are handled with the utmost confidentiality.",
  },
  {
    icon: UserCheck,
    title: "Curated Selection",
    description:
      "We maintain high standards, featuring only the most refined and sophisticated companions.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our concierge team is available around the clock to assist with bookings and inquiries.",
  },
  {
    icon: Heart,
    title: "Genuine Connections",
    description:
      "Experience meaningful companionship with individuals who value authentic interactions.",
  },
  {
    icon: Award,
    title: "Premium Experience",
    description:
      "From first contact to final farewell, expect nothing less than exceptional service.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm uppercase tracking-[0.3em]"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4 mb-6"
          >
            The Élite Difference
          </motion.h2>
          <div className="section-divider" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-luxury p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
