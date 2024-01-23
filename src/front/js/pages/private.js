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

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Mi Aplicación</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/logout">Cerrar Sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container mt-5">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">¡Bienvenido a la Página Privada!</h1>
                        <p class="card-text">Has iniciado sesión con éxito.</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Private;
