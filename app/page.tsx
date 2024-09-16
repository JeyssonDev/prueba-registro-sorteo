import Formulario from '@/components/ui/Formulario';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 lg:px-20 lg:pb-0 bg-gradient-to-r from-red-500 to-orange-500">
      <main className="w-full flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row items-center justify-center">
        <Formulario />
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-opacity-80 p-10 shadow-lg lg:h-[550px]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Recolección de datos para el Sorteo
            </h1>
            <p className="text-white text-lg">
              Completa el formulario para participar en el sorteo. ¡Buena
              suerte!
            </p>
          </div>
        </div>
      </main>
      <footer className="mt-6 text-white text-sm">
        © {new Date().getFullYear()} Compañía de Automóviles. Todos los derechos
        reservados.
      </footer>
    </div>
  );
}
