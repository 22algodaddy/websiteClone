import "./header.css";
export default function header(){
    return(
        <>
            <div className="header">
          <header className="headerContent">
              qure.ai
          </header>
             <div className="headerOptions">
                 <div className="dropdowndiv">
                     <div className="dropdown show">
                         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:"15px"}}>
                             Care Areas
                         </button>

                         <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{backgroundColor:"rgb(14,34,69)"}}>
                             <div className="dropdownMenu">
                             <div>
                             <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/care-areas/lung-health/lung-cancer/"
                               target="_blank">Lung Cancer</a>
                             <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/care-areas/lung-health/tuberculosis/"
                              target="_blank">Tuberculosis</a>
                             </div>
                             <div>
                             <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/care-areas/neurocritical-care/" target="_blank">Nuerocritical Care</a>
                                 <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/care-areas/who-we-help/"
                                  target="_blank">Who We Help</a>
                             </div>
                             </div>
                         </div>
                     </div>

                 </div>

                 <div className="dropdowndiv" style={{marginLeft:"10px"}}>
                     <div className="dropdown show">
                         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:"15px"}}>
                             Products
                         </button>

                         <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{backgroundColor:"rgb(14,34,69)"}}>
                             <div className="dropdownMenu" >
                                 <div>
                                     <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/product/qxr/"
                                        target="_blank">qXR</a>
                                     <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/product/qer/"
                                        target="_blank">qER</a>
                                     <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/product/qer/"
                                        target="_blank">qCT-Lung</a>
                                     <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/product/qvh/"
                                        target="_blank">qVH</a>
                                     <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/product/qmsk/"
                                        target="_blank">qMSK</a>
                                 </div>
                                 <div>
                                     <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/product/qtrack/" target="_blank">
                                         qTrack</a>
                                     <a className="dropdown-item dropdownAnchorTag" href="https://www.qure.ai/product/qtrack/"
                                        target="_blank">qRemote</a>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>

                <a target="_blank" href="https://www.qure.ai/our-impact/"> <h4>Our Impact</h4> </a>
                 <a href="https://www.qure.ai/evidences/" target="_blank"><h4>Evidence</h4></a>
                 <a target="_blank" href="https://www.qure.ai/blog/"><h4>Blog</h4></a>
                 <a href="https://www.qure.ai/about-us/newsroom/" target="_blank"> <h4>About us</h4></a>
                 <a href="https://www.qure.ai/contact-us/" target="_blank"><h4>Contact Us</h4></a>
                 <button className="button" onClick={()=>{
                     window.open('https://app.qure.ai/login',"_blank");
                 }}>Try Now </button>
             </div>
         </div>
        </>
    );
}