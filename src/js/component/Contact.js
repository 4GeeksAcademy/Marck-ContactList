import React from "react";
import ContactImg from "../../img/contact.png";
import "../../styles/Contact.css";

export const Contact =(props)=>{

    const handleEdit = ()=> {
        props.onEdit(props.id)
    }

    const handleDelete = ()=>{    
        props.onDelete(props.id)
    }

    return(
        <div className="contact-container">
            <div className="contact-image">
                <img src={ContactImg} alt="Contact" />
            </div>
            <div className="contact-details">
                <h3>{props.name}</h3>
                <p><i className="fa-solid fa-location-dot"></i> {props.address}</p>
                <p><i className="fa-solid fa-phone"></i> {props.phone}</p>
                <p><i className="fa-solid fa-envelope"></i> {props.email}</p>
            </div> 
            <div className="contact-actions">
                <button onClick={handleEdit} className="edit-button"><i className="fa-solid fa-pencil"></i></button>
                <button onClick={handleDelete} className="delete-button"><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}