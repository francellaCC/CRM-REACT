import {useLoaderData} from 'react-router-dom'
import Cliente from '../component/Cliente';
import {obtenerClientes} from '../data/clientes'


// Similar a un useEffect , permite consultar apis o para ver un State
// siempre tiene que retornar algo 
export function loader(){
    const clientes =obtenerClientes();
    return clientes;
}

import React from 'react'

function Index() {

    const dataClients = useLoaderData();

  return (
    <>
      <h1 className='font-black text-blue-900 text-4xl'>Clientes</h1>
      <p className='mt-3'>Administra tus Clientes</p>

      {dataClients.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className=' bg-blue-800 text-white'>
                <tr>
                    <th className='p-2'>Cliente</th>
                    <th className='p-2'>Contacto</th>
                    <th className='p-2'>Acciones</th>
                </tr>

            </thead>
            <tbody>
                {dataClients.map(cliente =>(
                    <Cliente
                    cliente={cliente}
                    key={cliente.id}
                    ></Cliente>
                ))}
            </tbody>
        </table>
      ) : (
        <p className='mt-10 text-center'>Administra tus Clientes</p>

      )}
    </>
  )
}

export default Index
