import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarPlan = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = ["All", "Lease-to-Own", "EV Financing", "Fleet Packages", "Insurance Bundles", "Maintenance Plans"];

  const carPlanCards = [
    {
      id: 1,
      title: "Zero-Down Electric Vehicle Lease Plan",
      category: "EV Financing",
      discount: "0% Down Payment",
      price: "$349 / mo",
      originalPrice: "$450 / mo",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive eco-friendly vehicle financing package featuring flexible monthly terms and zero initial capital outlay."
    },
    {
      id: 2,
      title: "Flexible Lease-to-Own SUV Program",
      category: "Lease-to-Own",
      discount: "Low APR 2.9%",
      price: "$420 / mo",
      originalPrice: "$510 / mo",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      description: "Gradual ownership acquisition plan designed for modern families seeking reliable crossover transport."
    },
    {
      id: 3,
      title: "Commercial Fleet Expansion Finance Plan",
      category: "Fleet Packages",
      discount: "Save $2,000",
      price: "Custom Tier",
      originalPrice: "Enterprise Quote",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      description: "Tailored financing structure for logistics companies scaling up their delivery fleet with optimized interest rates."
    },
    {
      id: 4,
      title: "Comprehensive Auto Insurance & Warranty Bundle",
      category: "Insurance Bundles",
      discount: "30% OFF",
      price: "$85 / mo",
      originalPrice: "$125 / mo",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=80",
      description: "All-in-one coverage protecting your vehicle against collisions, theft, and mechanical breakdown."
    },
    {
      id: 5,
      title: "Pre-Paid Periodic Maintenance Service Plan",
      category: "Maintenance Plans",
      discount: "25% OFF",
      price: "$299 / yr",
      originalPrice: "$400 / yr",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      description: "Scheduled oil changes, brake inspections, and multi-point tune-ups covered under a single annual subscription."
    },
    {
      id: 6,
      title: "Luxury Sedan Executive Ownership Package",
      category: "Lease-to-Own",
      discount: "Save $1,500",
      price: "$699 / mo",
      originalPrice: "$799 / mo",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
      description: "Premium corporate vehicle acquisition plan featuring concierge support and priority maintenance services."
    },
    {
      id: 7,
      title: "Hybrid Car Transition Incentive Plan",
      category: "EV Financing",
      discount: "15% Rebate",
      price: "$289 / mo",
      originalPrice: "$340 / mo",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      description: "Subsidized financing program encouraging drivers to switch to fuel-efficient hybrid engine options."
    },
    {
      id: 8,
      title: "Startup Delivery Fleet Financing Tier",
      category: "Fleet Packages",
      discount: "Low Down Payment",
      price: "Custom Rate",
      originalPrice: "Standard Terms",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      description: "Specialized financial backing created specifically for emerging delivery startups and small businesses."
    },
    {
      id: 9,
      title: "Extended Powertrain Protection Plan",
      category: "Insurance Bundles",
      discount: "20% OFF",
      price: "$45 / mo",
      originalPrice: "$60 / mo",
      image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80",
      description: "Targeted mechanical breakdown insurance covering engine, transmission, and drivetrain components."
    }
  ];

  const filteredCards = selectedCategory === "All" 
    ? carPlanCards 
    : carPlanCards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1300px] mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              VEHICLE FINANCING & OWNERSHIP PLANS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Car & <span className="text-amber-400">Financing Plans Portal</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Explore flexible lease-to-own programs, electric vehicle financing options, fleet packages, and insurance bundles tailored for your lifestyle or business.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-neutral-800/80 pb-6">
          {categoriesList.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20' 
                  : 'bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((item) => (
            <div 
              key={item.id}
              className="bg-[#0b1320] border border-neutral-800 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-500 shadow-xl"
            >
              {/* Image Container with Discount Badge */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-xs font-extrabold tracking-wider shadow-md">
                    {item.discount}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-neutral-300 text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Plan Rate</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-extrabold text-amber-400">{item.price}</span>
                      <span className="text-xs text-neutral-500 line-through">{item.originalPrice}</span>
                    </div>
                  </div>

                  {/* Non-functional button */}
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-bold text-xs tracking-wider uppercase hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 cursor-pointer"
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Single Contact Button */}
        <div className="bg-gradient-to-br from-[#0b1320] via-[#09101a] to-[#111c3a] border border-neutral-800 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              CUSTOM FINANCING & ADVISORY CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need a personalized financing structure or fleet package?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Our financial consultants assist with tailored credit approvals, leasing structures, and corporate insurance packages. Get in touch with our team to design your plan.
            </p>
          </div>

          <div className="shrink-0">
            <button 
              type="button"
              onClick={() => navigate('/contact-us')}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-2xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-amber-400/20 cursor-pointer flex items-center gap-2"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CarPlan;