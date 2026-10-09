import { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Info,
  RefreshCw,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ContactFormData, FormErrors } from '../types';

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.phone && formData.phone.trim().length > 0) {
      const cleanPhone = formData.phone.replace(/[\s\-+()]/g, '');
      if (cleanPhone.length < 8 || cleanPhone.length > 15 || isNaN(Number(cleanPhone))) {
        newErrors.phone = 'Please enter a valid phone number (or leave blank).';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a brief subject.';
    } else if (formData.subject.trim().length < 4) {
      newErrors.subject = 'Subject should be at least 4 characters long.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include your message or inquiry.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // Simulate prototype frontend submit response
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      category: 'General Inquiry',
      subject: '',
      message: '',
    });
    setErrors({});
    setStatus('idle');
  };

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact TheBizz360 Complex Desk',
    description:
      'Get in touch with TheBizz360 team for food court stall onboarding, commercial vendor listings, and technical inquiries.',
    url: 'https://thebizz360.com/contact',
  };

  return (
    <>
      <SEOHead
        title="Contact Operations Desk & Partnerships | TheBizz360"
        description="Connect with TheBizz360 team for food stall onboarding, service vendor listings, commercial complex enquiries, and support."
        canonicalUrl="https://thebizz360.com/contact"
        jsonLd={contactJsonLd}
      />

      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe8d6] text-[#d9480f] text-xs font-semibold mb-3">
              Complex Liaison Desk
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#10161a] tracking-tight">
              Get in Touch with TheBizz360
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#7a6a5c] leading-relaxed">
              Have questions regarding vendor onboarding for your food stall, service listings for your commercial business, or operations within your complex? Send us a note below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#f6ddc5] shadow-xs">
              {/* Prototype notice banner */}
              <div className="mb-6 p-4 rounded-xl bg-[#fff5ec] border border-[#f6ddc5] flex items-start gap-3 text-xs text-[#7a6a5c]">
                <Info className="w-4 h-4 text-[#d9480f] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#10161a]">Direct Inquiry Form:</strong> Inquiries submitted here are validated locally. Our complex operations team responds within 1 business day.
                </div>
              </div>

              {status === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#dcf5e3] text-[#17803d] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#10161a]">
                    Message Received
                  </h2>
                  <p className="text-sm text-[#7a6a5c] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry regarding "<em>{formData.subject}</em>" has been validated and recorded.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d9480f] text-white text-xs font-semibold hover:bg-[#b8380a] transition-all cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {status === 'error' && Object.keys(errors).length > 0 && (
                    <div className="p-3.5 rounded-xl bg-[#fee4e2] border border-[#dc2626]/20 flex items-center gap-2.5 text-xs text-[#dc2626]">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Please review the highlighted fields below.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#10161a] uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-[#d9480f]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-2.5 bg-[#fff5ec]/40 border rounded-xl text-base sm:text-sm text-[#10161a] placeholder-[#7a6a5c] focus:outline-hidden focus:ring-1 ${
                          errors.fullName
                            ? 'border-[#dc2626] focus:ring-[#dc2626]'
                            : 'border-[#f6ddc5] focus:border-[#d9480f] focus:ring-[#d9480f]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-[#dc2626]">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#10161a] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-[#d9480f]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="alex@business.com"
                        className={`w-full px-4 py-2.5 bg-[#fff5ec]/40 border rounded-xl text-base sm:text-sm text-[#10161a] placeholder-[#7a6a5c] focus:outline-hidden focus:ring-1 ${
                          errors.email
                            ? 'border-[#dc2626] focus:ring-[#dc2626]'
                            : 'border-[#f6ddc5] focus:border-[#d9480f] focus:ring-[#d9480f]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#dc2626]">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone (Optional) */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#10161a] uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-gray-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-2.5 bg-[#fff5ec]/40 border rounded-xl text-base sm:text-sm text-[#10161a] placeholder-[#7a6a5c] focus:outline-hidden focus:ring-1 ${
                          errors.phone
                            ? 'border-[#dc2626] focus:ring-[#dc2626]'
                            : 'border-[#f6ddc5] focus:border-[#d9480f] focus:ring-[#d9480f]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-[#dc2626]">{errors.phone}</p>
                      )}
                    </div>

                    {/* Inquiry Category */}
                    <div>
                      <label htmlFor="category" className="block text-xs font-bold text-[#10161a] uppercase tracking-wider mb-1.5">
                        Inquiry Category
                      </label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            category: e.target.value as ContactFormData['category'],
                          })
                        }
                        className="w-full px-4 py-2.5 bg-[#fff5ec]/40 border border-[#f6ddc5] rounded-xl text-base sm:text-sm text-[#10161a] focus:outline-hidden focus:border-[#d9480f] focus:ring-1 focus:ring-[#d9480f]"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Food Stall Partner">Food Stall Partner (Food Space)</option>
                        <option value="Work Service Vendor">Commercial Service Vendor (Work Space)</option>
                        <option value="Campus Administration">Complex &amp; Facility Management</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-[#10161a] uppercase tracking-wider mb-1.5">
                      Subject <span className="text-[#d9480f]">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. Onboarding new food outlet in Tower B"
                      className={`w-full px-4 py-2.5 bg-[#fff5ec]/40 border rounded-xl text-base sm:text-sm text-[#10161a] placeholder-[#7a6a5c] focus:outline-hidden focus:ring-1 ${
                        errors.subject
                          ? 'border-[#dc2626] focus:ring-[#dc2626]'
                          : 'border-[#f6ddc5] focus:border-[#d9480f] focus:ring-[#d9480f]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-[#dc2626]">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#10161a] uppercase tracking-wider mb-1.5">
                      Message / Inquiry Details <span className="text-[#d9480f]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Provide details regarding your building wing, floor, outlet or business requirements..."
                      className={`w-full px-4 py-2.5 bg-[#fff5ec]/40 border rounded-xl text-base sm:text-sm text-[#10161a] placeholder-[#7a6a5c] focus:outline-hidden focus:ring-1 ${
                        errors.message
                          ? 'border-[#dc2626] focus:ring-[#dc2626]'
                          : 'border-[#f6ddc5] focus:border-[#d9480f] focus:ring-[#d9480f]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-[#dc2626]">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-[#7a6a5c] order-2 sm:order-1">
                      * Required fields
                    </span>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto order-1 sm:order-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-linear-to-r from-[#ff7a1a] to-[#d9480f] text-white text-sm font-bold shadow-md hover:from-[#f06800] hover:to-[#b8380a] disabled:opacity-50 transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Complex Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#f6ddc5] shadow-xs space-y-5">
                <h2 className="font-display text-lg font-bold text-[#10161a]">
                  Complex Liaison Desks
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#ffe8d6] flex items-center justify-center text-[#d9480f] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-[#10161a]">Physical Desk</div>
                      <div className="text-xs text-[#7a6a5c] leading-relaxed">
                        Central Commercial Plaza, Food Court Mezzanine Level, Desk 4
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#ffe8d6] flex items-center justify-center text-[#d9480f] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-[#10161a]">Email Communications</div>
                      <div className="text-xs text-[#7a6a5c]">
                        support@thebizz360.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#ffe8d6] flex items-center justify-center text-[#d9480f] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-[#10161a]">Operating Hours</div>
                      <div className="text-xs text-[#7a6a5c]">
                        Monday – Saturday: 8:30 AM – 9:00 PM<br />
                        Sunday: 10:00 AM – 5:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vendor Partnership Quick Card */}
              <div className="bg-[#fff1e8] rounded-3xl p-6 border border-[#f6ddc5] space-y-3">
                <div className="text-xs font-bold text-[#d9480f] uppercase tracking-wider">
                  Partner With TheBizz360
                </div>
                <h3 className="font-display text-base font-bold text-[#10161a]">
                  Are you a food outlet or commercial service vendor?
                </h3>
                <p className="text-xs text-[#7a6a5c] leading-relaxed">
                  Join our verified directory. Get an automated kitchen or service queue dashboard, secure order verification, and direct reach across building tenants.
                </p>
                <div className="pt-2">
                  <a
                    href="#category"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormData((prev) => ({ ...prev, category: 'Food Stall Partner' }));
                      document.getElementById('category')?.focus();
                    }}
                    className="inline-flex items-center text-xs font-bold text-[#d9480f] hover:underline"
                  >
                    Select Vendor Partnership &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
