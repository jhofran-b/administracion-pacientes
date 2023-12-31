import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:3/5 h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Paciente</h2>
      <p className="text-xl mt-5 text-center">
        Adminitras tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};

export default ListadoPacientes;
