import React, { useState } from "react";

const GlobalJourney = () => {
  const journeys = [
    {
      number: "01",
      country: "Pakistan",
      title: "Where Our Journey Begins",
      description:
        "Pakistan represents an important part of our global journey and foundation from which YES TIME GLOBAL continues to grow.",
      location: "Current Presence",
      side: "left",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      posterImg: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      number: "02",
      country: "Nepal",
      title: "Building New Connections",
      description:
        "Our journey extends into Nepal, creating opportunities to build relationships and strengthen our international network.",
      location: "Global Presence",
      side: "right",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      posterImg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      number: "03",
      country: "Indonesia",
      title: "Expanding Our Reach",
      description:
        "Indonesia is another important part of our growing international presence as we continue exploring new markets and opportunities.",
      location: "Global Presence",
      side: "left",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      posterImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      number: "04",
      country: "Future Markets",
      title: "The Journey Continues",
      description:
        "Our vision goes beyond today's markets. We are looking toward new countries, partnerships, and opportunities for future expansion.",
      location: "Future Expansion",
      side: "right",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      posterImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  // State to track playing status per card
  const [playingVideos, setPlayingVideos] = useState({});

  const toggleVideo = (number) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [number]: !prev[number],
    }));
  };

  return (
    <section className="w-full min-h-screen bg-[#f8fafc] py-10 px-5 box-border font-sans text-[#0c172b] overflow-hidden" id="global-journey">
      <div className="w-[min(1150px,100%)] mx-auto">
        
        {/* Badge */}
        <div className="w-fit mx-auto mb-2.5 px-4 py-1.5 rounded-[20px] bg-[#050a12] border border-[#dba900] text-[#e5b322] text-[10px] font-bold tracking-[0.4px] shadow-[0_3px_12px_rgba(0,0,0,0.08)]">
          ◉ OUR GLOBAL JOURNEY
        </div>

        {/* Title */}
        <h2 className="m-0 text-center text-[#d99f00] text-[clamp(28px,4.5vw,42px)] leading-[1.15] font-bold">
          Global Reach
        </h2>

        {/* Title Line */}
        <div className="flex items-center justify-center gap-2 my-[14px] mx-auto">
          <span className="block h-[1px] w-[38px] bg-[#e1ad18]" />
          <span className="block h-[1px] w-[38px] bg-[#e1ad18]" />
          <span className="block h-[1px] w-[38px] bg-[#e1ad18]" />
        </div>

        {/* Intro */}
        <p className="max-w-[680px] mx-auto text-center text-[#536174] text-[13px] leading-[1.6]">
          Our international journey continues to evolve as we connect new countries, build stronger relationships, and explore opportunities beyond borders.
        </p>

        {/* Timeline */}
        <div className="relative my-[65px] mx-auto w-[min(1000px,100%)]">
          {/* Vertical Center Line */}
          <div className="absolute top-[10px] bottom-[10px] left-4 md:left-1/2 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#e1ad18] to-transparent" />

          {journeys.map((item) => {
            const isPlaying = playingVideos[item.number];
            const isLeft = item.side === "left";

            return (
              <div 
                className={`relative flex w-full min-h-[220px] md:min-h-[280px] mb-7 md:mb-[50px] box-border ${
                  isLeft ? "md:justify-start md:pr-[calc(50%+35px)]" : "md:justify-end md:pl-[calc(50%+35px)]"
                } justify-start pl-[45px] md:pl-0`} 
                key={item.number}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-[28px] w-3 h-3 -translate-x-1/2 rounded-full bg-[#f6b900] border-2 border-white shadow-[0_0_0_1px_#edc75a,0_0_12px_rgba(225,173,24,0.35)] z-[3]" />

                {/* Card */}
                <article 
                  className="relative w-full min-h-[220px] md:min-h-[260px] overflow-hidden rounded-[14px] border border-[rgba(255,255,255,0.22)] bg-[#071326] shadow-[0_16px_36px_rgba(15,31,52,0.15)] transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer group hover:-translate-y-2.5 hover:scale-[1.02] hover:shadow-[0_24px_45px_rgba(10,25,45,0.28)] hover:border-[rgba(225,173,24,0.75)]"
                  onClick={() => toggleVideo(item.number)}
                >
                  {isPlaying ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.65] transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 group-hover:opacity-[0.85]"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.65] transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 group-hover:opacity-[0.85]"
                      src={item.posterImg}
                      alt={item.country}
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none z-[1]"
                    style={{
                      backgroundImage: `linear-gradient(90deg, rgba(3,12,27,0.95) 0%, rgba(5,16,34,0.75) 50%, rgba(4,15,30,0.4) 100%), linear-gradient(0deg, rgba(1,7,17,0.7), transparent 60%)`
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-[2] min-h-[220px] md:min-h-[260px] p-[18px] md:py-[24px] md:px-[26px] box-border text-white">
                    <div className="flex items-center gap-3 mb-[18px]">
                      <div className="w-[26px] h-[26px] grid place-items-center rounded-[6px] border border-[rgba(225,173,24,0.75)] text-[#e4b11b] text-[13px] shrink-0">
                        ⌖
                      </div>

                      <div>
                        <div className="text-[#dca800] text-[11px] font-bold mb-0.5">{item.number}</div>
                        <div className="text-white text-base font-bold">{item.country}</div>
                      </div>

                      <div className="ml-auto border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] rounded-[14px] px-3 py-1.5 text-[#b7c0cc] text-[10px] whitespace-nowrap">
                        {item.number === "04"
                          ? "Future Expansion"
                          : item.number === "01"
                          ? "Current Presence"
                          : "Global Presence"}
                      </div>
                    </div>

                    <h3 className="m-0 mb-2.5 text-[#f0bd18] text-base font-bold">
                      {item.title}
                    </h3>

                    <p className="m-0 max-w-[95%] text-[#c4cedb] text-[11.5px] leading-[1.6]">
                      {item.description}
                    </p>

                    <div className="absolute left-[18px] md:left-[26px] right-[18px] md:right-[26px] bottom-4 flex items-center gap-2 pt-3 border-t border-[rgba(255,255,255,0.1)] text-[#aeb9c8] text-[10px]">
                      <span className="text-[#e5b323]">◉</span>
                      {item.location}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="w-[min(1000px,100%)] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-[15px] md:gap-[30px] min-h-[95px] p-5 md:py-[20px] md:px-[26px] box-border rounded-[14px] bg-[#03070d] border border-[#dca900] shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
          <div className="flex-1">
            <h3 className="m-0 mb-1.5 text-[#f0bf19] text-[13px] font-bold">◉ The journey continues</h3>
            <p className="m-0 text-[#aeb8c6] text-[11px] leading-[1.55]">
              Every new market represents a new opportunity to connect people, businesses, and ideas. Our vision is to continue growing while creating meaningful international relationships.
            </p>
          </div>

          <button
            type="button"
            className="border-0 outline-none py-3.5 px-6 rounded-lg bg-[#e1aa09] text-[#070b12] text-[11px] font-bold cursor-pointer whitespace-nowrap transition-all duration-350 hover:-translate-y-1 hover:scale-104 hover:bg-[#f4c52d] hover:shadow-[0_10px_20px_rgba(225,170,9,0.35)] active:-translate-y-0.5 active:scale-98 w-full md:w-auto"
            onClick={() =>
              document
                .getElementById("global-journey")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Expansion →
          </button>
        </div>

      </div>
    </section>
  );
};

export default GlobalJourney;