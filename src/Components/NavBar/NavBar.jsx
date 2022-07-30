
import logo from "./../../logo.png"
import "./NavBar.css"

export function NavBar() {
    return (
        <>
            <nav className="navbar shadow navbar-expand-lg" style={{backgroundolor: "#ffffff"}}>
                <div className="container">
                    <a href="/" className="navbar-brand" >
                        <img src={logo} alt="inilogo" width="150"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="search w-75">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Cari kelas belajar" aria-label="Username"
                                aria-describedby="basic-addon1"/>
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="bi bi-search"></i>
                                </span>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown me-2">
                                <a href="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Produk Kami
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/" className="dropdown-item" >Action</a></li>
                                    <li><a href="/" className="dropdown-item" >Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a href="/" className="dropdown-item" >Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown me-2 jenjang">
                                <a href="/" className="nav-link dropdown-toggle btn btn-outline-secondary px-2"  role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Jenjang
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/" className="dropdown-item" >Action</a></li>
                                    <li><a href="/" className="dropdown-item" >Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a href="/" className="dropdown-item" >Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item btn btn-outline-secondary me-2 rounded-pill">
                                <p className="m-0 px-2">
                                    Masuk
                                </p>
                            </li>
                            <li className="nav-item btn btn-secondary me-2 rounded-pill">
                                <p className="m-0 px-2">
                                    Daftar
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )

}