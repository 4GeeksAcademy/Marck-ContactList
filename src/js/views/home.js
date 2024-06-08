import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router";


export const Home = () => {
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		actions.getAgendas();
	}, [])

	const handleAgenda =(e)=>{
		const selected = e.target.value;
		if(selected) {
			navigate("/agenda/" + selected)
		}
	}

	return(
		<div className="text-center mt-5">
			<h1>¡Bienvenido!</h1>
			<h2>Porfavor selecciona tú agenda</h2>
			<select onChange={handleAgenda}>
				<option value="" >Selecciona una agenda</option>
				{store.allAgendas.map((ele, index) => {
					return(
						<option key={index} value={ele.slug} >{ele.slug}</option>
					)
				})}
			</select>
			<div>
				<p>¿No tienes una?<button onClick={() => navigate("/create")} className="btn btn-link">Creala</button></p> 
			</div>
		</div>
	)
};
