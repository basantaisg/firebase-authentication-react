const Register = () => {
  return (
    <>
      <div className='container' style={{ width: '50%' }}>
        <h1 className='text-center'>React Firebase Authentication</h1>

        <div className='container  my-5'>
          <form>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
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
