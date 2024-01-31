import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        try {
            // información del formulario a la API
            const response = await fetch(process.env.BACKEND_URL + 'register', requestOptions);
            const data = await response.json();

            if (data.msg === 'ok') {
                // Registro exitoso
                console.log('Registro exitoso');
                navigate('/login');
            } else {
                console.error('Error en el registro:', data.msg);
            }
        } catch (error) {
            console.error('Error en la llamada a la API:', error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title text-center">Registro de usuario</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Registrar</button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <p className="mb-0">¿Tienes una cuenta? <a href="/login">Ingresa aquí</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
