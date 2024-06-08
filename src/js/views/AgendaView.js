import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Contact } from "../component/Contact";
import { EditContactModal } from "../component/EditContactModal";


export const AgendaView =() =>{
    const { actions } = useContext(Context);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([])
    const [selectedContact, setSelectedContact] = useState()

    useEffect(() => {
        const fetchContacts = async ()=> {
            const agendaContacts = await actions.getContactByAgenda(slug);
            setContacts(agendaContacts)
        }
        fetchContacts();
    }, [])

    const handleCreateContact = async ( ) => {
        navigate("/create-contact/" + slug)
    }

    const handleEditContact = async (updatedContact)=> {
       await actions.editContact(updatedContact, slug, updatedContact.id)
       setContacts(
        contacts.map((contact) => contact.id === updatedContact.id ? updatedContact : contact)
       )
       setSelectedContact(null);
    }

    const handleDeleteContact = async (id)=> {
        await actions.deleteContact(id,slug)
        setContacts(contacts.filter(contact => contact.id !== id))
    }

    return(
        <div>
            <div className="Container d-flex justify-content-between">
                <h1>Bienvenido a la agenda {slug}</h1>
                <button className="btn btn-outline-dark" onClick={() => handleCreateContact()}>Crea un contacto nuevo</button>
            </div>
            
            <ul>
                {contacts.length > 0 ? (
                    contacts.map((contact, index) => (
                        <Contact id={contact.id} onDelete={handleDeleteContact} onEdit={()=> setSelectedContact(contact)} key={index} name={contact.name} address={contact.address} phone={contact.phone} email={contact.email}  />
                    ))
                ) : (
                    <h1>No hay contactos aquí</h1>
                )}
            </ul>
            {selectedContact && (
                <EditContactModal
                    contact={selectedContact}
                    onClose={() => setSelectedContact(null)} 
                    onSave={handleEditContact}
                />
            )}
        </div>
    )
}