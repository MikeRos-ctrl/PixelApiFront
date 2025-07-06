import Logo from '../../assets/icon4.png';
import Money from '../../assets/Icon-6.png'
import User from '../../assets/Icon-16.png'
import Doc from '../../assets/Icon-3.png'
import About from '../../assets/Icon-21.png'
import { AppContext } from '../../context';
import React from 'react';

function Navbar() {

    const { setPage, setScrollToPricing, myUser, myModal, setMyModal } = React.useContext(AppContext)

    const OpenModal = () => {

        if (myUser.ready == false) {
            setMyModal({ ...myModal, open: !myModal.open })
        } else {
            setPage(2);
        }
    }

    return (
        <nav>
            <div className="navLeft clickable" onClick={() => {
                setPage(0);
            }}>
                <img src={Logo} className="qwer" alt="" />
            </div>

            <div className="navRight">

                <div className="navRightCouple clickable" onClick={() => {
                    setPage(0);
                    setScrollToPricing(true);
                }}>
                    <img src={Money} className="qwer2" alt="" />
                    <h5 className="titleNotMain">PRICING</h5>
                </div>


                <div className="navRightCouple clickable" onClick={() => {
                    setPage(1)
                }}>
                    <img src={Doc} className="qwer2" alt="" />
                    <h5 className="titleNotMain">DOCUMENTATION</h5>
                </div>

                {/* <div className="navRightCouple clickable">
                    <img src={About} className="qwer2" alt="" />
                    <h5 className="titleNotMain">ABOUT</h5>
                </div> */}

                <div className="navRightCouple clickable" onClick={() => OpenModal()}>
                    <img src={User} className="qwer2" alt="" />
                    <h5 className="titleNotMain">PROFILE</h5>
                </div>
            </div>
        </nav>
    );
}

export { Navbar }