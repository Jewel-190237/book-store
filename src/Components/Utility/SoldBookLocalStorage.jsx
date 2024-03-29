import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getSoldBooks = () =>{
    const soldBooks = localStorage.getItem('sold-book')

    if(soldBooks){
        return JSON.parse(soldBooks)
    }
    return []
}

const saveSoldBooks = id =>{
    const soldBook = getSoldBooks()

    const isExits = soldBook.find(sold => id == sold)

    if(!isExits){
        toast.success('Book Sold Successfully')
        soldBook.push(id)
        localStorage.setItem('sold-book', JSON.stringify(soldBook))
    }
    else{
        toast.error('Book Already Sold')
    }
    <ToastContainer></ToastContainer>
}

export {getSoldBooks, saveSoldBooks}