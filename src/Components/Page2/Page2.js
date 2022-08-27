import React from 'react';
import Logo from "../assests/Logo1.png";
import "./Page2.css"

function Page2() {
    return (
        <div>
            <div className='page2 pt-5'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-7 mb-2 pt-2'>
                            <div className='left'>
                                <p className='heading'>Lorem ipsum dolor sit
                                    <br />amet, consectetur<br />
                                    adipiscing elit</p><br />
                                <p className='text'>Lorem ipsum dolor sit amet consectetur,
                                    <br />adipisicing elit. Facilisi tincidunt volutpat
                                    <br />vestibulum,massa,imperdiet</p>
                            </div>
                        </div>
                        <div className='col-md-5 '>
                            <div className='img'><img src={Logo} alt="Img" height="auto" width="100%" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container'>
                    <div className='row'>
                        <div class="form col-sm" id='text'>
                            <i class="fa fa-search text-dark">&nbsp;&nbsp;<span className='vr'></span>
                            </i>
                            <input
                                type="text"
                                class="form-control form-input"
                                placeholder="What are you looking here eg. freelancer, projects"
                            />
                        </div>
                        <div className='search_section float-start' >
                            <div className='page2_searchTitle'>
                                <span className='m-2'>Search:</span>
                            </div>
                            <div className='page2_searchContent'>
                                <span className='btn btn-sm btn-outline-secondary bg-muted px-2 m-2' id='color'>Logo Design</span>
                                <span className='btn btn-sm btn-outline-secondary bg-muted px-2 m-2' id='color'>SEO</span>
                                <span className='btn btn-sm btn-outline-secondary bg-muted px-2 m-2 button' id='color'>Wordpress</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2
