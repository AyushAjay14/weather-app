import React from 'react'
import Zoom from 'react-reveal/Zoom';
// import img from '../newyork.jpg'
function LiveCamers(props) {
    const photos = [{ig : props.img} , {ig : props.img} , {ig : props.img} , {ig : props.img} ];
    // console.log(photos[0].ig);
    return (
        <>
          <div className="container-fluid" id="cameras" style={{backgroundImage: "linear-gradient(to bottom, rgba(50,39,19,1), rgba(50,39,19,0.4))" , height : "505px" , zIndex : "2"}}>
              <div className="text-center pt-5 text-light">
                  <h1 className='heading'>LIVE CAMERAS</h1>
              </div>
              <div className="row d-flex justify-content-center mt-5 live-images">
                  {props.img.map((e) => {
                      return (
                        <>
                        <div className="col-lg-3 img1" style={{width : "21%" }}>
                            <Zoom>
                            <div className='bg-image hover-zoom imgheight' style={{ maxWidth: '22rem' }}>
                         <img src={e.img} className='imgheight' />
                            </div>

                      {/* <img src={e.img} alt="" className='imgheight' style={{boxShadow : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/> */}
                            </Zoom>
                      <div className="text-lg-start ms-3 mt-3 text-light lines">
                          <h5 className='linesh5' style={{textTransform: "uppercase"}}>{(props.entry === "")?"NEW YORK": props.entry}</h5>
                      </div>
                  </div>
                        </>
                      );
                
                  })}
                 
              </div>
              </div>  
        </>
    )
}

export default LiveCamers
