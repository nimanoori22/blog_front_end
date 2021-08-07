import './BlogItem.scss'
import { Link } from 'react-router-dom';

const BlgoItem = ({blog}) => {

    return ( 
        <div className="blog-item">
            <div className="topic">css</div>
            <div className="date">{blog.created_at}</div>
            <div className="title">{blog.title}</div>
        </div>
     );
}
 
export default BlgoItem;