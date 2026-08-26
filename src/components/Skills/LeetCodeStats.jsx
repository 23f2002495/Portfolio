"use client";

import { useEffect, useState } from "react";

export default function LeetCodeStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/leetcode");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchStats();
  }, []);

  if (!stats) return <p className="text-gray-400">Loading LeetCode stats...</p>;

  return (
    <div className="bg-white/5 rounded-xl px-6 py-5 mt-5 border border-white/10 backdrop-blur-md">
      <h3 className="text-lg font-semibold mb-2 text-white">LeetCode Stats</h3>

      <div className="flex justify-around text-sm">
        <div>
          <p className="text-green-400 font-bold">{stats.easy}</p>
          <p className="text-gray-400">Easy</p>
        </div>

        <div>
          <p className="text-yellow-400 font-bold">{stats.medium}</p>
          <p className="text-gray-400">Medium</p>
        </div>

        <div>
          <p className="text-red-400 font-bold">{stats.hard}</p>
          <p className="text-gray-400">Hard</p>
        </div>
      </div>
    </div>
  );
}