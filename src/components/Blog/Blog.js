import React, { useEffect, useState } from 'react';
import CardBlog from './CardBlog';
import blog_1 from "../images/blog_1.jpeg";
import {  Button } from '@mui/material';
import PublishBlogDialog from './PublishBlogDialog';
import { useNavigate } from 'react-router-dom';


const Blog=()=>{
  const [blogPosts,setblogPosts]=useState([]);
  const [blogPopup,setBlogPopUp]=useState(false);
  const [userType,setUserType]=useState("user");
  const navigate=useNavigate();
  console.log("ankit019",sessionStorage.getItem("blog-token"));
  const publishButtonhandler=()=>{
    if(sessionStorage.getItem("blog-token")=="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3JhYmFzdGkgYmFuZXJqZWUiLCJyb2xlIjoiY29udmVub3IiLCJ0b2tlbiI6IjI0LTA3LTIwMDEifQ.r2YYukXUKmYIfwspVm_ceUA31mb4IIO1otO7TK_lIZ8" && sessionStorage.getItem("phone")==="8809731829"){
      setBlogPopUp(true);
      setUserType("admin");
      return ;
    }else if(sessionStorage.getItem("blog-token")=="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY29uc3VtZXIgdG1zbCIsInJvbGUiOiJ1c2VyIiwidG9rZW4iOiIwNy00LTIwMDEifQ.REaOJ1FQfye7rB7OcIiyC8-3mv4GEMmG8Iu-dJnZv0U" && sessionStorage.getItem("phone")!=="8809731829"){
      setBlogPopUp(true);
      setUserType("user");
      return ;
    }
     else {
      navigate("/auth");
    } 
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/get-blog",  { Method: 'GET',
        Headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
      }
      );
        const data = await response.json();
        setblogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchData();
  }, []);

  return (
  <div style={{marginTop:"80px" }}>
  <Button variant="contained" color="primary" style={{ float:"right",right:"35px"}} onClick={publishButtonhandler}>
   + publish Blog
  </Button>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",width:"100%"}}>
      {blogPosts.length>0 && blogPosts.map((id,idx) => (
        <CardBlog
          key={blogPosts[idx]?._id}
          title={blogPosts[idx]?.title}
          author={blogPosts[idx]?.name}
          image={blog_1}
          content={blogPosts[idx]?.content}
          isAdmin={true}
        />
      ))}
    </div>
    {blogPopup && <PublishBlogDialog open={blogPopup} blogPopup={blogPopup} setBlogPopUp={setBlogPopUp}/>}
    </div>
  );
}

export default Blog;

