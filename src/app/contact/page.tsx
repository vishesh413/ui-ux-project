'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message] = useState(''); // empty constant message

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (
    <div className="min-h-screen bg-gray-100 bg-gray-900 py-12 pt-36 relative">
      {/* Background Beams */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your learning journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />

          {/* Constant Empty Message Field (non-editable) */}
          <textarea
            value={message}
            readOnly
            placeholder="Message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 text-white resize-none placeholder:text-neutral-700"
            rows={5}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
