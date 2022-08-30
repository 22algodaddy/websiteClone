import "./newsletter.css"
export default function newsletter(){
    return(
        <>
              <section>
                  <div className="NewsLetter">
                  <div className="newsLetterText">
                      <p style={{fontSize:"15px",fontWeight:"bold"}}>Subscribe to Our NewsLetter</p>
                      <p style={{fontSize:"15px"}}>By clicking "subscribe" you consent to allow Qure.ai to store and process your information
                          as per our <a style={{color:"green"}} href="https://www.qure.ai/privacy-policy/" target="_blank">privacy policy</a></p>
                  </div>
                  <div>
                <form type="email" action="" >
                    <div className="emailDiv">
                    <input type="text" placeholder="Enter Your Email"  className="emailSection" />
                    <button type="submit" value="Subscribe" className="newsLetterButton"> Subscribe</button>
                        </div>
                </form>
                  </div>
                  </div>
              </section>

        </>
    );
}