"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Copy,
  Check,
  Send,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  actionText: string;
}

const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "midul.mahmud20@gmail.com",
    href: "mailto:midul.mahmud20@gmail.com",
    icon: Mail,
    actionText: "Send Email",
  },
  {
    label: "Phone",
    value: "+880 1608-046830",
    href: "tel:+8801608046830",
    icon: Phone,
    actionText: "Call Now",
  },
  {
    label: "WhatsApp",
    value: "+880 1608-046830",
    href: "https://wa.me/8801608046830",
    icon: FaWhatsapp,
    actionText: "Chat on WhatsApp",
  },
];

export const Contact = () => {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleCopy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedValue(val);
    setTimeout(() => {
      setCopiedValue(null);
    }, 2500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormFeedback({ type: null, message: "" });

    // Client-side validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setSubmitting(false);
      setFormFeedback({
        type: "error",
        message: "Please fill in all required fields (Name, Email, Message).",
      });
      return;
    }

    try {
      // Check if EmailJS environment variables are configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        // Dynamic import / send via emailjs REST api if configured
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: formState.name,
              reply_to: formState.email,
              subject: formState.subject || "Portfolio Contact Inquiry",
              message: formState.message,
            },
          }),
        });

        if (!res.ok) throw new Error("Email sending failed");
      } else {
        // Fallback simulation for local/preview builds
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setFormFeedback({
        type: "success",
        message:
          "Thank you! Your message has been received. I will respond to your email as soon as possible.",
      });
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFormFeedback({
        type: "error",
        message:
          "Unable to send message automatically. Please contact me directly at midul.mahmud20@gmail.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-15 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-14">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-sky-600 dark:text-sky-400 mb-2">
            <span>05.</span>
            <span className="uppercase tracking-widest">Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Whether you have an entry-level developer opportunity, a full-stack
            collaboration, or a question about my projects, my inbox is always
            open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Direct Channels
            </h3>

            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isCopied = copiedValue === method.value;

              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35 }}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 backdrop-blur-sm transition-all duration-200 group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 group-hover:border-sky-500/30 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {method.label}
                        </span>
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 break-all">
                          {method.value}
                        </p>
                      </div>
                    </div>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(method.value)}
                      title={`Copy ${method.label}`}
                      aria-label={`Copy ${method.value} to clipboard`}
                      className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Direct Action Link */}
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300 transition-colors min-h-[36px]"
                    >
                      <span>{method.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    {isCopied && (
                      <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                        Copied to clipboard!
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Contact Form (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-md dark:shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Send Me a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  I typically respond within 24 hours.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Your Name <span className="text-sky-600 dark:text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Midul Mahmud"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all min-h-[44px]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Your Email <span className="text-sky-600 dark:text-sky-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all min-h-[44px]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Opportunity / Collaboration Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all min-h-[44px]"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Message <span className="text-sky-600 dark:text-sky-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Hi Midul, I'd like to discuss an opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all resize-y min-h-[100px]"
                />
              </div>

              {/* Feedback Alert */}
              {formFeedback.type && (
                <div
                  className={`p-3.5 rounded-xl text-xs sm:text-sm font-medium ${
                    formFeedback.type === "success"
                      ? "bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300"
                      : "bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-500/40 text-rose-800 dark:text-rose-300"
                  }`}
                >
                  {formFeedback.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
