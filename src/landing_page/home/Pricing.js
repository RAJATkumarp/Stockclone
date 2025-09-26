import React from 'react'
function Pricing () {
    return ( 
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-1'> </div>
                <div className='col-4'>
                  <h1 className="mb-3">Unbeatable pricing</h1>
                  <p className="mb-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                  <a href="" style={{textDecoration:"none"}}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-1'> </div>
                <div className='col-5 mt-4'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-2 border mx-2'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and F&Q</p>
                        </div>
        
                    </div>
                 </div>
                 
            </div>
            <div className='col-1'> </div>
        </div>
     );
}

export default Pricing;