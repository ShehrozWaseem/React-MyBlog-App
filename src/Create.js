import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setauthor] = useState('Eren');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newblog = {title,body,author}
        setisPending(true)
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newblog)
        }).then(()=>{
            setisPending(false)
            // history.go(-1)
            history.push('/')
        }) 
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                value={title}
                onChange={(e)=>settitle(e.target.value)} />

                <label>Blog Body:</label>
                <textarea required
                value={body}
                onChange={(e)=>setbody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select 
                value={author}
                onChange={(e)=>setauthor(e.target.value)}>
                <option value="Eren">Eren</option>
                <option value="Hyak">Hyakimaru</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;