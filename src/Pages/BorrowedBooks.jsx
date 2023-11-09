import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import BorrowedCard from "../components/layout/BorrowedCard";
import emptyCard from "../assets/empty.png";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch(`https://tee-library-server.vercel.app/borrowed-books/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, [user?.email]);
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-center text-xl font-semibold text-[#5352ED] ">
        Borrowed Books: ({cardData.length})
      </h2>
      {cardData.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 mx-3 mt-4">
          {cardData?.map((card, index) => (
            <BorrowedCard
              key={index}
              card={card}
              cardData={cardData}
              setCardData={setCardData}
            ></BorrowedCard>
          ))}
        </div>
      ) : (
        <div className="md:w-5/12 mx-auto">
          <img className="h-90 " src={emptyCard} alt="" />
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
