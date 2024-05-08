import React from "react";
import { Link } from "react-router-dom";

const WelcomeComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-8 text-center">
        ¡Bienvenido a nuestra comunidad!
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Únete hoy para acceder a contenido exclusivo y disfrutar de todas las
        funciones de nuestra plataforma.
      </p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Iniciar sesión
        </Link>
        <Link to="/create" className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default WelcomeComponent;
