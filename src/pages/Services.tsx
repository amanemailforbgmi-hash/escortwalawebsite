import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Utensils,
  Briefcase,
  Plane,
  Users,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Fine Dining Companionship",
    description:
      "Enjoy sophisticated evenings at the finest restaurants with an engaging, cultured companion who appreciates fine cuisine and stimulating conversation.",
    features: [
      "Elegant dining partner",
      "Refined conversation",
      "Perfect for special occasions",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate & Business Events",
    description:
      "Make a lasting impression at business functions with a professional, articulate companion who can navigate high-profile settings with grace.",
    features: [
      "Professional demeanor",
      "Business etiquette",
      "Networking support",
    ],
  },
  {
    icon: Plane,
    title: "Travel Companionship",
    description:
      "Transform your travels with an adventurous companion. From weekend getaways to extended trips, experience destinations with engaging company.",
    features: [
      "Travel coordination",
      "Cultural experiences",
      "Memorable adventures",
    ],
  },
  {
    icon: Users,
    title: "Social Event Attendance",
    description:
      "Never attend galas, weddings, or social gatherings alone. Our companions bring charm and sophistication to any social occasion.",
    features: [
      "Event-appropriate attire",
      "Social graces",
      "Engaging personality",
    ],
  },
  {
    icon: Heart,
    title: "Private Companionship",
    description:
      "Sometimes, all you need is meaningful company. Enjoy relaxed conversations, shared interests, and genuine connection in a private, respectful setting.",
    features: [
      "Personal connection",
      "Thoughtful conversation",
      "Complete discretion",
    ],
  },
  {
    icon: Sparkles,
    title: "VIP & Concierge Services",
    description:
      "For those seeking an elevated experience in Mahipalpur, our VIP services include personalized matching, priority booking, discreet itinerary planning, and coordination of transportation where available.",
    features: [
      "Priority booking",
      "Personalized matching",
      "Exclusive access",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-sm uppercase tracking-[0.3em]"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mt-4 mb-6"
            >
              Exceptional{" "}
              <span className="text-gradient-gold">Experiences</span>
            </motion.h1>
            <div className="section-divider" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Our comprehensive directory serves as your one-stop destination for
              all adult entertainment needs in Mahipalpur, offering a vast array
              of companionship services to suit every taste and preference. From
              elegant dinners to corporate functions, travel companionship to
              private engagements, our verified companions provide sophisticated
              experiences tailored to your requirements. Our dedicated booking
              team assists with introductions, scheduling, and discreet
              coordination—including transportation arrangements where
              available—ensuring every engagement feels seamless and exceeds your
              expectations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury p-8 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm uppercase tracking-[0.3em]"
            >
              Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif mt-4 mb-6"
            >
              How It Works
            </motion.h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Browse",
                description:
                  "Explore our curated selection of verified companions",
              },
              {
                step: "02",
                title: "Enquire",
                description:
                  "Send a discreet enquiry through our secure contact form",
              },
              {
                step: "03",
                title: "Connect",
                description:
                  "We'll arrange the introduction based on your preferences",
              },
              {
                step: "04",
                title: "Experience",
                description:
                  "Enjoy a memorable experience with your chosen companion",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-5xl font-serif text-gradient-gold">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl mt-4 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground mb-8">
              Browse our selection of exceptional companions or reach out for a
              personalized recommendation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/profiles" className="btn-luxury group">
                View Companions
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link to="/contact" className="btn-outline-luxury">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
