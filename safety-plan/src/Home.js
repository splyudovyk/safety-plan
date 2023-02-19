import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:"soemthing", author:"something1", id:1},
        {title:"soemthing2", author:"something3", id:2},
        {title:"soemthing4", author:"something5", id:3}
    ]);
    const [isPending, setIsPending] = useState(true);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    /*
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
            });
    }, []);*/

    return ( 
        <div className="Home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;