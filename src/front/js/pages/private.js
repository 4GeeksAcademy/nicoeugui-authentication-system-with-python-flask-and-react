import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // token en el sessionStorage
        const token = sessionStorage.getItem('token');

        if (!token) {
            // Si no hay token, redirigir al usuario a la página de inicio de sesión
            navigate('/login');
        }

        //lógica relacionada con la carga de datos o recursos privados
    }, [navigate]);

    const logout = () => {
        // Borrar el token del sessionStorage al hacer clic en el botón de logout
        sessionStorage.removeItem('token');
        // Redirigir al usuario a la página de inicio de sesión
        navigate('/login');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                {/* ... (código del navbar) */}
            </nav>

            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">¡Bienvenido a la Página Privada!</h1>
                        <p className="card-text">Has iniciado sesión con éxito.</p>
                        <button className="btn btn-danger" onClick={logout}>Cerrar Sesión</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Private;
