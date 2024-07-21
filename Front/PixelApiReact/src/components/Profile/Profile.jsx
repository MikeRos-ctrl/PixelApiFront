import './index.css';
import Logo from '../../assets/image.png';

const Profile = () => {
    return (
        <div className="profileContainer">

            <div className="profileLeft">

                <div className='profilePicInfo'>
                    <img src={Logo} className="profilePic" alt="" />
                    <h5 className="regularText nepe">@username</h5>
                </div>

                <div className='profileLeftMenu'>

                    <h5 className="cucas regularText selected sexo">Inicio</h5>
                    <h5 className="regularText sexo">Mi cuenta</h5>
                    <h5 className="regularText sexo">Cambiar plan</h5>
                    <h5 className="regularText sexo">Configuraciones</h5>
                </div>
            </div>

            <div className="profileRight">
                <p className="regularText">21 day trial</p>
            </div>
        </div>
    )
}

export { Profile }