import React from 'react';
import { ProfileListing } from '../components/profiles/ProfileListing';
import { featuredProfiles } from '../data/profiles';
import { SEOMetaTags } from '../components/seo/SEOMetaTags';
import { StickyContactBar } from '../components/shared/StickyContactBar';

export default function Profiles() {
  return (
    <>
      <SEOMetaTags
        title="Premium Escort Profiles in Delhi - Verified Companions | Priya Sharma Escorts"
        description="Browse verified profiles of premium escorts in Delhi. Independent companions, VIP models, and elite escorts available 24/7. Genuine photos, transparent pricing, complete discretion."
        keywords="delhi escort profiles, verified escorts delhi, independent escorts, vip companions delhi, premium escorts"
        city="Delhi"
        state="Delhi"
        country="India"
      />

      <div className="min-h-screen bg-black">
        <ProfileListing
          profiles={featuredProfiles}
          title="Premium Companions Available Now"
          phoneNumber="+91-8527420914"
        />

        <StickyContactBar phoneNumber="+91-8527420914" />
      </div>
    </>
  );
}
