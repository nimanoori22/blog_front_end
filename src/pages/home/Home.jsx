import './home.styles.scss'
import BlogList from '../../components/blog_list/BlogList'
import useFetch from '../../hooks/useFetch'
import kai from '../../assets/kai.jpg'


const Home = () => {

    const { data: blogs, isPendding, error } = useFetch('http://localhost:7000/posts/');

    return ( 
        <div className='home'>
            <div className="header">
                <img src={kai} alt="" />
                
                <div className="intro">
                    <p className='name'>nima noori</p>
                    <p id="specialty">full stack developer</p>
                </div>
                <div className="category">
                    <ul>
                        <li>all posts</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Tutorial</li>
                        <li>Search</li>
                    </ul>
                </div>
            </div>

            {console.log(blogs)}

            {error && <div>{error}</div>}
            { isPendding && <div>loading...</div> }
            {blogs && <BlogList blogs={blogs.posts}/>}
        </div>
    )
}
 
export default Home;