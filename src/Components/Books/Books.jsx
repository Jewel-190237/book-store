/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Book from "../Book/Book";
import { Link } from "react-router-dom";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className="card bg-[#1313130D] mt-10">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">All Books</h2>
                </div>
            </div>
            <div >
                <button className="mt-10 grid md:grid-cols-3 gap-36 justify-between ml-10">
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)

                    }
                </button>
            </div>

        </div>
    );
};

export default Books;