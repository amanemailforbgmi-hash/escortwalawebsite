import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "About Our Services",
    questions: [
      {
        q: "What services do you offer?",
        a: "Élite Companions is a premium directory service connecting discerning individuals with verified, professional companions for social occasions. Our companions provide companionship for fine dining, corporate events, travel, social gatherings, and private engagements. All services are legal and based on mutual consent between adults.",
      },
      {
        q: "How do you verify your companions?",
        a: "Every companion in our directory undergoes a comprehensive verification process. This includes identity verification, age confirmation (all companions are 18+), professional references, and a personal interview. We maintain high standards to ensure authenticity and professionalism.",
      },
      {
        q: "Which cities do you operate in?",
        a: "We currently feature companions in Mumbai, Delhi, Bangalore, and Hyderabad. We're continuously expanding to other major cities across India. If your city isn't listed, please contact us as we may be able to assist with special arrangements.",
      },
    ],
  },
  {
    category: "Booking Process",
    questions: [
      {
        q: "How do I book a companion?",
        a: "The booking process is simple and discreet. Browse our profiles, select a companion that interests you, and submit an enquiry through our contact form or email. Our concierge team will respond within 24 hours to discuss your requirements and arrange the introduction.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 48-72 hours in advance for regular engagements. For special events, travel companionship, or VIP services, we suggest booking 1-2 weeks ahead to ensure availability of your preferred companion.",
      },
      {
        q: "Can I request a specific companion?",
        a: "Absolutely. You can specify your preferred companion when submitting an enquiry. We'll check their availability and confirm the booking. If they're unavailable, our concierge can suggest similar companions who meet your preferences.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Payment details are discussed directly with our concierge team during the booking process. We accept various secure payment methods and all financial transactions are handled with complete discretion.",
      },
    ],
  },
  {
    category: "Privacy & Safety",
    questions: [
      {
        q: "How do you ensure privacy?",
        a: "Privacy is our top priority. All communications are encrypted, and we never share client information with third parties. Our companions are bound by strict confidentiality agreements. We use secure systems and discreet contact methods to protect your identity.",
      },
      {
        q: "Is my personal information safe?",
        a: "Absolutely. We employ industry-standard security measures to protect your data. Personal information is stored securely, never sold or shared, and used only for the purpose of facilitating bookings. You can request deletion of your data at any time.",
      },
      {
        q: "What safety measures are in place?",
        a: "Safety is paramount for both clients and companions. All companions are verified adults who have chosen this profession voluntarily. We encourage clear communication of boundaries and expectations before any engagement. Our concierge team is available 24/7 for support.",
      },
    ],
  },
  {
    category: "Policies",
    questions: [
      {
        q: "What is your cancellation policy?",
        a: "We understand plans can change. Cancellations made 24+ hours before the scheduled meeting are fully refundable. Cancellations within 24 hours may be subject to a partial charge. Please contact our concierge team as early as possible if you need to reschedule.",
      },
      {
        q: "Is there an age requirement?",
        a: "Yes. We operate under a strict no-minors policy. All clients must be 18 years of age or older, and age verification may be requested during the booking process. Likewise, every companion in our directory is a verified adult (18+) who has freely consented to be listed on our platform.",
      },
      {
        q: "What behavior is expected during engagements?",
        a: "We expect mutual respect, professionalism, and adherence to agreed-upon boundaries. Companions reserve the right to end any engagement where they feel uncomfortable or disrespected. Any form of harassment or illegal activity is strictly prohibited and will result in immediate termination of services.",
      },
    ],
  },
];

const FAQ = () => {
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
              Support
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mt-4 mb-6"
            >
              Frequently Asked{" "}
              <span className="text-gradient-gold">Questions</span>
            </motion.h1>
            <div className="section-divider" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Everything you need to know about our services, booking process, 
              and policies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-serif mb-6 text-primary">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50"
                    >
                      <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-5">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-serif mb-6">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our concierge team is available to answer any additional questions 
              and assist with your booking needs.
            </p>
            <Link to="/contact" className="btn-luxury">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
