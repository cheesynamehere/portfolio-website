import Link from "next/link";

export default function Navbar() {
    return (
        <div className="z-50 absolute flex flex-row w-screen h-12 justify-end items-center gap-3 bg-[#C14600] font-kumbh_sans text-black">
            <Link href="/"><p className="bg-[#E5D0AC] hover:bg-[#6f695d] transition-all duration:300 py-1 px-3 rounded-md">Home</p></Link>
            <p className="bg-[#E5D0AC] hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Projects</p>
            <Link href="/resume"><p className="bg-[#E5D0AC] hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Resume</p></Link>
            <p className="bg-[#E5D0AC] hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Recs</p>
            <p className="bg-[#E5D0AC] hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Contact</p>
        </div>
    );
}