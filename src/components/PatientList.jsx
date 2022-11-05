


import { useEffect } from 'react'
import { Patient } from './Patient'


export const PatientList = ({ pacientes, setpaciente,eliminarPaciente }) => {


    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            <h2 className='font-black text-2xl text-center'>Listado de Pacientes</h2>

            <p className='text-xl text-center mt-5 mb-10'> Administra tus {''}
                <span className='text-blue-400 font-bold'>Pacientes y citas</span>
            </p>

            {pacientes.length === 0 && <h2 className='font-black text-2xl text-center'>Comienza agregando pacientes</h2>}

            {
                pacientes.map((paciente) =>

                (
                    <Patient
                        key={paciente.id}
                        paciente={paciente}
                        setpaciente={setpaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                )
                )
            }


        </div>
    )
}
