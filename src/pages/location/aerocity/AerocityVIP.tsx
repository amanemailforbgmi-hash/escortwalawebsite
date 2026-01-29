import React from 'react';
import { LocationPageTemplate } from '@/components/location/LocationPageTemplate';
import { SEOMetaTags } from '@/components/seo/SEOMetaTags';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { StickyContactBar } from '@/components/shared/StickyContactBar';
import { aerocityServiceSchema, aerocityLocalBusinessSchema, aerocityFAQSchema } from '../../../data/schema/aerocitySchema';
import { organizationSchema } from '../../../data/schema/mahipalpurSchema';
import { Crown, Heart, Shield, Hotel } from 'lucide-react';

export default function AerocityVIP() {
    const sections = [
        {
            title: "VIP Escorts in Aerocity - Elite Companions for Luxury Hotels",
            icon: Crown,
            content: (
                <div className="space-y-4">
                    <p>Welcome to our exclusive selection of VIP escorts in Aerocity, designed for gentlemen who demand nothing but the absolute best. Our elite companions are perfectly suited for the luxury environment of Aerocity's 5-star hotels, including JW Marriott, Ritz Carlton, and Pullman.</p>
                    <p>When you book a VIP escort in Aerocity, you're not just booking a date; you're securing a premium experience with a companion who offers beauty, intelligence, and impeccable social skills. These ladies are comfortable in high-end settings and make the perfect partners for dinner dates, social events, or private intimacy.</p>
                </div>
            )
        },
        {
            title: "Why Choose VIP Escorts in Aerocity?",
            icon: Shield,
            content: (
                <div className="space-y-4">
                    <h3>Unmatched Beauty & Sophistication</h3>
                    <p>Our VIP category features the most stunning women in Delhi. From professional models to air hostesses and pageant winners, these escorts turn heads wherever they go. They are well-groomed, stylishly dressed, and carry themselves with elegance.</p>
                    <h3>Educated & Conversationalists</h3>
                    <p>A true VIP experience goes beyond physical beauty. Our Aerocity VIP escorts are educated, articulate, and capable of engaging in stimulating conversation on various topics. They are excellent listeners and charming conversationalists, making them ideal for business dinners or long evenings.</p>
                </div>
            )
        },
        {
            title: "VIP Services Offered in Aerocity",
            icon: Heart,
            content: (
                <div className="space-y-4">
                    <h3>Dinner & Social Companionship</h3>
                    <p>Need a beautiful partner for a business dinner or social gathering at The Hong Kong Club (Andaz) or K3 (JW Marriott)? Our VIP escorts are the perfect plus-one, blending seamlessly into any high-society environment.</p>
                    <h3>Overnight Girlfriend Experience</h3>
                    <p>Experience the warmth and intimacy of a real relationship with our overnight GFE packages. Wake up next to a stunning companion who treats you with genuine affection and care. Perfect for lonely business trips.</p>
                </div>
            )
        },
        {
            title: "Serving Top Aerocity Hotels",
            icon: Hotel,
            content: (
                <div className="space-y-4">
                    <p>Our VIP escorts frequently visit:</p>
                    <ul>
                        <li><strong>JW Marriott:</strong> The preferred choice for many of our VIP clients.</li>
                        <li><strong>The Ritz-Carlton:</strong> Ultra-luxury service for an ultra-luxury hotel.</li>
                        <li><strong>Pullman New Delhi:</strong> Popular for international business travelers.</li>
                        <li><strong>Andaz Delhi:</strong> For a modern, chic experience.</li>
                    </ul>
                </div>
            )
        }
    ];

    const relatedServices = [
        {
            title: "Model Escorts",
            description: "Professional models for elite companionship",
            url: "/aerocity/vip-escorts"
        },
        {
            title: "Air Hostess Escorts",
            description: "Elegant cabin crew companions",
            url: "/aerocity/call-girls"
        },
        {
            title: "Dinner Dates",
            description: "Sophisticated partners for social events",
            url: "/aerocity/vip-escorts"
        },
        {
            title: "Overnight GFE",
            description: "Full night girlfriend experience",
            url: "/aerocity/independent-escorts"
        }
    ];

    const faqs = aerocityFAQSchema.mainEntity.map(item => ({
        question: item.name,
        answer: item.acceptedAnswer.text
    }));

    return (
        <>
            <SEOMetaTags
                title="VIP Escorts in Aerocity - Elite Models for 5-Star Hotel Outcalls | Priya Sharma Escorts"
                description="Book VIP escorts in Aerocity for luxury companionship. High-profile models and elite companions for JW Marriott, Ritz Carlton & Andaz. 100% Verified. Discreet service."
                keywords="vip escorts aerocity, model escorts aerocity, elite escorts delhi airport, luxury companions aerocity, high profile escorts aerocity, 5 star hotel escorts"
                canonical="https://priyasharmaaescorts.com/aerocity/vip-escorts"
                city="Aerocity"
                state="Delhi"
                country="India"
            />

            <SchemaMarkup schemas={[
                aerocityServiceSchema,
                aerocityLocalBusinessSchema,
                organizationSchema,
                aerocityFAQSchema
            ]} />

            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Aerocity, Delhi" />
            <meta name="geo.position" content="28.5562;77.1200" />
            <meta name="ICBM" content="28.5562, 77.1200" />

            <LocationPageTemplate
                location="Aerocity"
                serviceType="VIP Escorts"
                metaTitle="VIP Escorts in Aerocity"
                h1Title="VIP Escorts in Aerocity"
                heroDescription="Experience the pinnacle of luxury with our VIP escorts in Aerocity. Stunning models, educated companions, and sophisticated ladies for discreet hotel outcalls."
                sections={sections}
                relatedServices={relatedServices}
                faqs={faqs}
                keywordTags={true}
            />
            <StickyContactBar phoneNumber="+91-8527420914" />
        </>
    );
}
