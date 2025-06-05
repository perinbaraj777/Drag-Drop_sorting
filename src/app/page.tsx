"use client";
import ItineraryList from "./itineraryList";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/app/mapview"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="block sm:hidden px-4 py-10">
        <div className="bg-white rounded-lg p-3">
          <h1 className="text-3xl text-pink-400 font-bold mb-6">
            Y2Z Travel Itinerary
          </h1>
          <div className="flex justify-between items-center mb-6">
            <p className="text-lg text-gray-700 ml-5">Day</p>
            <h1 className="text-2xl font-bold mr-60">Itinerary</h1>
          </div>
          <ItineraryList />
        </div>
      </div>

      <div className="hidden sm:flex bg-black min-h-screen">
        <div className="max-w-xl w-1/2 py-10 px-4 ml-5 bg-black">
          <div className="bg-white rounded-lg p-3">
            <h1 className="text-3xl text-pink-400 font-bold mb-6">
              Y2Z Travel Itinerary
            </h1>
            <div className="flex justify-between items-center mb-6">
              <p className="text-lg text-gray-700 ml-5">Day</p>
              <h1 className="text-2xl font-bold mr-60">Itinerary</h1>
            </div>
            <ItineraryList />
          </div>
        </div>

        <div className="w-1/2">
          <MapView />
        </div>
      </div>
    </main>
  );
}
