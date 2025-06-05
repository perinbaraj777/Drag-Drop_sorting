'use client';
import Image from "next/image";
import { Trash2, Paperclip, Star, MoreVertical } from "lucide-react";
import { useState } from "react";

export default function ItineraryCard({ title, rating, review, description, day, image }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white p-4 border border-gray-200 text-sm font-medium hover:border-blue-500 hover:border-4 transition-all rounded-lg">
      
      {/* Wrapper for Image + Info in row (desktop) or column (mobile) */}
      <div className="flex flex-col sm:flex-row gap-4">

        {/* Day + Image side-by-side */}
        <div className="flex flex-row items-center gap-2 flex-shrink-0">
          {/* Day Bubble */}
          <div className="relative bg-violet-500 text-white text-xs px-3 py-1 rounded-full w-fit shadow-sm">
            {day}
            <div className="absolute -bottom-1 left-3 w-2 h-2 bg-violet-500 rotate-45 z-0" />
          </div>

          {/* Place Image */}
  <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="rounded-lg object-cover w-[100px] h-[100px]"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col w-full">

          {/* Title and Action Icons */}
          <div className="flex justify-between items-start">
            <div className="text-lg font-semibold">{title}</div>

            {/* Desktop Icons */}
            <div className="gap-2 hidden sm:flex items-center">
              <Image src="/google icon.png" alt="Google" width={30} height={30} />
              <button className="text-blue-500 hover:text-blue-700">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Icons: Google + Menu */}
            <div className="sm:hidden relative flex items-center gap-2">
              <Image src="/google icon.png" alt="Google" width={25} height={25} />
              <button onClick={() => setShowMenu(!showMenu)}>
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>

              {showMenu && (
                <div className="absolute right-0 top-8 bg-white border rounded shadow-md z-10 p-2 flex flex-col space-y-2">
                  <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                    <Paperclip className="w-4 h-4" /> Attach
                  </button>
                  <button className="text-red-500 hover:text-red-700 flex items-center gap-1">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="text-gray-600 font-bold flex items-center gap-1 mt-1">
            {rating} <Star className="w-4 h-4 text-yellow-400 ml-3" fill="currentColor" />
            <span className="text-gray-500">{review}</span>
          </div>

          {/* Description */}
          <div className="text-gray-700 bg-slate-100 rounded-lg p-2 mt-1">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
