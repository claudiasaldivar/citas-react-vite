import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPacienters}) => {

    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
            <>
            <h2 className="font-black text-3xl text-center">
                Listado de Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {""}
                <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
            </p>
            {pacientes?.map((paciente) => <Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} eliminarPacienters={eliminarPacienters}/>)}
        
            </>
        ): (
           <>
           <h2 className="font-black text-3xl text-center">
                No hay pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Empieza agregando y apareceran {""}
                <span className="text-indigo-600 font-bold ">en este lugar</span>
            </p>
           </>
            )}
        </div>  
     );
}
 
export default ListadoPacientes;