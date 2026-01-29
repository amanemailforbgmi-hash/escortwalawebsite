import React from 'react';
import { LocationPageTemplate } from '@/components/location/LocationPageTemplate';
import { SEOMetaTags } from '@/components/seo/SEOMetaTags';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { StickyContactBar } from '@/components/shared/StickyContactBar';
import { aerocityServiceSchema, aerocityLocalBusinessSchema, aerocityFAQSchema } from '../../../data/schema/aerocitySchema';
import { organizationSchema } from '../../../data/schema/mahipalpurSchema';
import { Hotel, Clock, Shield, Star } from 'lucide-react';

export default function AerocityHotel() {
    const sections = [
        {
            title: "Hotel Escorts in Aerocity - Professional Outcall Specialists",
            icon: Hotel,
            content: (
                <div className="space-y-4">
                    <p>Staying at a hotel in Aerocity? Our dedicated hotel escort service is designed specifically for you. We specialize in providing seamless, discreet, and professional outcall services to guests at all hotels within the Aerocity hospitality district. Whether you're at a 5-star luxury property or a budget transit hotel, we have the perfect companion for your stay.</p>
                    <p>Navigating hotel policies and ensuring privacy can be a concern for many travelers. Our hotel escorts in Aerocity are experienced professionals who understand hotel protocols. They arrive well-dressed, confident, and blend in perfectly as regular guests or visitors, ensuring no eyebrows are raised.</p>
                </div>
            )
        },
        {
            title: "Our Hotel Coverage in Aerocity",
            icon: Shield,
            content: (
                <div className="space-y-4">
                    <h3>Luxury 5-Star Hotels</h3>
                    <p>We provide premium outcall services to Aerocity's finest hotels. Our VIP escorts are frequent visitors here and know exactly how to behave in high-end environments.</p>
                    <ul>
                        <li><strong>JW Marriott New Delhi Aerocity:</strong> Our escorts are perfect matches for the luxury of JW Marriott.</li>
                        <li><strong>The Ritz-Carlton:</strong> Ultra-discreet service for elite guests.</li>
                        <li><strong>Pullman New Delhi:</strong> Sophisticated companions for business travelers.</li>
                        <li><strong>Andaz Delhi:</strong> Stylish models for this chic Hyatt property.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Why Choose Our Hotel Escort Service?",
            icon: Star,
            content: (
                <div className="space-y-4">
                    <h3>Zero Hassle Arrival</h3>
                    <p>Our escorts carry valid ID and adhere to all standard hotel visitor policies. They check in at the front desk confidently (usually for "just a visit") and come straight to your room or meet you in the lobby/bar, whichever you prefer.</p>
                    <h3>Fast Response Time</h3>
                    <p>Since our base is adjacent to Aerocity, we offer the fastest response times in the area. We can often be at your hotel door within 20-30 minutes of your call.</p>
                </div>
            )
        }
    ];

    const relatedServices = [
        {
            title: "5-Star Companions",
            description: "Elegant ladies for luxury hotels",
            url: "/aerocity/vip-escorts"
        },
        {
            title: "Budget Outcalls",
            description: "Affordable options for transit stays",
            url: "/aerocity/call-girls"
        },
        {
            title: "In-Room Massage",
            description: "Relaxing massage services",
            url: "/aerocity/independent-escorts"
        },
        {
            title: "Overnight Guests",
            description: "Companions for the whole night",
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
                title="Hotel Escorts in Aerocity - Outcall Service for JW Marriott, Pullman & Ibis | Priya Sharma Escorts"
                description="Discrete hotel escort service in Aerocity. We serve all hotels including Ritz Carlton, Andaz, Holiday Inn. Fast arrival, professional behavior, and verified profiles."
                keywords="hotel escorts aerocity, outcall escorts aerocity, jw marriott escorts, pullman hotel escorts, ibis aerocity escorts, transit hotel escorts"
                canonical="https://priyasharmaaescorts.com/aerocity/hotel-escorts"
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
                serviceType="Hotel Escort Service"
                metaTitle="Hotel Escorts in Aerocity"
                h1Title="Hotel Escorts in Aerocity"
                heroDescription="Specialized hotel escort services for seamless outcalls in Aerocity. Familiar with hotel protocols for JW Marriott, Pullman, Ibis, and all major properties."
                sections={sections}
                relatedServices={relatedServices}
                faqs={faqs}
                keywordTags={true}
            />
            <StickyContactBar phoneNumber="+91-8527420914" />
        </>
    );
}
