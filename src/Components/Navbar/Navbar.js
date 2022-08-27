import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";



function Navbar() {
    return (
        <div className='task_navbar'>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link to="#" className="nav-link text-white">
                        <button type="button" class="navbar-brand btn" id="Navbarlogoi">
                            <b>Logo</b>
                        </button>
                    </Link>
                    {/* <button class="navbar-brand" href="#">Navbar</button> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" collapse navbar-collapse" id="navbarNav">
                        <ul class=" navbar-nav" id='menu'>
                            <li class="nav-item">
                                <Link to="#" className="nav-link text-light">
                                    <button type="button" class="btn btn-outline-dark">Login</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" className="nav-link text-light">
                                    <button type="button" class="btn btn-dark">Sign up</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" className="nav-link text-light">
                                    <button type="button" class="btn btn-outline" id="Navbarlogo">Be Freelancer</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
