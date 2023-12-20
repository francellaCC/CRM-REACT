export  async function obtenerClientes(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const result = await respuesta.json();

    return result;
}
export async function GetCliente(id){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = respuesta.json();
    return resultado;
 }

 export async function actualizarcliente(id,datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method:'Put',
            body:JSON.stringify(datos),
            headers:{
            'Content-Type':'application/json'
            }
        })

       await respuesta.json()
    } catch (error) {
        
    }
 }

export async function AgregarCliente(datos){

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL,{
            method:'Post',
            body:JSON.stringify(datos),
            headers:{
            'Content-Type':'application/json'
            }
        })

       await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method:'DELETE'
        })

       await respuesta.json()
    } catch (error) {
        
    }
  

}

