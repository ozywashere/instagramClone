import { useEffect, useState, useRef } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
const Input = ({ label, type = 'text', ...props }) => {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);
  const inputRef = useRef();
  useEffect(() => {
    if (show) {
      setInputType('text');
      inputRef.current.focus();
    } else if (type === 'password') {
      setInputType('password');
      inputRef.current.focus();
    } else {
      setInputType(type);
    }
  }, [show]);

  return (
    <label className=' relative bg-zinc-50 flex rounded-sm border focus-within:border-gray-400'>
      <input
        ref={inputRef}
        type={inputType}
        className=' px-2 outline-none w-full text-link  h-[38px] peer text-xs valid:pt-[10px]'
        required={true}
        {...props}
      />
      <small className='absolute top-1/2 left-[9px] text-xs cursor-text text-gray-400 -translate-y-1/2 pointer-events-none peer-valid:text-[10px] peer-valid:top-2 '>
        {label}
      </small>
      {type === 'password' && props?.value && (
        <button
          type='button'
          className='absolute top-0 right-0 text-xs cursor-pointer text-gray-400 h-full px-2'
          onClick={() => {
            setShow((prev) => !prev);
          }}>
          {!show ? <AiOutlineEyeInvisible size={16} /> : <AiOutlineEye size={16} />}
        </button>
      )}
    </label>
  );
};

export default Input;
