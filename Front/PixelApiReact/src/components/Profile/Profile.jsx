import './index.css';
import Logo from '../../assets/image.png';
import Logoxd from '../../assets/icon4.png';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();

    return (
        <div className="profileContainer">

            <div className="profileLeft">

                <div className='profilePicInfo'>
                    <img src={Logo} className="profilePic" alt="" />
                    <h5 className="regularText nepe">@username</h5>
                </div>

                <div className='profileLeftMenu'>

                    <h5 className="cucas regularText selected sexo">Mi cuenta</h5>
                    <h5 className="regularText sexo">Cambiar plan</h5>
                </div>
            </div>

            <div className="profileRight">

                <div onClick={() => {
                    navigate('/')
                }} className='profileRightMenu clickable'>
                    <img src={Logoxd} className="qwer" alt="" />
                    <p className="regularText">21 day trial</p>
                </div>

                <div className='profileRightContent'>

                    <div className='algoBien'>
                        <h2 className="titleMain">Update your data</h2>

                        <div className="modalContentInformationBody">
                            <input className="regularText modalbtn2" placeholder="new email" />
                            <input className="regularText modalbtn2" placeholder="new password" />
                            <input className="regularText modalbtn" type="button" value="Update" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { Profile }