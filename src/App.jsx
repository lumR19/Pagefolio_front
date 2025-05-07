
import './App.css'
import '/reviews.json'
import { useEffect, useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">وش قالوا عن هـبـّـاب؟</h2>

      <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide px-2 py-4">
        <div className="inline-flex gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              {/* بطاقة التعليق */}
              <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 min-w-[180px] cursor-pointer">
                <span className="text-yellow-400 text-lg">
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </span>
                <span className="text-sm text-gray-700">{review.name}</span>
              </div>

              {/* التعليق (إذا فيه) */}
              {hoveredIndex === index && review.comment && (
                <div className="absolute z-10 top-14 left-1/2 -translate-x-1/2 w-[300px] bg-white p-4 rounded-xl shadow-lg text-right text-sm leading-relaxed transition-all">
                  <div className="text-yellow-400 text-lg mb-1">
                    {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                  </div>
                  <div className="font-semibold text-gray-800">{review.name}</div>
                  <p className="text-gray-700 mt-1">{review.comment}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
