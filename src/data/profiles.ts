import { EscortProfile } from '../components/profiles/ProfileListing';

// Profile data for the main listing
export const featuredProfiles: EscortProfile[] = [
    {
        id: 'riya-malhotra',
        name: 'Riya Malhotra',
        age: 22,
        location: 'Karol Bagh',
        tag: 'COLLEGE GIRL',
        description: "Hello, I'm Riya Malhotra, a charming and confident companion who knows how to make every moment special. I bring youthful energy, sweet conversation, and a relaxing experience that helps you forget daily stress. If you're looking for freshness and excitement, I'm the perfect choice.",
        imageUrl: '/profiles/riya-malhotra.jpg'
    },
    {
        id: 'ananya-kapoor',
        name: 'Ananya Kapoor',
        age: 24,
        location: 'South Delhi',
        tag: 'INDEPENDENT ESCORT',
        description: "Hi, I'm Ananya, an elegant and open-minded escort who loves classy gentlemen. I believe companionship is about comfort, chemistry, and mutual respect. With me, you'll enjoy a premium experience filled with warmth and satisfaction.",
        imageUrl: '/profiles/ananya-kapoor.jpg'
    },
    {
        id: 'kritika-verma',
        name: 'Kritika Verma',
        age: 25,
        location: 'Saket',
        tag: 'PREMIUM MODEL',
        description: "I'm Kritika, a confident beauty with a bold personality and irresistible charm. I love creating memorable moments with my clients through attention, care, and affection. Expect a high-end experience you'll want to repeat.",
        imageUrl: '/profiles/kritika-verma.jpg'
    },
    {
        id: 'pooja-singh',
        name: 'Pooja Singh',
        age: 23,
        location: 'Noida',
        tag: 'YOUNG & SWEET',
        description: "Hello, I'm Pooja — soft, playful, and full of positive vibes. I enjoy meaningful company and making my partner feel relaxed and desired. If you like gentle romance mixed with fun, you'll love spending time with me.",
        imageUrl: '/profiles/pooja-singh.jpg'
    },
    {
        id: 'neha-arora',
        name: 'Neha Arora',
        age: 26,
        location: 'Gurgaon',
        tag: 'CORPORATE FAVORITE',
        description: "I'm Neha, mature, well-spoken, and discreet. I understand the needs of busy professionals and offer calm, stress-free companionship. With me, you'll experience privacy, comfort, and genuine connection.",
        imageUrl: '/profiles/neha-arora.jpg'
    },
    // Additional profiles - ready to be filled
    {
        id: 'priya-sharma',
        name: 'Priya Sharma',
        age: 23,
        location: 'Dwarka',
        secondaryLocation: 'Aerocity',
        tag: 'ELITE COMPANION',
        description: "Sophisticated and graceful, I specialize in providing upscale companionship to discerning gentlemen. My warm personality and classy demeanor ensure you feel comfortable and appreciated throughout our time together.",
        imageUrl: '/profiles/priya-sharma.jpg'
    },
    {
        id: 'simran-kaur',
        name: 'Simran Kaur',
        age: 24,
        location: 'Rajouri Garden',
        tag: 'PUNJABI BEAUTY',
        description: "Hi, I'm Simran — bold, lively, and full of energy. I love laughter, deep talks, and unforgettable moments. If you enjoy confident women with strong personalities, I promise you won't be disappointed.",
        imageUrl: '/profiles/simran-kaur.jpg'
    },
    {
        id: 'tanya-mehta',
        name: 'Tanya Mehta',
        age: 27,
        location: 'Vasant Kunj',
        tag: 'ELITE ESCORT',
        description: "I'm Tanya, known for my elegance and sophistication. I offer a luxurious experience designed for gentlemen who value class and discretion. Every meeting with me is smooth, relaxed, and deeply satisfying.",
        imageUrl: '/profiles/tanya-mehta.jpg'
    },
    {
        id: 'ishita-roy',
        name: 'Ishita Roy',
        age: 22,
        location: 'Lajpat Nagar',
        tag: 'BENGALI GIRL',
        description: "Hello, I'm Ishita — soft-spoken, caring, and naturally attractive. I enjoy slow conversations and creating a comforting atmosphere. If you're looking for warmth and gentle affection, I'm here for you.",
        imageUrl: '/profiles/ishita-roy.jpg'
    },
    {
        id: 'mehak-chawla',
        name: 'Mehak Chawla',
        age: 25,
        location: 'Dwarka',
        tag: 'HOT & FRIENDLY',
        description: "I'm Mehak, confident and cheerful, with a friendly personality that puts you at ease instantly. I believe great companionship comes from trust and comfort. Spend time with me and feel truly appreciated.",
        imageUrl: '/profiles/mehak-chawla.jpg'
    },
    {
        id: 'nidhi-joshi',
        name: 'Nidhi Joshi',
        age: 28,
        location: 'Connaught Place',
        tag: 'AIR HOSTESS TYPE',
        description: "Hi, I'm Nidhi — polished, attractive, and well-mannered. I know how to make my partner feel relaxed and special. Perfect for dinner dates, private time, or stress-relieving companionship.",
        imageUrl: '/profiles/nidhi-joshi.jpg'
    },
    {
        id: 'ayesha-khan',
        name: 'Ayesha Khan',
        age: 25,
        location: 'Mahipalpur',
        secondaryLocation: 'Airport Area',
        tag: 'PREMIUM ESCORT',
        description: "Confident, elegant, and adventurous. I cater to upscale clients seeking quality time with a sophisticated companion. Your satisfaction and discretion are my top priorities.",
        imageUrl: '/profiles/ayesha-khan.jpg'
    },

    {
        id: 'kavya-reddy',
        name: 'Kavya Reddy',
        age: 27,
        location: 'Hauz Khas',
        tag: 'VIP COMPANION',
        description: "Experienced, refined, and attentive. I understand what elite clients desire and deliver beyond expectations. Let me pamper you with professional companionship and genuine care.",
        imageUrl: '/profiles/kavya-reddy.jpg'
    },
    {
        id: 'ishita-jain',
        name: 'Ishita Jain',
        age: 23,
        location: 'Greater Kailash',
        tag: 'MODEL ESCORT',
        description: "A professional model offering exclusive companionship services. I combine stunning looks with engaging conversation, perfect for social events or private encounters.",
        imageUrl: '/profiles/ishita-jain.jpg'
    },
    {
        id: 'shreya-nair',
        name: 'Shreya Nair',
        age: 25,
        location: 'Vasant Vihar',
        secondaryLocation: 'South Delhi',
        tag: 'ELITE ESCORT',
        description: "Elegant, charming, and discreet. I provide premium companionship to selective gentlemen who appreciate quality and sophistication. Every moment with me is crafted to perfection.",
        imageUrl: '/profiles/shreya-nair.jpg'
    }
];

// Mahipalpur-specific profiles
export const mahipalpurProfiles: EscortProfile[] = featuredProfiles.filter(
    profile =>
        profile.location === 'Mahipalpur' ||
        profile.secondaryLocation === 'Mahipalpur' ||
        profile.location === 'Airport Area'
);

// delhi-wide profiles
export const delhiProfiles: EscortProfile[] = featuredProfiles;
