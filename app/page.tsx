import Image from "next/image";

export default function Home() {
  return (
  <div>
      <div className="absolute flex flex-row w-screen h-12 justify-end items-center gap-3 bg-amber-600">
        <p className="bg-amber-700 hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Home</p>
        <p className="bg-amber-700 hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Projects</p>
        <p className="bg-amber-700 hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Contact</p>
        <p className="bg-amber-700 hover:bg-amber-800 transition-all duration:300 py-1 px-3 rounded-md">Recs</p>
      </div>
      <div className="flex flex-column justify-center items-center h-screen">
      <p>Hello!</p>
      <p>My name is Jarred Ramos</p>
      <p>Test</p>
      </div>



  </div>
  );
}
