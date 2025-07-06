import React from 'react';
import { AppContext } from '../../context';
import { FaRegCopy } from "react-icons/fa";
import { parseISO, format } from 'date-fns';

function SelectedPlanOptions() {

    const { setMyUser, myUser } = React.useContext(AppContext)
    const [iconColor, setIconColor] = React.useState("white-color");

    const copyToken = () => {
        navigator.clipboard.writeText(myUser.token)
        setIconColor("mint-color")
        setTimeout(() => {
            setIconColor("white-color")
        }, 1500)
    }

    return (
        <>
            <div className="selectedPlanOptions">


                <div className="selectedPlanOptionFree">
                    <h5 className="titleNotMain">Type: <span className="titleNotMain grey-color">Free</span></h5>
                    <h5 className="titleNotMain">Start Date: <span className="titleNotMain grey-color">{
                        format(parseISO(myUser.startDate), 'yyyy-MM-dd')
                    }</span></h5>
                    <h5 className="titleNotMain">Duration: <span className="titleNotMain grey-color">Forever</span></h5>


                    <div className='selectePlanOptionsCopyToken'>
                        <h5 className="titleNotMain">Token:</h5>

                        <span className='selectePlanOptionsCopyTokenIcon'>
                            <input defaultValue={myUser.token} className="regularText readOnlyinputAcctPage" placeholder="Password" readOnly />
                            <FaRegCopy onClick={() => { copyToken() }} className={`icon ${iconColor}`} />
                        </span>
                    </div>
                </div>


                {/* <div>
                    <div>
                        <h5 className="titleNotMain grey-color">Type: {myUser.plan}</h5>
                    </div>
                    <div>
                        <h5 className="titleNotMain grey-color">Start Date: {myUser.startDate}</h5>
                    </div>
                    <div>
                        <h5 className="titleNotMain grey-color">Next Payment: {myUser.endDate}</h5>
                    </div>
                    <div>
                        <h5 className="titleNotMain grey-color">Active Months: {myUser.activeMonts}</h5>
                    </div>
                </div> */}
            </div >
        </>
    )
}

export { SelectedPlanOptions }