import React from 'react';
import { LocationPageTemplate } from '@/components/location/LocationPageTemplate';
import { SEOMetaTags } from '@/components/seo/SEOMetaTags';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { StickyContactBar } from '@/components/shared/StickyContactBar';
import { aerocityServiceSchema, aerocityLocalBusinessSchema, aerocityFAQSchema } from '../../../data/schema/aerocitySchema';
import { organizationSchema } from '../../../data/schema/mahipalpurSchema';
import { Phone, Users, Clock, Shield } from 'lucide-react';

export default function AerocityCallGirls() {
    const sections = [
        {
            title: "Call Girls in Aerocity - 24/7 Outcall Service Near Airport",
            icon: Phone,
            content: (
                <div className="space-y-4">
                    <p>Looking for a beautiful companion to spend your evening with? Our call girls in Aerocity offer the perfect blend of beauty, friendliness, and professionalism. Whether you're in Aerocity for a short layover or a long business trip, our call girls are available 24/7 to make your stay memorable.</p>
                    <p>We specialize in providing prompt, reliable outcall services to all hotels in the Aerocity hospitality district. Our companions are familiar with the area and can reach your location within 30 minutes of booking.</p>
                </div>
            )
        },
        {
            title: "Genuine & Verified Call Girls",
            icon: Shield,
            content: (
                <div className="space-y-4">
                    <h3>100% Real Profiles</h3>
                    <p>We understand the importance of trust. All our call girls in Aerocity have verified profiles with recent, genuine photographs. We are committed to transparency so you can book with confidence knowing exactly who will be arriving at your hotel door.</p>
                    <h3>Wide Range of Companions</h3>
                    <p>Our gallery features a diverse selection of call girls to suit every preference:
                        <ul>
                            <li><strong>College Girls:</strong> Young, energetic, and fun-loving companions.</li>
                            <li><strong>Professional Ladies:</strong> Mature, sophisticated, and perfect for conversation.</li>
                            <li><strong>Air Hostesses:</strong> Elegant cabin crew members for premium companionship.</li>
                            <li><strong>Models:</strong> Stunning beauties for those who appreciate glamour.</li>
                        </ul>
                    </p>
                </div>
            )
        },
        {
            title: "Serving All Aerocity Hotels",
            icon: Clock,
            content: (
                <div className="space-y-4">
                    <p>We provide outcall services to every hotel in the Aerocity area, including:</p>
                    <ul>
                        <li>Holiday Inn Express (Asset Area 12)</li>
                        <li>Ibis New Delhi Aerocity</li>
                        <li>Pride Plaza Hotel</li>
                        <li>Lemon Tree Premier</li>
                        <li>Red Fox Hotel</li>
                    </ul>
                </div>
            )
        }
    ];

    const relatedServices = [
        {
            title: "College Call Girls",
            description: "Young and energetic companions",
            url: "/aerocity/call-girls"
        },
        {
            title: "Air Hostess",
            description: "Cabin crew companions",
            url: "/aerocity/vip-escorts"
        },
        {
            title: "Independent Girls",
            description: "Direct service with no agency hassle",
            url: "/aerocity/independent-escorts"
        },
        {
            title: "Late Night Service",
            description: "Available for post-midnight bookings",
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
                title="Call Girls in Aerocity - Genuine & Verified Profiles Near Airport | Priya Sharma Escorts"
                description="Best call girls in Aerocity for hotel outcalls. Genuine photos, fast arrival, and affordable rates. Available 24/7 for Holiday Inn, Ibis, Pride Plaza & more."
                keywords="call girls aerocity, aerocity call girls, cheap escorts aerocity, genuine call girls delhi airport, college girls aerocity, independent call girls"
                canonical="https://priyasharmaaescorts.com/aerocity/call-girls"
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
                serviceType="Call Girl Service"
                metaTitle="Call Girls in Aerocity"
                h1Title="Call Girls in Aerocity"
                heroDescription="Book professional call girls in Aerocity for discreet hotel outcalls. Young, beautiful, and friendly companions available for all hotels near IGI Airport."
                sections={sections}
                relatedServices={relatedServices}
                faqs={faqs}
                keywordTags={true}
            />
            <StickyContactBar phoneNumber="+91-8527420914" />
        </>
    );
}
