import React, { useState, useEffect } from "react";
import "./home.css";
// import Accordion from "react-bootstrap/Accordion";
// import { FaStar } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";
// import { SiHey } from "react-icons/si";
// import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "./createForm";
// import EditForm from "./editForm";
// import DeleteModal from "./deleteModal";

const Home = () => {
//   const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const callData = async () => {
      const res = await fetch("http://localhost:3000/", {
        method: 'GET',
        headers:
        {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(res=>res.json())
        .then(data => {
            console.log(data)
            setItems(data)
        })
        // data = await res.json();
        // console.log(data)
        // setItems(data)
        // console.log(data);
  };

  useEffect(() => {
    callData();
  }, []);


  return (
    <div className="home">
        <ol>
            {items.map((item)=>
            <li key={item.id}>
                <div>
                    <div className="title">NAME:</div>
                    <div className="value">{item.name}</div>
                </div>
                <div>
                    <div className="title">USERNAME:</div>
                    <div className="value">{item.username}</div>
                </div>
                <div>
                    <div className="title">EMAIL:</div>
                    <div className="value">{item.email}</div>
                </div>
                <div>
                    <div className="title">ADDRESS:</div>
                    <div className="value add">{item.address.suite}, {item.address.street}, {item.address.city},</div>
                    <div className="value add">Zipcode: {item.address.zipcode},</div>
                    <div className="value">GEO: {item.address.geo.lat}, {item.address.geo.lng}</div>
                </div>
                <div>
                    <div className="title">PHONE:</div>
                    <div className="value">{item.phone}</div>
                </div>
                <div>
                    <div className="title">WEBSITE:</div>
                    <div className="value">{item.website}</div>
                </div>
                <div>
                    <div className="title">COMPANY:</div>
                    <div className="value add">Name: {item.company.name}</div>
                    <div className="value add">Catch Phrase: {item.company.catchPhrase},</div>
                    <div className="value">Business: {item.company.bs}</div>
                </div>
            </li>
            )}
        </ol>
    </div>
  );
};

export default Home;
