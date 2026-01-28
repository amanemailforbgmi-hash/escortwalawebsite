import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Verified, Filter } from "lucide-react";

import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
import profile4 from "@/assets/profile-4.jpg";
import profile5 from "@/assets/profile-5.jpg";
import profile6 from "@/assets/profile-6.jpg";
import profile7 from "@/assets/profile-7.jpg";
import profile8 from "@/assets/profile-8.jpg";

const allProfiles = [
  {
    id: 1,
    name: "Ananya",
    age: 24,
    city: "Mumbai",
    tagline: "Sophisticated & Charming",
    services: ["Social Events", "Fine Dining", "Travel"],
    image: profile1,
  },
  {
    id: 2,
    name: "Priya",
    age: 26,
    city: "Delhi",
    tagline: "Elegant & Cultured",
    services: ["Business Functions", "Art Events", "Companionship"],
    image: profile2,
  },
  {
    id: 3,
    name: "Kavya",
    age: 23,
    city: "Bangalore",
    tagline: "Graceful & Engaging",
    services: ["Private Dinners", "Corporate Events", "Travel"],
    image: profile3,
  },
  {
    id: 4,
    name: "Riya",
    age: 25,
    city: "Mumbai",
    tagline: "Refined & Sophisticated",
    services: ["Gala Events", "Weekend Getaways", "Fine Dining"],
    image: profile4,
  },
  {
    id: 5,
    name: "Aisha",
    age: 27,
    city: "Delhi",
    tagline: "Intellectual & Alluring",
    services: ["Business Dinners", "Cultural Events", "Travel"],
    image: profile5,
  },
  {
    id: 6,
    name: "Meera",
    age: 24,
    city: "Bangalore",
    tagline: "Vivacious & Elegant",
    services: ["Social Gatherings", "Fine Dining", "Private Events"],
    image: profile6,
  },
  {
    id: 7,
    name: "Simran",
    age: 25,
    city: "Mumbai",
    tagline: "Charming & Poised",
    services: ["Corporate Functions", "Galas", "Travel Companionship"],
    image: profile7,
  },
  {
    id: 8,
    name: "Neha",
    age: 26,
    city: "Hyderabad",
    tagline: "Sophisticated & Warm",
    services: ["Dinner Dates", "Events", "Weekend Trips"],
    image: profile8,
  },
];

const cities = ["All Cities", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];

const Profiles = () => {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProfiles =
    selectedCity === "All Cities"
      ? allProfiles
      : allProfiles.filter((p) => p.city === selectedCity);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-sm uppercase tracking-[0.3em]"
            >
              Our Companions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mt-4 mb-6"
            >
              Meet Our <span className="text-gradient-gold">Élite</span>
            </motion.h1>
            <div className="section-divider" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Each companion is verified, sophisticated, and committed to 
              providing an exceptional experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Filter by:</span>
              <div className="flex gap-2">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 text-sm rounded-full transition-all ${
                      selectedCity === city
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm"
            >
              <Filter size={16} />
              Filter
              {selectedCity !== "All Cities" && (
                <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">
                  1
                </span>
              )}
            </button>

            <span className="text-sm text-muted-foreground">
              {filteredProfiles.length} companions found
            </span>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 flex flex-wrap gap-2"
            >
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setShowFilters(false);
                  }}
                  className={`px-4 py-2 text-sm rounded-full transition-all ${
                    selectedCity === city
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {city}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProfiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/contact`}
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
                      {profile.services.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          +{profile.services.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              All companions are verified adults (18+) who provide social 
              companionship services. Élite Companions is a directory service 
              only. We respect privacy and operate within legal guidelines.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profiles;
