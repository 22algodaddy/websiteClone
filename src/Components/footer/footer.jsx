import "./footer.css"
import {IoLogoTwitter} from "react-icons/io"
import {BsLinkedin,BsSpotify} from "react-icons/bs"
import {GoMarkGithub} from "react-icons/go"
import {SiMedium,SiYoutubemusic} from "react-icons/si"
 export default function footer(){
    return(
        <div>
          <footer>
              <div className="footerDiv">
                <div className="aboutUs" style={{marginLeft:"50px"}}>
                    <p className="aboutUsSentence">
                        Qure.ai Technologies Private limited
                        <br/><br/>
                        Qure.ai was founded in 2016. Our mission is to use <br/>
                        artificial intelligence to make healthcare
                        more accessible and affordable.
                        <br/><br/>
                       <p style={{color: '#0f2332',fontSize:"15px",fontWeight:"bold"}}> Follow Us</p>
                        <br />
                        <div className="socialMedia">
                         <a href="https://twitter.com/qure_ai" target="_blank" className="anchorTag">
                        <IoLogoTwitter style={{height:"30px",width:"30px"}}/></a>
                            <a href="https://www.linkedin.com/company/qure.ai/" target="_blank">
                                <BsLinkedin style={{height:"30px",width:"30px",marginLeft:"5px"}} /></a>
                            <a href="https://github.com/qureai" target="_blank">
                                <GoMarkGithub style={{height:"30px",width:"30px",marginLeft:"5px"}}/></a>
                            <a href="https://qure.medium.com/" target="_blank">
                                <SiMedium style={{height:"30px",width:"30px",marginLeft:"5px"}}></SiMedium></a>
                            <a href="https://open.spotify.com/show/2U4NfYoGLwR51hRlwquoM4" target="_blank">
                                <BsSpotify style={{height:"30px",width:"30px",marginLeft:"5px"}}></BsSpotify></a>
                            <a href="https://www.youtube.com/channel/UCQO8376Tm6LT-YwRTHjDrag" target="_blank">
                                <SiYoutubemusic style={{height:"30px",width:"30px",marginLeft:"5px"}}></SiYoutubemusic></a>
                        </div>
                    </p>
                </div>
                  <div className="footerProduct">
                   <ul style={{fontSize:"14px",fontWeight:"bold",listStyleType: "none"}}>
                       Products
                       <div className="footerCareAreaOptions">
                       <li className="footerList">
                           <a href="https://www.qure.ai/product/qxr/" target="_blank" className="footerAnchor">qXR</a>
                       </li>
                       <li className="footerList">
                           <a href="https://www.qure.ai/product/qer/" target="_blank" className="footerAnchor">qER</a>
                       </li>
                       <li className="footerList">
                           <a href="https://www.qure.ai/product/qct-lung/" target="_blank" className="footerAnchor">qCT Lung</a>
                       </li>
                       <li className="footerList">
                           <a href="https://www.qure.ai/product/qvh/" target="_blank" className="footerAnchor">qVH</a>
                       </li>
                       <li className="footerList">
                           <a href="https://www.qure.ai/product/qmsk/" target="_blank" className="footerAnchor">qMSK</a>
                       </li>
                       <li className="footerList">
                           <a href="https://www.qure.ai/product/qtrack/" target="_blank" className="footerAnchor">qTrack</a>
                       </li>
                       <li className="footerList">
                           <a href="https://www.qure.ai/product/qremote/" target="_blank" className="footerAnchor">qRemote</a>
                       </li>
                       </div>
                   </ul>
                  </div>
                  <div className="footerCareArea">
                          <ul className="CareAreaOption" style={{fontSize:"14px",fontWeight:"bold",listStyleType: "none"}}>
                             Care Areas
                              <div className="footerCareAreaOptions">
                              <li>
                                 <a className="footerAnchor" href="https://www.qure.ai/care-areas/lung-health/lung-cancer/
                                 " target="_blank">
                                    Lung Cancer
                                 </a>

                             </li>
                              <li>
                                  <a className="footerAnchor" target="_blank" href="https://www.qure.ai/care-areas/lung-health/tuberculosis/">
                                      Tuberclosis
                                  </a>

                              </li>
                              <li>
                                  <a className="footerAnchor" target="_blank" href="https://www.qure.ai/care-areas/neurocritical-care/">
                                    NueroCritical Care
                                  </a>

                              </li>
                              </div>
                          </ul>
                  </div>
                  <div className="footerAbout">
                      <ul style={{fontSize:"14px",fontWeight:"bold",listStyleType: "none"}}>
                          About
                          <div className="footerCareAreaOptions">
                              <li>
                                  <a target="_blank" href="https://www.qure.ai/about-us/" className="footerAnchor">
                                        Our Company
                                  </a>
                              </li>
                              <li>
                                  <a target="_blank" href="https://www.qure.ai/about-us/newsroom/" className="footerAnchor">
                                      NewsRoom
                                  </a>
                              </li>
                              <li>
                                  <a target="_blank" href="https://www.qure.ai/legal/" className="footerAnchor">
                                    Legal
                                  </a>
                              </li>
                          </div>
                      </ul>
                  </div>
              </div>
          </footer>
            <hr/>
        </div>
    );
 }