import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark,handleMarkAsRead}) => {

    const {title, id, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='w-full mb-8' src={cover} alt="" />

            <div className="flex justify-between mb-5">
                <div className="flex">
                    <img className="w-14 " src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='mt-4 mr-2'>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-red-600 text-2xl'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h3 className="3xl font-bold mb-3">{title}</h3>
            <p className='mb-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-800 underline mb-5 font-bold'>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
}

export default Blog;