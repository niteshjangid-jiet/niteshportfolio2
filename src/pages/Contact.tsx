import React from 'react';
import { ContactForm } from '../components/ui/Contact/ContactForm';
import { SectionTitle } from '../components/common/SectionTitle/SectionTitle';
import { usePageTitle } from '../hooks/usePageTitle';

export const Contact: React.FC = () => {
  usePageTitle('Contact');

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionTitle
        badge="GET IN TOUCH"
        title="Contact & Connections"
        subtitle="Reach out directly for software development roles, AI project collaborations, or technical inquiries."
      />

      <ContactForm />
    </div>
  );
};

export default Contact;
