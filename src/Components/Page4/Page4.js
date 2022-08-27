import React from 'react';
import Card from './Card/Card';
import A from "../assests/A.png";
import B from "../assests/B.png";
import C from "../assests/C.png";
import D from "../assests/D.png";
import E from "../assests/E.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Page4.css"

function Page4() {
    return (
        <div className='page4'>
            <div className='page4_header'>
                <div className='page4_headerLeft'>
                    <p>lorem ipsum doller emmet</p>
                    <h2>Trending Freelencer</h2>
                </div>
                <div className='page4_headerRight'>
                    <div className='icon_left'>
                        <ArrowBackIcon />
                    </div>
                    <div className='icon_right'>
                        <ArrowForwardIcon />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div className='col-lg-3 col-sm-12'>
                        <Card
                            image={A}
                            name="Eleanor Pena"
                            specification="Backend developer"
                            rating={4}
                            details="lorem ipsum dollor sit emmet lorem ipsum dollor sit emmet"
                        />
                    </div>
                    <div className='col-lg-3 col-sm-12'>
                        <Card
                            image={B}
                            name="Albert Flores"
                            specification="Backend developer"
                            rating={4}
                            details="lorem ipsum dollor sit emmet lorem ipsum dollor sit emmet"
                        />
                    </div>
                    <div className='col-lg-3 col-sm-12'>
                        <Card
                            image={C}
                            name="Cameron Williamson"
                            specification="Backend developer"
                            rating={4}
                            details="lorem ipsum dollor sit emmet lorem ipsum dollor sit emmet"
                        />
                    </div>
                    <div className='col-lg-3 col-sm-12'>
                        <Card
                            image={D}
                            name="Kristian Watson"
                            specification="Backend developer"
                            rating={4}
                            details="lorem ipsum dollor sit emmet lorem ipsum dollor sit emmet"
                        />
                    </div>
                    <div className='col-lg-3 col-sm-12'>
                        <Card
                            image={E}
                            name="Annete Black"
                            specification="Backend developer"
                            rating={4}
                            details="lorem ipsum dollor sit emmet lorem ipsum dollor sit emmet"
                        />
                    </div>
                </div>
            </div>
            {/* <ul className='page4_card'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}


        </div>
    )
}

export default Page4
