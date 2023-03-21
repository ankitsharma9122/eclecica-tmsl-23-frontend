import React, { useEffect, useState } from 'react';
import CardBlog from './CardBlog';
import blog_1 from "../images/blog_1.jpeg";
import {  Button } from '@mui/material';
import PublishBlogDialog from './PublishBlogDialog';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
})


const Blog=()=>{
  const [blogPosts,setblogPosts]=useState([]);
  const [pendingBlogs,setPendingBlogs]=useState([]);
  const [blogPopup,setBlogPopUp]=useState(false);
  const [userType,setUserType]=useState("user");
  const [loading,setloading]=useState(false);
  const  [blogpostSucess,setblogPostSucess]=useState(false);
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
      setloading(true);
      try {
      const response = await fetch("https://puce-kind-newt.cyclic.app/get-blog",  { Method: 'GET',
      Headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
    }
    );
      const data = await response.json();
        setblogPosts(data);
        setloading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchData();
  }, []);
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setblogPostSucess(false);
  };

  const fetchpendingApprovals=async()=>{
      try {
      const response = await fetch("https://puce-kind-newt.cyclic.app/get-blog-pendings",  { Method: 'GET',
      Headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
    }
    );
      const data = await response.json();
        setPendingBlogs(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

  return (
  <div style={{marginTop:"80px" }}>
  {(sessionStorage.getItem("blog-token")=="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3JhYmFzdGkgYmFuZXJqZWUiLCJyb2xlIjoiY29udmVub3IiLCJ0b2tlbiI6IjI0LTA3LTIwMDEifQ.r2YYukXUKmYIfwspVm_ceUA31mb4IIO1otO7TK_lIZ8" && sessionStorage.getItem("phone")==="8809731829") ?
    <Button variant="contained" color="primary" style={{ float:"right",right:"35px"}} onClick={fetchpendingApprovals}  className="click-to-know-button">
      View pending Approvals
    </Button>
  :
  <Button variant="contained" color="primary" style={{ float:"right",right:"35px"}} onClick={publishButtonhandler}  className="click-to-know-button">
      + publish Blog
     </Button>
  }
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",width:"100%"}}>
    {(sessionStorage.getItem("blog-token")=="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3JhYmFzdGkgYmFuZXJqZWUiLCJyb2xlIjoiY29udmVub3IiLCJ0b2tlbiI6IjI0LTA3LTIwMDEifQ.r2YYukXUKmYIfwspVm_ceUA31mb4IIO1otO7TK_lIZ8" && sessionStorage.getItem("phone")==="8809731829") && pendingBlogs.length>0 && pendingBlogs.map((id,idx) => (
        <CardBlog
          key={pendingBlogs[idx]?._id}
          title={pendingBlogs[idx]?.title}
          author={pendingBlogs[idx]?.name}
          image={blog_1}
          pending={true}
          content={pendingBlogs[idx]?.content}
          isAdmin={true}
          id={pendingBlogs[idx]?._id}
          department={pendingBlogs[idx]?.department}
          email={pendingBlogs[idx]?.email}
        />
      ))}
      {!loading && blogPosts.length>0 && blogPosts.map((id,idx) => (
        <CardBlog
          key={blogPosts[idx]?._id}
          title={blogPosts[idx]?.title}
          author={blogPosts[idx]?.name}
          image={blog_1}
          pending={false}
          content={blogPosts[idx]?.content}
          isAdmin={true}
          id={blogPosts[idx]?._id}
          department={blogPosts[idx]?.department}
          email={blogPosts[idx]?.email}
        />
      ))}
      {loading && <><h3 style={{ color:"white",marginRight:"20px"}}>Fetching Blogs...</h3><CircularProgress style={{color:"rgb(255, 89, 0)"}}/></>}
    </div>
    {blogPopup && <PublishBlogDialog open={blogPopup} blogPopup={blogPopup} setBlogPopUp={setBlogPopUp} setblogPostSucess={setblogPostSucess}/>}
    {blogpostSucess && <Snackbar open={blogpostSucess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your Blog Request has been sent to Eclectica!
        </Alert>
      </Snackbar>}
    </div>
  );
}

export default Blog;

