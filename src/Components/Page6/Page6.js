import React from 'react';
import "./Page6.css"
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

function Page6() {
    return (
        <div className='page6'>
            <div className='page6_header'>
                <p>lorem ipsum doller emmet </p>
                <h2>Features of your Growth</h2>
            </div>
            <div className='page6_content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-2'>
                            <div className='page6_iconContainer'>
                                <CodeOutlinedIcon />
                                <h3>Programming</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-2'>
                            <div className='page6_iconContainer'>
                                <HeadphonesOutlinedIcon />
                                <h3>Music</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-2'>
                            <div className='page6_iconContainer'>
                                <AddBusinessOutlinedIcon />
                                <h3>Digital Marketing</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-2'>
                            <div className='page6_iconContainer'>
                                <DesignServicesOutlinedIcon />
                                <h3>Design and Art</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-2'>
                            <div className='page6_iconContainer'>
                                <AccountBalanceOutlinedIcon />
                                <h3>Finance</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-2'>
                            <div className='page6_iconContainer'>
                                <ContentPasteOutlinedIcon />
                                <h3>Content</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-2'>
                            <div className='page6_iconContainer'>
                                <EqualizerOutlinedIcon />
                                <h3>Sales & marketing</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page6
