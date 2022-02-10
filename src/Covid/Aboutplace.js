import React from 'react'
import Zoom from 'react-reveal/Zoom';
function Aboutplace(props) {
    return (
        <>
         <div className="container-fluid" id='aboutplace' style={{background : "linear-gradient(to bottom, rgba(92,63,26,.8), rgba( 153,148,138,.4))",  height : "505px"  }}>
             <div className=" w-100 text-center">
                 <h1 className='pt-5 text-light heading' style={{color : "white"}}>EXPLORE</h1>
             </div>
             <div className="row text-center mt-5" style={{width : "75%" , margin : "0 auto"}}>
                 <div className="col w-75">
                     <Zoom>
                     <p style={{color : "black" , fontSize : '1.2em' , fontFamily : "'Luxurious Roman', cursive" }}>{props.info}</p>
                     </Zoom>
                 </div>
             </div>
             </div>   
        </>
    )
}

export default Aboutplace
