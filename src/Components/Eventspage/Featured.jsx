import React, { useState } from 'react';
import { useLanguage } from '../../i18n.js';

const Featured = () => {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const eventsData = [
    {
      id: 1,
      titleKey: "event1_title",
      descriptionKey: "event1_desc",
      dateKey: "event1_date",
      timeKey: "event1_time",
      locationKey: "event1_location",
      attendeesKey: "event1_attendees",
      statusKey: "status_upcoming",
      categoryKey: "category_conference",
      categoryBg: "bg-amber-100 text-amber-800 border-amber-300",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
    },
    {
      id: 2,
      titleKey: "event2_title",
      descriptionKey: "event2_desc",
      dateKey: "event2_date",
      timeKey: "event2_time",
      locationKey: "event2_location",
      attendeesKey: "event2_attendees",
      statusKey: "status_upcoming",
      categoryKey: "category_workshop",
      categoryBg: "bg-purple-100 text-purple-700 border-purple-200",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    },
    {
      id: 3,
      titleKey: "event3_title",
      descriptionKey: "event3_desc",
      dateKey: "event3_date",
      timeKey: "event3_time",
      locationKey: "event3_location",
      attendeesKey: "event3_attendees",
      statusKey: "status_upcoming",
      categoryKey: "category_seminar",
      categoryBg: "bg-blue-100 text-blue-700 border-blue-200",
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    },
    {
      id: 4,
      titleKey: "event4_title",
      descriptionKey: "event4_desc",
      dateKey: "event4_date",
      timeKey: "event4_time",
      locationKey: "event4_location",
      attendeesKey: "event4_attendees",
      statusKey: "status_upcoming",
      categoryKey: "category_networking",
      categoryBg: "bg-emerald-100 text-emerald-700 border-emerald-200",
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    },
    {
      id: 5,
      titleKey: "event5_title",
      descriptionKey: "event5_desc",
      dateKey: "event5_date",
      timeKey: "event5_time",
      locationKey: "event5_location",
      attendeesKey: "event5_attendees",
      statusKey: "status_upcoming",
      categoryKey: "category_conference",
      categoryBg: "bg-amber-100 text-amber-800 border-amber-300",
      videoUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",
    },
    {
      id: 6,
      titleKey: "event6_title",
      descriptionKey: "event6_desc",
      dateKey: "event6_date",
      timeKey: "event6_time",
      locationKey: "event6_location",
      attendeesKey: "event6_attendees",
      statusKey: "status_upcoming",
      categoryKey: "category_conference",
      categoryBg: "bg-amber-100 text-amber-800 border-amber-300",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  return (
    <section id="featured-section" className="w-full bg-[#f8fafc] py-20 px-6 sm:px-10 lg:px-16 font-sans text-slate-800">
      
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-bold uppercase tracking-wider mb-4">
          <span>✨</span>
          <span>{t('badge_featured_events')}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a1128] tracking-tight mb-4">
          {t('featured_events_heading')}
        </h2>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {t('featured_events_subtext')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelectedVideo(event.videoUrl)}
            className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-amber-400 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <video
                  src={event.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                <div className="absolute top-3 left-3 bg-amber-100/90 backdrop-blur-md text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-300 shadow-sm">
                  {t(event.statusKey)}
                </div>

                <div className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${event.categoryBg}`}>
                  {t(event.categoryKey)}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded uppercase">
                  {t('watch_video_tag')}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a1128] mb-2 transition-colors duration-300 group-hover:text-amber-500">
                  {t(event.titleKey)}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {t(event.descriptionKey)}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-amber-50 text-amber-600 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{t(event.dateKey)}</p>
                      <p className="text-[11px] text-gray-400">{t(event.timeKey)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-700">{t(event.locationKey)}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-1 rounded bg-emerald-50 text-emerald-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-800">{t(event.attendeesKey)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-amber-400 text-3xl font-bold transition-colors z-50 p-2 cursor-pointer"
          >
            ✕
          </button>

          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Featured;