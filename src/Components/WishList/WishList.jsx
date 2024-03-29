/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { IoPeople } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

const WishList = ({book}) => {
    const { bookName, image, author, rating, tags, totalPages, category, publisher, yearOfPublishing } = book

    return (
        <div>
            <div>
                <div className="p-3">
                    <div className="flex mt-10 lg:flex-row gap-8 justify-start rounded-2xl border">
                        <img src={image} className="p-10 m-5 bg-[#1313130D] rounded-lg " />
                        <div className="p-4" >
                            <h1 className="text-2xl font-bold">{bookName}</h1>
                            <p className="py-4">By: {author}</p>

                            <div className="flex">
                                <p className="p-4 my-4 font-bold">Tag</p>
                                <p className="p-4 my-4 mx-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl font-bold">#{book.tags[0]}</p>
                                <p className="p-4 my-4 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl font-bold">#{book.tags[1]}</p>
                                <p className="p-4 my-4 flex justify-center align-middle gap-2">
                                    <span> <IoLocationOutline></IoLocationOutline> </span>
                                    <span>Year Of Publication: {yearOfPublishing}</span>
                                </p>
                            </div>

                            <div className="flex">
                                <p className="py-2 mr-4 flex justify-center align-middle gap-2">
                                    <span><IoPeople></IoPeople></span>
                                    <span>Publisher: {publisher}</span>
                                </p>
                                <p className="py-2 mr-4 flex justify-center align-middle gap-2">
                                    <span> <RiPagesLine></RiPagesLine> </span>
                                    <span>Pages: {totalPages}</span>
                                </p>

                            </div>
                            <hr />
                            <div className="flex">
                                <p className="py-2 m-4 rounded-3xl bg-[#328EFF26] text-[#328EFF] p-8">Category: {category}</p>
                                <p className="py-2 m-4 bg-[#FFAC3324] text-[#FFAC33] rounded-3xl p-8">Rating: {rating}</p>
                                <button>
                                    <p className="py-2 m-4 bg-[#23BE0A] rounded-3xl p-8 text-white font-bold">View Details</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishList;