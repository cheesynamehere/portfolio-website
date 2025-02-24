export default function Navbar() {
    return (
        <div className="absolute flex flex-row w-screen h-12 justify-end items-center gap-3 bg-[#C14600]">
            <p className="bg-[#E5D0AC] hover:bg-[#6f695d] transition-all duration:300 py-1 px-3 rounded-md text-black">Home</p>
            <p className="bg-[#E5D0AC] hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md text-black">Projects</p>
            <p className="bg-[#E5D0AC] hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Contact</p>
            <p className="bg-[#E5D0AC] hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Recs</p>
        </div>
    );
}