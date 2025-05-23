import React from "react";
import Teamshelper from "./Teamshelper";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
const blog_1= "/images/blog_1.jpeg";
const c_1=  "/images/Memberlist/SrabastiBanerjee.jpg"
const c_2=  "/images/Memberlist/Vishal jha.jpg";
const c_4=  "/images/Memberlist/Harsh pratik.jpg";
const c_3=  "/images/Memberlist/Supratick ghosh.jpg"
const c_5=  "/images/Memberlist/Suprotik poddar.jpg";
const c_6=  "/images/Memberlist/Eleen das.jpg";
const c_7=  "/images/Memberlist/Ashish Kashyap.jpg";
const c_8=  "/images/Memberlist/Astha jha.jpg";
const c_9= "/images//Memberlist/priyank.jpg"
const ct_1= "/images/Memberlist/Arijit Datta.jpg";
const ct_2= "/images/Memberlist/Soham Roy.jpg";
const ct_3= "/images/Memberlist/Atryee dhar.jpg";
const ct_4= "/images/Memberlist/Anuvab Chakravrty.jpg";
const ct_5= "/images/Memberlist/Ahana Sarkar.jpg";
const ct_6= "/images/Memberlist/Kumar Aditya.jpg";
const ct_7= "/images/Memberlist/Debjit chatterjee.jpg";
const ct_8= "/images/Memberlist/Sristi Chakraborty.jpg";
const ct_9="/images/Memberlist/Simron Paul.jpg";
const ct_10= "/images/Memberlist/Uddipan Maitra.jpg";
const ct_11= "/images/Memberlist/Ayush Ghosal.jpg"
const ct_12= "/images/Memberlist/aman.jpg"
const d_1= "/images/Memberlist/Monideepa Maiti.jpg";
const d_2= "/images/Memberlist/Sayan Paul.jpg";
const d_4= "/images/Memberlist/Sreejita Mukhopadhyay.jpg";
const d_3= "/images/Memberlist/Aparna das.jpg";
const d_5= "/images/Memberlist/Shreya Paul.jpg";
const d_6= "/images/Memberlist/Niket Bachhawat.jpg";
const m_1= "/images/Memberlist/Piyush Jha.jpg";
const m_2= "/images/Memberlist/Arkajit Chakraborty.jpg";
const m_3= "/images/Memberlist/ABHISHEK BHATTACHARYA.jpg";
const m_4= "/images/Memberlist/Swarnali Banerjee.jpg";
const m_5= "/images/Memberlist/Sarvesh Kumar.jpg";
const m_6= "/images/Memberlist/Debosmita Bedajna.jpg";
const m_7= "/images/Memberlist/Adity seth.jpg";
const m_8= "/images/Memberlist/ARIF ALI.jpg";
const m_9= "/images/Memberlist/Shalini Sinha.jpg";
const m_10= "/images/Memberlist/SOUMYADEEP DAS.jpg"
const m_11= "/images/Memberlist/Anjali.jpg"
const q_1="/images/Memberlist/Ritam roy.jpg";
const q_2="/images/Memberlist/Shounak Basu.jpg";
const q_3="/images/Memberlist/Shekhar Raha.jpg";
const q_4="/images/Memberlist/SUBHROJIT HORE.jpg";
const q_5="/images/Memberlist/Swastik Deb Majumder.jpg";
const q_6="/images/Memberlist/Debanjan bhattcharjee.jpg";



const qzoneTeam = [
  {
    id: 1,
    name: "Ritam Roy",
    role:"Qzone Head",
    image: q_1,
  },
  {
    id: 2,
    name: "Shounak Basu ",
    role:"Qzone Co-Head",
    image: q_2,
  },
  {
    id: 1,
    name: "Shekhar Raha",
    role:"Member",
    image: q_3,
  },
  {
    id: 1,
    name: "Subhrojit Hore",
    role:"Member",
    image:q_4,
  },
  {
    id: 1,
    name: "Swastik Deb Mojumdar",
    role:"Member",
    image: q_5,
  },

  {
    id: 1,
    name: "Debanjan Bhattacharjee",
    role:"Member",
    image: q_6,
  },
];

const MangementTeam = [
  {
    id: 1,
    name: "Shalini Sinha",
    role:"Outreach & Open-Mic Head",
    image:m_9,
  },
  {
    id: 1,
    name: "Anjali",
    role:"Outreach Co-Head",
    image:m_11,
  },
  {
    id: 2,
    name: "Arkajit Chakraborty ",
    role:"Public Relations Head",
    image: m_2,
  },
  {
    id: 1,
    name: "Piyush Jha",
    role:"Member",
    image: m_1,
  },
  {
    id: 1,
    name: "Swarnali Banerjee ",
    role:"Member",
    image: m_4,
  },
  {
    id: 1,
    name: "Abhishek Bhattacharya",
    role:"Member",
    image: m_3,
  },
  {
    id: 1,
    name: "Sarvesh Kumar",
    role:"Member",
    image: m_5,
  },
  {
    id: 1,
    name: "Debosmita Bedajna ",
    role:"Member",
    image:  m_6,
  },
  {
    id: 1,
    name: "Aditya Seth",
    role:"Member",
    image:  m_7,
  },
  {
    id: 1,
    name: "Arif Ali",
    role:"Member",
    image:  m_8,
  },
  {
    id: 1,
    name: "Soumydeep Das",
    role:"Member",
    image:  m_10,
  },

];
const DesignTeam = [
  {
    id: 1,
    name: "Monideepa Maiti",
    role:"Member",
    image:  d_1,
  },
  {
    id: 1,
    name: "Sayan Paul",
    role:"Member",
    image:  d_2,
  },
  {
    id: 2,
    name: "Aparna Das",
    role:"Member",
    image: d_3,
  },
  {
    id: 1,
    name: "Sreejita Mukhopadhyay",
    role:"Member",
    image: d_4,
  },
  {
    id: 1,
    name: "Shreya Paul",
    role:"Member",
    image:  d_5,
  },
  {
    id: 1,
    name: "Niket Bachhawat",
    role:"Member",
    image:  d_6,
  },
];
const ContentTeam = [
  {
    id: 1,
    name: "Arijit Datta",
    role:"Member",
    image:  ct_1,
  },
  {
    id: 1,
    name: "Soham Roy ",
     role:"Member",
    image: ct_2,
  },
  {
    id: 1,
    name: "Atryee Dhar",
     role:"Member",
    image:  ct_3,
  },
  {
    id: 1,
    name: "Anuvab Chakravarty",
     role:"Member",
    image:  ct_4,
  },
  {
    id: 1,
    name: "Ahana Sarkar",
     role:"Member",
    image:  ct_5,
  },
  {
    id: 1,
    name: "Ayush Ghosal",
    role:"Member",
    image:  ct_11,
  },
  {
    id: 1,
    name: "Aman Kumar",
     role:"Member",
    image:  ct_12,
  },
  {
    id: 1,
    name: "Kumar Aditya",
     role:"Member",
    image:  ct_6,
  },
  {
    id: 2,
    name: "Debjit Chatterjee ",
     role:"Member",
    image: ct_7,
  },
  {
    id: 1,
    name: "Sristi Chakraborty",
     role:"Member",
    image:  ct_8,
  },
  {
    id: 1,
    name: "Simron Paul ",
     role:"Member",
    image:  ct_9,
  },
  {
    id: 1,
    name: "Uddipan Maitra",
     role:"Member",
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
    role:"Treasurer & Graphic Head",
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
    role:"Admin & Moksha Head",
    image:  c_7,
  },
  {
    id: 1,
    name: "Astha Jha",
    role:"Management head",
    image:  c_8,
  },
  {
    id: 1,
    name: "Priyanka Kumari",
    role:"Public Relations Head",
    image:  c_9,
  },
];

const Teams = (props) => {
  const location = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [location]);
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
        <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(41 200 255)", }}>Team Eclectica</h1>
        <div style={{ color: props?.theme === "light" ? "black" : "white",letterSpacing:"0.6px",lineHeight:"1.4",fontSize:"18px" ,textAlign:"justify", }} className="small-font">
        Team Eclectica is a dynamic group passionate about literature, creativity, & community building. Our team brings diverse skills & commitment to excellence. Join us to experience unforgettable literary events & meaningful connections. Redefine the literary landscape with us!
        </div>
      </div>
      <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(41 200 255)" }}>Core Members</h1>
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
       <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(41 200 255)"}}>Content Team</h1>
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

       <h1 style={{  color: props?.theme === "light" ? "black" : "rgb(41 200 255)" }}>Graphics Team</h1>
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
       <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(41 200 255)" }}>Management Team</h1>
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
       <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(41 200 255)" }}>Qzone Team</h1>
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
