

const Blog = ({blog}) => {

    const {title, id, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt="" />

            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14 " src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h3 className="3xl">{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;