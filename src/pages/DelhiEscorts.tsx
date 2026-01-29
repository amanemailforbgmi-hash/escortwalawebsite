import React from 'react';
import { LocationPageTemplate } from '@/components/location/LocationPageTemplate';
import { SEOMetaTags } from '@/components/seo/SEOMetaTags';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { StickyContactBar } from '@/components/shared/StickyContactBar';
import { delhiServiceSchema, delhiLocalBusinessSchema } from '../data/schema/delhiSchema';
import { organizationSchema } from '../data/schema/mahipalpurSchema';
import { Star, Shield, MapPin, Crown } from 'lucide-react';

export default function DelhiEscorts() {
    const sections = [
        {
            title: "Escort in Delhi - Your Guide to Premium Companionship",
            icon: Crown,
            content: (
                <div className="space-y-4">
                    <p>Welcome to the premier destination for finding a high-class escort in Delhi. Whether you are a business traveler staying in Aerocity, a tourist exploring the monuments of South Delhi, or a local resident seeking discreet companionship, we connect you with the city's finest independent escorts and VIP models.</p>
                    <p>Delhi, the vibrant capital of India, is a city of contrasts. From the historic lanes of Old Delhi to the posh avenues of Lutyens' Delhi, the need for quality companionship is universal. Our service bridges the gap, offering verified, safe, and professional escort services across all major zones of the National Capital Region (NCR).</p>
                </div>
            )
        },
        {
            title: "Why We Are the Best Escort Service in Delhi",
            icon: Shield,
            content: (
                <div className="space-y-4">
                    <h3>Delhi-Wide Coverage</h3>
                    <p>Unlike local agencies restricted to one neighborhood, we cover the entire city. Our network of companions is spread across key locations:</p>
                    <ul>
                        <li><strong>South Delhi:</strong> Saket, Vasant Kunj, Hauz Khas, Greater Kailash</li>
                        <li><strong>Airport Area:</strong> Aerocity, Mahipalpur, Dwarka</li>
                        <li><strong>Central Delhi:</strong> Connaught Place, Karol Bagh, Paharganj</li>
                        <li><strong>West Delhi:</strong> Rajouri Garden, Punjabi Bagh</li>
                        <li><strong>NCR:</strong> Gurgaon & Noida access</li>
                    </ul>

                    <h3>100% Genuine & Verified Profiles</h3>
                    <p>The Delhi escort market is flooded with fake profiles. We stand apart by guaranteeing 100% genuineness. Every profile on our site—from our college girls to our high-end models—is personally verified. We combat the bait-and-switch culture with strict quality control.</p>

                    <h3>Discreet & Professional</h3>
                    <p>In a city as connected as Delhi, privacy is paramount. We ensure that your data is never stored, your calls are confidential, and our escorts are trained in discretion. Whether you're meeting at a 5-star hotel or a private residence, your secret is safe with us.</p>
                </div>
            )
        },
        {
            title: "Types of Escorts Available in Delhi",
            icon: Star,
            content: (
                <div className="space-y-4">
                    <h3>Independent Escorts in Delhi</h3>
                    <p>For those who value authentic connection, our independent escorts in Delhi are the top choice. These self-managed ladies offer a Girlfriend Experience (GFE) that is warm, personal, and unhurried. They are perfect for dinner dates, long drives, and overnight stays.</p>

                    <h3>VIP & Model Escorts</h3>
                    <p>Delhi is the fashion capital of India, home to many aspiring and professional models. Our VIP category features stunning models and pageant participants who offer elite companionship. These high-profile escorts are ideal for red-carpet events, corporate dinners, and luxury hotel outcalls.</p>

                    <h3>College Girls</h3>
                    <p>We feature a selection of young, vibrant college students from Delhi's top universities (DU, JNU, etc.) who provide companionship to support their studies. They bring a fresh, energetic, and fun-loving vibe to your date.</p>

                    <h3>Housewives</h3>
                    <p>For a more mature and sensual experience, our housewife category offers companions who are experienced, caring, and incredibly discreet. Perfect for those who prefer a womanly touch over youthful exuberance.</p>
                </div>
            )
        },
        {
            title: "Our Service Areas in Delhi",
            icon: MapPin,
            content: (
                <div className="space-y-4">
                    <h3>Escorts in South Delhi</h3>
                    <p>South Delhi is the hub of luxury and lifestyle. Our escorts here serve posh colonies like Greater Kailash (GK), Defence Colony, and Vasant Vihar. They are sophisticated, fluent in English, and perfect for upscale dates.</p>

                    <h3>Escorts in Aerocity & Mahipalpur</h3>
                    <p>For travelers, our airport services are unmatched. We provide rapid outcalls to hotels in Aerocity (JW Marriott, Pullman) and budget hotels in Mahipalpur.</p>

                    <h3>Escorts in Dwarka</h3>
                    <p>Serving the subhead of Dwarka with reliable independent companions. Ideal for residents and those staying in Radisson Blu Dwarka and nearby hotels.</p>

                    <h3>Escorts in Central Delhi (CP)</h3>
                    <p>Connaught Place is the heart of business. Our escorts are available for meetings at The Lalit, Shangri-La, and Imperial Hotel, providing classy company for business executives.</p>
                </div>
            )
        }
    ];

    const relatedServices = [
        {
            title: "Aerocity Escorts",
            description: "Premium service near airport",
            url: "/aerocity"
        },
        {
            title: "Mahipalpur Escorts",
            description: "Budget & Transit friendly",
            url: "/mahipalpur"
        },
        {
            title: "Independent Escorts",
            description: "Direct GFE Service",
            url: "/aerocity/independent-escorts"
        },
        {
            title: "VIP Models",
            description: "Elite companions",
            url: "/aerocity/vip-escorts"
        }
    ];

    const faqs = [
        {
            question: "Do you provide service in all of Delhi?",
            answer: "Yes, we cover all major areas including South Delhi, Central Delhi, West Delhi, and the Airport zone (Aerocity/Mahipalpur)."
        },
        {
            question: "Is it safe to book escorts in Delhi?",
            answer: "Yes, provided you use a reputed service like ours. We verify all profiles and ensure discretion for both clients and companions."
        },
        {
            question: "Can I book for an overnight stay?",
            answer: "Absolutely. We offer overnight packages which are very popular. It allows for a more relaxed and intimate experience."
        }
    ];

    return (
        <>
            <SEOMetaTags
                title="Escort in Delhi - No.1 Premium Escort Service | Priya Sharma Escorts"
                description="Book the finest escort in Delhi today. We offer verified independent escorts, VIP models, and genuine call girls in South Delhi, Aerocity & CP. 24/7 Service. Cash on delivery."
                keywords="escort in delhi, independent escorts delhi, call girls delhi, delhi escort service, vip escorts delhi, south delhi escorts, aerocity escorts"
                canonical="https://priyasharmaaescorts.com/escort-in-delhi"
                city="New Delhi"
                state="Delhi"
                country="India"
            />

            <SchemaMarkup schemas={[
                delhiServiceSchema,
                delhiLocalBusinessSchema,
                organizationSchema
            ]} />

            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="New Delhi, India" />
            <meta name="geo.position" content="28.6139;77.2090" />
            <meta name="ICBM" content="28.6139, 77.2090" />

            <LocationPageTemplate
                location="New Delhi"
                serviceType="Escort Service"
                metaTitle="Escort in Delhi"
                h1Title="Escort in Delhi"
                heroDescription="Looking for the best escort in Delhi? We offer elite independent companions, VIP models, and professional call girls in South Delhi, Aerocity, Dwarka, and Central Delhi."
                sections={sections}
                relatedServices={relatedServices}
                faqs={faqs}
                keywordTags={true}
            />
            <StickyContactBar phoneNumber="+91-8527420914" />
        </>
    );
}
