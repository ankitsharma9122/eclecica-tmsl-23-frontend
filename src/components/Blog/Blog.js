import React, { useState } from 'react';
import CardBlog from './CardBlog';
import blog_1 from "../images/blog_1.jpeg";
import {  Button } from '@mui/material';
import blog_2 from "../images/blog_2.jpeg";
import PublishBlogDialog from './PublishBlogDialog';
import { useNavigate } from 'react-router-dom';
const blogPosts = [
  {
    title: 'First Blog Post',
    author: 'John Doe',
    image: blog_1,
    content: 'In English there are three articles: a, an, and the. Articles are used before nouns or noun equivalents and are a type of adjective. The definite article (the) is used before a noun to indicate that the identity of the noun is known to the reader. The indefinite article (a, an) is used before a noun that is general or when its identity is not known. There are certain situations in which a noun takes no article,As a guide, the following definitions and table summarize the basic use of articles. Continue reading for a more detailed explanation of the rules and for examples of how and when to apply them.',
    isAdmin:true,
  },
  {
    title: 'Second Blog Post',
    author: 'Jane Doe',
    image: blog_2,
    content: 'In English there are three articles: a, an, and the. Articles are used before nouns or noun equivalents and are a type of adjective. The definite article (the) is used before a noun to indicate that the identity of the noun is known to the reader. The indefinite article (a, an) is used before a noun that is general or when its identity is not known. There are certain situations in which a noun takes no article,As a guide, the following definitions and table summarize the basic use of articles. Continue reading for a more detailed explanation of the rules and for examples of how and when to apply them.',
    isAdmin:false,
  },
  {
    title: 'First Blog Post',
    author: 'John Doe',
    image: blog_1,
    content: 'In English there are three articles: a, an, and the. Articles are used before nouns or noun equivalents and are a type of adjective. The definite article (the) is used before a noun to indicate that the identity of the noun is known to the reader. The indefinite article (a, an) is used before a noun that is general or when its identity is not known. There are certain situations in which a noun takes no article,As a guide, the following definitions and table summarize the basic use of articles. Continue reading for a more detailed explanation of the rules and for examples of how and when to apply them.',
    isAdmin:true,
  },
  {
    title: 'Second Blog Post',
    author: 'Jane Doe',
    image: blog_2,
    content: 'In English there are three articles: a, an, and the. Articles are used before nouns or noun equivalents and are a type of adjective. The definite article (the) is used before a noun to indicate that the identity of the noun is known to the reader. The indefinite article (a, an) is used before a noun that is general or when its identity is not known. There are certain situations in which a noun takes no article,As a guide, the following definitions and table summarize the basic use of articles. Continue reading for a more detailed explanation of the rules and for examples of how and when to apply them.',
    isAdmin:true,

  },
  {
    title: 'First Blog Post',
    author: 'John Doe',
    image: blog_1,
    content: 'In English there are three articles: a, an, and the. Articles are used before nouns or noun equivalents and are a type of adjective. The definite article (the) is used before a noun to indicate that the identity of the noun is known to the reader. The indefinite article (a, an) is used before a noun that is general or when its identity is not known. There are certain situations in which a noun takes no article,As a guide, the following definitions and table summarize the basic use of articles. Continue reading for a more detailed explanation of the rules and for examples of how and when to apply them.',
    isAdmin:false,
  },
  {
    title: 'Second Blog Post',
    author: 'Jane Doe',
    image: blog_2,
    content: 'In English there are three articles: a, an, and the. Articles are used before nouns or noun equivalents and are a type of adjective. The definite article (the) is used before a noun to indicate that the identity of the noun is known to the reader. The indefinite article (a, an) is used before a noun that is general or when its identity is not known. There are certain situations in which a noun takes no article,As a guide, the following definitions and table summarize the basic use of articles. Continue reading for a more detailed explanation of the rules and for examples of how and when to apply them.',
    isAdmin:true,
  },
];

const Blog=()=>{
 
  const [blogPopup,setBlogPopUp]=useState(false);
  const navigate=useNavigate();
  const publishButtonhandler=()=>{
    if(sessionStorage.getItem("Jwt-access-token")){
      setBlogPopUp(true);
      return ;
    } else {
      navigate("/auth")
      // window.history.pushState(null, null, `/auth`)
    } 
  }
  return (
  <div style={{marginTop:"80px" }}>
  <Button variant="contained" color="primary" style={{ float:"right",right:"35px"}} onClick={publishButtonhandler}>
   + publish Blog
  </Button>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",width:"100%"}}>
      {blogPosts.map((post) => (
        <CardBlog
          key={post.title}
          title={post.title}
          author={post.author}
          image={post.image}
          content={post.content}
          isAdmin={post.isAdmin}
        />
      ))}
    </div>
     {blogPopup && <PublishBlogDialog open={blogPopup} blogPopup={blogPopup} setBlogPopUp={setBlogPopUp}/>}
    </div>
  );
}

export default Blog;

