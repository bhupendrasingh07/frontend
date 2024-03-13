import React, { useState, useEffect } from "react";
import API from "../../services/API";
import ModalForm from "./ModalForm";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";

const AdminSidebar = () => {
  
  

  // API CALL
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("sidebar/all-sidebarItem"); // Replace with your API endpoint
        setSidebarData(response.data);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
        // Handle errors appropriately, e.g., display an error message
      }
    };

    fetchData();
  });

  return (
    <>
      <aside
        id="sidebar"
        className="sidebar"
        style={{
          backgroundImage: "linear-gradient(180deg,#5a67bd 0,#004a99 )",
        }}
      >
        <div className="mx-5">
          {" "}
          <ModalForm></ModalForm>
        </div>

        <ul className="sidebar-nav" id="sidebar-nav">
          {sidebarData.map((item,index) => (
            <li key={index}>
              <div className="nav-heading">{item.heading}</div>
              <div className="">
                {item.subtopics.map((subtopic) => (
                  // <li  className="nav-item  my-3" key={subtopic.id}>
                  //     <Link style={{textDecoration:"none", backgroundColor:"transparent" ,color:"white"}} to={subtopic.slug}><span>{subtopic.icon}</span>{subtopic.title}</Link>
                  // </li>
                  <div className="nav-item d-flex justify-content-between" key={subtopic.title}>
                    <div>
                      <Link
                      className="nav-link collapsed"
                      to={subtopic.slug}
                      style={{
                        textDecoration: "none",
                        backgroundColor: "transparent",
                        color: "white",
                      }}
                    >
                      {/* <span >{subtopic.icon}</span> */}
                      <span className="">{subtopic.title}</span>
                      </Link>
                    </div>
                    <div>
                      <span><TiEdit style={{width:'1.5em',height:'1.5em',color:"white",marginLeft:'12px'}}/></span>
                      <span><MdDelete style={{width:'1.5em',height:'1.5em',color:"white",marginLeft:'12px'}}/></span>
                    </div>
                    
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default AdminSidebar;
