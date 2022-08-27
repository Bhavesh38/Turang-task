import React from 'react'

function Page7() {
    return (
        <div>
            <div className='page7 pt-4 pb-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md p-5'>
                            <p>
                                <b>Contact Us</b>
                            </p>
                            <p className='h1 text-light '>
                                <b>Let's have a</b>
                            </p>
                            <p className='h1 text-light'>
                                <b>Conversation for</b>
                            </p>
                            <p className='h1 text-light'>
                                <b>Your Query !</b>
                            </p>
                        </div>
                        <div className='col-md'>
                            <div className='container bg-light p-3' id="SixpageCon">
                                <form>
                                    <div class="form-group m-3">
                                        <label className='mb-2'>Email</label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="Inputbox"
                                            placeholder="eg saumen.thakur@gmail.com" />
                                    </div>
                                    <div class="form-group m-3">
                                        <label className='mb-2'>Message</label>
                                        <textarea
                                            class="form-control"
                                            id="Inputbox"
                                            rows="4"
                                            placeholder='Type Something...'></textarea>
                                    </div>
                                    <div class="form-group m-3">
                                        <div className='btn btn-dark ' id='sixpageBTN'>Send Request</div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page7
