import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutBento: React.FC = () => {
  const { language } = useThemeLanguage();

  return (
    <section id="about" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* 12-Column Architectural Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column (3 cols): Monospace Section Marker */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3"
        >
          <div className="inline-block font-mono text-xs uppercase tracking-widest text-[#5B7E9F] dark:text-[#7EA2C4] font-semibold">
            {language === 'ru' ? 'О БЮРО // ABOUT' : 'ABOUT ARCLINE'}
          </div>
          <div className="font-mono text-[10px] text-stone-500 dark:text-stone-400 mt-1 uppercase tracking-wider">
            EST. 2011 // MOSCOW
          </div>
        </motion.div>

        {/* Right Column (9 cols): Manifesto & Specifications */}
        <div className="lg:col-span-9 space-y-8 sm:space-y-12">
          {/* Main Architectural Manifesto */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-normal text-2xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tight leading-[1.08] text-neutral-950 dark:text-white break-words"
          >
            {language === 'ru' ? (
              <>
                Мы не строим типовые дома. Мы создаем{' '}
                <span className="text-[#5B7E9F] dark:text-[#7EA2C4] font-medium">
                  архитектурные резиденции
                </span>
                , где панорамный свет и надёжность соединены в{' '}
                <span className="text-[#5B7E9F] dark:text-[#7EA2C4] font-medium">
                  единую систему
                </span>
                .
              </>
            ) : (
              <>
                We do not build generic homes. We engineer{' '}
                <span className="text-[#5B7E9F] dark:text-[#7EA2C4] font-medium">
                  architectural sanctuaries
                </span>
                , where panoramic daylight and engineering durability merge into a{' '}
                <span className="text-[#5B7E9F] dark:text-[#7EA2C4] font-medium">
                  unified ecosystem
                </span>
                .
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-400 max-w-3xl font-normal leading-relaxed"
          >
            {language === 'ru'
              ? 'Каждая резиденция Arcline проектируется по индивидуальному цифровому BIM-проекту с расчетом теплопотерь по европейскому стандарту Passivhaus. Собственный завод клееного бруса с ЧПУ Hundegger K2i и штатный технадзор исключают мостики холода, задержки и непредвиденные перерасходы.'
              : 'Every Arcline residence is engineered through an individual digital BIM model with strict thermal envelope validation under certified Passivhaus standards. Our proprietary CNC fabrication facility and dedicated engineering supervision eliminate thermal bridging, supply delays, and budget overruns.'}
          </motion.p>

          {/* 4 Key Metrics Row with Hairline Dividers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-stone-200 dark:border-stone-800"
          >
            <div className="space-y-1">
              <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white tracking-tight">
                120+
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase text-stone-500 dark:text-stone-400 leading-snug">
                {language === 'ru' ? 'Вилл в Подмосковье' : 'Villas in prime locations'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white tracking-tight">
                80+
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase text-stone-500 dark:text-stone-400 leading-snug">
                {language === 'ru' ? 'Авторских проектов' : 'Signature BIM designs'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white tracking-tight">
                50+
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase text-stone-500 dark:text-stone-400 leading-snug">
                {language === 'ru' ? 'Премиальных фактур' : 'Curated finishes'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#5B7E9F] dark:text-[#7EA2C4] tracking-tight">
                25 {language === 'ru' ? 'лет' : 'years'}
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase text-stone-500 dark:text-stone-400 leading-snug">
                {language === 'ru' ? 'Гарантия на конструктив' : 'Structural warranty'}
              </div>
            </div>
          </motion.div>

          {/* Architectural Bento Sub-Cards: Swiss Purbond & Hundegger Tolerances */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="p-5 sm:p-6 rounded-2xl bg-stone-50 dark:bg-[#121519] border border-stone-200/80 dark:border-stone-800/80 space-y-2 transition-shadow"
            >
              <div className="flex items-center gap-2 text-[#5B7E9F] dark:text-[#7EA2C4] font-mono text-xs uppercase font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Purbond Swiss Eco-Adhesive</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                {language === 'ru'
                  ? 'Сертифицированный австрийский брус с полиуретановым клеем без содержания формальдегида и растворителей. Экологический класс E0.'
                  : 'Certified Austrian engineered timber with polyurethane adhesives completely free of formaldehyde and solvents. Eco-standard E0.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="p-5 sm:p-6 rounded-2xl bg-stone-50 dark:bg-[#121519] border border-stone-200/80 dark:border-stone-800/80 space-y-2 transition-shadow"
            >
              <div className="flex items-center gap-2 text-[#5B7E9F] dark:text-[#7EA2C4] font-mono text-xs uppercase font-bold">
                <Award className="w-4 h-4" />
                <span>Hundegger K2i ±0.2 mm</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                {language === 'ru'
                  ? 'Роботизированный раскрой замковых сопряжений на немецком обрабатывающем центре. Нулевые щели и идеальная геометрия без усадки.'
                  : 'Robotic milling of timber joints on high-speed German machining centers. Zero joint gaps and flawless geometry without settling.'}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
