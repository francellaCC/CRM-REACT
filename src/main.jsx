import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './component/Layout'
import NuevoCliente , {action as nuevoClienteAction} from './pages/NuevoCliente'
// Se debe importar el loader aqui para volver a pasarselo a el componente
// y que este conozca que tiene ese loader
// as permite renombrar y eso permite no tener problemas
import Index , {loader as clienteloader}from './pages/Index'
import ErrorPage from './component/ErrorPage'
import EditarClientes , {loader as editarClienteLoader, action as editarClienteAccion}from './pages/EditarClientes'
import { action as eliminarClienteAction } from './component/Cliente'



// Se crean las rutas por medio de un objeto
const router = createBrowserRouter([
  {
    // Se definen las rutas
    path: '/',
    // Es lo que se muestra en pantalla puede ser un elemento de HTML
    // o un component
    element: <Layout></Layout>,
    children:[
      {
        index:true,
        element:<Index></Index>,
        loader: clienteloader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteid/editar',
        element: <EditarClientes/>,
        loader:editarClienteLoader,
        action:editarClienteAccion,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteid/eliminar',
        action:eliminarClienteAction
      }
      
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
