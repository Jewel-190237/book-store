/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getListedBooks } from "../Utility/LocalStorage";
import SingleListedBook from "../SingleListedBook/SingleListedBook";
import WishList from "../WishList/WishList";
import { getWishesList } from "../Utility/WishesLocalStorage";


const ListedBooks = () => {

    const [displayBooks, setDisplayBooks] = useState([])
    const [filterBooks, setFilterBooks] = useState([])

    const [wishList, setWishesList] = useState([])

    const books = useLoaderData();


    useEffect(() => {
        const storeBookIds = getListedBooks()

        if (books.length > 0) {
            const booksListed = books.filter(book => storeBookIds.includes(book.bookId));
            setDisplayBooks(booksListed)
            setFilterBooks(booksListed)
        }
    }, [])

    useEffect(() => {
        const wishesIds = getWishesList()

        if(books.length > 0){
            const wishesBooks = books.filter(wishes => wishesIds.includes(wishes.bookId))
            setDisplayBooks(wishesBooks)
            setWishesList(wishesBooks)
        }
    },[])

    
    const handleRating = filter => {
        if(filter === 'rating'){
            const rating = filterBooks.sort((a, b) => b.rating - a.rating)
            setFilterBooks(rating)
            console.log(rating)
        }
        else if(filter === 'page'){
            const page = filterBooks.sort((a, b) => b.totalPages - a.totalPages)
            setFilterBooks(page)
            console.log(page)
        }
        else if(filter === 'year'){
            const year = filterBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            setFilterBooks(year)
            console.log(year)
        }
    }

    return (
        <div> 
            <div className="card bg-[#1313130D]">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Books </h2>
                </div>
            </div>

            <div className=" text-center flex justify-center m-8">
                <details className="dropdown">
                    <summary className="m-1 btn px-12 bg-[#23BE0A]">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                        <li onClick={() =>handleRating('rating')}><a>Rating</a></li>
                        <li onClick={() =>handleRating('page')}><a>Number of Pages</a></li>
                        <li onClick={() =>handleRating('year')}><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>


            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Read List" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    {
                        filterBooks.map(book => <SingleListedBook key={book.bookId} book={book}></SingleListedBook>)
                    }

                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Wish List" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    {
                        filterBooks.map(book => <WishList key={book.bookId} book={book}></WishList>)
                    }

                </div>

            </div>
        </div>
    );
};

export default ListedBooks;