import Image from "next/image";
import { PiStarFour } from "react-icons/pi";

export default function Features() {
    return (
        <section className="flex flex-col md:flex-row bg-[#FAF1E9] p-8 rounded-lg space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2 h-72 md:h-auto rounded-lg overflow-hidden">
          <Image
            src="/assets/landing/features2.svg" // Replace with your image path
            alt="Man working on laptop"
            layout="fill"
            objectFit="cover"
          />
        </div>
  
        {/* Right Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h4 className="text-purple-600 font-semibold uppercase mb-2">Features</h4>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Proviralz Premium</h2>
  
          {/* Feature Item List */}
          <div className="space-y-6">
            <FeatureItem icon={<PiStarFour className="w-6 h-6 text-purple-500" />} title="Find talent" text={'get to hire artisans and professional near you ranging from tutors,upholstery,hair stylist,nanny,technician,caterer,private chef,plumber,freelancers'}  />
            <FeatureItem icon={<PiStarFour className="w-6 h-6 text-purple-500" />} title="⁠Find customers" text={'find potential client who need your services immediately and are willing to hire you Now.'} />
            <FeatureItem icon={<PiStarFour className="w-6 h-6 text-purple-500" />} title="Reach more audience" text={'Hire marketing team to increase sales, client retention and introduce new offers to your clients'} />
          </div>
        </div>
      </section>
    );
  }


  function FeatureItem({ icon, title, text }) {
    return (
      <div className="flex items-start space-x-4">
        {icon}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">
            {text}
          </p>
        </div>
      </div>
    );
  }