import React from 'react'
import "./Page5.css";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import AA from "../assests/AA.png"
function Page5() {
    return (
        <div className='page5'>
            <div className='page5_left'>
                <img src={AA} />
            </div>
            <div className='page5_right'>
                <h4>lorem ipsum doller emeet</h4>
                <h2>What we offer you</h2>
                <div className='right_content'>
                    <FmdGoodOutlinedIcon className='icon' />
                    <div className='right_contentAbout'>
                        <h4>Location By developer</h4>
                        <p>lorem epsum doller emmet lorem epsum doller emment</p>
                    </div>
                </div>
                <div className='right_content'>
                    <ConstructionOutlinedIcon className='icon' />
                    <div className='right_contentAbout'>
                        <h4>Client and Freelence Features</h4>
                        <p>lorem epsum doller emmet lorem epsum doller emment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page5
