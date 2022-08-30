import "./video.css"
export default function video(){
    return(
        <div className="video">
            <video src="https://www.qure.ai/wp-content/themes/qure-ai/assets/images/Landing_01.mp4"
                   autoPlay loop
                   type="video/mp4"
            > Video not Suppotred</video>
        </div>
    );
}

export function Videobottom(){
    return(
        <>
    <div className="videoBottomDiv1">
        <img className = "handImg " src= "https://www.qure.ai/wp-content/uploads/2021/09/01_Qure.ai_Icons_Qure.ai_Icon_Separate-Abnormal-copy-4.svg"/>
        <p className="bottomVideoSentence" style={{fontSize:"40px"}}>
            Designed to be perfect collaborators with you
            </p>
           <p className="bottomVideoSentence">
            Our AI products are designed to empower healthcare professionals during<br/>
               key moments in the medical journey.<br/>
               From preventive screenings, early<br/>
        detection, emergency care, institutional disease response and treatment adherence<br/>

               <a className="anchorTag" href="https://www.qure.ai/product/qxr/" target="_blank">Know More > </a>
        </p>
        <video className="VideoBottom" src="https://www.qure.ai/wp-content/uploads/2021/09/Block-1-New-2.mp4" type="video/mp4" autoPlay
               loop  muted ></video>
    </div>

    <div className="videoBottomDiv2">
        <video className="VideoBottom2" src="https://www.qure.ai/wp-content/uploads/2021/09/Block-2-New-2.mp4" type="video/mp4" autoPlay
               loop  muted ></video>
        <div className="secondVideoSentencediv">
        <img className = "handImg " src= "https://www.qure.ai/wp-content/uploads/2021/09/02_Qure.ai_Icons_Qure.ai_Icon_Separate-Abnormal-copy-7.svg"/>
        <p className="bottomVideoSentence" style={{fontSize:"40px"}}>
            Designed to be perfect collaborators with you
        </p>
        <p className="bottomVideoSentence">
            Our AI products are designed to empower healthcare professionals during<br/>
            key moments in the medical journey.<br/>
            From preventive screenings, early<br/>
            detection, emergency care, institutional disease response and treatment adherence<br/>
            we're enabling seamless workflow optimisation across the care continuum.<br/>
            <a className="anchorTag" href="https://www.qure.ai/product/qxr/" target="_blank">Know More > </a>
        </p>
        </div>
    </div>

            <div className="videoBottomDiv3">
                <div className="thirdVideoSentencediv" style={{marginLeft:"80px"}}>
                    <img className = "handImg " src= "https://www.qure.ai/wp-content/uploads/2021/09/03_Qure.ai_Icons_Qure.ai_Icon_Separate-Abnormal-copy-6.svg"/>
                    <p className="bottomVideoSentence" style={{fontSize:"40px"}}>
                        Designed to be perfect collaborators with you
                    </p>
                    <p className="bottomVideoSentence" >
                        Our AI products are designed to empower healthcare professionals during<br/>
                        key moments in the medical journey.<br/>
                        From preventive screenings, early<br/>
                        detection, emergency care, institutional disease response and treatment adherence<br/>
                        we're enabling seamless workflow optimisation across the care continuum.<br/>
                        <a className="anchorTag" href="https://www.qure.ai/product/qer/" target="_blank">Know More > </a>
                    </p>
                </div>
                    <video className="VideoBottom2" src="https://www.qure.ai/wp-content/uploads/2021/09/Block-3-New-3.mp4" type="video/mp4" autoPlay
                           loop  muted ></video>

            </div>
            </>
    );
}