import BlgoItem from "../blog_item/BlogItem";
import './BlogList.css';

const BlogList = ({blogs}) => {

    return ( 
        <div className="blog-list">
            { blogs.map((blog) => <BlgoItem key={blog.id} blog={blog}/>) }
        </div>
     );
}
 
export default BlogList;