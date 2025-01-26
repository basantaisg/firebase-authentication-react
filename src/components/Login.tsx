import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='container' style={{ width: '50%' }}>
        <h1 className='text-center'>React Firebase Authentication</h1>

        <div className='container  my-5'>
          <form>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='htmlForm-label'>
                Email address
              </label>

              <input
                type='email'
                className='htmlForm-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='htmlForm-label'>
                Password
              </label>
              <input
                type='password'
                className='htmlForm-control'
                id='exampleInputPassword1'
              />
            </div>
            <div className='text-center'>
              <button
                style={{ width: '40%' }}
                type='submit'
                className='btn btn-primary'
              >
                Login
              </button>
            </div>
            <Link
              style={{
                color: 'white',
                marginLeft: '30rem',
              }}
              to='/register'
            >
              <p>Register New User</p>
            </Link>
          </form>
        </div>

        <div className='container text-center'>
          <div className='d-flex justify-content-center align-items-center'>
            <button
              className='btn d-flex justify-content-center align-items-center'
              style={{
                backgroundColor: 'white',
                width: '72%',
              }}
            >
              <div style={{ width: '12%' }}>
                <img
                  src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-htmlFor-success-google-business-webinar-13.png'
                  alt=''
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}
                >
                  Login With Google
                </h2>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
