import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Verified, ArrowRight } from "lucide-react";

import { featuredProfiles } from "@/data/profiles";

// Select top 4 profiles for the featured section
const profiles = featuredProfiles.slice(0, 4).map(profile => ({
  id: profile.id,
  name: profile.name.split(' ')[0], // First name only for cleaner look
  age: profile.age,
  city: profile.location,
  tagline: profile.tag,
  // Generate services based on tag/description or generic ones
  services: ["Dinner Dates", "Events", "Travel"],
  image: profile.imageUrl
}));

export const FeaturedProfiles = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm uppercase tracking-[0.3em]"
          >
            Featured
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4 mb-6"
          >
            Our Premium Companions
          </motion.h2>
          <div className="section-divider" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Each companion is carefully verified for authenticity,
            professionalism, and discretion.
          </motion.p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/profiles`}
                className="block card-luxury overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs">
                    <Verified size={12} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl">{profile.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {profile.age}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <MapPin size={14} className="text-primary" />
                    <span>{profile.city}</span>
                  </div>

                  <p className="text-sm text-muted-foreground italic mb-4">
                    "{profile.tagline}"
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {profile.services.slice(0, 2).map((service) => (
                      <span
                        key={service}
                        className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/profiles"
            className="btn-outline-luxury group inline-flex items-center"
          >
            View All Companions
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
