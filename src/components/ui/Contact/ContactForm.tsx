import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Card } from '../../common/Card/Card';
import { Button } from '../../common/Button/Button';
import { SocialButton } from '../../common/SocialButton/SocialButton';
import { contactDetails, socialLinks } from '../../../data/social';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Input sanitization & validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call securely
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Contact Information */}
      <div className="lg:col-span-5 space-y-6">
        <Card variant="glass" className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              Have a project, engineering opportunity, or AI initiative in mind? Let's build something remarkable.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Email */}
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 shrink-0">
                <FiMail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-400">Email Address</p>
                <p className="text-sm font-semibold text-white truncate">{contactDetails.email}</p>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0">
                <FiPhone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-400">Phone</p>
                <p className="text-sm font-semibold text-white truncate">{contactDetails.phone}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-400">Location</p>
                <p className="text-sm font-semibold text-white truncate">{contactDetails.location}</p>
              </div>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="pt-4 border-t border-slate-800">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Social Channels (Open in new tab)
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <SocialButton
                  key={s.platform}
                  platform={s.platform}
                  url={s.url}
                  label={s.platform}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Right Interactive Form */}
      <div className="lg:col-span-7">
        <Card variant="glass" className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
                <FiCheckCircle />
              </div>
              <h4 className="text-2xl font-bold text-white">Message Transmitted!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you for reaching out, Nitesh will review your message and respond promptly.
              </p>
              <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-xs font-mono text-red-300">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Opportunity / Engineering Collaboration"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Nitesh, I would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
                icon={<FiSend />}
              >
                Send Message
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};
