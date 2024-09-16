'use client';
import Input from '../reusable/Input';
import { colombiaDepartCities } from '@/utils/colombia';
import { useForm } from '@/hooks/useForm';
import { FormDataState } from '@/types';
import { useRouter } from 'next/navigation';

const Formulario = () => {
  const { formData, handleChange, generateCode, ciudades } =
    useForm<FormDataState>({
      nombre: '',
      apellido: '',
      cedula: '',
      departamento: '',
      ciudad: '',
      celular: '',
      email: '',
      aceptaDatos: false,
    });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const codigo = generateCode();
    router.push(`/confirmacion?codigo=${codigo}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg p-8 w-full lg:w-1/2 lg:h-[550px]"
    >
      <div className="flex flex-col lg:flex-row mb-4 lg:mb-0 lg:gap-4">
        <div className="mb-4 w-full">
          <Input
            label="Nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4 w-full">
          <Input
            label="Apellido"
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-4 lg:mb-0 lg:gap-4">
        <div className="mb-4 w-full">
          <Input
            label="Cédula"
            type="number"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700">Departamento</label>
          <select
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Selecciona un departamento</option>
            {colombiaDepartCities.map((dep) => (
              <option key={dep.id} value={dep.departamento}>
                {dep.departamento}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-4 lg:mb-0 lg:gap-4">
        <div className="mb-4 w-full">
          <label className="block text-gray-700">Ciudad</label>
          <select
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!ciudades.length}
            required
          >
            <option value="">Selecciona una ciudad</option>
            {ciudades.map((ciudad, index) => (
              <option key={index} value={ciudad}>
                {ciudad}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-4 lg:mb-0 lg:gap-4">
        <div className="mb-4 w-full">
          <Input
            label="Celular"
            type="number"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4 w-full">
          <Input
            label="Correo Electrónico"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="aceptaDatos"
          checked={formData.aceptaDatos}
          onChange={handleChange}
          className="mr-2 focus:ring-blue-500 focus:ring-2"
          required
        />
        <label className="text-gray-700">
          Autorizo el tratamiento de mis datos de acuerdo con la finalidad
          establecida en la política de protección de datos personales.
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors xl:mt-3 disabled:bg-[#ccc]"
        disabled={!formData.aceptaDatos}
      >
        Registrarse
      </button>
    </form>
  );
};

export default Formulario;
