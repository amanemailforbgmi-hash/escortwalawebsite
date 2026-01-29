import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
    name: string;
    location: string;
    rating: number;
    text: string;
    image?: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
    title?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
    testimonials,
    title = "Client Reviews"
}) => {
    return (
        <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 rounded-xl border border-white/10 hover:border-gold/50 transition-all"
                    >
                        {/* Profile Section */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-primary flex items-center justify-center text-2xl font-bold">
                                {testimonial.image ? (
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                ) : (
                                    testimonial.name.charAt(0)
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                <p className="text-sm text-gray-400">{testimonial.location}</p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < testimonial.rating
                                            ? 'fill-gold text-gold'
                                            : 'text-gray-600'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-300 leading-relaxed italic">
                            "{testimonial.text}"
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
