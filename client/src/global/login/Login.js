import React, { useState } from 'react'
import './Login.scss'
import LoginIntro from '../../assests/images/LoginIntro.png'
import GoogleLogo from '../../assests/images/GoogleLogo.png'
import LogoBrand from '../../assests/images/Logo_Brand.png'
import Logo from '../../assests/images/Logo.png'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../features/Header';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        if (!userName || !password) {
            toast.error("Vui lòng điền đầy đủ thông tin đăng nhập!");
        } else {
            toast.success("Đăng nhập thành công");
        }
        console.log("User name: ", userName, "Password: ", password);
    }
    return (
    <>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <Header />
        <div className='login'>
            <div className="login-content">
                <div className='mb-5 title'>
                    <img src={LogoBrand} />
                    <p className='desc'>Chào mừng bạn đến với PetCare</p>
                </div>
                <div className='form'>
                    <div className="mb-3">
                        <label className="username form-label">Tên đăng nhập</label>
                        <input type="text" className="form-control" id="username" name='username' placeholder="Nhập tên người dùng" value={userName} onChange={(event) => setUserName(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="password form-label">Mật khẩu</label>
                        <input type="password" className="form-control" name='password' id="password" placeholder='Nhập mật khẩu' value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className='mb-5 d-flex justify-content-between'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label flexCheckDefault">
                                Lưu đăng nhập
                            </label>
                        </div>
                        <span style={{color: '#4B9CFC'}}>Quên mật khẩu</span>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary login-btn-1" type="button" onClick = {handleClick}>Đăng nhập</button>
                        <Link className='d-block' to='/login_Google'>
                            <button className="btn btn-primary login-btn-2" type="button">
                                <img src={GoogleLogo} />
                                <span>Đăng nhập với Google</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="login-img">
                <img src={LoginIntro} />
            </div>
        </div>
    </>
    )
}

export default Login