import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const CreateAgenda =()=>{
    const [change, setChange] = useState("")
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleChange =(e)=>{
        setChange(e.target.value)
    }
    const handleData = async (e)=>{
        e.preventDefault()
        await actions.newAgenda(change);
        navigate("/")
    }

    return(
        <div className="container text-center">
            <h1>Crea tú agenda</h1>
            <form className="text-center">
                <p>¿Cómo quieres que se llame tú agenda?</p>
                <input onChange={handleChange} placeholder="Ingresa el nombre que quieras" type="text"/>
                <button onClick={handleData} className="btn btn-outline-success mx-5">agregar</button>
            </form>
        </div>
    )
}