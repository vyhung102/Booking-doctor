import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import { authContext } from "../context/AuthContext.jsx";
import  HashLoader  from 'react-spinners/HashLoader'

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {dispatch} = useContext(authContext)

  const handleInputChange = e => {
    setFormData({... formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await res.json();
  

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          user:result.data,
          token:result.token,
          role:result.role,
        },
      });

      console.log(result, 'login data');
  
      setLoading(false);
      toast.success(result.message);
      navigate('/home');

    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Xin chào <span className='text-primaryColor'>Chào đón</span> trở lại 🎉 
        </h3>
        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
              <input 
              type="email" 
              placeholder='Nhập vào email của bạn' 
              name='email' 
              value={formData.email} 
              onChange={handleInputChange}
              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
              rounded-md cursor-pointer'
              />
          </div>

          <div className='mb-5'>
              <input 
              type="password" 
              placeholder='Nhập mật khẩu của bạn' 
              name='password' 
              value={formData.password} 
              onChange={handleInputChange}
              className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
              rounded-md cursor-pointer'
              />
          </div>


          <div className="mt-7">
            <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px]
            py-3 rounded-lg'>
              { loading ? <HashLoader size={25} color="#fff" /> :"Đăng nhập"}</button>
          </div>

          <p className='mt-5 text-textColor text-center'>
            Bạn không có tài khoản?<Link to='/register' className='text-primaryColor
            font-medium ml-1'>Đăng ký ngay!</Link>
          </p> 
        </form>
      </div>
    </section>
  )
}

export default Login
