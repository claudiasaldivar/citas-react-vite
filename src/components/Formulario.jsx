import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [alta, setAlta] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            const {nombre: nombre, propietario:propietario, email:email, alta:alta, sintomas:sintomas} = paciente
            setNombre(nombre)
            setPropietario(propietario)
            setEmail(email)
            setAlta(alta)
            setSintomas(sintomas)
        }
        
    }, [paciente]);

    const generarId = () => {
        const rand = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36)

        return rand+date
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Validacion
        if([nombre, propietario, email, alta, sintomas].includes('')){
            setError(true)
            return
        }
        const objetoPacientes = {
            nombre, 
            propietario, 
            email, 
            alta, 
            sintomas,
        }
        if(paciente.id){
            objetoPacientes.id = paciente.id

            const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            objetoPacientes.id = generarId()
            setPacientes([...pacientes, objetoPacientes])
        }
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
        setError(false)
    }

    return ( 
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5" onSubmit={handleSubmit}>
            {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input 
                        id="mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre de la mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                    <input 
                        id="propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre de la propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input 
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input 
                        id="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="date"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea 
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                        />
                </div>
                <input 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    type="submit"
                    value={paciente.id ? "Editar paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
     );
}
 
export default Formulario;
