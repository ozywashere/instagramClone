import { useEffect, useRef, useState } from 'react';
import logo from './assets/logo.svg';
import img01 from './assets/img01.png';
import img02 from './assets/img02.png';
import img03 from './assets/img03.png';
import img04 from './assets/img04.png';
import Input from './components/Input';
import { AiFillFacebook } from 'react-icons/ai';

const App = () => {
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');

  const enable = username && password;

  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll('img');
    let total = images.length;
    let current = 0;

    setInterval(() => {
      images[current].style.opacity = 0;
      current = current != total - 1 ? current + 1 : 0;
      images[current].style.opacity = 1;
    }, 3000);
    return () => {
      clearInterval();
    };
  }, [ref]);
  return (
    <div className='h-screen w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8'>
      <div className='w-[380px] h-[580px] bg-logo-pattern bg-[length:468px_634px] bg-[top_left_-46px] relative hidden md:block'>
        <div className='w-[250px] h-[538px] absolute top-[27px] right-[18px]' ref={ref}>
          <img src={img01} alt='logo' className='w-full h-full transition-opacity  absolute top-0 left-0 duration-1000 ease-linear' />
          <img src={img02} alt='logo' className='w-full h-full  transition-opacity absolute top-0 left-0 duration-1000 ease-linear' />
          <img src={img03} alt='logo' className='w-full h-full transition-opacity  absolute top-0 left-0 duration-1000 ease-linear' />
          <img src={img04} alt='logo' className='w-full h-full transition-opacity  absolute top-0 left-0 duration-1000 ease-linear' />
        </div>
      </div>
      <div className='w-[350px] grid gap-y-[10px]'>
        <div className=' bg-white border p-[50px] pt-8 pb-2'>
          <a href='#/' className='flex items-center justify-center'>
            <img src={logo} alt='logo' className='h-[50px]  w-[174px]' />
          </a>
          <form className='grid gap-y-2'>
            <Input type='text' value={username} onChange={(e) => setUserName(e.target.value)} label='Phone number ,username or email' />
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} label='Password' />

            <button type='submit' disabled={!enable} className='h-[32px] rounded bg-brand text-white text-sm disabled:opacity-50 mt-1 '>
              Log in
            </button>

            <div className='flex items-center'>
              <div className='h-px bg-gray-300 flex-1'></div>
              <span className='px-3 text-[13px] text-gray-500 font-semibold'>OR</span>
              <div className='h-px bg-gray-300 flex-1'></div>
            </div>

            <a href='#/' className='flex items-center justify-center gap-x-2 text-xs text-facebook font-semibold'>
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a href='#/' className='text-xs text-facebook text-center font-semibold'>
              Forgot password?
            </a>
          </form>
        </div>
        <div className='bg-white border'>
          <p className='flex items-center justify-center gap-x-2 text-sm py-4'>
            Don 't have an account?
            <a href='#/' className='text-brand font-semibold'>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
