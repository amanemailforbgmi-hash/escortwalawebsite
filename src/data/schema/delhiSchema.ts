export const delhiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Escorts in Delhi",
    description: "Premium escort services across Delhi NCR. Verified independent companions, VIP models, and call girls available in South Delhi, Aerocity, Dwarka, and Central Delhi.",
    provider: {
        "@type": "LocalBusiness",
        name: "Elegance Escorts Delhi",
        telephone: "+91-XXXXXXXXXX",
        priceRange: "₹₹"
    },
    areaServed: {
        "@type": "City",
        name: "New Delhi"
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Escort Services Delhi",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "VIP Escorts South Delhi"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Aerocity Hotel Escorts"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Independent Call Girls Delhi"
                }
            }
        ]
    }
};

export const delhiLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Priya Sharma Escorts Delhi",
    image: "https://yourdomain.com/images/delhi-escorts.jpg",
    url: "https://priyasharmaaescorts.com/escort-in-delhi",
    telephone: "+918527420914",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Connaught Place",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110001",
        addressCountry: "IN"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "28.6139",
        longitude: "77.2090"
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
    }
};
