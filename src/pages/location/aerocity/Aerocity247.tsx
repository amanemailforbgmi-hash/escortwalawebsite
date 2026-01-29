import React from 'react';
import { LocationPageTemplate } from '@/components/location/LocationPageTemplate';
import { SEOMetaTags } from '@/components/seo/SEOMetaTags';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { StickyContactBar } from '@/components/shared/StickyContactBar';
import { aerocityServiceSchema, aerocityLocalBusinessSchema, aerocityFAQSchema } from '../../../data/schema/aerocitySchema';
import { organizationSchema } from '../../../data/schema/mahipalpurSchema';
import { Clock, Phone, Moon, Sun } from 'lucide-react';

export default function Aerocity247() {
    const sections = [
        {
            title: "24/7 Escorts in Aerocity - Anytime, Anywhere",
            icon: Clock,
            content: (
                <div className="space-y-4">
                    <p>Aerocity never sleeps, and neither do we. With flights landing at IGI Airport at all hours of the day and night, we understand that our clients' schedules don't fit into a standard 9-to-5 box. That's why our premium escort service in Aerocity operates 24 hours a day, 7 days a week, 365 days a year.</p>
                    <p>Whether you've just checked in at 3 AM after a long international haul or you have a 6-hour layover starting at 5 AM, our beautiful companions are awake, ready, and eager to keep you company. We are the most reliable late-night escort service in the Delhi Airport area.</p>
                </div>
            )
        },
        {
            title: "Late Night & Early Morning Service",
            icon: Moon,
            content: (
                <div className="space-y-4">
                    <h3>The Late Night Shift (10 PM - 6 AM)</h3>
                    <p>This is our busiest time. While the rest of the city sleeps, our late-night escorts are active and ready to party or relax. We have a dedicated team of night owls who look fresh and stunning even in the wee hours of the morning.</p>
                    <h3>Early Morning Arrivals (6 AM - 12 PM)</h3>
                    <p>Just landed on a red-eye? Start your day in Delhi right with a beautiful breakfast companion or a relaxing massage partner before your meetings. We accept bookings starting as early as you need.</p>
                </div>
            )
        },
        {
            title: "Why Our 24/7 Service is Different",
            icon: Phone,
            content: (
                <div className="space-y-4">
                    <h3>Always Answer</h3>
                    <p>When we say 24/7, we mean it. Our phone lines and WhatsApp are manned by live dispatchers round the clock. You'll never get a voicemail or waiting tone. We respond instantly, no matter the hour.</p>
                    <h3>Fast Night Deployment</h3>
                    <p>Traffic is light at night, allowing us to reach Aerocity hotels even faster. We can typically have a companion at your door within 20-25 minutes of your late-night call.</p>
                </div>
            )
        }
    ];

    const relatedServices = [
        {
            title: "Night Escorts",
            description: "Companions for the night shift",
            url: "/aerocity/call-girls"
        },
        {
            title: "Early Morning",
            description: "Breakfast dates and morning relaxation",
            url: "/aerocity/independent-escorts"
        },
        {
            title: "Layover Service",
            description: "Quick service for transit passengers",
            url: "/aerocity/hotel-escorts"
        },
        {
            title: "VIP 24/7",
            description: "Premium companions available anytime",
            url: "/aerocity/vip-escorts"
        }
    ];

    const faqs = aerocityFAQSchema.mainEntity.map(item => ({
        question: item.name,
        answer: item.acceptedAnswer.text
    }));

    return (
        <>
            <SEOMetaTags
                title="24/7 Escorts in Aerocity - Late Night & Early Morning Service | Priya Sharma Escorts"
                description="Reliable 24/7 escort service in Aerocity. We never close. Late night hotel outcalls, early morning bookings, and transit companions near Delhi Airport. Call now!"
                keywords="24/7 escorts aerocity, late night escorts delhi airport, early morning call girls, overnight escorts aerocity, 24 hour escort service"
                canonical="https://priyasharmaaescorts.com/aerocity/24-7-escorts"
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
                serviceType="24/7 Escort Service"
                metaTitle="24/7 Escorts in Aerocity"
                h1Title="24/7 Escorts in Aerocity"
                heroDescription="Available anytime, day or night. reliable 24/7 escort service in Aerocity for late-night arrivals, early morning departures, and anytime in between."
                sections={sections}
                relatedServices={relatedServices}
                faqs={faqs}
                keywordTags={true}
            />
            <StickyContactBar phoneNumber="+91-8527420914" />
        </>
    );
}
