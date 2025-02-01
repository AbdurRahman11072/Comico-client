export function CoverInfo() {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=300"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex gap-2">
        <button className="flex-1 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
          Read Chapter 1
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          🔖
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="stats-item">
          <span className="text-purple-400">⭐</span>
          <span>10</span>
          <span className="text-xs text-gray-400">Ratings</span>
        </div>
        <div className="stats-item">
          <span className="text-green-400">📚</span>
          <span>146</span>
          <span className="text-xs text-gray-400">Favorites</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Status</span>
          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm">
            Ongoing
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Type</span>
          <span className="flex items-center gap-1">
            <span className="w-4 h-4">🇰🇷</span>
            Manhwa
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Chapters</span>
          <span>47</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Last update</span>
          <span>6 hours ago</span>
        </div>
      </div>
    </div>
  )
}

