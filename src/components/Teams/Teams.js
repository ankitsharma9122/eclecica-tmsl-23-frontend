import React from "react";
import Teamshelper from "./Teamshelper";
import blog_1 from "../images/blog_1.jpeg";

const coreMembers = [
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 2,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image: blog_1,
  },
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
];
const ContentTeam = [
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 2,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image: blog_1,
  },
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Bholu Tiwari",
    role:"Dance Instructor",
    image:  blog_1,
  },
];

const DesignTeam = [
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 2,
    name: "Design Club",
    role:"Dance Instructor",
    image: blog_1,
  },
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
];
const MangementTeam = [
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 2,
    name: "Design Club",
    role:"Dance Instructor",
    image: blog_1,
  },
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
  {
    id: 1,
    name: "Coding Club",
    role:"Dance Instructor",
    image:  blog_1,
  },
];

const Teams = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: "80px",
        justifyContent: "center",
      }}
    >
      <div style={{ margin: "10px" }}>
        <h1 style={{ color: "rgb(247, 158, 2)" }}>Team Eclectica</h1>
        <div style={{ color: "white" }}>
          Welcome to our gallery! Here, we proudly showcase the creative talents
          of our club members, as well as other emerging writers and artists in
          the community.Whether you are a seasoned writer, a budding artist, or
          simply someone who appreciates the beauty and power of words, we hope
          that you will find something to love in our gallery. So take your
          time, explore our collection.
        </div>
      </div>
      <h1 style={{ color: "rgb(247, 158, 2)" }}>Core Members</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {coreMembers.map((data)=>{
        return (
          <Teamshelper
          name={data.name}
          role={data.role}
          image={blog_1}
        />
        )
      })}
       </div>
       <h1 style={{ color: "rgb(247, 158, 2)" }}>Content Team</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {ContentTeam.map((data)=>{
        return (
          <Teamshelper
          name={data.name}
          role={data.role}
          image={blog_1}
        />
        )
      })}
       </div>

       <h1 style={{ color: "rgb(247, 158, 2)" }}>Design Team</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {DesignTeam.map((data)=>{
        return (
          <Teamshelper
          name={data.name}
          role={data.role}
          image={blog_1}
        />
        )
      })}
       </div>
       <h1 style={{ color: "rgb(247, 158, 2)" }}>Mangement Team</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {MangementTeam.map((data)=>{
        return (
          <Teamshelper
          name={data.name}
          role={data.role}
          image={blog_1}
        />
        )
      })}
       </div>
    </div>
  );
};

export default Teams;
