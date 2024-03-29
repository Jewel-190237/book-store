
import { Link } from 'react-router-dom';
import image from '../images/book1.png';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen rounded-xl bg-[#1313130D]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-1/2 ' src={image} />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <Link to={'/listedBooks'}>
                            <button className="btn mt-8 bg-[#23BE0A] text-white">View The List</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;