import { useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LocationPageTemplate } from '@/components/location/LocationPageTemplate';
import { generateLocationContent } from '@/utils/contentGenerator';
import { locationList } from '@/data/locationList';
import { SEOMetaTags } from '@/components/seo/SEOMetaTags';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { StickyContactBar } from '@/components/shared/StickyContactBar';

interface GenericLocationPageProps {
    locationName?: string; // Optional prop if we want to force a specific location
}

const GenericLocationPage = ({ locationName }: GenericLocationPageProps) => {
    // If locationName is passed as prop, use it. Otherwise try to find it from the current URL path.
    // However, since we are using specific routes in App.tsx, we can pass the name directly as a prop to this component instance
    // or derive it. For simplicity in App.tsx, we will pass the name as a prop.

    const content = useMemo(() => {
        if (!locationName) return null;
        return generateLocationContent(locationName);
    }, [locationName]);

    const locationData = useMemo(() => {
        return locationList.find(l => l.name === locationName);
    }, [locationName]);

    if (!locationName || !content || !locationData) {
        return <Navigate to="/404" replace />;
    }

    // Create basic schema for this location
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Call Girls in ${locationName}`,
        "provider": {
            "@type": "Organization",
            "name": "Priya Sharma Escorts",
            "url": "https://priyasharmaaescorts.com"
        },
        "areaServed": {
            "@type": "City",
            "name": locationName
        },
        "description": content.heroDescription
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            <SEOMetaTags
                title={locationData.metaTitle}
                description={locationData.metaDescription}
                keywords={locationData.keywords}
                canonical={`https://priyasharmaaescorts.com${locationData.slug}`}
                city={locationName}
                state="Delhi"
                country="India"
            />

            <SchemaMarkup schemas={[serviceSchema, faqSchema]} />

            <LocationPageTemplate
                location={locationName}
                serviceType="Call Girls"
                metaTitle={content.heroTitle}
                h1Title={content.heroTitle}
                heroDescription={content.heroDescription}
                sections={content.sections}
                faqs={content.faq}
                keywordTags={true} // Enable the keyword cloud
            />

            <StickyContactBar phoneNumber="+91-8527420914" />
        </>
    );
};

export default GenericLocationPage;
