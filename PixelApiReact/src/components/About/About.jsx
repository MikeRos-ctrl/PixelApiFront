import aboutImg from '../../assets/Icon-21.png'
import me from '../../assets/me.jpg'
import './index.css';
import donate from '../../assets/buymeacoffee.png'


function About() {

    return (
        <>
            <div className="aboutContainer">

                <div className='aboutContainerTitle'>
                    <h2 className="titleMain">About this project</h2>
                    {/* <img src={aboutImg} className="qwer2" alt="" /> */}
                </div>

                <div className='aboutContainerContent'>

                    <img className='profilePic' src={me} alt="" />
                    <h5 className='regularText'>Hello! I am princeMike.</h5>

                    <h5 className='regularText'>
                        PixelApi started as a weekend project, it is a free API REST to fetch AI images based on a Pixel Art Model.
                        The front is React and the Api is Java Spring. So if you like this and want to donate to this project you can support this project here:
                    </h5>

                    <a href="coff.ee/princemike" target="_blank" rel="noopener noreferrer">
                        <img
                            src={donate}
                            alt="Buy me a coffee"
                            style={{ width: '150px', height: 'auto' }}
                        />
                    </a>
                </div>
            </div>
        </>
    )
}

export { About }