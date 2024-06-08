import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/CreateContact.css";
import { useParams } from "react-router-dom";

export const CreateContact = ()=> {
    const { actions } = useContext(Context)
    const { slug } = useParams()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name, email, phone, address };
        actions.createContact(newContact, slug);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
    };

    return (
        <div className="form-container">
            <h1>Crea un nuevo contacto</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Información del Contacto</legend>

                    <div className="form-group">
                        <label htmlFor="fullName">Nombre Completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            pattern="[A-Za-z\s]{2,}"
                            placeholder="Ingresa el nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Ingresa el email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            pattern="\d{10,15}"
                            placeholder="Ingresa el número de teléfono"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Dirección</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            required
                            placeholder="Ingresa la dirección"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Crear Contacto</button>
                </fieldset>
            </form>
        </div>
    )
}