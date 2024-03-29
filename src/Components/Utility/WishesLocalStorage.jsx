import { getListedBooks } from "./LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const getWishesList = () => {
    const wishesList = localStorage.getItem('wishes-list')

    if(wishesList){
        return JSON.parse(wishesList);
    }
    return []
}

const saveWishesList = id => {
    const wishesBookList = getWishesList()
    const isExitsWishesBooks = wishesBookList.find(wishId => id == wishId)

    const listedBooksId = getListedBooks()
    const isExitsListedBooks = listedBooksId.find(listedId => id == listedId)

    if(!isExitsListedBooks && !isExitsWishesBooks){
        toast.success('Book Added Successfully in Wish List')
        wishesBookList.push(id)
        localStorage.setItem('wishes-list', JSON.stringify(wishesBookList))
    }
    else {
        toast.error('Book Already Added in Wish List')
    }
    <ToastContainer></ToastContainer>
}

export{getWishesList, saveWishesList}
