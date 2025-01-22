import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { HeaderImage } from '../HeaderImage/HeaderImage';
import { Gallery } from '../Gallery/Gallery';
import { GalleryImagesLoading } from '../GalleryImagesLoading/GalleryImagesLoading';
import { ApiCall } from '../../util/ApiCall';
import { FetchImgLogic } from '../../util/FetchImgLogic';
import { Pricing } from '../Pricing/Pricing';
import { GalleryImages } from '../GalleryImages/GalleryImages';
import { Implementation } from '../Implementation/Implementation';
import { Modal } from '../Modal/Modal';
import { ModalLogin } from '../Modal/ModalLogin';
import { ModalCreate_UpdateAccount } from '../Modal/ModalCreate_UpdateAccount';
import { ModalConfirmAccount } from '../Modal/ModalConfirmAccount';
import { ModalWelcomeAccount } from '../Modal/ModalWelcomeAccount';
import { ModalWelcomeBack } from '../Modal/ModalWelcomeBack';
import { ModalPaymentInfo } from '../Modal/ModalPaymentInfo';
import { Demo } from '../Demo/Demo';
import { Footer } from '../Footer/Footer';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      modalIndex: 0,
      modalFlow: 'A',
      myUserPlan: null,
    }
  }

  componentDidMount() {
    document.body.classList.remove('no-scroll');
  }

  componentDidUpdate() {
  }

  /*
   *ONLY TO OPEN AND CLOSE THE MAIN MODAL 
   */
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

  /*
  *TO CHANGE MODAL CONTENT: 
  *ModalLogin -> ModalCreateAccount -> ModalConfirmAccount -> ModalWelcomeAccount
  */
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

  setModalFlow = (value) => {
    this.setState({
      modalFlow: value
    });
  }


  setMyUserPlan = (plan) => {
    this.setState({
      myUserPlan: plan
    });
  }

  render() {
    const { fetchedImg1, fetchedImg2, fetchedImg3, fetchedImg4, fetchedImg5, fetchedImg6, openModal, modalIndex, modalFlow, myUserPlan } = this.state
    const { setCheckOutFlag } = this.props;

    // const ModalComponents = {
    //   0: <ModalLogin setModalIndex={this.setModalIndex} setMyUser={setMyUser} />,
    //   1: <ModalCreate_UpdateAccount modalFlow={modalFlow} myUser={myUser} setMyUser={setMyUser} setModalIndex={this.setModalIndex} />,
    //   2: <ModalConfirmAccount modalFlow={modalFlow} setMyUser={setMyUser} myUser={myUser} setModalIndex={this.setModalIndex} />,
    //   3: <ModalWelcomeAccount />,
    //   4: <ModalWelcomeBack setModalFlow={this.setModalFlow} setModalIndex={this.setModalIndex} setMyUser={setMyUser} myUser={myUser} />,
    //   5: <ModalPaymentInfo myUserPlan={myUserPlan} setCheckOutFlag={setCheckOutFlag} />,
    // };

    return (
      <React.Fragment>
        <div className="myWidth">

          <Header changeModalstatus={this.changeModalstatus}>
            <HeaderImage />
          </Header>

          <Gallery>
            <GalleryImages />
          </Gallery>

          <Implementation />

          <Demo />

          <Pricing setMyUserPayment={this.setMyUserPlan} changeModalstatus={this.changeModalstatus} setModalIndex={this.setModalIndex} />

          {/* {openModal && (
            <Modal setModalIndex={this.setModalIndex} changeModalstatus={this.changeModalstatus}>
              {ModalComponents[modalIndex]}
            </Modal>
          )} */}

        </div>

        <Footer />

      </React.Fragment >
    )
  }
}

export default App