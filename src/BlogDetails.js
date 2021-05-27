import { useParams } from "react-router";
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams()
    const { Blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();
    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + Blog.id ,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-detail">
            {isPending && <div><h2>Loading...</h2></div> }
            {error && <div><h2>{error}</h2></div> }
            {Blog && (
                <article>
                    <h2>{Blog.title}</h2>
                    <div>{Blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;