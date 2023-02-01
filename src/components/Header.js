import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="container-lg header d-flex align justify-content-between align-items-end p-2">
            <div className="logo"> 
                <a href="/" className="text-decoration-none text-dark">.DEV </a>
            </div>
            <nav className="navigation">
                <ul className="navigation-menu d-flex list-unstyled gap-5 m-0">
                    <li className="nav-item"><Link to="/#projects" className="text-decoration-none text-dark">projects</Link></li>
                    <li className="nav-item"><Link to="/#skills" className="text-decoration-none text-dark">skills</Link></li>
                    <li className="nav-item"><Link to="/#contact" className="text-decoration-none text-dark">contact</Link></li>
                    <li className="nav-item"><Link to="/about" className="text-decoration-none text-dark">about me</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;