import React from 'react';

const Ecosystems = () => {
  const services = [
    {
      title: "Personal Banking",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      items: [
        "Savings Accounts",
        "Current Accounts",
        "Islamic Banking Options",
        "Digital Banking"
      ]
    },
    {
      title: "Business Banking",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800",
      items: [
        "Business Accounts",
        "Trade & Payments",
        "SME Solutions",
        "Corporate Services"
      ]
    },
    {
      title: "Financing Solutions",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
      items: [
        "Auto Financing",
        "Home Financing",
        "Business Loans",
        "Investment Support"
      ]
    },
    {
      title: "Digital & Online Banking",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
      items: [
        "Mobile Banking",
        "Internet Banking",
        "Instant Transfers",
        "24/7 Access"
      ]
    }
  ];

  return (
    <div id="ecosystems-section" className="w-full min-h-screen bg-white font-sans text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto space-y-20">
        
        {/* Top About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-0.5 bg-amber-500"></div>
              <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">ABOUT BANKS & FINANCIAL</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Building a Stronger <br />
              <span className="text-amber-500">Financial Ecosystem</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              YES TIME GLOBAL works with trusted banks and financial institutions to provide secure, transparent, and convenient financial solutions for our members, businesses, and partners.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Whether it's saving, trading, or financing, we make sure our members have access to reliable services and modern financial tools.
            </p>
          </div>

          {/* Right Image with Zoom Hover */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Financial Ecosystem Meeting" 
                className="w-full h-[380px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* Services Header */}
        <div className="text-center space-y-3 pt-6">
          <div className="inline-flex items-center space-x-2">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">OUR FINANCIAL SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Services We Offer
          </h2>
        </div>

        {/* 4 Cards Grid with Floating Hover & Working Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-amber-400 group cursor-pointer"
            >
              {/* Card Image with Zoom Effect */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {service.title}
                  </h3>

                  {/* List Items */}
                  <ul className="space-y-2.5">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2.5 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button with Yellow Hover Effect */}
                <button className="w-full py-3 rounded-xl bg-gray-900 text-white font-bold text-[11px] tracking-wider uppercase transition-all duration-300 hover:bg-amber-400 hover:text-black flex items-center justify-center space-x-2 shadow-sm">
                  <span>LEARN MORE</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Ecosystems;