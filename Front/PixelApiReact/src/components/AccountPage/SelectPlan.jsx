import { useNavigate } from 'react-router-dom';
import React from 'react';
import { AppContext } from '../../context';
import { ApiCall } from "../../util/ApiCall";
import Swal from 'sweetalert2'
import { LocalDb } from '../../util/LocalDb';

const SELECTED_PLAN_OPC = 2;

function SelectPlan({ setSelectedOption }) {

    const { setMyUser, myUser } = React.useContext(AppContext)
    const navigate = useNavigate();
    const { CreateFreeSubscription } = ApiCall()

    return (
        <>
            <div className="ProfilePlanMenu">
                <h4 className='titleNotMain'>Select a plan</h4>
                <h5 className='regularText center'>Once you have a suscription you will receive your token.</h5>

                <div className="AccontpageSuscriptionMenu">

                    <div className='AccontpageSuscriptionMenuOpc'>
                        <div>
                            <p className='regularText'>✅ 40 request per day</p>
                            <p className='regularText'>✅ Limited images</p>
                            <p className='regularText'>✅ Limited categories</p>
                            <p className='regularText'>✅ Images information</p>
                        </div>
                        <input onClick={() => {

                            CreateFreeSubscription(myUser.email).then(res => {

                                setMyUser({
                                    ...myUser,
                                    token: res.response.token,
                                    startDate: res.response.startDay
                                })

                                let data = { ...myUser }
                                LocalDb.Delete()
                                LocalDb.Insert(data).then(() => {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Free plan created',
                                        showConfirmButton: true,
                                    }).then(res3 => {
                                        setSelectedOption(2)
                                    })
                                });
                            })
                        }} className="AccontpageSuscriptionMenuOpcLast titleNotMain pricingbtn2 mt-2" type="button" value="Free" />
                    </div>

                    {/* <div>
                        <p className='regularText'>✅ Unlimited request</p>
                        <p className='regularText'>✅ Unlimited images</p>
                        <p className='regularText'>✅ Unlimited categories</p>
                        <p className='regularText'>✅ Images information</p>
                        <p className='regularText'>✅ Commercial licence</p>
                        <p className='regularText'>✅ Support</p>
                        <input onClick={() => {
                            setMyUser({ ...myUser, tempPlan: "Premium" })
                            navigate('/checkout')
                        }} className="titleNotMain pricingbtn2 mt-2" type="button" value="Premium" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export { SelectPlan }