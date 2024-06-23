import React from "react";

function ModalLogin() {
    return (
        <>
            <h4 className="titleNotMain dark-color">Use your Email</h4>

            <div className="modalContentInformationHeader">
                <h5 className="regularText dark-color">We'll revise if you have an account, if not we help you create one</h5>
            </div>

            <div className="modalContentInformationBody">
                <input className="regularText modalbtn2" placeholder="example@example.com" />
                <input onClick={() => {
                    alert("xd")
                }} className="regularText modalbtn" type="button" value="Continue" />
            </div>
        </>
    );
}

export { ModalLogin };