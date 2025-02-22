import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { HeaderImage } from '../HeaderImage/HeaderImage';
import { Gallery } from '../Gallery/Gallery';
import { Pricing } from '../Pricing/Pricing';
import { GalleryImages } from '../GalleryImages/GalleryImages';
import { Implementation } from '../Implementation/Implementation';
import { Modal } from '../Modal/Modal';
import { ModalLogin } from '../Modal/ModalLogin';
import { ModalCreate_UpdateAccount } from '../Modal/ModalCreate_UpdateAccount';
import { ModalConfirmAccount } from '../Modal/ModalConfirmAccount';
import { ModalWelcomeAccount } from '../Modal/ModalWelcomeAccount';
import { ModalWelcomeBack } from '../Modal/ModalWelcomeBack';
import { Demo } from '../Demo/Demo';
import { Footer } from '../Footer/Footer';
import { AppContext } from '../../context';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    document.body.classList.remove('no-scroll');
  }

  componentDidUpdate() {
    const { myUser } = this.props;
    console.log(myUser)
  }

  render() {
    const { myModal } = this.props;

    const ModalComponents = {
      0: <ModalLogin />,
      1: <ModalCreate_UpdateAccount />,
      2: <ModalConfirmAccount />,
      3: <ModalWelcomeAccount />,
      4: <ModalWelcomeBack />
    };

    return (
      <React.Fragment>
        <div className="myWidth">

          <Header>
            <HeaderImage />
          </Header>

          <Gallery>
            <GalleryImages />
          </Gallery>

          <Implementation />

          <Demo />

          <Pricing />

          {myModal.open && (
            <Modal >
              {ModalComponents[myModal.index]}
            </Modal>
          )}

        </div>
        <Footer />
      </React.Fragment >
    )
  }
}

function AppWrapper() {
  const { myModal, myUser } = React.useContext(AppContext)
  return < App myModal={myModal} myUser={myUser} />
}

export { AppWrapper as App }