import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { ScrollReveal } from "../../../../components/ui/scroll-reveal";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "22IT0470@itum.mrt.ac.lk",
      href: "mailto:22IT0470@itum.mrt.ac.lk"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 775473112",
      href: "tel:+94775473112"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "ITUM, Diyagama",
      href: "https://maps.app.goo.gl/F7xoXeGZV8c3Cu2f6"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-2 gap-16"
      >
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-white font-display">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Drop me a message and let's discuss how we can bring your ideas to life.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-3 group-hover:scale-110 transition-transform">
                  <info.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium">{info.label}</div>
                  <div className="text-white font-semibold">{info.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability Status */}
          <motion.div
            variants={itemVariants}
            className="p-6 glass-effect rounded-xl border border-green-500/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-semibold">Available for new projects</span>
            </div>
            <p className="text-gray-300 text-sm">
              I'm currently accepting new client work and interesting project collaborations.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-300">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500/20 h-12"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-300">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500/20 h-12"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500/20 h-12"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500/20 h-12"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500/20 resize-none"
                placeholder="Tell me about your project, goals, and how I can help you..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary group relative overflow-hidden"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </Button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
              >
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-medium">
                  Something went wrong. Please try again or contact me directly.
                </span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};