/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getListedBooks, saveListedBooks } from "../Utility/LocalStorage";
import { saveWishesList } from '../Utility/WishesLocalStorage';
import { saveSoldBooks } from '../Utility/SoldBookLocalStorage';

const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams()
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId == idInt)

    const handleListedBooks = () =>{
        saveListedBooks(idInt) 
    }

    const handleWishesBooks = () => {
        saveWishesList(idInt)
    }
    const handleSellBooks = () => {
        saveSoldBooks(idInt)
    }

    return (
        <div>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <img className='w-96 rounded-2xl bg-[#1313130D] p-10' src={book.image} />
                        <div>
                            <h1 className="text-3xl font-bold w-96 p-4">{book.bookName}</h1>
                            <p className="p-4">By : {book.author}</p>
                            <hr />
                            <p className="font-bold p-4">Review: <span className="font-thin">{book.review}</span></p>
                            <hr />

                            <div className="flex">
                                <p className="p-4 my-4 font-bold">Tag</p>
                                <p className="p-4 my-4 mx-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl font-bold">#{book.tags[0]}</p>
                                <p className="p-4 my-4 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl font-bold">#{book.tags[1]}</p>
                            </div>
                            <hr />
                            <div >
                                <div className="flex mt-3">
                                    <p className="mr-32">Number of page:</p>
                                    <p className="font-bold">{book.totalPages}</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="mr-44">Publisher:</p>
                                    <p className="font-bold">{book.publisher}</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="mr-36">Year of Publish:</p>
                                    <p className="font-bold">{book.yearOfPublishing}</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="mr-52">Rating:</p>
                                    <p className="font-bold">{book.rating}</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <button onClick={handleListedBooks} className="btn btn-outline btn-success mt-8">Read</button>
                                <button onClick={handleWishesBooks} className="btn  mt-8 bg-[#50B1C9] text-white">Wish List</button>
                                <button onClick={handleSellBooks} className="btn  mt-8 bg-[#50B1C9] text-white">Sell Book</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default BookDetails;