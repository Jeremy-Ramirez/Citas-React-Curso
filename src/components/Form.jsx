import { useEffect, useState } from "react"
import { Error } from "./Error";
export const Form = ({pacientes,setpacientes, paciente,setpaciente}) => {

    //Atributos del formulario
    const [nombreMascota, setnombreMascota] = useState('');
    const [nombrePropietario, setnombrePropietario] = useState('');
    const [email, setemail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setsintomas] = useState('');

    const [error, seterror] = useState(false);


    //para poner los datos del objeto a editar

    useEffect(() => {

        //verificando si el objeto no está vacío
        if(Object.keys(paciente).length>0){

            //Agrego los valores del objeto seleccionado al formulario para poder editarlo
            setnombreMascota(paciente.nombreMascota);
            setnombrePropietario(paciente.nombrePropietario);
            setemail(paciente.email);
            setAlta(paciente.alta);
            setsintomas(paciente.sintomas);

            return;
        }
        
    }, [paciente]) //se ejecuta cuando cambia el paciente seleccionado al dar click en editar
    

    const generarId =()=>{
        const random= Math.random().toString(36).substr(2);
        const fecha= Date.now().toString(36);
        return random+fecha;
    }


    const handleSubmit =(e)=>{
        e.preventDefault();

        //Validacion del formulario

        if([nombreMascota,nombrePropietario,email,alta,sintomas].includes('')){
            console.log('Error');
            seterror(true);
            return;
        }

        seterror(false);

        //Construimos objeto con las propiedades del paciente

        const objetoPaciente={
            nombreMascota,
            nombrePropietario,
            email,
            alta,
            sintomas,
        }

        
      
        //agregamos el id y lo agregamos a la lista de pacientes

        
        //si existe id, significa que estamos editando
        if(paciente.id){
            //Editando el registro

            objetoPaciente.id=paciente.id; //asigno id que le pertenece

            //objetoPaciente es el objeto actualizado
            const pacientesActualizados=pacientes.map((pacienteState)=> pacienteState.id === paciente.id? objetoPaciente: pacienteState)

            setpacientes(pacientesActualizados);
            //limpiamos state
            setpaciente({});
        }else{

            //Nuevo registro
            objetoPaciente.id=generarId();
            setpacientes([...pacientes, objetoPaciente]);
    
        }


        //Reiniciar Formulario
        setnombreMascota('');
        setnombrePropietario('');
        setemail('');
        setAlta('');
        setsintomas('');
        
    }






    //Formulario
    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>

            <h2 className='font-black text-2xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-xl text-center mt-5 mb-10'> Añade Pacientes y {''}
                <span className='text-blue-400 font-bold'>Administralos</span>
            </p>

            <form action="" className='bg-white shadow-md rounded-md py-10 px-5 mb-10' onSubmit={handleSubmit}>

                { error && <Error/>}




                <div className='mb-5'>
                    <label htmlFor="NombreMascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input
                        id="NombreMascota"
                        type="text"
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        onChange={(e)=>setnombreMascota(e.target.value)}
                        value={nombreMascota}
                        
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="NombrePropietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
                    <input
                        id="NombrePropietario"
                        type="text"
                        placeholder='Nombre del propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombrePropietario}
                        onChange={(e)=>setnombrePropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="Email" className='block text-gray-700 uppercase font-bold'>Email</label>
                    <input
                        id="Email"
                        type="email"
                        placeholder='Email'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e)=>setemail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="Alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
                    <input
                        id="Alta"
                        type="date"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={alta}
                        onChange={(e)=>setAlta(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="Sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                    <textarea
                        id="Sintomas"
                        placeholder='Describe los síntomas'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={sintomas}
                        onChange={(e)=>setsintomas(e.target.value)}
                    />
                </div>
                {/* Cuando no tengo nigun valor no tengo id, por eso pregunto si tiene id para cambiar texto */}
                <input
                    type="submit"
                    className='bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 cursor-pointer transition-all'
                    value={paciente.id ?'Editar Paciente': 'Agregar Paciente'}
                />

            </form>



        </div>
    )
}
