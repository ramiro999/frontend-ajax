import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllCustomerAccount,
  deleteCustomerAccount,
  getAllProvider,
  deleteProvider,
} from "../Service";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (selectedOption === "clientes") {
          response = await getAllCustomerAccount();
        } else if (selectedOption === "proveedores") {
          response = await getAllProvider();
        }
        setItems(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    if (localStorage.getItem("token-info") != null) {
      setIsLoggedin(true);
    }

    fetchData();
  }, [selectedOption]); // Se ejecuta cada vez que selectedOption cambia

  const eliminarItem = async (itemId) => {
    if (
      window.confirm(
        `¿Está seguro de que desea eliminar este ${
          selectedOption === "clientes" ? "cliente" : "proveedor"
        }?`
      )
    ) {
      try {
        if (selectedOption === "clientes") {
          await deleteCustomerAccount(itemId);
        } else if (selectedOption === "proveedores") {
          await deleteProvider(itemId);
        }
        setItems(items.filter((item) => item.id !== itemId));
        alert(`${selectedOption === "clientes" ? "Cliente" : "Proveedor"} eliminado correctamente!`);
      } catch (error) {
        alert(`Error al eliminar el ${selectedOption === "clientes" ? "cliente" : "proveedor"}`);
        console.error(error);
      }
    }
  };

  const editarItem = (itemId) => {
    navigate(`/editar-${selectedOption}/${itemId}`);
  };

  const agregarItem = () => {
    navigate(`/crear${selectedOption}`);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const logout = () => {
    localStorage.removeItem("token-info");
    navigate("/");
  };

  const renderContent = () => {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Lista de {selectedOption === "clientes" ? "Clientes" : "Proveedores"}
        </h2>
        <button
          onClick={agregarItem}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Agregar {selectedOption === "clientes" ? "Cliente" : "Proveedor"}
        </button>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-gray-100 rounded-md p-2 mb-2"
            >
              <span>{item.nombre}</span>
              <div>
                <button
                  onClick={() => editarItem(item.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-zinc-800 text-white w-full h-screen px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Panel de control</h1>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 py-2 px-4 my-4 rounded-lg"
        >
          Cerrar sesión
        </button>
      </div>
      <ul className="flex bg-gray-200 rounded-md p-1.5 overflow-hidden font-sans">
        <li
          className={`text-gray-600 rounded-md font-bold w-full text-center text-base py-2 px-4 cursor-pointer ${
            selectedOption === "clientes" ? "bg-indigo-700 text-slate-100" : ""
          }`}
          onClick={() => handleOptionChange("clientes")}
        >
          Clientes
        </li>
        <li
          className={`text-gray-600 rounded-md font-bold w-full text-center text-base py-2 px-4 cursor-pointer ${
            selectedOption === "proveedores"
              ? "bg-indigo-700 text-slate-100"
              : ""
          }`}
          onClick={() => handleOptionChange("proveedores")}
        >
          Proveedores
        </li>
      </ul>
      {renderContent()}
    </div>
  );
};

export default Dashboard;
