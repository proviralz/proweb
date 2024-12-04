import Image from "next/image";
import Link from "next/link";

const ForFreelancers = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 rounded-lg shadow-md gap-10">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-lg text-gray-600">For Service Providers</h2>
          <h1 className="text-4xl font-bold text-gray-900">
            Find Work That Fits Your Schedule
          </h1>
          <p className="text-gray-700">
            Join our platform to connect with clients looking for your skills. Set your own rates, choose your projects, and start earning on your terms.
          </p>
          <Link href={'/login'}>
            <button className="mt-4 px-6 py-2 bg-[#31013f] text-white rounded-lg font-semibold hover:bg-purple-800">
              Get Started →
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src="/assets/landing/freelancer.svg"
            alt="Service Provider"
            className="rounded-lg shadow-lg w-full h-auto"
            width={100}
            height={100}
          />
        </div>
      </div>
    );
  };
  
  export default ForFreelancers;