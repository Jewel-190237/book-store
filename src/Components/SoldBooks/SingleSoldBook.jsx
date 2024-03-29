import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSoldBooks } from "../Utility/SoldBookLocalStorage";
import SoldBooks from "./SoldBooks";

const SingleSoldBook = () => {

    const [soldBooks, setSoldBooks] = useState([])

    const books = useLoaderData()

    useEffect(() => {
        const soldBookIds = getSoldBooks()

        if (books.length > 0) {
            const soldBook = books.filter(sold => soldBookIds.includes(sold.bookId))
            setSoldBooks(soldBook)
        }
    }, [])
    return (
        <div>
            <div className="card bg-[#1313130D]">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Sold Books</h2>
                </div>
            </div>
            {
                soldBooks.map(book => <SoldBooks key={book.bookId} book={book}></SoldBooks>)
            }
        </div>
    );
};

export default SingleSoldBook;