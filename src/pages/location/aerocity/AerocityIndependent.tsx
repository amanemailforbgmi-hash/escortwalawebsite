import React from 'react';
import { LocationPageTemplate } from '@/components/location/LocationPageTemplate';
import { SEOMetaTags } from '@/components/seo/SEOMetaTags';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { StickyContactBar } from '@/components/shared/StickyContactBar';
import { aerocityServiceSchema, aerocityLocalBusinessSchema, aerocityFAQSchema } from '../../../data/schema/aerocitySchema';
import { organizationSchema } from '../../../data/schema/mahipalpurSchema';
import { User, Heart, Lock, Star } from 'lucide-react';

export default function AerocityIndependent() {
    const sections = [
        {
            title: "Independent Escorts in Aerocity - Real Connections",
            icon: User,
            content: (
                <div className="space-y-4">
                    <p>For those who prefer a more authentic and personal connection, our selection of independent escorts in Aerocity is the perfect choice. These self-managed companions offer a unique experience that goes beyond standard agency services, focusing on genuine chemistry, relaxed vibes, and true companionship.</p>
                    <p>Independent escorts in Aerocity manage their own schedules and bookings, allowing for greater flexibility and a more direct line of communication. Whether you're staying at the JW Marriott, Pullman, or any other hotel in the Aerocity district, an independent companion can provide the personalized service you crave.</p>
                </div>
            )
        },
        {
            title: "The Independent Advantage",
            icon: Heart,
            content: (
                <div className="space-y-4">
                    <h3>Authentic "Girlfriend Experience" (GFE)</h3>
                    <p>Independent escorts excel at providing the coveted Girlfriend Experience. Without the constraints of rigid agency rules, they can offer more natural affection, unhurried intimacy, and a feeling of spending time with a real lover rather than a service provider.</p>
                    <h3>Direct Communication</h3>
                    <p>When you book an independent escort, you minimize the middleman. This often leads to better communication regarding your preferences, desires, and specific needs, ensuring the actual meeting aligns perfectly with your expectations.</p>
                </div>
            )
        },
        {
            title: "Meet Our Independent Companions",
            icon: Star,
            content: (
                <div className="space-y-4">
                    <h3>Students & Part-Time Models</h3>
                    <p>Many of our independent profiles feature college students and part-time models who escort discreetly to support their lifestyles. These ladies bring unmatched freshness, intelligence, and a zest for life to every encounter.</p>
                    <h3>Working Professionals</h3>
                    <p>We also feature working women who escort part-time. These intelligent, sophisticated ladies make excellent dinner dates and conversationalists, perfect for business travelers who want mental stimulation along with physical gratification.</p>
                </div>
            )
        }
    ];

    const relatedServices = [
        {
            title: "GFE Escorts",
            description: "Genuine girlfriend experience",
            url: "/aerocity/independent-escorts"
        },
        {
            title: "Dinner Dates",
            description: "Companions for dining out",
            url: "/aerocity/vip-escorts"
        },
        {
            title: "Overnight Stay",
            description: "Relaxed long-duration bookings",
            url: "/aerocity/24-7-escorts"
        },
        {
            title: "Private Companions",
            description: "Discreet and personal service",
            url: "/aerocity/call-girls"
        }
    ];

    const faqs = aerocityFAQSchema.mainEntity.map(item => ({
        question: item.name,
        answer: item.acceptedAnswer.text
    }));

    return (
        <>
            <SEOMetaTags
                title="Independent Escorts in Aerocity - Genuine GFE Companions | Priya Sharma Escorts"
                description="Direct bookings with independent escorts in Aerocity. Enjoy authentic GFE, flexible service, and genuine companionship. Verified profiles of students, models & housewives."
                keywords="independent escorts aerocity, independent call girls aerocity, gfe escorts delhi, housewife escort aerocity, genuine independent escorts"
                canonical="https://priyasharmaaescorts.com/aerocity/independent-escorts"
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
                serviceType="Independent Escorts"
                metaTitle="Independent Escorts in Aerocity"
                h1Title="Independent Escorts in Aerocity"
                heroDescription="Connect directly with independent escorts in Aerocity. No agency hassle, genuine profiles, and personalized girlfriend experience for discerning gentlemen."
                sections={sections}
                relatedServices={relatedServices}
                faqs={faqs}
                keywordTags={true}
            />
            <StickyContactBar phoneNumber="+91-8527420914" />
        </>
    );
}
