import React, { useEffect, useState } from 'react'
import './Login.scss'
import LoginIntro from '../../assests/images/LoginIntro.png'
import GoogleLogo from '../../assests/images/GoogleLogo.png'
import LogoBrand from '../../assests/images/Logo_Brand.png'
import Logo from '../../assests/images/Logo.png'
import { Link } from 'react-router-dom'
import { loginApi } from '../../services/LoginService'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        let check = localStorage.getItem("username");
        if (check) {
            navigate("/");
        }
    })

    const handleClick = async () => {
        if (!username || !password) {
            toast.warn("Vui lòng điền đầy đủ thông tin đăng nhập!");
        } else {
            let res = await loginApi(username, password);
            console.log(res);
            // if (res && res.status === 200) {
            //     toast.success("Đăng nhập thành công");
            //     // navigate("/dashboard");
            // }
            // if (res && (res.status === 404 || res.status === 401)) {
            //     toast.error("Sai thông tin đăng nhập");
            // }
            if (res) {
                if (res.name) {
                    toast.success("Đăng nhập thành công");
                    localStorage.setItem("username", res.name);
                    localStorage.setItem("id", res.id);
                    navigate("/");
                } else if (res.status === 404) {
                    toast.error("Sai thông tin đăng nhập");
                } else if (res.status === 401) {
                    toast.error("Sai mật khẩu");
                }
            } 
            
        }
    }

    return (
    <>
        <nav className="navbar navbar-light ">
            <div class="container-fluid">
                <a className="navbar-brand">
                <img src={LogoBrand} alt="" className="d-inline-block align-text-top" />
                </a>
            </div>
        </nav>

        <div className='login'>
            <div className="login-content">
                <div className='mb-5 title'>
                    <img src={LogoBrand} />
                    <p className='desc'>Chào mừng bạn đến với PetCare</p>
                </div>
                <div className='form'>
                    <div className="mb-3">
                        <label className="username form-label">Tên đăng nhập</label>
                        <input type="text" className="form-control" id="username" name='username' placeholder="Nhập tên người dùng" value={username} onChange={(event) => setUsername(event.target.value)}/>
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
                        {/* <Link className='d-block' to='/login_Google'>
                            <button className="btn btn-primary login-btn-2" type="button">
                                <img src={GoogleLogo} />
                                <span>Đăng nhập với Google</span>
                            </button>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className="login-img">
                <img src={LoginIntro} className='img-fluid'/>
            </div>
        </div>
    </>
    )
}

export default Login