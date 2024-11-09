import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-5 mt-5 pt-5">
            
            <div>
                <h3 className="text-2xl bg-[#6047EC1A] text-[#6047EC] font-bold rounded-lg m-5 p-5">Reading Time: {readingTime}</h3>
            </div>
            <h1 className="3xl text-center">Bookmarks Blogs:{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;