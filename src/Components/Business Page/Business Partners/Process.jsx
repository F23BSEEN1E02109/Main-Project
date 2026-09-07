import React from 'react';

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Submit Information",
      description: "Interested partners provide the required business information for consideration.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Review",
      description: "The submitted information is reviewed according to the company's business requirements.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Assessment",
      description: "The potential partnership is assessed according to relevant business and partnership criteria.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Approval",
      description: "Suitable partners may be approved for the relevant business partnership opportunity.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Agreement",
      description: "Partnership terms and conditions are discussed and mutually agreed upon.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      number: "06",
      title: "Partnership",
      description: "A formal business relationship is established between the company and partner.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-[1200px] mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-widest text-amber-600 uppercase">
            HOW IT WORKS
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Our Partnership Process
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            A clear and professional process helps us evaluate suitable business partnerships and establish mutually agreed terms.
          </p>
        </div>

        {/* Main Wrapper Box */}
        <div className="bg-white border border-gray-200/80 rounded-[32px] p-6 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group p-8 bg-[#FAFAFA] border border-gray-200/80 rounded-[24px] shadow-sm hover:bg-black hover:border-black transition-all duration-300 cursor-pointer flex flex-col justify-between h-[240px]"
              >
                {/* Top row: Icon and Number */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white border border-amber-200/60 rounded-2xl group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-400 group-hover:text-neutral-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Bottom row: Title and Description */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-neutral-400 leading-relaxed transition-colors line-clamp-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Process;