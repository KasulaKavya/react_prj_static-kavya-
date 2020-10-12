import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Pageloop from './Pageloop'


const url="https://jsonplaceholder.typicode.com/posts";


const Pagination=()=>
{


    //data to fetch (normal step)
    const [post,setPost]=useState([])


    //make default 1- 10 posts data to 1-button
    const [currentPage,setCurrentPage,]=useState(1);


    //View number of posts data per action- 10 maximum
    const [postsperPage,setPostsperPage]=useState(8)

 

    const indexOfLastpost= currentPage*postsperPage // 1st pg --> 1*8=8, 2nd pg--> 2*8=16...  

    const indexOfFirstpost= indexOfLastpost-postsperPage // 1st pg --> 8-8=0 ---> (0-8) posts , 2nd pg --> 16-8=8..  
    
    const currentPosts=post.slice(indexOfFirstpost,indexOfLastpost) // (0,8),(8,16)...
  

    //Function
    const paginate=(no)=>
    {
        setCurrentPage(no)
    }


    //(normal step)
    useEffect(()=>
    {
        axios.get(`${url}`).then((res)=>setPost(res.data) )
    },[])



    return(<>


        <div className="container">
            <h3 className="text-center py-2 my-2 " > Pagination </h3>
        </div>


        <Pageloop  postperaction={postsperPage} totalposts={post.length} paginate={paginate} />


        {
            currentPosts.map((result,index)=>
                {
                    return(<ul key={index}>
                        <li>{result.id}</li>
                        <li>{result.title}</li>
                    </ul>)
                }
            )
        }
    </>)



}



export default Pagination;