import "./infoRow.css"
export default function infoRow(){
    return(
        <div className="infoRowDiv">
            <div>
                <div>
                    <p style={{fontSize:"25px",fontWeight:"400",color:"white"}}>Lives Touched</p>
                     <p className="infoRowSentence">
                        10 Million+ overall
                    </p>
                </div>
                <div>
                    <p style={{fontSize:"25px",fontWeight:"400",color:"white"}}>Present In</p>
                    <p className="infoRowSentence">60+ Countries</p>
                </div>
            </div>
            <div>
                <div>
                    <p style={{fontSize:"25px",fontWeight:"400",color:"white"}}>Algorithm Trained On</p>
                    <p className="infoRowSentence">
                        8 Million+ Scans
                    </p>
                </div>
                <div>
                    <p style={{fontSize:"25px",fontWeight:"400",color:"white"}}>Used By</p>
                    <p className="infoRowSentence">600+ Care Centres</p>
                </div>
            </div>
            <div>
                <div>
                    <p style={{fontSize:"25px",fontWeight:"400",color:"white"}}>Reduction In Workload By</p>
                    <p className="infoRowSentence">
                        65% Using Normal-Abnormal Triage
                    </p>
                </div>
                <div>
                    <p style={{fontSize:"25px",fontWeight:"400",color:"white"}}>Reduction In Reporting TaT by</p>
                    <p className="infoRowSentence">97% Using Critical-Non Critical Triage</p>
                </div>
            </div>
        </div>
    );
}