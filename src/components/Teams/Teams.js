import React from "react";
import Teamshelper from "./Teamshelper";
import blog_1 from "../images/blog_1.jpeg";
import c_1 from "../images/Memberlist/SrabastiBanerjee.jpg"
import c_2 from "../images/Memberlist/Vishal jha.jpg";
import c_4 from "../images/Memberlist/Harsh pratik.jpg";
import c_3 from "../images/Memberlist/Supratick ghosh.jpg"
import c_5 from "../images/Memberlist/Suprotik poddar.jpg";
import c_6 from "../images/Memberlist/Eleen das.jpg";
import c_7 from "../images/Memberlist/Ashish Kashyap.jpg";
import c_8 from "../images/Memberlist/Astha jha.jpg";
import ct_1 from "../images/Memberlist/Arijit Datta.jpg";
import ct_2 from "../images/Memberlist/Soham Roy.jpg";
import ct_3 from "../images/Memberlist/Atryee dhar.jpg";
import ct_4 from "../images/Memberlist/Anuvab Chakravrty.jpg";
import ct_5 from "../images/Memberlist/Ahana Sarkar.jpg";
import ct_6 from "../images/Memberlist/Kumar Aditya.jpg";
import ct_7 from "../images/Memberlist/Debjit chatterjee.jpg";
import ct_8 from "../images/Memberlist/Sristi Chakraborty.jpg";
import ct_9 from "../images/Memberlist/Simron Paul.jpg";
import ct_10 from "../images/Memberlist/Uddipan Maitra.jpg";
import ct_11 from "../images/Memberlist/Ayush Ghosal.jpg"
import ct_12 from "../images/Memberlist/aman.jpg"
import d_1 from "../images/Memberlist/Monideepa Maiti.jpg";
import d_2 from "../images/Memberlist/Sayan Paul.jpg";
import d_4 from "../images/Memberlist/Sreejita Mukhopadhyay.jpg";
import d_3 from "../images/Memberlist/Aparna das.jpg";
import d_5 from "../images/Memberlist/Shreya Paul.jpg";
import d_6 from "../images/Memberlist/Niket Bachhawat.jpg";
import m_1 from "../images/Memberlist/Piyush Jha.jpg";
import m_2 from "../images/Memberlist/Arkajit Chakraborty.jpg";
import m_3 from "../images/Memberlist/ABHISHEK BHATTACHARYA.jpg";
import m_4 from "../images/Memberlist/Swarnali Banerjee.jpg";
import m_5 from "../images/Memberlist/Sarvesh Kumar.jpg";
import m_6 from "../images/Memberlist/Debosmita Bedajna.jpg";
import m_7 from "../images/Memberlist/Adity seth.jpg";
import m_8 from "../images/Memberlist/ARIF ALI.jpg";
import m_9 from "../images/Memberlist/Shalini Sinha.jpg";
import m_10 from "../images/Memberlist/SOUMYADEEP DAS.jpg"
import m_11 from "../images/Memberlist/Anjali.jpg"
import q_1 from "../images/Memberlist/Ritam roy.jpg";
import q_2 from "../images/Memberlist/Shounak Basu.jpg";
import q_3 from "../images/Memberlist/Shekhar Raha.jpg";
import q_4 from "../images/Memberlist/SUBHROJIT HORE.jpg";
import q_5 from "../images/Memberlist/Swastik Deb Majumder.jpg";
import q_6 from "../images/Memberlist/Debanjan bhattcharjee.jpg";



const qzoneTeam = [
  {
    id: 1,
    name: "Ritam Roy",
    role:"Qzone Team",
    image: q_1,
  },
  {
    id: 2,
    name: "Shounak Basu ",
    role:"Qzone Team",
    image: q_2,
  },
  {
    id: 1,
    name: "Shekhar Raha",
    role:"Qzone Team",
    image: q_3,
  },
  {
    id: 1,
    name: "Subhrojit Hore",
    role:"Qzone Team",
    image:q_4,
  },
  {
    id: 1,
    name: "Swastik Deb Mojumdar",
    role:"Qzone Team",
    image: q_5,
  },

  {
    id: 1,
    name: "Debanjan Bhattacharjee",
    role:"Qzone Team",
    image: q_6,
  },
];

const MangementTeam = [
  {
    id: 1,
    name: "Shalini Sinha",
    role:"Management Team",
    image:m_9,
  },
  {
    id: 1,
    name: "Piyush Jha",
    role:"Management Team",
    image: m_1,
  },
  {
    id: 1,
    name: "Anjali",
    role:"Management Team",
    image:m_11,
  },
  {
    id: 2,
    name: "Arkajit Chakraborty ",
    role:"Management Team",
    image: m_2,
  },
  {
    id: 1,
    name: "Swarnali Banerjee ",
    role:"Management Team",
    image: m_4,
  },
  {
    id: 1,
    name: "Abhishek Bhattacharya",
    role:"Management Team",
    image: m_3,
  },
  {
    id: 1,
    name: "Sarvesh Kumar",
    role:"Management Team",
    image: m_5,
  },
  {
    id: 1,
    name: "Debosmita Bedajna ",
    role:"Management Team",
    image:  m_6,
  },
  {
    id: 1,
    name: "Aditya Seth",
    role:"Management Team",
    image:  m_7,
  },
  {
    id: 1,
    name: "Arif Ali",
    role:"Management Team",
    image:  m_8,
  },
  {
    id: 1,
    name: "Soumydeep Das",
    role:"Management Team",
    image:  m_10,
  },

];
const DesignTeam = [
  {
    id: 1,
    name: "Monideepa Maiti",
    role:"Graphic Team",
    image:  d_1,
  },
  {
    id: 1,
    name: "Sayan Paul",
    role:"Graphic Team",
    image:  d_2,
  },
  {
    id: 2,
    name: "Aparna Das",
    role:"Graphic Team",
    image: d_3,
  },
  {
    id: 1,
    name: "Sreejita Mukhopadhyay",
    role:"Graphic Team",
    image: d_4,
  },
  {
    id: 1,
    name: "Shreya Paul",
    role:"Graphic Team",
    image:  d_5,
  },
  {
    id: 1,
    name: "Niket Bachhawat",
    role:"Graphic Team",
    image:  d_6,
  },
];
const ContentTeam = [
  {
    id: 1,
    name: "ARIJIT DATTA",
    role:"Content Team",
    image:  ct_1,
  },
  {
    id: 1,
    name: "Soham Roy ",
    role:"Content Team",
    image: ct_2,
  },
  {
    id: 1,
    name: "Atryee Dhar",
    role:"Content Team",
    image:  ct_3,
  },
  {
    id: 1,
    name: "Anuvab Chakravarty",
    role:"Content Team",
    image:  ct_4,
  },
  {
    id: 1,
    name: "Ahana Sarkar",
    role:"Content Team",
    image:  ct_5,
  },
  {
    id: 1,
    name: "Ayush Ghosal",
    role:"Management Team",
    image:  ct_11,
  },
  {
    id: 1,
    name: "Aman Kumar",
    role:"Content Team",
    image:  ct_12,
  },
  {
    id: 1,
    name: "Kumar Aditya",
    role:"Content Team",
    image:  ct_6,
  },
  {
    id: 2,
    name: "Debjit Chatterjee ",
    role:"Content Team",
    image: ct_7,
  },
  {
    id: 1,
    name: "Sristi Chakraborty",
    role:"Content Team",
    image:  ct_8,
  },
  {
    id: 1,
    name: "Simron Paul ",
    role:"Content Team",
    image:  ct_9,
  },
  {
    id: 1,
    name: "Uddipan Maitra",
    role:"Content Team",
    image:  ct_10,
  },
];
const coreMembers = [
  {
    id: 1,
    name: "Srabasti Banerjee",
    role:"Jt. Convener",
    image:  c_1,
  },
  {
    id: 1,
    name: "Vishal Jha",
    role:"Jt. Convener",
    image:  c_2,
  },
  {
    id: 2,
    name: "Supratick Ghosh",
    role:"Co-Convener",
    image: c_3,
  },
  {
    id: 1,
    name: "Harsh Pratik",
    role:"Sponsorship Head",
    image:  c_4,
  },
  {
    id: 1,
    name: "Suprotik Poddar",
    role:"Treasurer",
    image:  c_5,
  },
  {
    id: 1,
    name: "Eleen Das",
    role:"Content Head",
    image:  c_6,
  },
  {
    id: 1,
    name: "Ashish Kashyap",
    role:"Admin Head",
    image:  c_7,
  },
  {
    id: 1,
    name: "Astha Jha",
    role:"Management head",
    image:  c_8,
  },
];



const Teams = (props) => {
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
        <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(247, 158, 2)" }}>Team Eclectica</h1>
        <div style={{ color: props?.theme === "light" ? "black" : "white",letterSpacing:"0.6px",lineHeight:"1.4",fontSize:"18px" }} className="small-font">
        Team Eclectica is a dynamic group passionate about literature, creativity, & community building. Our team brings diverse skills & commitment to excellence. Join us to experience unforgettable literary events & meaningful connections. Redefine the literary landscape with us!
        </div>
      </div>
      <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(247, 158, 2)" }}>Core Members</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {coreMembers.map((data)=>{
        return (
          <Teamshelper
          name={data.name}
          role={data.role}
          image={data.image}
        />
        )
      })}
       </div>
       <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(247, 158, 2)"}}>Content Team</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {ContentTeam.map((data)=>{
        return (
          <Teamshelper
          name={data.name}
          role={data.role}
          image={data?.image}
        />
        )
      })}
       </div>

       <h1 style={{  color: props?.theme === "light" ? "black" : "rgb(247, 158, 2)" }}>Graphic Team</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {DesignTeam.map((data)=>{
        return (
          <Teamshelper
          name={data.name}
          role={data.role}
          image={data?.image}
        />
        )
      })}
       </div>
       <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(247, 158, 2)" }}>Mangement Team</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {MangementTeam.map((data)=>{
        return (
          <Teamshelper
          name={data.name}
          role={data.role}
          image={data?.image}
        />
        )
      })}
       </div>
       <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(247, 158, 2)" }}>Qzone Team</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {qzoneTeam.map((data)=>{
        return (
          <Teamshelper
          name={data.name}
          role={data.role}
          image={data?.image}
        />
        )
      })}
       </div>
    </div>
  );
};

export default Teams;
