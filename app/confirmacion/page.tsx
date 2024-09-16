'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const Confirmacion = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const codigo = searchParams.get('codigo');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600">
          ¡Registro completado!
        </h1>
        <p className="mt-4">Tu código de confirmación es:</p>
        <p className="text-3xl font-bold mt-2 text-gray-800 text-center">
          {codigo}
        </p>
        <button
          onClick={() => router.push('/')}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors xl:mt-3"
        >
          Volver al formulario
        </button>
      </div>
    </div>
  );
};

export default Confirmacion;
