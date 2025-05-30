import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";
const BooksSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      className="
        px-4 py-2 m-4 border-2 border-gray-500 rounded-lg relative hover:shadow-xl"
    >
      <h2
        className="
          px-4 py-1
          bg-red-300
          rounded-lg
          absolute top-1 right-2
        "
      >
        {book.publishYear}
      </h2>
      <h4
        className="
          my-2
          text-gray-500
        "
      >
        {book._id}
      </h4>

      <div
        className="
          flex
          justify-start items-center gap-x-2
        "
      >
        <PiBookOpenTextLight
          className="
            text-red-300 text-2xl
          "
        />
        <h2
          className="
            my-1
          "
        >
          {book.title}
        </h2>
      </div>
      <div
        className="
          flex
          justify-start items-start gap-x-2
        "
      >
        <BiUserCircle
          className="
            text-red-300 text-2xl
          "
        />
        <h2
          className="
            my-1
          "
        >
          {book.author}
        </h2>
      </div>
      <div
        className="
          flex
          mt-4 p-4
          justify-between items-center gap-x-2
        "
      >
        <BiShow
          className="
            text-3xl text-blue-800 hover:text-black cursor-pointer
          "
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle
            className="
              text-2xl text-green-800
              hover:text-black
            "
          />
        </Link>

        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit
            className="
              text-2xl text-yellow-600
              hover:text-black
            "
          />
        </Link>

        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete
            className="
              text-2xl text-red-600
              hover:text-black
            "
          />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BooksSingleCard;
