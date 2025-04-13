import React, { useState } from 'react';
import Googlebuttondaftar from '../Atoms/googlebuttondaftar';
import Divider from '../Atoms/divider';
import Bendera from '../../assets/images/Logobenderaindo.svg';

const Formregister = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: '+62',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  // State for form errors
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Nama lengkap diperlukan';
    if (!formData.email) newErrors.email = 'Email diperlukan';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Nomor HP diperlukan';
    if (!formData.password) newErrors.password = 'Kata sandi diperlukan';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi kata sandi tidak cocok';
    }
    
    setErrors(newErrors);
    
    // If no errors, proceed with registration
    if (Object.keys(newErrors).length === 0) {
      console.log('Registration data:', formData);
      // Here you would typically call your registration API
    }
  };

  return (
    <section className='flex justify-center'>
      <div className='w-2xl border bg-textLight-primary p-14 rounded border-other-border mt-20'>
        <h3 className='text-center text-textDark-primary font-semibold'>Pendaftaran Akun</h3>
        <h6 className='text-center m-0 text-textDark-secondary'>Yuk, daftarkan akunmu sekarang juga!</h6>
        
        <div className='mt-10'>
          <form onSubmit={handleSubmit}>
            <p>Nama Lengkap<span className='text-tertiary-default ml-0'>*</span></p>
            <input 
              type="text" 
              name="fullName"
              id='namalengkap' 
              value={formData.fullName}
              onChange={handleInputChange}
              className={`w-full h-12 mb-1 border rounded-xl border-input-default ${errors.fullName ? 'border-error-default' : ''}`}
            />
            {errors.fullName && <p className="text-error-default text-sm mb-2">{errors.fullName}</p>}

            <p>E-Mail<span className='text-tertiary-default ml-0'>*</span></p>
            <input 
              type="email" 
              name="email"
              id='email' 
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full h-12 mb-1 border rounded-xl border-input-default ${errors.email ? 'border-error-default' : ''}`}
            />
            {errors.email && <p className="text-error-default text-sm mb-2">{errors.email}</p>}
            
            <label htmlFor="nohp">No.HP<span className='text-tertiary-default ml-0'>*</span></label><br />
            <div className='flex justify-between'>
              <select 
                name="phoneCode" 
                id="indo" 
                value={formData.phoneCode}
                onChange={handleInputChange}
                className='w-40 h-12 mb-1 border rounded-xl border-input-default cursor-pointer'
              >
                <option value="+62">+62</option>
              </select>
              <input 
                type="text" 
                name="phoneNumber"
                id='nohp' 
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-95 h-12 mb-1 border rounded-xl border-input-default ${errors.phoneNumber ? 'border-error-default' : ''}`}
              />
            </div>
            {errors.phoneNumber && <p className="text-error-default text-sm mb-2">{errors.phoneNumber}</p>}

            <p>Kata Sandi <span className='text-tertiary-default ml-0'>*</span></p>
            <input 
              type="password" 
              name="password"
              id='katasandi' 
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full h-12 mb-1 border rounded-xl border-input-default ${errors.password ? 'border-error-default' : ''}`}
            />
            {errors.password && <p className="text-error-default text-sm mb-2">{errors.password}</p>}

            <p>Konfirmasi Kata Sandi <span className='text-tertiary-default ml-0'>*</span></p>
            <input 
              type="password" 
              name="confirmPassword"
              id='konfirmasikatasandi' 
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full h-12 mb-1 border rounded-xl border-input-default ${errors.confirmPassword ? 'border-error-default' : ''}`}
            />
            {errors.confirmPassword && <p className="text-error-default text-sm mb-2">{errors.confirmPassword}</p>}

            <button 
              type="submit"
              className='bg-primary-default text-textLight-primary w-full h-12 rounded-xl my-4 cursor-pointer font-bold'
            >
              Daftar
            </button>
          </form>

          <button className='bg-primary-100 text-primary-default w-full h-12 rounded-xl mt-0 mb-6 cursor-pointer font-bold'>
              Masuk
          </button>

          <Divider />
          <Googlebuttondaftar />
        </div>
      </div>
    </section>
  );
};

export default Formregister;