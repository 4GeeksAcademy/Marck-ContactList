import React, { useState } from "react";

export const EditContactModal = ({ contact, onClose, onSave }) => {
    const [name, setName] = useState(contact.name);
    const [address, setAddress] = useState(contact.address);
    const [phone, setPhone] = useState(contact.phone);
    const [email, setEmail] = useState(contact.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContact = { ...contact, name, address, phone, email };
        onSave(updatedContact)
    };

    return (
        <div className="modal-overlay text-center">
            <div className="modal-content">
                <h2>Editar Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mx-5">
                        <label>Nombre</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group mx-5">
                        <label>Dirección</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="form-group mx-5">
                        <label>Teléfono</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group mx-5">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary mx-5">Guardar</button>
                    <button type="button" className="btn btn-secondary mx-5" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
};