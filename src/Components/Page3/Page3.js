import React from 'react';
import Img1 from "../assests/1.png"
import Img2 from "../assests/2.png"
import Img3 from "../assests/3.png"
import Img4 from "../assests/4.png"
import Img5 from "../assests/5.png"
import Img6 from "../assests/6.png"
import "./Page3.css"

function Page3() {
    return (
        <div>
            <div className='page3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 mt-5 page3_content'>
                            <p className='heading-small'>
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                            <h2 className='heading-two'>Our Choices with different technology</h2>
                        </div>

                        <div className='col-md-7 p-4' id='mob'>
                            <div className='row'>
                                <div className='col-lg-4 col-sm-6  con1'><img src={Img1} alt="pan" width="100%" />
                                    <p className='cont'>Content Writing</p>
                                </div>
                                <div className='col-lg-4 col-sm-6 con1'><img src={Img2} alt="pan" width="100%" />
                                    <p className='cont'>Graphics Design</p>
                                </div>
                                <div className='col-lg-4 col-sm-6 con1'><img src={Img3} alt="pan" width="100%" />
                                    <p className='cont'>Finance</p>
                                </div>
                                <div className='col-lg-4 col-sm-6 con1'><img src={Img4} alt="pan" width="100%" />
                                    <p className='cont'>SEO</p>
                                </div>
                                <div className='col-lg-4 col-sm-6 con1'><img src={Img5} alt="pan" width="100%" />
                                    <p className='cont'>Game Development</p>
                                </div>
                                <div className='col-lg-4 col-sm-6 con1'><img src={Img6} alt="pan" width="100%" />
                                    <p className='cont'>Logo Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Page3
