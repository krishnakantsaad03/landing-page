import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolioData } from '../../context/PortfolioContext';
import SectionTitle from '../ui/SectionTitle';

const initialForm = { name: '', email: '', phone: '', company: '', message: '', budget: '' };

export default function Contact() {
  const { t } = useTheme();
  const { personalInfo } = usePortfolioData();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSent(true);
    setTimeout(() => { setSent(false); setForm(initialForm); }, 5000);
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${t.gold}25`,
    color: t.text,
    fontFamily: 'EB Garamond, serif',
    fontSize: '1rem',
    width: '100%',
    padding: '14px 18px',
    borderRadius: '10px',
    outline: 'none',
    transition: 'all 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'Cinzel, serif',
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: t.textMuted,
    marginBottom: 8,
  };

  const contactLinks = [
    { icon: <FiMail size={15} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiPhone size={15} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <FiLinkedin size={15} />, label: 'LinkedIn', value: 'krishnakant-saad-55307921b', href: personalInfo.linkedin },
    { icon: <FiGithub size={15} />, label: 'GitHub', value: 'github.com/krishnakant-saad', href: personalInfo.github },
  ];

  return (
    <section
      id="contact"
      className="relative section-py overflow-hidden"
      style={{ background: t.bg }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{
        background: `linear-gradient(90deg, transparent, ${t.gold}44, transparent)`
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${t.gold}08 0%, transparent 55%)`
      }} />

      <div className="relative page-container">
        <SectionTitle
          subtitle="Owl Post"
          title="Get In Touch"
          description="Send an owl. I respond to every message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div
              className="rounded-xl p-8"
              style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${t.gold}1f` }}
            >
              <h3 className="font-cinzel font-bold text-base mb-4" style={{ color: t.text }}>
                Let's build something remarkable
              </h3>
              <p
                className="font-garamond leading-relaxed"
                style={{ fontSize: '1rem', color: t.textMuted, lineHeight: 1.9 }}
              >
                Whether you have a project in mind, a job opportunity, or just want to say hello — my inbox is always open.
              </p>
            </div>

            {contactLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-6 rounded-xl transition-all"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${t.gold}1a`,
                  display: 'flex',
                  color: t.text,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.gold + '44'; e.currentTarget.style.background = `${t.gold}06`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.gold + '1a'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${t.gold}18`, color: t.gold }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: t.textMuted }}>{item.label}</p>
                  <p className="font-garamond truncate" style={{ fontSize: '0.88rem', color: t.text, marginTop: 2 }}>{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-xl p-9"
              style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${t.gold}1f` }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-14"
                  >
                    <FiCheckCircle className="mx-auto mb-4" size={48} style={{ color: '#4ade80' }} />
                    <h3 className="font-cinzel text-xl font-semibold mb-2" style={{ color: t.text }}>
                      Owl Dispatched! 🦉
                    </h3>
                    <p className="font-garamond" style={{ color: t.textMuted }}>
                      Your message was sent. I'll reply soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyle}>Name <span style={{ color: t.gold }}>*</span></label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = t.gold + '66'; e.target.style.boxShadow = `0 0 0 3px ${t.gold}0f`; }}
                          onBlur={(e) => { e.target.style.borderColor = t.gold + '25'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Email <span style={{ color: t.gold }}>*</span></label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = t.gold + '66'; e.target.style.boxShadow = `0 0 0 3px ${t.gold}0f`; }}
                          onBlur={(e) => { e.target.style.borderColor = t.gold + '25'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyle}>Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = t.gold + '66'; e.target.style.boxShadow = `0 0 0 3px ${t.gold}0f`; }}
                          onBlur={(e) => { e.target.style.borderColor = t.gold + '25'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Company</label>
                        <input name="company" value={form.company} onChange={handleChange} placeholder="Your company" style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = t.gold + '66'; e.target.style.boxShadow = `0 0 0 3px ${t.gold}0f`; }}
                          onBlur={(e) => { e.target.style.borderColor = t.gold + '25'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Message <span style={{ color: t.gold }}>*</span></label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                        placeholder="Tell me about your project or opportunity…"
                        style={{ ...inputStyle, resize: 'none' }}
                        onFocus={(e) => { e.target.style.borderColor = t.gold + '66'; e.target.style.boxShadow = `0 0 0 3px ${t.gold}0f`; }}
                        onBlur={(e) => { e.target.style.borderColor = t.gold + '25'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Budget (Optional)</label>
                      <select name="budget" value={form.budget} onChange={handleChange}
                        style={{ ...inputStyle, color: form.budget ? t.text : t.textMuted }}
                      >
                        <option value="">Select budget range</option>
                        <option>Under ₹50,000</option>
                        <option>₹50,000 – ₹2,00,000</option>
                        <option>₹2,00,000 – ₹5,00,000</option>
                        <option>₹5,00,000+</option>
                        <option>Let's discuss</option>
                      </select>
                    </div>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}>⚡</motion.span>
                          Sending…
                        </>
                      ) : (
                        <><FiSend size={14} /> Send Owl Post</>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
