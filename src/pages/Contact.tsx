import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Shield } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    message: "",
    ageConfirm: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ageConfirm) {
      toast.error("Please confirm you are 18 years or older.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Enquiry submitted successfully! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      city: "",
      message: "",
      ageConfirm: false,
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-sm uppercase tracking-[0.3em]"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mt-4 mb-6"
            >
              Make an <span className="text-gradient-gold">Enquiry</span>
            </motion.h1>
            <div className="section-divider" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Reach out to us for bookings, inquiries, or any questions. 
              All communications are handled with complete discretion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "enquiry@elite.com",
                    link: "mailto:enquiry@elite.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "By Appointment Only",
                    link: null,
                  },
                  {
                    icon: MapPin,
                    label: "Locations",
                    value: "Mumbai, Delhi, Bangalore & Major Cities",
                    link: null,
                  },
                  {
                    icon: Clock,
                    label: "Response Time",
                    value: "Within 24 Hours",
                    link: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-luxury p-6">
                <div className="flex items-start gap-3">
                  <Shield size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg mb-2">
                      Your Privacy Matters
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      All communications are encrypted and handled with the 
                      utmost discretion. We never share your information with 
                      third parties. Your enquiry will be reviewed by our 
                      dedicated concierge team.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="card-luxury p-8">
                <h3 className="font-serif text-2xl mb-6">Enquiry Form</h3>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm mb-2 text-muted-foreground">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="input-luxury"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-muted-foreground">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={255}
                        className="input-luxury"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-muted-foreground">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={20}
                        className="input-luxury"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  {/* Service & City */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-muted-foreground">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="input-luxury"
                      >
                        <option value="">Select a service</option>
                        <option value="dining">Fine Dining</option>
                        <option value="events">Social Events</option>
                        <option value="corporate">Corporate Functions</option>
                        <option value="travel">Travel Companionship</option>
                        <option value="private">Private Companionship</option>
                        <option value="vip">VIP Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-muted-foreground">
                        Preferred City
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="input-luxury"
                      >
                        <option value="">Select a city</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm mb-2 text-muted-foreground">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={1000}
                      rows={4}
                      className="input-luxury resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {/* Age Confirmation */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="ageConfirm"
                      id="ageConfirm"
                      checked={formData.ageConfirm}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-primary"
                    />
                    <label
                      htmlFor="ageConfirm"
                      className="text-sm text-muted-foreground"
                    >
                      I confirm that I am 18 years of age or older and I agree 
                      to the terms of service and privacy policy.
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit Enquiry
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
