import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Register = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className="container mt-5">
            <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title text-center">Registro de usuario</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" name="password" required />
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