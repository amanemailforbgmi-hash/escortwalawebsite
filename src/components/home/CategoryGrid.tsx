import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Crown, Phone, User, Globe, Hotel, Clock,
    GraduationCap, Home, Camera, Plane, Heart,
    Users, AlertCircle, Theater, Luggage, PartyPopper,
    ArrowUp, Hand
} from 'lucide-react';

interface Category {
    name: string;
    slug: string;
    icon: string;
}

interface CategoryGridProps {
    categories: Category[];
    basePath?: string;
    title?: string;
}

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
    Crown, Phone, User, Globe, Hotel, Clock,
    GraduationCap, Home, Camera, Plane, Heart,
    Users, AlertCircle, Theater, Luggage, PartyPopper,
    ArrowUp, Hand
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({
    categories,
    basePath = "/categories",
    title = "Browse by Category"
}) => {
    return (
        <div className="w-full">
            {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
                    {title}
                </h2>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {categories.map((category, index) => {
                    const IconComponent = iconMap[category.icon] || User;

                    return (
                        <motion.div
                            key={category.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.02 }}
                        >
                            <Link
                                to={`${basePath}/${category.slug}`}
                                className="glass-card group relative flex flex-col items-center justify-center p-4 rounded-lg border border-white/10 hover:border-gold/50 transition-all hover:scale-105 active:scale-95 min-h-[100px]"
                            >
                                {/* Icon */}
                                <div className="mb-2 p-2 rounded-full bg-gradient-to-br from-gold/20 to-primary/20 group-hover:from-gold/30 group-hover:to-primary/30 transition-all">
                                    <IconComponent className="w-6 h-6 text-gold" />
                                </div>

                                {/* Category Name */}
                                <span className="text-center text-sm font-medium leading-tight group-hover:text-gold transition-colors">
                                    {category.name}
                                </span>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
