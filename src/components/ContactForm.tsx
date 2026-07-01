import { useState } from 'react';

interface ContactFormProps {
  email: string;
  linkedin: string;
}

export default function ContactForm({ email, linkedin }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-slate-400 mb-8">
          I&apos;m always interested in discussing research collaborations, teaching opportunities, or potential positions. Feel free to reach out.
        </p>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <a href={`mailto:${email}`} className="text-sky-400 hover:text-sky-300 transition-colors">{email}</a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">LinkedIn</a>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-8">
        {isSubmitted ? (
          <div className="text-center p-6 bg-green-500/20 text-green-300 rounded-lg">
            <h3 className="text-xl font-bold">Thank you!</h3>
            <p>Your message has been sent successfully. I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-sky-500 text-white font-bold py-3 px-12 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/30"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
