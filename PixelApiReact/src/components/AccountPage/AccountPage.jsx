import React from "react";
import './index.css';
import { UserAccount } from "./UserAccount";
import { SelectPlan } from "./SelectPlan";
import { SelectedPlanOptions } from "./SelectedPlanOptions";
import { AppContext } from '../../context';

const USER_ACCOUNT = 0;
const SELECT_PLAN = 1;
const SELECTED_PLAN_OPC = 2;

function AccountPage() {
    const { myUser } = React.useContext(AppContext)
    const [SelectedOption, setSelectedOption] = React.useState(USER_ACCOUNT)
    const AccountPageOptions = {
        0: < UserAccount />,
        1: < SelectPlan setSelectedOption={setSelectedOption} />,
        2: < SelectedPlanOptions />
    }

    return (
        <>
            <div className='AccountPageMain'>

                <div className='AccountPageElements'>

                    <div className='AccountPageOptions'>
                        <h5 className={`titleNotMain clickable ${SelectedOption == 0 ? "cuteOutline" : ""}`} onClick={() => setSelectedOption(USER_ACCOUNT)}>Account</h5>
                        <h5 className={`titleNotMain clickable ${SelectedOption == 1 || SelectedOption == 2 ? "cuteOutline" : ""}`} onClick={() => {
                            myUser.token != null ? setSelectedOption(SELECTED_PLAN_OPC) : setSelectedOption(SELECT_PLAN)
                        }
                        }>Plan</h5>
                    </div>

                    <div className='AccountPageDisplay'>
                        {AccountPageOptions[SelectedOption]}
                    </div>
                </div>
            </div>
        </>
    )
}

export { AccountPage }