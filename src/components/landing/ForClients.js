import Image from "next/image";

const ForClients = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat  shadow-md overflow-hidden" style={{ backgroundImage: "url('/assets/landing/client.svg')" }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Content */}
        <div className="relative p-8 md:p-16 text-white space-y-6 max-w-xl">
          <h2 className="text-lg text-gray-300">For Clients</h2>
          <h1 className="text-4xl font-bold">
            Join Thousands of Satisfied Clients
          </h1>
          <p className="text-gray-300">
            Join a community of businesses that trust us to connect them with top freelancers. Start your project today and experience the benefits of expert talent.
          </p>
  
          {/* Buttons */}
          <div className="flex space-x-4 mt-8">
            <div className="bg-[#fff800] p-4 rounded-lg shadow-lg cursor-pointer hover:bg-yellow-500 transition">
              <h3 className="text-xl font-semibold text-gray-900">Explore Projects and Discover Talent</h3>
              <p className="text-gray-800">Project catalogue →</p>
            </div>
            <div className="bg-[#fff800] p-4 rounded-lg shadow-lg cursor-pointer hover:bg-yellow-500 transition">
              <h3 className="text-xl font-semibold text-gray-900">Post Your Projects, Hire The Best</h3>
              <p className="text-gray-800">Find Talent →</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ForClients;