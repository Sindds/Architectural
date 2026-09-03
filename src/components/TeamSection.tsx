import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { TEAM_MEMBERS } from '../data/landingData';
import { Users, Award, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TeamSection: React.FC = () => {
  const { language, t, openAppointmentModal } = useThemeLanguage();

  return (
    <section id="team" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-[1500px] mx-auto w-full">
      {/* Header with entrance/exit animation */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B7E9F]/10 dark:bg-[#7EA2C4]/15 border border-[#5B7E9F]/20 text-[#5B7E9F] dark:text-[#7EA2C4] font-mono text-[10px] sm:text-xs uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" />
          <span>{t.team.sectionBadge}</span>
        </div>

        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-900 dark:text-white">
          {t.team.title}
        </h2>

        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
          {t.team.subtitle}
        </p>
      </motion.div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl overflow-hidden bg-stone-50 dark:bg-[#14171A] border border-stone-200 dark:border-stone-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
                <img
                  src={member.photo}
                  alt={member.name[language]}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-mono text-[10px] uppercase">
                    {member.experienceYears} {t.team.experienceYears}
                  </span>
                  <span className="p-1 rounded-full bg-emerald-500/80 text-white" title="Verified Member">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-display font-bold text-lg uppercase text-neutral-900 dark:text-white leading-tight">
                    {member.name[language]}
                  </h3>
                  <div className="font-mono text-xs text-[#5B7E9F] dark:text-[#7EA2C4] uppercase mt-1">
                    {member.role[language]}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 font-mono text-[11px] text-stone-600 dark:text-stone-400">
                  {member.credentials[language]}
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                  {member.bio[language]}
                </p>

                {/* Achievements */}
                <div className="space-y-1 pt-1">
                  {member.achievements[language].map((ach, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-stone-700 dark:text-stone-300 font-mono">
                      <Award className="w-3 h-3 text-amber-500 shrink-0" />
                      <span className="truncate">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Booking Action */}
            <div className="p-5 pt-0">
              <button
                onClick={openAppointmentModal}
                className="w-full py-2.5 rounded-xl bg-stone-200/70 hover:bg-[#111315] hover:text-white dark:bg-stone-800 dark:hover:bg-white dark:hover:text-[#111315] text-neutral-900 dark:text-white font-display font-bold text-[11px] uppercase tracking-wider transition flex items-center justify-center gap-1.5 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{language === 'ru' ? 'Записаться к инженеру' : 'Book Consultation'}</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
