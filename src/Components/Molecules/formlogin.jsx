import React, { useState } from 'react';
import Googlebutton from '../Atoms/googlebutton';
import Divider from '../Atoms/divider';
import { useNavigate } from "react-router-dom";

const Formlogin = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        const newErrors = {};
        if (!user.email) newErrors.email = "Email is required";
        if (!user.password) newErrors.password = "Password is required";
        
        setErrors(newErrors);
        
        // If no errors, proceed with login
        if (Object.keys(newErrors).length === 0) {
            console.log("Login attempt with:", user);   
            // Here you would typically call your authentication API
        }
    };

        const navigate = useNavigate();
        const handleNavigateToLogin = () => {
            navigate("/login");} // Mengarahkan ke root (halaman utama)
        const handleNavigateToRegisters = () => {
                navigate("/registers");
        };


    

    return (
        <section className='flex justify-center'>
            <div className='w-2xl border bg-textLight-primary p-14 rounded border-other-border'>
                <h3 className='text-center text-textDark-primary font-semibold'>Masuk ke Akun</h3>
                <h6 className='text-center m-0 text-textDark-secondary'>Yuk, lanjutin belajarmu di videobelajar.</h6>
                
                <div className='mt-10'>
                    <form onSubmit={handleSubmit}>
                        <p>E-Mail <span className='text-tertiary-default ml-0'>*</span></p>
                        <input 
                            type="email" 
                            name="email"
                            id='email' 
                            value={user.email}
                            onChange={handleInputChange}
                            className={`w-full h-12 mb-6 border rounded-xl border-input-default ${errors.email ? 'border-error-default' : ''}`}
                        />
                        {errors.email && <p className="text-error-default text-sm mt-[-1rem] mb-2">{errors.email}</p>}
                        
                        <p>Kata Sandi <span className='text-tertiary-default ml-0'>*</span></p>
                        <input 
                            type="password" 
                            name="password"
                            id='katasandi' 
                            value={user.password}
                            onChange={handleInputChange}
                            className={`w-full h-12 mb-6 border rounded-xl border-input-default ${errors.password ? 'border-error-default' : ''}`}
                        />
                        {errors.password && <p className="text-error-default text-sm mt-[-1rem] mb-2">{errors.password}</p>}
                        
                        <p className='text-right font-medium text-textdark-tertiary cursor-pointer'>Lupa Password?</p>

                        <button 
                            onClick={handleNavigateToLogin}
                            type='submit'
                            className='bg-primary-default text-textLight-primary w-full h-12 rounded-xl my-4 cursor-pointer font-bold'
                        >
                            Masuk
                        </button>
                    </form>

                    <button 
                            onClick={handleNavigateToRegisters}
                            className='bg-primary-100 text-primary-default w-full h-12 rounded-xl mt-0 mb-6 cursor-pointer font-bold'>
                        Daftar
                    </button>

                    <Divider />
                    <Googlebutton />
                </div>
            </div>
        </section>
    );
};

export default Formlogin;