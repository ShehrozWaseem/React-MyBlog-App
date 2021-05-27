import { Link } from 'react-router-dom';
import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {

    // const handleDelete = (id) =>{
    //     const newBlog = Blog.filter(blog => blog.id != id);
    //     setBlog(newBlog)
    // }
    const { Blog, isPending, error, NoBlog} = useFetch('http://localhost:8000/blogs')

   return (<div className="home">
            {error && <div>{error}</div>}
            {isPending && <div><h2>Loading...</h2></div> }
            {/* <BlogList Blog={Blog} handleDelete={handleDelete}/> */}
            
            {Blog && <BlogList Blog={Blog} /> }
            {NoBlog && <div><h3>There are no blogs to show. {<Link className='thiscreate' to='/create'>CREATE</Link>} your blog now</h3></div>}
         </div>);
}
 
export default Home;