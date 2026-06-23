'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm({ dict }: { dict: any }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    requirement: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For static GitHub Pages deployment, we use mailto to open the default email client
    const subject = encodeURIComponent(`[Website Inquiry] From ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\n\nRequirement:\n${formData.requirement}`
    );
    window.location.href = `mailto:contact@yhytech.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {dict.contact.form.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            {dict.contact.form.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          {dict.contact.form.phone} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
        />
      </div>

      <div>
        <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-2">
          {dict.contact.form.requirement} *
        </label>
        <textarea
          id="requirement"
          name="requirement"
          rows={5}
          required
          value={formData.requirement}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
      >
        <Send className="w-5 h-5 mr-2" />
        {dict.contact.form.submit}
      </button>
    </form>
  );
}
