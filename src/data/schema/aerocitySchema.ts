// Schema data for Aerocity location
export const aerocityServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Escorts in Aerocity",
    description: "Premium escort services in Aerocity, Delhi. Professional companions available 24/7 for hotel outcalls near IGI Airport. VIP escorts, independent call girls, and elite companions for business travelers.",
    provider: {
        "@type": "LocalBusiness",
        name: "Elegance Escorts Aerocity",
        telephone: "+91-XXXXXXXXXX",
        priceRange: "₹₹₹"
    },
    areaServed: {
        "@type": "City",
        name: "Aerocity, Delhi"
    },
    availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: {
            "@type": "ContactPoint",
            telephone: "+91-XXXXXXXXXX",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"]
        }
    }
};

export const aerocityLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Priya Sharma Escorts Aerocity",
    description: "Premium escort service in Aerocity hospitality district. VIP companions for hotel outcalls at JW Marriott, Ritz Carlton, Pullman, and all major Aerocity hotels.",
    telephone: "+918527420914",
    url: "https://priyasharmaaescorts.com/aerocity",
    priceRange: "₹₹₹",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Aerocity",
        addressRegion: "Delhi",
        addressCountry: "IN",
        postalCode: "110037"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "28.5562",
        longitude: "77.1200"
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "156"
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Escort Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "VIP Escort Service Aerocity"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Hotel Outcall Aerocity"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "24/7 Escort Service"
                }
            }
        ]
    }
};

export const aerocityFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How quickly can an escort reach my hotel in Aerocity?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our escorts can reach any Aerocity hotel within 20-30 minutes. For advance bookings, we ensure punctual arrival at your preferred time. We serve all major hotels including JW Marriott, Ritz Carlton, Pullman, Holiday Inn Express, and Ibis."
            }
        },
        {
            "@type": "Question",
            name: "What is the average cost for escorts in Aerocity?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Escort services in Aerocity start from ₹8,000 for 2 hours with independent companions. VIP and premium model services range from ₹12,000 to ₹25,000 depending on duration and escort category. We offer transparent pricing with no hidden charges."
            }
        },
        {
            "@type": "Question",
            name: "Are your Aerocity escorts available for hotel room service?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our Aerocity escorts provide discreet hotel room outcall services. They are experienced with 5-star hotel environments and maintain complete professionalism and discretion."
            }
        },
        {
            "@type": "Question",
            name: "Which hotels in Aerocity do you provide services to?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We provide escort services to all Aerocity hotels including JW Marriott, Ritz Carlton, Pullman New Delhi Aerocity, Andaz Delhi, Holiday Inn Express, Ibis Delhi Airport, Pride Plaza, Lemon Tree Premier, and Fairfield by Marriott."
            }
        },
        {
            "@type": "Question",
            name: "Do you offer 24/7 escort services in Aerocity?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our Aerocity escort service operates 24/7. We cater to late-night arrivals, early morning flights, and business travelers at any hour. Book anytime via phone or WhatsApp for immediate or scheduled service."
            }
        },
        {
            "@type": "Question",
            name: "Are the escort profiles genuine and verified?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our Aerocity escort profiles feature 100% genuine photos and verified identities. What you see is what you get. We maintain strict quality standards and only work with professional, reliable companions."
            }
        },
        {
            "@type": "Question",
            name: "Can I book an escort while arriving at Delhi Airport?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! Many business travelers book escorts immediately upon landing at IGI Airport. Simply call or WhatsApp us with your hotel details, and we'll arrange for an escort to meet you at your Aerocity hotel within 30 minutes."
            }
        },
        {
            "@type": "Question",
            name: "What payment methods do you accept in Aerocity?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We accept cash payments directly to the escort. Payment is made after the service begins. We also accept advance booking payments via UPI for confirmed reservations."
            }
        },
        {
            "@type": "Question",
            name: "Is the service completely discreet and confidential?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, complete discretion is guaranteed. Our escorts are trained professionals who understand the importance of privacy, especially in luxury hotel environments. Your personal information and booking details remain 100% confidential."
            }
        },
        {
            "@type": "Question",
            name: "Can I book multiple hours or overnight service in Aerocity?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer flexible booking durations including 2 hours, 4 hours, 6 hours, and full overnight service (8-12 hours). Overnight bookings are popular among business travelers staying in Aerocity hotels. Special rates available for extended bookings."
            }
        }
    ]
};
