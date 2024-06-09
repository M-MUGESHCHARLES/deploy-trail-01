import React from 'react'
import {ReactComponent as QuotesUp } from '../../images/icons/quote-up-svgrepo-com.svg'
import {ReactComponent as Quotesdown } from "../../images/icons/quote-down-svgrepo-com.svg"
import Test1 from '../../images/icons/test-1.png'
import Test2 from '../../images/icons/test-3.png'
import Test3 from '../../images/icons/test-2.png'


function FeedBack() {
  return (
    <div>
      <section id="FeedBack-Section">
        <div className="row ">
          <div className=" col-8 mb-2 mt-4 mx-auto text-center">
            <h3 className="mb-3 mt-4">
              <span class="material-symbols-outlined fs-1 align-middle">
                reviews
              </span>
              &nbsp; Customer Feedback
            </h3>

            <p>
              Overall smartwatches provide users with convenient access to
              essential information
            </p>
          </div>
        </div>

        <div className="row mb-5 mt-2 pb-3">
          <div className="feedback-container ">
            <div className="content py-5">
              <div className="col-7 centerCarousel ">
                <div
                  id="carouselExampleAutoplaying"
                  class="carousel carousel-dark slide "
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active rounded-5">
                       <div className='carousel-item-inner1 rounded-5'>
                        
                        <div className='carousel-item-inner2 rounded-5'>

                          <div className="row py-3">
                        <div className="col-10 mx-auto"> 
                           <div className='container'><QuotesUp className='Quotes'/></div>                        
                        </div>

                        <div className="col-10 centerDiv mx-auto py-2 ">⭐⭐⭐⭐⭐</div>
                        <div className='col-10 centerDiv mx-auto py-2 '> <p> As someone deeply invested in fitness, the smartwatch has been a game-changer for me. Its accurate heart rate monitoring and step tracking features help me stay on top of my fitness goals. </p>  </div>
                        <div className=" col-10 mx-auto "> 
                            <div className='container text-end'> <Quotesdown  className='Quotes '/> </div>
                        </div>
                        
                        <div className="col-10 centerDiv mx-auto py-2 "> 
                        <h6> 
                     <img src={Test1} alt="person" className='review-person'/> &nbsp; &nbsp;
                          <span className='fw-bold fs-5'>John</span> - <em className='text-muted fw-semibold'> Fitness Enthusiast</em></h6> </div>

                      </div>

                        </div>
                        
                      </div> 
                    </div>
                    <div class="carousel-item rounded-5">

                      <div className='carousel-item-inner1 rounded-5'>
                        
                        <div className='carousel-item-inner2 rounded-5'>

                       <div className="row py-3">
                        <div className="col-10 mx-auto"> 
                                                   <div className='container'><QuotesUp className='Quotes'/></div>                        

                        </div>

                        <div className="col-10 centerDiv mx-auto py-2 ">⭐⭐⭐⭐</div>
                        <div className='col-10 centerDiv mx-auto py-2 '> <p> As a busy professional, the smartwatch has become an essential tool for managing my hectic schedule. Its seamless integration with my smartphone keeps me updated on calls, messages, and appointments, allowing me to stay organized throughout the day </p>  </div>
                        <div className="col-10 mx-auto">
                            <div className='container text-end'> <Quotesdown  className='Quotes '/> </div>

                        </div>
                        
                        <div className="col-10 centerDiv mx-auto py-2 "> <h6> 
                          <img src={Test2} alt="person" className='review-person'/> &nbsp; &nbsp;
                          <span className='fw-bold fs-5'>Sarah </span> - <em className='text-muted fw-semibold'> Busy Professional </em> </h6></div>

                      </div>

                      </div> </div>
                    </div>
                    <div class="carousel-item rounded-5">

                      <div className='carousel-item-inner1 rounded-5'>
                        
                        <div className='carousel-item-inner2 rounded-5'>

                       <div className="row py-3">
                        <div className="col-10 mx-auto"> 
                                                   <div className='container'><QuotesUp className='Quotes'/></div>                        

                        </div>
                        
                        <div className="col-10 centerDiv mx-auto py-2 ">⭐⭐⭐⭐⭐</div>
                        <div className='col-10 centerDiv mx-auto py-2 '> <p> Being a tech enthusiast, the smartwatch offers me a plethora of features to explore and customize. From downloading third-party apps to tracking my sleep patterns, it serves as a miniature personal assistant on my wrist</p>  </div>
                        <div className="col-10 mx-auto">
                            <div className='container text-end'> <Quotesdown  className='Quotes '/> </div>

                        </div>
                        
                        <div className="col-10 centerDiv mx-auto py-2 "> <h6> 
                          <img src={Test3} alt="person" className='review-person'/> &nbsp; &nbsp;
                          <span className='fw-bold fs-5'> Michael </span> - <em className='text-muted fw-semibold'> Tech Enthusiast </em></h6></div>

                      </div> 
                      
                      </div>
                      </div>
                    
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="light-bg-hr">
          <hr />
        </div>
      </section>
    </div>
  );
}

export default FeedBack