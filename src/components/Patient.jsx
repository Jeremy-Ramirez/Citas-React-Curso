import React from 'react'
import { useEffect } from 'react'

export const Patient = ({ paciente, setpaciente, eliminarPaciente }) => {

    const { nombreMascota, nombrePropietario, email, alta, sintomas } = paciente;


    const handleEliminar = () => {

        const respuesta = confirm('Deseas eliminar este paciente?');

        if (respuesta) {
            eliminarPaciente(paciente.id);
        }
    }



    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>{nombreMascota}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {''}
                <span className='font-normal normal-case'>{nombrePropietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha Alta: {''}
                <span className='font-normal normal-case'>{alta}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex justify-between'>
                <button
                    type='button'
                    className='bg-yellow-300 hover:bg-yellow-400 font-bold uppercase py-2 px-10 rounded-md'
                    onClick={() => setpaciente(paciente)}
                >Editar

                </button>
                <button
                    type='button'
                    className='bg-red-600 hover:bg-red-700 font-bold uppercase py-2 px-10 rounded-md'
                    onClick={() => eliminarPaciente(paciente.id)}
                >Eliminar

                </button>
            </div>

        </div>

    )
}
