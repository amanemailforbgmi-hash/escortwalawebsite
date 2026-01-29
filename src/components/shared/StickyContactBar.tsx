import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface StickyContactBarProps {
    phoneNumber: string;
    whatsappNumber?: string;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({
    phoneNumber,
    whatsappNumber
}) => {
    const whatsapp = whatsappNumber || phoneNumber;
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in your escort services`;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/95 to-gold/95 backdrop-blur-sm shadow-2xl"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-0">
                    {/* Call Button */}
                    <a
                        href={`tel:+${formattedPhone}`}
                        className="flex items-center justify-center gap-3 py-4 px-6 text-white font-semibold text-lg transition-all hover:bg-white/10 active:scale-95 border-r border-white/20"
                    >
                        <Phone className="w-6 h-6 animate-pulse" />
                        <span className="hidden sm:inline">Call Now</span>
                        <span className="sm:hidden">Call</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 py-4 px-6 text-white font-semibold text-lg transition-all hover:bg-white/10 active:scale-95"
                    >
                        <MessageCircle className="w-6 h-6 animate-pulse" />
                        <span className="hidden sm:inline">WhatsApp</span>
                        <span className="sm:hidden">WhatsApp</span>
                    </a>
                </div>
            </div>

            {/* Floating indicators */}
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-gold via-white to-gold animate-pulse"></div>
        </motion.div>
    );
};
