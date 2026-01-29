import React from 'react';
import { LocationPageTemplate } from '@/components/location/LocationPageTemplate';
import { SEOMetaTags } from '@/components/seo/SEOMetaTags';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { StickyContactBar } from '@/components/shared/StickyContactBar';
import { aerocityServiceSchema, aerocityLocalBusinessSchema, aerocityFAQSchema } from '../../../data/schema/aerocitySchema';
import { organizationSchema } from '../../../data/schema/mahipalpurSchema';
import { Crown, Heart, Star, Shield, MapPin, Hotel } from 'lucide-react';

export default function Aerocity() {
    const sections = [
        {
            title: "Escort in Aerocity - Premium Hotel Companions Near Delhi Airport",
            icon: Crown,
            content: (
                <div className="space-y-4">
                    <p>Welcome to Delhi's most exclusive escort service in Aerocity, the premium hospitality district adjacent to Indira Gandhi International Airport. Our elite escort service caters specifically to business travelers, tourists, and discerning gentlemen seeking high-class companionship in the heart of Delhi's luxury hotel zone.</p>
                    <p>When you search for "escort in Aerocity," you're looking for more than just companionship — you're seeking a premium experience that matches the sophistication of Aerocity's world-class hotels. Our carefully curated selection of VIP escorts, independent call girls, and professional companions ensures you receive the finest service that Aerocity has to offer.</p>
                </div>
            )
        },
        {
            title: "Why Choose Our Escort Service in Aerocity?",
            icon: Star,
            content: (
                <div className="space-y-4">
                    <p>Aerocity is India's first integrated hospitality district, home to 11 luxury and premium hotels including JW Marriott, Ritz Carlton, Pullman, Andaz, and Holiday Inn Express. Our escort service is specifically designed to complement this high-end environment with companions who understand the expectations of elite clientele.</p>
                    <h3>Unmatched Convenience for Hotel Guests</h3>
                    <p>Located within walking distance of all major Aerocity hotels, our escorts can reach your room within 20-30 minutes of booking. Whether you've just landed at Terminal 3 or you're staying in Aerocity for business, we provide seamless, discreet service that fits your schedule.</p>
                    <h3>100% Verified & Genuine Profiles</h3>
                    <p>Every escort in Aerocity featured on our platform has been personally verified. All photos are 100% genuine - what you see is exactly what you get. We maintain the highest standards because your satisfaction and trust are our priorities.</p>
                </div>
            )
        },
        {
            title: "Types of Escorts Available in Aerocity",
            icon: Heart,
            content: (
                <div className="space-y-4">
                    <h3>VIP Escorts in Aerocity</h3>
                    <p>Our VIP escort category features the most stunning and sophisticated companions in Delhi. These elite escorts are perfect for high-profile clients who demand nothing but the best. Educated, well-traveled, and impeccably groomed, our VIP escorts can accompany you to business dinners, social events, or provide intimate private companionship in your hotel suite.</p>
                    <h3>Independent Call Girls Aerocity</h3>
                    <p>For clients who prefer a more personal and authentic experience, our independent call girls in Aerocity offer genuine connection and chemistry. These independent companions manage their own schedules and provide a girlfriend experience (GFE) that feels natural and unrushed.</p>
                    <h3>Hotel Escorts Aerocity</h3>
                    <p>Our hotel escorts specialize in discreet outcall services to all Aerocity hotels. They're familiar with hotel protocols, know how to navigate luxury properties without drawing attention, and understand the importance of maintaining your privacy.</p>
                </div>
            )
        },
        {
            title: "Serving All Major Aerocity Hotels",
            icon: Hotel,
            content: (
                <div className="space-y-4">
                    <h3>5-Star Luxury Hotels</h3>
                    <p><strong>JW Marriott New Delhi Aerocity</strong> - Our most popular hotel for outcalls. The spacious rooms, excellent privacy, and professional staff make JW Marriott perfect for escort bookings.</p>
                    <p><strong>The Ritz-Carlton</strong> - For ultra-elite clients, Ritz Carlton bookings pair perfectly with our VIP escorts. The unmatched luxury of the property complements our highest-tier companions.</p>
                    <p><strong>Pullman New Delhi Aerocity</strong> - A favorite among French and European travelers. Our Russian and European escorts are particularly popular with Pullman guests.</p>
                    <p><strong>Andaz Delhi</strong> - The contemporary design and vibrant atmosphere of Andaz attracts younger business travelers who appreciate our independent and model escorts.</p>
                </div>
            )
        }
    ];

    const relatedServices = [
        {
            title: "VIP Escorts",
            description: "Elite companions for luxury hotel experiences",
            url: "/aerocity/vip-escorts"
        },
        {
            title: "Call Girls",
            description: "Professional call girls available 24/7",
            url: "/aerocity/call-girls"
        },
        {
            title: "Independent Escorts",
            description: "Genuine independent companions for authentic GFE",
            url: "/aerocity/independent-escorts"
        },
        {
            title: "Hotel Escorts",
            description: "Discreet outcall specialists for all Aerocity hotels",
            url: "/aerocity/hotel-escorts"
        },
        {
            title: "24/7 Service",
            description: "Round-the-clock availability for any arrival time",
            url: "/aerocity/24-7-escorts"
        }
    ];

    const faqs = aerocityFAQSchema.mainEntity.map(item => ({
        question: item.name,
        answer: item.acceptedAnswer.text
    }));

    return (
        <>
            <SEOMetaTags
                title="Escort in Aerocity - Premium Hotel Companions Near Delhi Airport | Priya Sharma Escorts"
                description="Looking for escort in Aerocity? VIP companions available 24/7 for all Aerocity hotels. JW Marriott, Ritz Carlton, Pullman outcalls. Starting ₹8,000. Verified profiles. Book now!"
                keywords="escort in aerocity, aerocity escorts, call girls aerocity, vip escorts aerocity, hotel escorts aerocity, independent escorts aerocity, 24/7 escorts aerocity, aerocity call girls"
                canonical="https://priyasharmaaescorts.com/aerocity"
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
                serviceType="Escort Service"
                metaTitle="Escort in Aerocity - Premium Hotel Companions Near Delhi Airport"
                h1Title="Escort in Aerocity"
                heroDescription="Looking for escort in Aerocity? We offer elite independent companions, VIP models, and professional call girls in Aerocity, Mahipalpur, and near IGI Airport."
                sections={sections}
                relatedServices={relatedServices}
                faqs={faqs}
                keywordTags={true}
            />
            <StickyContactBar phoneNumber="+91-8527420914" />
        </>
    );
}
