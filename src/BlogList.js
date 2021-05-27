import { Link } from "react-router-dom";

// const BlogList = ({Blog ,handleDelete}) => { //array desturucturing 
const BlogList = ({Blog, NoBlog}) => { //array desturucturing 
    
// const Blog = props.Blog;
    return ( <div className="home">
 
    <div><h2>All Blogs...</h2></div>
    {Blog.map((blog) =>(
        <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            </Link>

            {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
            
        </div>))}
</div>);
}
 
export default BlogList;