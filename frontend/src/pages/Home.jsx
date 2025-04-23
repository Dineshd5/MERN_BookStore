import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, SetBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")

      .then((response) => {
        SetBooks(response.data.data);
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="
        p-4
      "
    >
      <div
        className="
          flex
          justify-between items-center
        "
      >
        <h1
          className="
            my-8
            text-3xl
          "
        >
          Books List{" "}
        </h1>
        <Link to="/books/create">
          <MdOutlineAddBox
            className="
              text-sky-800 text-4xl
            "
          />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table
          className="
            w-full
            border-separate border-spacing-2
          "
        >
          <thead>
            <tr>
              <th
                className="
                  border-slate-600 rounded-md
                  border
                "
              >
                No
              </th>
              <th
                className="
                  border-slate-600 rounded-md
                  border
                "
              >
                Title
              </th>
              <th
                className="
                  max-md:hidden
                  border-slate-600 rounded-md
                  border
                "
              >
                Author
              </th>
              <th
                className="
                  max-md:hidden
                  border-slate-600 rounded-md
                  border
                "
              >
                Publish Year
              </th>
              <th
                className="
                  border-slate-600 rounded-md
                  border
                "
              >
                Operations{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr
                key={book._id}
                className="
                  h-8
                "
              >
                <td className="text-center border border-slate-700 rounded-md">
                  {index + 1}
                </td>
                <td
                  className="
                    text-center
                    border border-slate-700 rounded-md
                  "
                >
                  {book.title}
                </td>
                <td
                  className="
                    max-md:hidden
                    text-center
                    border border-slate-700 rounded-md
                  "
                >
                  {book.author}
                </td>
                <td
                  className="
                    max-md:hidden
                    text-center
                    border border-slate-700 rounded-md
                  "
                >
                  {book.publishYear}
                </td>
                <td
                  className="
                    text-center
                    border border-slate-700 rounded-md
                  "
                >
                  <div
                    className="
                      flex
                      justify-center gap-x-4
                    "
                  >
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle
                        className="
                          text-2xl text-green-800
                        "
                      />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit
                        className="
                          text-2xl text-yellow-600
                        "
                      />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineAddBox
                        className="
                          text-2xl text-red-600
                        "
                      />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
