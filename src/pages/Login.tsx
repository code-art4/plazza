import { useNavigate } from 'react-router-dom';
import { Input, Checkbox, Button } from '../components/ui';
import Separator from '../features/login/separator';
import AuthLayout from '../features/auth';
import GoogleSvg from '../assets/google.svg';

const Login = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className='flex flex-col gap-y-6'>
        <Input
          placeholder='Email address'
          id='email'
          name='email'
          type='email'
        />
        <Input placeholder='Password' id='pwd' name='pwd' type='password' />
      </div>

      <div className='mt-7'>
        <div className='flex items-center justify-between'>
          <Checkbox label='Remember Me' />
          <p className='text-green text-sm'>Forgot Password?</p>
        </div>
        <div className='mt-5'>
          <Button>Login</Button>
        </div>
        <div className='mt-8'>
          <Separator />

          <div className='mt-5'>
            <Button
              type='secondary'
              className='flex justify-center items-center gap-x-2'
            >
              <img src={GoogleSvg} className='w-5 h-5' />
              Login with Google
            </Button>
          </div>

          <p className='flex items-center justify-center mt-3'>
            Don’t have an account ?
            <p
              className='text-green text-medium ml-2 cursor-pointer'
              onClick={() => navigate('/signup')}
            >
              Sign up Here
            </p>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
