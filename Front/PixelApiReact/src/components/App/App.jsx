import React, { useEffect, useRef, Component } from 'react';
import { Header } from '../Header/Header';
import { HeaderImage } from '../HeaderImage/HeaderImage';
import { HeaderImageLoading } from '../HeaderImageLoading/HeaderImageLoading';
import { Gallery } from '../Gallery/Gallery';
import { GalleryImagesLoading } from '../GalleryImagesLoading/GalleryImagesLoading';
import { UsePixelApi } from '../../util/UsePixelApi';
import { Pricing } from '../Pricing/Pricing';
import { GalleryImages } from '../GalleryImages/GalleryImages';
import { Implementation } from '../Implementation/Implementation';
import { Modal } from '../Modal/Modal';
import { ModalLogin } from '../Modal/ModalLogin';
import { ModalCreateAccount } from '../Modal/ModalCreateAccount';
import { ModalConfirmAccount } from '../Modal/ModalConfirmAccount';
import { ModalWelcomeAccount } from '../Modal/ModalWelcomeAccount';
import './index.css';

const {
  FillFront,
  listByCategory,
  ValidateAccount,
  CreateAccount,
  ConfirmAccount
} = UsePixelApi()

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      openModal: false,
      modalIndex: 0,
    }
  }

  componentDidMount() {

    document.body.classList.remove('no-scroll');

    FillFront().then(result => {
      this.setState({
        image1: result[0],
        image2: result[1],
        image3: result[2],
        image4: result[3],
        image5: result[4]
      });
    }).catch(error => {
      console.error("I've got a mistake: ", error);
    });
  }

  componentDidUpdate() {
  }

  changeModalstatus = () => {

    if (this.state.openModal == true) {
      document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.add('no-scroll');
    }

    this.setState({
      openModal: !this.state.openModal
    });
  }

  listByCategory_ = (category) => {

    if (category == "all") {
      FillFront().then(result => {
        this.setState({
          image2: result[1],
          image3: result[2],
          image4: result[3],
          image5: result[4]
        });
      }).catch(error => {
        console.error("I've got a mistake: ", error);
      });
    }

    else {
      listByCategory(category).then(result => {
        this.setState({
          image2: result[0],
          image3: result[1],
          image4: result[2],
          image5: result[3]
        });

      }).catch(error => {
        console.error("I've got a mistake: ", error);
      });
    }
  }

  setModalIndex = (index) => {

    const { setMyUser } = this.props;

    if (index == 0) {
      setMyUser({
        id: null,
        accountType: null,
        email: null,
        ready: false
      })
    }

    this.setState({
      modalIndex: index
    });
  }

  render() {
    const { image1, image2, image3, image4, image5, openModal, modalIndex } = this.state
    const { myUser, setMyUser } = this.props;

    const ModalComponents = {
      0: <ModalLogin ValidateAccount={ValidateAccount} setModalIndex={this.setModalIndex} setMyUser={setMyUser} />,
      1: <ModalCreateAccount myUser={myUser} setMyUser={setMyUser} CreateAccount={CreateAccount} setModalIndex={this.setModalIndex} />,
      2: <ModalConfirmAccount ConfirmAccount={ConfirmAccount} setMyUser={setMyUser} myUser={myUser} setModalIndex={this.setModalIndex} />,
      3: <ModalWelcomeAccount />
    };

    return (
      <React.Fragment>

        <div className="myWidth">

          <Header changeModalstatus={this.changeModalstatus} myUser={myUser}>

            {image1 ? (
              <HeaderImage image={image1} />
            ) : (
              <HeaderImageLoading />
            )}

          </Header>

          <Gallery listByCategory_={this.listByCategory_}>

            {image2 && image3 && image4 && image5 ? (

              <GalleryImages
                image1={image2}
                image2={image3}
                image3={image4}
                image4={image5}
              />
            ) : (
              <GalleryImagesLoading />
            )}

          </Gallery>

          <Implementation />

          <Pricing changeModalstatus_={this.changeModalstatus} myUser={myUser} setMyUser={setMyUser} />

          {openModal && (

            <Modal setModalIndex={this.setModalIndex} changeModalstatus={this.changeModalstatus}>
              {ModalComponents[modalIndex]}
            </Modal>
          )}

        </div>

      </React.Fragment>
    )
  }
}

export default App