import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Clock, Star, Phone, MapPin, ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { KeywordTags } from "@/components/home/KeywordTags";

interface LocationPageProps {
    location: string;
    serviceType: string;
    metaTitle: string;
    h1Title: string;
    heroDescription: string;
    sections: {
        title: string;
        content: ReactNode;
        icon?: any;
    }[];
    relatedServices?: {
        title: string;
        url: string;
        description: string;
    }[];
    faqs?: {
        question: string;
        answer: string;
    }[];
    keywordTags?: boolean;
}

export const LocationPageTemplate = ({
    location,
    serviceType,
    metaTitle,
    h1Title,
    heroDescription,
    sections,
    relatedServices,
    faqs,
    keywordTags,
}: LocationPageProps) => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-8"
                        >
                            <span className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.3em] mb-4">
                                <MapPin size={16} />
                                {location}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
                                {h1Title}
                            </h1>
                            <div className="section-divider" />
                            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
                                {heroDescription}
                            </p>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-8 mt-12"
                        >
                            {[
                                { icon: Shield, label: "100% Verified" },
                                { icon: Clock, label: "24/7 Available" },
                                { icon: Star, label: "Premium Service" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-muted-foreground"
                                >
                                    <item.icon size={20} className="text-primary" />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            {sections.map((section, index) => (
                <section
                    key={index}
                    className={`py-16 ${index % 2 === 0 ? "bg-background" : "bg-card"}`}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    {section.icon && (
                                        <section.icon size={28} className="text-primary" />
                                    )}
                                    <h2 className="text-3xl md:text-4xl font-serif">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="prose prose-lg max-w-none text-muted-foreground">
                                    {section.content}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Keyword Tags Section */}
            {keywordTags && (
                <KeywordTags />
            )}

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
                <section className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-serif mb-10 text-center"
                            >
                                Frequently Asked Questions
                            </motion.h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="card-luxury p-6"
                                    >
                                        <h3 className="font-serif text-xl mb-3">{faq.question}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Related Services */}
            {relatedServices && relatedServices.length > 0 && (
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-serif mb-10 text-center"
                            >
                                Related Services in {location}
                            </motion.h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {relatedServices.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={service.url}
                                            className="card-luxury p-6 block group hover:border-primary/50 transition-colors"
                                        >
                                            <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4">
                                                {service.description}
                                            </p>
                                            <span className="text-primary text-sm inline-flex items-center gap-2">
                                                Learn More
                                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-card">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">
                            Ready to Book {serviceType}?
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Contact our discreet booking team 24/7 for personalized service
                            and immediate assistance in {location}.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/profiles" className="btn-luxury group">
                                Browse Companions
                                <ArrowRight
                                    size={18}
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                            <Link to="/contact" className="btn-outline-luxury">
                                <Phone size={18} className="mr-2" />
                                Contact Us Now
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};
