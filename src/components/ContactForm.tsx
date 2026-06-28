'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import type { Dictionary } from '@/types/dictionary';

export default function ContactForm({ dict }: { dict: Dictionary }) {
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
    window.location.href = `mailto:${dict.footer.email}?subject=${subject}&body=${body}`;
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
            className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition-colors focus:border-cyan-600"
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
            className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition-colors focus:border-cyan-600"
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
          className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition-colors focus:border-cyan-600"
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
          className="w-full resize-none border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition-colors focus:border-cyan-600"
        ></textarea>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center bg-slate-950 px-6 py-4 font-black text-white transition-colors hover:bg-cyan-700"
      >
        <Send className="w-5 h-5 mr-2" />
        {dict.contact.form.submit}
      </button>
    </form>
  );
}
