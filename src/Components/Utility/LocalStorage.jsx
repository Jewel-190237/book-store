import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getListedBooks = () => {
    const getBooks = localStorage.getItem('listed-books');

    if(getBooks){
        return JSON.parse(getBooks)
    }
    return []

}

const saveListedBooks = id =>  {
    const storedBooks = getListedBooks();
    const isExits = storedBooks.find(bookId => id == bookId)

    if(!isExits){
        toast.success('Book Added Successfully')
        storedBooks.push(id)
        localStorage.setItem('listed-books', JSON.stringify(storedBooks))
    }
    else{
        toast.error('Book Already Added')
    }
    <ToastContainer></ToastContainer>
}

export {getListedBooks, saveListedBooks}