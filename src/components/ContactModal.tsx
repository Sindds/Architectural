import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { X, Send, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactModal: React.FC = () => {
  const { isContactModalOpen, closeContactModal, modalContextNote, t } =
    useThemeLanguage();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messenger, setMessenger] = useState<'call' | 'whatsapp' | 'telegram'>('telegram');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    closeContactModal();
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setPhone('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isContactModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white dark:bg-[#121519] rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xl p-6 sm:p-8 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 hover:text-neutral-950 dark:text-stone-400 dark:hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#5B7E9F] dark:text-[#7EA2C4] font-mono text-xs uppercase font-bold tracking-wider">
                      <Compass className="w-4 h-4" />
                      <span>ARCLINE ESTATE // VIP</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white uppercase leading-snug">
                      {t.modal.title}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
                      {t.modal.subtitle}
                    </p>
                    {modalContextNote && (
                      <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-[11px] font-mono text-stone-700 dark:text-stone-300">
                        {modalContextNote}
                      </div>
                    )}
                  </div>

                  {/* Inputs */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-500 mb-1">
                        {t.modal.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.modal.namePlaceholder}
                        className="w-full px-4 py-3 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-sm focus:outline-none focus:border-[#5B7E9F] text-neutral-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-500 mb-1">
                        {t.modal.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t.modal.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-sm focus:outline-none focus:border-[#5B7E9F] text-neutral-900 dark:text-white"
                      />
                    </div>

                    {/* Preferred Messenger */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-500 mb-2">
                        {t.modal.preferredMessenger}
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {[
                          { id: 'telegram', label: t.modal.telegram },
                          { id: 'whatsapp', label: t.modal.whatsapp },
                          { id: 'call', label: t.modal.call },
                        ].map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setMessenger(m.id as any)}
                            className={`py-2 px-3 rounded-xl border text-center transition font-mono ${
                              messenger === m.id
                                ? 'border-[#5B7E9F] bg-stone-100 dark:bg-stone-900 text-[#5B7E9F] dark:text-[#7EA2C4] font-bold'
                                : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400'
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-full bg-[#111315] hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-stone-200 dark:text-[#111315] font-display font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{t.modal.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.modal.submitBtn}</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center font-bold text-2xl">
                    ✓
                  </div>
                  <h4 className="font-display font-bold text-2xl text-neutral-950 dark:text-white uppercase">
                    {t.modal.successTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-sm mx-auto leading-relaxed">
                    {t.modal.successMsg}
                  </p>
                  <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-900 font-mono text-xs text-stone-600 dark:text-stone-400">
                    {phone} • {messenger.toUpperCase()}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="mt-4 px-8 py-3 rounded-full bg-[#111315] dark:bg-white text-white dark:text-[#111315] text-xs font-display font-bold uppercase tracking-wider"
                  >
                    {t.modal.close}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
