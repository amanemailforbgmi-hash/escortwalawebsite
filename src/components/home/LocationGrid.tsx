import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Location {
    name: string;
    slug: string;
    region?: string;
}

interface LocationGridProps {
    locations: Location[];
    title?: string;
}

export const LocationGrid: React.FC<LocationGridProps> = ({
    locations,
    title = "Service Available In These Areas"
}) => {
    return (
        <div className="w-full">
            {title && (
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient">
                    {title}
                </h3>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                {locations.map((location, index) => (
                    <motion.div
                        key={location.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.01 }}
                    >
                        <Link
                            to={`/${location.slug}`}
                            className="glass-card group flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 hover:border-gold/50 transition-all hover:scale-105 active:scale-95"
                        >
                            <MapPin className="w-4 h-4 text-gold group-hover:animate-bounce" />
                            <span className="text-sm font-medium group-hover:text-gold transition-colors truncate">
                                {location.name}
                            </span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
