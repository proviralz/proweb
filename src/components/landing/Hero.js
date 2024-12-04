import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className=" flex flex-col md:flex-row mt-5 px-5 md:px-10">
            <div className="text-center py-12 bg-white text-black flex-1">
                <h1 className="text-3xl md:text-5xl font-bold">Find The Best Service Providers Right Away</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg">
                Connect with skilled professionals right away for top-notch services.
                </p>
                <Link href={'/login'}>
                    <button className="mt-6 px-6 py-3 bg-[#31013f] text-white font-bold rounded">
                        Get Started
                    </button>
                </Link>
            </div>
            <div className=" flex-1">
                <Image src={'/assets/landing/hero.svg'} alt="" height={500} width={500} className=" w-full h-auto" />
            </div>
        </section>
    );
  }