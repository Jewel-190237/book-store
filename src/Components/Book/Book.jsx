/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";


const Book = ({ book }) => {

    const { bookId, bookName, image, author, rating, category, tags } = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="p-10 bg-[#F3F3F3] m-4">
                        <img src={image} alt="Book" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <p className="text-left">{tags[0]}</p>
                            <p className="text-right">{tags[1]}</p>
                        </div>
                        <h2 className="text-2xl text-left">{bookName}</h2>
                        <p className="text-left">By {author}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <p className="p-6">{category}</p>
                        <div className="p-6 gap-2">
                            <p className="flex"> {rating} <span><CiStar></CiStar></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;