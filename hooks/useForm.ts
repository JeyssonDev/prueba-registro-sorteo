import { colombiaDepartCities } from '@/utils/colombia';
import { useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [ciudades, setCiudades] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    if (name === 'departamento') {
      const departamentoSeleccionado = colombiaDepartCities.find(
        (dep) => dep.departamento === value
      );
      setCiudades(
        departamentoSeleccionado ? departamentoSeleccionado.ciudades : []
      );
      setFormData((prevState) => ({
        ...prevState,
        ciudad: '',
      }));
    }
  };

  const generateCode = () => {
    const codigoGenerado = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();

    return codigoGenerado;
  };

  return {
    formData,
    handleChange,
    setFormData,
    generateCode,
    ciudades,
  };
};
