import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/assets/logo/logo.svg" alt="Logo" width={100} height={100} />
        {/* <span className="ml-2 text-xl font-bold">ProViralz</span> */}
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-gray-700">About Us</a>
        <a href="#" className="text-gray-700">Pricing</a>
        <a href="#" className="text-gray-700">Discover</a>
      </div>
      <div className="flex space-x-4">
        <Link href={'/login'}>
            <button className="hidden md:block px-4 py-2 text-[#31013f]">Login</button>
        </Link>
        <Link href={'/register'}>
            <button className="px-4 py-2 bg-[#31013f] text-white rounded">Join Us</button>
        </Link>
      </div>
    </nav>
  );
}