import { useEffect, useState } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { PatientList } from "./components/PatientList"


function App() {

  const [pacientes, setpacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []); //Listado de Pacientes [{},{},{}]
  const [paciente, setpaciente] = useState({}); //Objeto Paciente

  //Se ejecutan segun el orden puesto

  //****EN NUEVAS VERSIONES NO ES NECESARIO EL USEEFFECT*****
  // useEffect(() => {
  //     const obtenerLS =()=>{
  //       //si no hay nada en local Storage agrego arreglo vacio
  //       const pacientesLS=JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //       setpacientes(pacientesLS);
  //     }
  //     obtenerLS();
  // }, []) //Se ejecuta una vez
  
  //Agrego pacientes al LocalStorage
  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  }, [pacientes])

  




  const eliminarPaciente=(id)=>{

    console.log(`Eliminando paciente con id: ${id}`);

    const listaPacientesActualizados=pacientes.filter((p)=>p.id!==id);
    setpacientes(listaPacientesActualizados);

  }


  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className=" mt-12 md:flex">

        <Form 
          pacientes={pacientes}
          setpacientes={setpacientes}
          paciente={paciente}
          setpaciente={setpaciente}
        />
        <PatientList 
          pacientes={pacientes}
          setpaciente={setpaciente}
          eliminarPaciente={eliminarPaciente}
        />

      </div>

    </div>
  )
}

export default App
