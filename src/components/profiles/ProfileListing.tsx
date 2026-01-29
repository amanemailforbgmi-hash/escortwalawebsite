import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export interface EscortProfile {
    id: string;
    name: string;
    age: number;
    location: string;
    secondaryLocation?: string;
    tag: string;
    description: string;
    imageUrl: string;
    phoneNumber?: string;
}

interface ProfileCardProps {
    profile: EscortProfile;
    index: number;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, index }) => {
    const handleCall = () => {
        if (profile.phoneNumber) {
            window.location.href = `tel:${profile.phoneNumber}`;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="profile-card-dark group"
        >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Profile Image */}
                <div className="profile-image-container">
                    <img
                        src={profile.imageUrl}
                        alt={profile.name}
                        className="profile-image"
                        loading="lazy"
                    />
                    <div className="profile-image-overlay"></div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                    {/* Top Section - Name, Age, Tags */}
                    <div>
                        <h3 className="profile-name">
                            {profile.name}, {profile.age}
                        </h3>

                        {/* Location Tags */}
                        <div className="flex flex-wrap gap-2 mt-2 mb-3">
                            <span className="location-tag">
                                📍 {profile.location}
                            </span>
                            {profile.secondaryLocation && (
                                <span className="location-tag">
                                    📍 {profile.secondaryLocation}
                                </span>
                            )}
                            <span className="premium-tag">
                                {profile.tag}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="profile-description">
                            {profile.description}
                        </p>
                    </div>
                </div>

                {/* Call Button */}
                <div className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0">
                    <button
                        onClick={handleCall}
                        className="call-button group"
                    >
                        <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        CALL ME
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

interface ProfileListingProps {
    profiles: EscortProfile[];
    title?: string;
    phoneNumber?: string;
}

export const ProfileListing: React.FC<ProfileListingProps> = ({
    profiles,
    title = "Premium Companions Available Now",
    phoneNumber = "+91-XXXXXXXXXX"
}) => {
    // Add default phone number to profiles if not provided
    const profilesWithPhone = profiles.map(profile => ({
        ...profile,
        phoneNumber: profile.phoneNumber || phoneNumber
    }));

    return (
        <div className="profile-listing-section">
            <div className="container mx-auto px-4">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-title"
                    >
                        {title}
                    </motion.h2>
                )}

                <div className="profiles-grid">
                    {profilesWithPhone.map((profile, index) => (
                        <ProfileCard
                            key={profile.id}
                            profile={profile}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
        .profile-listing-section {
          background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 4rem 0;
          min-height: 100vh;
        }

        .section-title {
          text-align: center;
          font-size: clamp(1.75rem, 4vw, 3rem);
          font-weight: 800;
          background: linear-gradient(135deg, #00ff88, #00cc6a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 3rem;
          text-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
        }

        .profiles-grid {
          display: grid;
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .profile-card-dark {
          background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
          border: 1px solid rgba(0, 255, 136, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .profile-card-dark::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(0, 255, 136, 0.05) 0%, 
            rgba(0, 204, 106, 0.02) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .profile-card-dark:hover {
          border-color: rgba(0, 255, 136, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(0, 255, 136, 0.15);
        }

        .profile-card-dark:hover::before {
          opacity: 1;
        }

        .profile-image-container {
          position: relative;
          width: 100%;
          max-width: 200px;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .profile-image-container {
            width: 180px;
          }
        }

        .profile-image {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 12px;
          border: 2px solid rgba(0, 255, 136, 0.2);
        }

        .profile-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(0, 255, 136, 0.1) 100%
          );
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .profile-card-dark:hover .profile-image-overlay {
          opacity: 1;
        }

        .profile-name {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 700;
          color: #00ff88;
          text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
          margin-bottom: 0;
          line-height: 1.2;
        }

        .location-tag {
          display: inline-block;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        .premium-tag {
          display: inline-block;
          background: linear-gradient(135deg, #ff0055, #cc0044);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(255, 0, 85, 0.4);
        }

        .profile-description {
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }

        .call-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00ff88, #00cc6a);
          color: #000;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
          white-space: nowrap;
        }

        .call-button:hover {
          background: linear-gradient(135deg, #00cc6a, #00ff88);
          transform: scale(1.05);
          box-shadow: 0 6px 30px rgba(0, 255, 136, 0.5);
        }

        .call-button:active {
          transform: scale(0.98);
        }

        @media (max-width: 639px) {
          .profile-card-dark {
            padding: 1.25rem;
          }

          .call-button {
            width: 100%;
            padding: 1rem;
          }
        }
      `}</style>
        </div>
    );
};
