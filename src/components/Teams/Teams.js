import React from 'react';
import Teamshelper from './Teamshelper';
import blog_1 from "../images/blog_1.jpeg"
const Teams=()=>{
    return (
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"80px",justifyContent:"center"}}>
        <Teamshelper
        name="Jane Doe"
        role="Dance Instructor"
        description="Jane has been a dance instructor for over 10 years, and specializes in contemporary and modern dance styles. She is passionate about helping students find their own unique style and express themselves through dance."
        image={blog_1}
       />
       <Teamshelper
        name="Jane Doe"
        role="Dance Instructor"
        description="Jane has been a dance instructor for over 10 years, and specializes in contemporary and modern dance styles. She is passionate about helping students find their own unique style and express themselves through dance."
        image={blog_1}
      />
      <Teamshelper
        name="Jane Doe"
        role="Dance Instructor"
        description="Jane has been a dance instructor for over 10 years, and specializes in contemporary and modern dance styles. She is passionate about helping students find their own unique style and express themselves through dance."
        image={blog_1}
      />
      <Teamshelper
        name="Jane Doe"
        role="Dance Instructor"
        description="Jane has been a dance instructor for over 10 years, and specializes in contemporary and modern dance styles. She is passionate about helping students find their own unique style and express themselves through dance."
        image={blog_1}
      />
      </div>
    )
}

export default Teams;
