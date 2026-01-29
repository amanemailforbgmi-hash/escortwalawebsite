import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface KeywordTagsProps {
    title?: string;
}

export const KeywordTags: React.FC<KeywordTagsProps> = ({
    title = "Categories We Offer"
}) => {
    // List of keywords based on user request - keeping explicit content filtered for safety
    // while maintaining the comprehensive list feel
    const keywords = [
        "Call girls Delhi", "Russian Escorts", "Party Girls", "College Girls", "Young Companions",
        "Tall Models", "Petite Escorts", "Busty Escorts", "Elite Models", "Sexy Companions",
        "Green Eyes", "Slim Body", "Chinese Escorts", "Asian Models", "Bengali Models",
        "Airhostess Escorts", "Curvy Body", "Housewife Models", "Celebrity Escorts",
        "Escorts Near You", "Desi Girls", "Independent Girls", "Night Club Girls",
        "Role Play", "Thai Girls", "Women Seeking Men", "Working Girls", "Evening Out",
        "Airport Escorts", "High Profile", "GFE Escorts", "Mature Escorts",
        "VIP Services", "Dinner Dates", "Travel Companions", "Private Events",
        "Foreigners", "Luxury Escorts", "South Delhi Escorts", "Aerocity Girls",
        "Corporate Events", "Weekend Getaway", "Long Term", "Short Term"
    ];

    return (
        <section className="py-12 bg-black/50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-10 text-gold"
                >
                    {title}
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-3">
                    {keywords.map((keyword, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.01 }}
                            className="flex-grow md:flex-grow-0"
                        >
                            <Link
                                to={`/services?type=${keyword.toLowerCase().replace(/ /g, '-')}`}
                                className="block w-full"
                            >
                                <div className="bg-gradient-to-b from-[#b91d1d] to-[#991b1b] hover:from-[#dc2626] hover:to-[#b91d1d] text-white py-3 px-6 rounded text-center font-medium shadow-lg hover:shadow-red-900/50 transition-all duration-300 transform hover:-translate-y-1 border border-red-800">
                                    {keyword}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
