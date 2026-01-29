export interface GeneratedContent {
    heroTitle: string;
    heroDescription: string;
    sections: {
        title: string;
        content: string | JSX.Element;
    }[];
    faq: {
        question: string;
        answer: string;
    }[];
}

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const intros = [
    (city: string) => `Exclusive and discreet, our **Call Girls in ${city}** offer an unforgettable experience for gentlemen who appreciate class and elegance. Whether you are in ${city} for business, leisure, or simply looking to explore the vibrant nightlife, having a beautiful companion by your side elevates every moment. Our agency prides itself on providing only the most sophisticated, genuine, and high-profile escorts who are not just stunningly beautiful but also intelligent and engaging conversationalists.`,
    (city: string) => `Discover the ultimate pleasure with our premium **${city} Call Girls**. In the heart of Delhi's bustling lifestyle, finding a moment of genuine connection and relaxation can be rare. Our selected companions in ${city} are here to bridge that gap, offering you a personalized service that caters to your specific desires and preferences. From romantic dinner dates to exciting private parties, our models are the perfect partners for every occasion.`,
    (city: string) => `Welcome to the premier destination for **Call Girls in ${city}**. We understand that true luxury lies in the details, which is why our service in ${city} is curated to perfection. Our portfolio features a diverse range of escorts, from charming college girls to elegant air hostesses and sultry models, all ready to make your time in ${city} truly spectacular. Experience the best of adult companionship with complete peace of mind and discretion.`,
];

const experiences = [
    (city: string) => `Choosing a companion from our **${city}** collection means choosing quality without compromise. Our girls are handpicked for their beauty, etiquette, and ability to adapt to any social setting. When you book a call girl in ${city} with us, you are not just booking a service; you are investing in a memory. Our escorts are well-versed in the art of hospitality, ensuring that you feel like a king from the moment you meet. They are excellent tour guides, delightful dinner partners, and passionate lovers who know exactly how to please.`,
    (city: string) => `The experience of meeting our **${city} Call Girls** is designed to be seamless and stress-free. We know that privacy is paramount, especially for our high-profile clients. Therefore, our service in ${city} operates with the highest level of confidentiality. Whether you require an in-call service at a luxury hotel or an out-call service to your private residence, our companions arrive discreetly and on time. Their warm personalities and stunning looks are sure to captivate you instantly.`,
];

const serviceDescriptions = [
    (city: string) => `Our **${city}** service portfolio is extensive and tailored to meet diverse needs. We offer:
  <ul class="list-disc pl-5 mt-2 space-y-1">
    <li><strong>Dinner Dates:</strong> Impress your friends or colleagues with a stunning lady on your arm at ${city}'s finest restaurants.</li>
    <li><strong>Girlfriend Experience (GFE):</strong> For those seeking intimacy and emotional connection, our GFE service in ${city} is unmatched.</li>
    <li><strong>Travel Companionship:</strong> Planning a trip? Take one of our beautiful escorts along to make your journey more enjoyable.</li>
    <li><strong>Event Hosting:</strong> Our models add a touch of glamour to your private parties and corporate events in ${city}.</li>
    <li><strong>Erotic Massage:</strong> Relax and unwind with a sensual massage from expert hands.</li>
    <li><strong>VIP Service:</strong> Exclusive packages for our most discerning clients looking for something extra special in ${city}.</li>
  </ul>`,
];

const hotelGuides = [
    (city: string) => `Need a place to stay? ${city} boasts some of the finest accommodations suitable for a romantic rendezvous. While we can provide service at any reputated hotel, some top recommendations for a discreet stay in and around **${city}** include 5-star properties where privacy is guaranteed. Our **${city} call girls** are familiar with the check-in protocols of major luxury hotels, ensuring a smooth entry. Whether you prefer the grandeur of a large suite or the coziness of a boutique hotel, our companions are happy to join you.`,
    (city: string) => `**${city}** is well-connected and offers numerous safe havens for your private moments. If you are visiting ${city}, we recommend booking a room at a verified 3-star, 4-star, or 5-star hotel to ensure safety and comfort. Our escorts in ${city} are comfortable visiting all major hospitality chains. We advise confirming guest policies with your hotel beforehand to ensure a hassle-free experience with your companion.`,
];

const safetyText = (city: string) => `Your safety and the safety of our companions is our top priority. We operate a strictly professional service in **${city}**. All our profiles are 100% genuine and verified. We do not tolerate any form of disrespect or illegal activity. When you book with us in ${city}, you can be assured of a safe, consensual, and respectful environment. We also appreciate our clients respecting the privacy boundaries of our escorts.`;

const bookingText = (city: string) => `Booking a **Call Girl in ${city}** is easy and quick. simply browse through our gallery, select the profile that catches your eye, and give us a call or drop a WhatsApp message on our official number **+91-8527420914**. Our booking manager is available 24/7 to assist you. Please mention your location as **${city}** and your preferred time. We recommend booking at least 1-2 hours in advance to ensure the availability of your chosen companion.`;

const conclusionText = (city: string) => `Don't wait to make your desires a reality. Our **${city} Call Girls** are waiting to treat you to an experience you will cherish forever. Whether it's a short meeting or an overnight stay, we guarantee satisfaction and delight. Contact us today to arrange your date with the most beautiful women in ${city}.`;

export const generateLocationContent = (locationName: string): GeneratedContent => {
    const intro = intros[getRandomInt(intros.length)](locationName);
    const experience = experiences[getRandomInt(experiences.length)](locationName);
    const services = serviceDescriptions[0](locationName);
    const hotel = hotelGuides[getRandomInt(hotelGuides.length)](locationName);
    const safety = safetyText(locationName);
    const booking = bookingText(locationName);
    const conclusion = conclusionText(locationName);

    // Combine multiple blocks to ensure length
    const extendedIntro = `${intro} \n\n ${citySpecificFiller(locationName)} \n\n ${experience}`;
    const extendedServices = `${services} \n\n ### Why Our Services in ${locationName} Stand Out \n In the competitive world of adult entertainment, we strive to be the best. Our clients in ${locationName} return to us because we consistently deliver high-quality service. We listen to your feedback and constantly improve our offerings. From the moment you contact us to the end of your date, we ensure professional and friendly communication.`;

    return {
        heroTitle: `Call Girls in ${locationName}`,
        heroDescription: `Top rated, genuine and discreet Call Girls and Escorts in ${locationName}. 100% Verified Profiles available 24/7 for Hotel and Private meetings.`,
        sections: [
            {
                title: `Premium Call Girls in ${locationName} - The Ultimate Experience`,
                content: extendedIntro
            },
            {
                title: `Our Exclusive Services in ${locationName}`,
                content: extendedServices
            },
            {
                title: `Types of Profiles Available in ${locationName}`,
                content: `At Priya Sharma Escorts, we believe in variety. Our list of **${locationName} Call Girls** includes:
        <ul class="list-disc pl-5 mt-2 space-y-1">
           <li><strong>College Girls:</strong> Young, energetic, and fun-loving students from reputable colleges near ${locationName}.</li>
           <li><strong>Models:</strong> Stunning fashion models with high-end looks and style.</li>
           <li><strong>Housewives:</strong> Mature, sensual, and experienced ladies for a different kind of thrill.</li>
           <li><strong>Punjabi Kudi:</strong> Bold and beautiful girls with a zest for life.</li>
           <li><strong>Corporate Professionals:</strong> Educated and classy women perfect for business dinners in ${locationName}.</li>
        </ul>
        \n\n No matter what your preference is, we have a companion in ${locationName} who matches your taste.`
            },
            {
                title: `Hotels and Meeting Spots in ${locationName}`,
                content: hotel
            },
            {
                title: `Safety, Privacy and Discretion`,
                content: safety
            },
            {
                title: `How to Book Your Date in ${locationName}`,
                content: booking
            },
            {
                title: `Conclusion`,
                content: conclusion
            }
        ],
        faq: [
            {
                question: `How can I book a call girl in ${locationName}?`,
                answer: `You can book easily by calling or WhatsApping us at +91-8527420914. Let us know you are in ${locationName} and which profile you like.`
            },
            {
                question: `Are the photos of ${locationName} escorts genuine?`,
                answer: `Yes, we only list 1000% genuine and verified photos. What you see is who you get in ${locationName}.`
            },
            {
                question: `Is the service in ${locationName} safe?`,
                answer: `Absolutely. We prioritize client safety and privacy. All our meetings in ${locationName} are discreet and professional.`
            },
            {
                question: `Do you provide outcall service in ${locationName}?`,
                answer: `Yes, we provide outcall services to hotels and private residences across ${locationName}.`
            },
            {
                question: `What are the charges for ${locationName} call girls?`,
                answer: `Rates vary depending on the profile and duration. Please contact us directly for the latest packages in ${locationName}.`
            }
        ]
    };
};

const citySpecificFiller = (city: string) => {
    return `As one of the most sought-after localities, **${city}** attracts a crowd that appreciates the finer things in life. Our agency has established a strong presence here to cater to the growing demand for high-quality adult companionship. We have a network of beautiful girls staying in and around ${city} who are ready to meet you at a short notice. We handle every request with care, ensuring that your specific requirements for a ${city} escort are met with precision.`;
}
