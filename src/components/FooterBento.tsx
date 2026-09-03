import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { Compass, MapPin, Clock, Globe, Sun, Moon, ArrowUpRight, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export const FooterBento: React.FC = () => {
  const { language, toggleLanguage, activeTheme, toggleTheme, t, openContactModal, navigateTo } =
    useThemeLanguage();

  // Active map provider: defaults to 'yandex' in Russian mode and 'google' in English mode
  const [mapProvider, setMapProvider] = useState<'yandex' | 'google'>(
    language === 'ru' ? 'yandex' : 'google'
  );

  // Sync map provider when language changes
  React.useEffect(() => {
    setMapProvider(language === 'ru' ? 'yandex' : 'google');
  }, [language]);

  const yandexMapSrc =
    'https://yandex.ru/map-widget/v1/?ll=37.198539%2C55.795642&z=14&pt=37.198539,55.795642,pm2rdm';
  const googleMapSrc =
    'https://maps.google.com/maps?q=Riga+Land+Business+Center+Moscow&t=&z=14&ie=UTF8&iwloc=&output=embed';

  const directionsUrl =
    mapProvider === 'yandex'
      ? 'https://yandex.ru/maps/?rtext=~55.795642,37.198539'
      : 'https://www.google.com/maps/dir/?api=1&destination=55.795642,37.198539';

  return (
    <footer id="contacts" className="w-full pt-8 pb-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[28px] sm:rounded-[36px] bg-[#111315] text-white p-6 sm:p-10 lg:p-14 border border-stone-800 shadow-2xl space-y-10"
      >
        {/* Top Grid: Brand + Office + Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#111315] flex items-center justify-center font-display font-bold text-lg shadow-md">
                <Compass className="w-5 h-5 text-[#5B7E9F]" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-wider uppercase block leading-none">
                  {t.nav.brand}
                </span>
                <span className="font-mono text-[9px] tracking-widest text-[#7EA2C4] uppercase block mt-1">
                  {t.nav.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed font-normal">
              {t.footer.brandDesc}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono font-semibold transition"
              >
                <Globe className="w-3.5 h-3.5 text-[#7EA2C4]" />
                <span>{language.toUpperCase()}</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-xs transition"
                aria-label="Toggle Theme"
              >
                {activeTheme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-[#7EA2C4]" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Col 2: Showroom & Office (4 cols) */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[#7EA2C4] uppercase tracking-wider block font-bold">
              {t.footer.showroomTitle}
            </span>
            <div className="flex items-start gap-2.5 text-stone-200">
              <MapPin className="w-4 h-4 text-[#7EA2C4] shrink-0 mt-0.5" />
              <p className="leading-relaxed font-sans text-xs">
                {t.footer.showroomAddress}
              </p>
            </div>
            <div className="flex items-center gap-2.5 text-stone-400 pt-1">
              <Clock className="w-4 h-4 text-stone-500 shrink-0" />
              <span className="text-[11px]">{t.footer.hours}</span>
            </div>
          </div>

          {/* Col 3: Direct Line & Lead Button (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#7EA2C4] uppercase tracking-wider block font-bold">
              {t.footer.contactsTitle}
            </span>
            <div className="space-y-1.5">
              <a
                href="tel:+74958904412"
                className="text-white hover:text-[#7EA2C4] transition block font-bold text-sm"
              >
                {t.footer.phone}
              </a>
              <a
                href="mailto:vip@arcline-estate.ru"
                className="text-stone-400 hover:text-white transition block"
              >
                {t.footer.email}
              </a>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  openContactModal(
                    language === 'ru' ? 'Футер: VIP Консультация' : 'Footer: VIP Consultation'
                  )
                }
                className="w-full py-3.5 rounded-full bg-white hover:bg-zinc-100 text-[#111315] font-display font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-1.5"
              >
                <span>{t.footer.vipConsultation}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>

        </div>

        {/* Middle Interactive Map Card */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-stone-300 font-bold uppercase tracking-wider">
                {t.footer.mapSectionTitle}
              </span>
              <span className="text-stone-500 hidden sm:inline">
                ({t.footer.mapHint})
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Switch map tab */}
              <div className="inline-flex p-0.5 rounded-full bg-stone-900 border border-stone-800">
                <button
                  type="button"
                  onClick={() => setMapProvider('yandex')}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono transition uppercase ${
                    mapProvider === 'yandex'
                      ? 'bg-white text-[#111315] font-bold shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {t.footer.mapTabYandex}
                </button>
                <button
                  type="button"
                  onClick={() => setMapProvider('google')}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono transition uppercase ${
                    mapProvider === 'google'
                      ? 'bg-white text-[#111315] font-bold shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {t.footer.mapTabGoogle}
                </button>
              </div>

              {/* Direct route link */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 text-[10px] font-mono transition"
              >
                <Navigation className="w-3 h-3 text-[#7EA2C4]" />
                <span>{t.footer.openRoute}</span>
              </a>
            </div>
          </div>

          {/* Map Iframe Container */}
          <div className="w-full h-72 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-800 relative bg-[#181B1F] shadow-inner">
            {mapProvider === 'yandex' ? (
              <iframe
                key="yandex-map"
                src={yandexMapSrc}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                className="w-full h-full border-0 filter invert-[0.88] hue-rotate-180 contrast-[0.95]"
                title="Yandex Map Showroom"
                loading="lazy"
              />
            ) : (
              <iframe
                key="google-map"
                src={googleMapSrc}
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full border-0 filter invert-[0.88] hue-rotate-180 contrast-[0.95]"
                title="Google Map Showroom"
                loading="lazy"
              />
            )}

            {/* Address Badge Overlay */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-xs sm:max-w-sm bg-[#111315]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/10 shadow-xl pointer-events-auto">
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#7EA2C4] uppercase font-bold tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>ARCLINE SHOWROOM</span>
              </div>
              <p className="text-xs text-stone-200 font-sans leading-snug">
                {t.footer.showroomAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-stone-400 gap-4 border-t border-white/10">
          <span>{t.footer.copyright}</span>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-stone-400">
              {t.footer.annexNote}
            </span>
            <span>•</span>
            <button
              onClick={() => navigateTo('404')}
              className="text-stone-400 hover:text-white underline transition"
            >
              {t.nav.test404}
            </button>
          </div>
          <a href="#" className="hover:text-stone-200 transition">
            {t.footer.privacy}
          </a>
        </div>

      </motion.div>
    </footer>
  );
};
