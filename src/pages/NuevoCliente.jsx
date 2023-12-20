import {useNavigate, Form, useActionData, redirect} from 'react-router-dom'
import Formulario from '../component/Formulario';
import Error from '../component/Error';
import {AgregarCliente} from '../data/clientes'

export async function action({request}){
  const formData  = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get('email')
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  // validacion 

  const errores= [];
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios');
  }

  // validacion de emial
  if(!regex.test(email)){
    errores.push('El email no es valido')
  }

  // Retornar los datos si hay errores
  if(Object.keys(errores).length){
    return errores;
  }

  await AgregarCliente(datos);

  return redirect('/')
}
function NuevoCliente() {

  const navigate = useNavigate();
  const errror= useActionData();
  return (
    <>
        <h1 className='font-black text-blue-900 text-4xl'>Nuevo Cliente</h1>
        <p className='mt-3'>Llena todos los campos para agregar un nuevo cliente</p>
        <div className="flex justify-end">
          <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase text-xs" onClick={()=> navigate("/")}>Volver</button>
        </div>

        <div className='bg-white s hadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
          {errror?.length && errror.map((error,i)=><Error key={i}>{error}</Error>)}

          <Form method='POST' noValidate>
            <Formulario></Formulario>

            <input type="submit" className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg' value="Registrar cliente" />
          </Form>
        </div>
    </>
  )
}

export default NuevoCliente
