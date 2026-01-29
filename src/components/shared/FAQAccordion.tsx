import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
    title?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
    faqs,
    title = "Frequently Asked Questions"
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient">
                {title}
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card border border-white/10 rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-white/5"
                            aria-expanded={openIndex === index}
                        >
                            <span className="font-semibold text-lg pr-4">{faq.question}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                            >
                                <ChevronDown className="w-6 h-6 text-gold" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
