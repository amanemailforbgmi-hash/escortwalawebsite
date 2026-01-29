import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetaTagsProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    city?: string;
    state?: string;
    country?: string;
}

export const SEOMetaTags: React.FC<SEOMetaTagsProps> = ({
    title,
    description,
    keywords,
    canonical,
    ogImage,
    city = 'New Delhi',
    state = 'Delhi',
    country = 'India'
}) => {
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://priyasharmaaescorts.com';
    const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : '');
    const defaultImage = `${siteUrl}/og-image.jpg`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullCanonical} />

            {/* Geo Meta Tags */}
            <meta name="city" content={city} />
            <meta name="state" content={state} />
            <meta name="country" content={country} />

            {/* Robots & Indexing */}
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <meta name="revisit-after" content="1 days" />
            <meta name="rating" content="General" />

            {/* Open Graph Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage || defaultImage} />
            <meta property="og:site_name" content="Priya Sharma Escorts" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage || defaultImage} />

            {/* Additional SEO Tags */}
            <meta name="expires" content="never" />
            <meta httpEquiv="content-language" content="en-IN" />
        </Helmet>
    );
};
