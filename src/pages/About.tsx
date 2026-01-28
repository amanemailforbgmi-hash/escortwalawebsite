import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Heart, Lock, Users, Award, Eye } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Verification & Trust",
    description:
      "Every profile on our platform undergoes rigorous verification. We personally vet each companion to ensure they meet our high standards of authenticity and professionalism.",
  },
  {
    icon: Lock,
    title: "Privacy & Discretion",
    description:
      "Your privacy is sacred to us. We employ industry-leading security measures and strict confidentiality protocols to protect your identity and interactions.",
  },
  {
    icon: Heart,
    title: "Respect & Consent",
    description:
      "We operate on the foundation of mutual respect and clear consent. All companions are adults who have chosen this profession freely and maintain full autonomy.",
  },
  {
    icon: Users,
    title: "Professional Standards",
    description:
      "Our companions are selected not just for their appearance, but for their intelligence, conversation skills, and ability to provide genuine companionship.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description:
      "From your first enquiry to your experience, we ensure every touchpoint reflects our commitment to exceptional service and attention to detail.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication, honest representations, and no hidden surprises. What you see is what you get, always.",
  },
];

const About = () => {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mt-4 mb-6"
            >
              Redefining{" "}
              <span className="text-gradient-gold">Companionship</span>
            </motion.h1>
            <div className="section-divider" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Élite Companions is a premium adult companion directory serving
              Mahipalpur and surrounding areas. We are the go-to resource for
              discerning individuals seeking professional, discreet, and
              carefully curated companionship where discretion and elegance
              always come first.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In a world where genuine connection is increasingly rare, we
                  believe in the value of meaningful, adult companionship.
                  Whether for a social event, business function, or simply an
                  evening of engaging conversation, our companions provide an
                  experience that transcends the ordinary while remaining
                  respectful and discreet.
                </p>
                <p>
                  Our directory is designed as a one-stop destination for your
                  adult entertainment needs in Mahipalpur, offering a wide range
                  of companionship services tailored to different tastes and
                  preferences. Many visitors first discover us while searching
                  online for phrases like &quot;sexy call girl in Mahipalpur&quot;
                  or &quot;elite escort service&quot;; we respond by offering a
                  refined, professional platform focused on verified, ethical
                  adult companionship.
                </p>
                <p>
                  We understand that our clients value privacy, safety, and the
                  quality of their experiences. Every companion is verified,
                  vetted, and confirmed to be 18+ under our strict no-minors
                  policy, and we work only with individuals who uphold high
                  standards of professionalism, integrity, and discretion.
                </p>
                <p>
                  Each profile in our directory is carefully reviewed to ensure
                  it reflects the sophistication, intelligence, and grace that
                  our clients expect. We don&apos;t just list profiles—we curate
                  introductions and experiences that are respectful, lawful, and
                  tailored to your needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-luxury p-8"
            >
              <h3 className="font-serif text-2xl mb-6 text-center">
                Our Commitment
              </h3>
              <ul className="space-y-4">
                {[
                  "100% verified and authentic profiles",
                  "Complete discretion and privacy protection",
                  "Professional, respectful service",
                  "Clear and transparent communication",
                  "Safe and consensual experiences",
                  "24/7 concierge support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm uppercase tracking-[0.3em]"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif mt-4 mb-6"
            >
              What We Stand For
            </motion.h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-border/50 rounded-lg hover:border-primary/50 transition-colors"
              >
                <value.icon size={32} className="text-primary mb-4" />
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Note */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-luxury p-8"
            >
              <h3 className="font-serif text-xl mb-4">Important Notice</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Élite Companions is strictly an introduction and companion directory 
                service. We facilitate connections between consenting adults for 
                social companionship purposes only. All companions listed are 
                independent adults (18+) who have chosen to be part of our platform. 
                We do not condone, facilitate, or promote any illegal activities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
