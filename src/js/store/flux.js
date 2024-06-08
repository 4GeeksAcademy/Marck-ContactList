const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			Contact:[],
			allAgendas:[],
		},
		actions: {
			createContact: async (newContact, slug) => {
				try{
					const response = await fetch("https://playground.4geeks.com/contact/agendas/" + slug + "/contacts", {
						method:"POST",
						headers: {
							"Content-Type":"application/json"
						},
						body: JSON.stringify(newContact),
					})
					if(!response.ok) {
						throw new Error("Error al momento de hacer nuevo Contacto")
					}
					const data = await response.json();
					
				} catch (error) {
					console.error("No fue exitoso el llamado al api", error)
				}
			},
			deleteContact: async (id,slug) => {
				try{
					const resp = await fetch("https://playground.4geeks.com/contact/agendas/" + slug + "/contacts/" + id, {
						method:"DELETE",
						headers: {
							"Content-Type": "application/json"
						},
					})
					if (!resp.ok) {
						throw new Error("No se pudo borrar el contacto")
					}
				} catch (error) {
					console.error("Error al hacer el fetch")
				}
			},
			editContact:  async (updatedContact, slug, id) => {
				try{
					const resp = await fetch("https://playground.4geeks.com/contact/agendas/" + slug + "/contacts/" + id, {
						method:"PUT",
						headers: {
							"Content-Type":"application/json"
						},
						body: JSON.stringify(updatedContact)
					})
					console.log("aqui esta", updatedContact)
					if (!resp.ok) {
						throw new Error("La respuesta del servidor no fue 200")
					}

					const data = await resp.json()
					return data;
				} catch (error) {
					console.error("Nuevo error", error)
					return null;
				}
			},
			getContactByAgenda: async (slug) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/" + slug);
					if(!response.ok) {
						throw new Error("No se pudo realizar el Fetch")
					}
					const data = await response.json();
					return data.contacts;
				} catch (error) {
					console.error("Error en el fetching", error);
					return[];
				}
			},
			newAgenda: async (change) => {
				try{
					const response = await fetch("https://playground.4geeks.com/contact/agendas/" + change, {
						method:"POST",
						headers: {
							"Content-Type":"application/json"
						},
						body: JSON.stringify(),
					})
					if(!response.ok) {
						throw new Error("Error al momento de hacer nueva agenda")
					}
					const data = await response.json();
					console.log("user Create", data)
				} catch (error) {
					console.error("No fue exitoso el llamado al api", error)
				}
			},
			getAgendas: () => {
				try{
					fetch("https://playground.4geeks.com/contact/agendas")
					.then((resp) => {
						if(!resp.ok) {
							throw new Error("La respuesta del servidor no fue 200", error)
						}
						return resp.json();
					})
					.then((data) => {
						console.log("estorecibo", data.agendas)
						setStore({allAgendas: data.agendas});
					})
				} catch {
					console.error("Hubo un error al realizar el fetch", error)
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
