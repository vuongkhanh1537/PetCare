import LogoBrand from '../assests/images/Logo_Brand.png'

function Header() {
    return (
    <>
    <nav class="navbar navbar-light ">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
            <img src={LogoBrand} alt="" class="d-inline-block align-text-top" />
            </a>
        </div>
    </nav>
    </>
    )
}

export default Header