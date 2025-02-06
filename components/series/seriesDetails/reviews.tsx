export function Reviews() {
  const reviews = [
    {
      id: 1,
      user: "MusicLover123",
      rating: 5,
      content:
        "This manhwa is absolutely amazing! The way it portrays the struggles and triumphs of a genius composer is both inspiring and heart-wrenching. I can't wait for the next chapter!",
      date: "2 days ago",
    },
    {
      id: 2,
      user: "ArtisticSoul",
      rating: 4,
      content:
        "The artwork is stunning and the story is captivating. I'm loving the character development so far. My only complaint is that the releases are too slow!",
      date: "1 week ago",
    },
    {
      id: 3,
      user: "CriticEye",
      rating: 3,
      content:
        "While the premise is interesting, I feel like the pacing could be improved. Some parts drag on too long while others feel rushed. Still, it's worth reading for the beautiful art and intriguing plot twists.",
      date: "2 weeks ago",
    },
  ];

  return (
    <div className="space-y-6  h-[600px] overflow-scroll">
      <div className="bg-gray-900/50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-medium">{review.user}</span>
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-300">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-900/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Rating
            </label>
            <select
              id="rating"
              className="w-full bg-gray-800 rounded-md border-gray-700 text-white"
            >
              <option>5 Stars</option>
              <option>4 Stars</option>
              <option>3 Stars</option>
              <option>2 Stars</option>
              <option>1 Star</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="review"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Your Review
            </label>
            <textarea
              id="review"
              rows={4}
              className="w-full bg-gray-800 rounded-md border-gray-700 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
