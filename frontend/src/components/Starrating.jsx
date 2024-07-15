import { useState } from 'react';

function Starrating() {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex justify-start items-center text-white mt-2 gap-4">
      <h1 className="text-[25px] font-bold">Ratings</h1>
      <div className="">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(rating)}
          >
            <span
              className={`text-[40px] ${num <= (rating || hover) ? 'text-[#ef6c00]' : 'text-white '}`}
            >
              &#9733;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Starrating;
