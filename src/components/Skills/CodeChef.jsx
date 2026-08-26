"use client";

import { FaStar } from "react-icons/fa";

export default function Codechef() {

  // ✅ HARDCODED VALUES
  const stats = {
    stars: 2,       
    rating: 1437,
    solved: 214,
  };

  // ⭐ convert number → ***
  const starDisplay = "⭐".repeat(stats.stars);

  return (
    <div className="bg-white/5 rounded-xl px-6 py-5 mt-5 border border-white/10 backdrop-blur-md">
      
      <h3 className="text-lg font-semibold text-gray-200 mb-4">
        CodeChef Stats
      </h3>

      <div className="flex justify-between items-center text-sm">

        {/*  Stars */}
        <div className="flex flex-col items-center">
        
        {/* ⭐⭐⭐ stars */}
        <div className="flex gap-1 mb-1">
            {Array.from({ length: stats.stars }).map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-sm hover:scale-110 transition" />
            ))}
        </div>

        <span className="text-gray-400 text-xs">Stars</span>
        </div>

        {/* 📊 Rating */}
        <div className="flex flex-col items-center">
          <p className="text-blue-400 font-semibold">
            {stats.rating}
          </p>
          <span className="text-gray-400 text-xs">Rating</span>
        </div>

        {/* ✅ Solved */}
        <div className="flex flex-col items-center">
          <p className="text-green-400 font-semibold">
            {stats.solved}
          </p>
          <span className="text-gray-400 text-xs">Solved</span>
        </div>

      </div>
    </div>
  );
}