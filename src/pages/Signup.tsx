import { useNavigate } from 'react-router-dom';
import { Input, Button, Checkbox } from '../components/ui';
import AuthLayout from '../features/auth';
import SignupSelect from '../features/signup/Select';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className='flex flex-col gap-y-6'>
        <Input placeholder='First name' id='fname' name='fname' />
        <Input placeholder='Last name' id='lname' name='lname' />
        <Input
          placeholder='Email address'
          id='email'
          name='email'
          type='email'
        />
        <div className='flex items-center gap-x-5'>
          <SignupSelect />
          <Input placeholder='OTP' id='otp' name='otp' type='number' />
        </div>
        <div className='flex flex-col gap-y-6'>
          <Input placeholder='Password' id='pwd' name='pwd' type='password' />
          <Input
            placeholder='Confirm Password'
            id='pwd'
            name='pwd'
            type='password'
          />

          <div>
            <Checkbox>
              <span className='text-grey'>
                I agree with the{' '}
                <span className='text-green'>terms and conditions</span>
              </span>
            </Checkbox>

            <div className='mt-5'>
              <Button>Signup</Button>
            </div>

            <p className='flex items-center justify-center text-[#787878] mt-3'>
              Already have an account ?
              <p
                className='text-green text-medium ml-2 cursor-pointer'
                onClick={() => navigate('/login')}
              >
                Login Here
              </p>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
