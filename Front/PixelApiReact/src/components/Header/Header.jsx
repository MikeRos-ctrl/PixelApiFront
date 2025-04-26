import './index.css';
import React from 'react';
import { AppContext } from '../../context';
import { useNavigate } from 'react-router-dom';

function Header() {

    const { myImages, myUser, myModal, setMyModal } = React.useContext(AppContext)
    const [ready, setReady] = React.useState(false)

    const navigate = useNavigate();

    const OpenModal = () => {

        if (myUser.ready == false) {
            setMyModal({ ...myModal, open: !myModal.open })
        } else {
            navigate('/profile')
        }
    }

    return (

        <header>
            <main className="headerMain">

                <div className="mainText">

                    <h1 className="titleMain">
                        <span className="strongPinkColor">Pixel as a service</span>
                        <span className="darkColor"> is here</span>
                    </h1>

                    <h4 className="titleNotMain">
                        And remember, one pixel at a time.
                    </h4>

                    <div className="information">

                        <h5 className="titleNotMain grey-color">
                            Api to fetch awesome heart made Pixel Art.
                        </h5>

                        <h5 className="titleNotMain grey-color">
                            100+ Unique images.
                        </h5>

                        <br />

                        <div className="informationButtons">
                            <input className="button-1 titleNotMain" type="button" value="GET YOUR API KEY" />
                            <input className="button-2 titleNotMain" type="button" value="READ OUR DOC" />
                        </div>
                    </div>
                </div>


                <div className={`${ready ? ("legendaryCard animate__animated animate__fadeIn") : ("img-container-big-loading")}`}>
                    {ready &&
                        <h5 className="titleNotMain white-color">{myImages[0]["Name"]}</h5>
                    }
                    {!myImages.length == 0 &&
                        <img onLoad={() => { setReady(true) }} src={myImages[0]["Image"]} className="image" alt="" />
                    }
                    {ready &&
                        <p className="titleNotMain">ThePixelApi greets you ❤️</p>
                    }
                </div>

            </main>
        </header>
    );
}

export { Header }