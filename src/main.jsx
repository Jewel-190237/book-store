import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Banner from './Components/Banner/Banner.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import Books from './Components/Books/Books.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import SingleSoldBook from './Components/SoldBooks/SingleSoldBook.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/banner',
        element: <Banner></Banner>
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>
      },
      {
        path:'/books',
        element: <Books></Books>,
      },
      {
        path: '/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/soldBooks',
        element: <SingleSoldBook></SingleSoldBook>,
        loader: () => fetch('../books.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
