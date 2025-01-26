import React, { useState } from 'react';
import { auth } from '../Firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='container' style={{ width: '50%' }}>
        <h1 className='text-center'>React Firebase Authentication</h1>

        <div className='container  my-5'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <div className='text-center'>
              <button
                style={{ width: '40%' }}
                type='submit'
                className='btn btn-primary'
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
