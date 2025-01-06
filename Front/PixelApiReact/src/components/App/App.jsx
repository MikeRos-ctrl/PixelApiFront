import React, { useEffect, useRef, Component } from 'react';
import { Header } from '../Header/Header';
import { HeaderImage } from '../HeaderImage/HeaderImage';
import { Gallery } from '../Gallery/Gallery';
import { GalleryImagesLoading } from '../GalleryImagesLoading/GalleryImagesLoading';
import { UsePixelApi } from '../../util/UsePixelApi';
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
const { FillFrontHeader, listByCategory2, } = UsePixelApi()
const { fetchImages } = FetchImgLogic()

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetchedImg1: null,
      fetchedImg2: null,
      fetchedImg3: null,
      fetchedImg4: null,
      fetchedImg5: null,
      fetchedImg6: null,
      openModal: false,
      modalIndex: 0,
      modalFlow: 'A',
      myUserPlan: null,
      refreshGallery: false
    }
  }

  componentDidMount() {

    document.body.classList.remove('no-scroll');

    FillFrontHeader().then(result => {
      fetchImages(result).then(res => {
        this.setState({
          fetchedImg1: res["fetchedGallery"][0],
          fetchedImg2: res["fetchedGallery"][1],
          fetchedImg3: res["fetchedGallery"][2],
          fetchedImg4: res["fetchedGallery"][3],
          fetchedImg5: res["fetchedGallery"][4],
          refreshGallery: res["refreshGallery"]
        })
      })
    }).catch(error => {
      console.error("I've got a mistake: ", error);
      alert("I've got a mistake: ", error);
    });
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

  listByCategory_ = (category) => {
    const { fetchedImg1 } = this.state

    this.setState({
      fetchedImg2: null,
      fetchedImg3: null,
      fetchedImg4: null,
      fetchedImg5: null,
      refreshGallery: null
    })

    listByCategory2(category, fetchedImg1["ImageId"]).then(res => {
      fetchImages(res).then(res => {
        this.setState({
          fetchedImg2: res["fetchedGallery"][0],
          fetchedImg3: res["fetchedGallery"][1],
          fetchedImg4: res["fetchedGallery"][2],
          fetchedImg5: res["fetchedGallery"][3],
          refreshGallery: res["refreshGallery"]
        })
      })
    })
      .catch(error => {
        console.error("I've got a mistake: ", error);
      });
  }

  setMyUserPlan = (plan) => {
    this.setState({
      myUserPlan: plan
    });
  }

  render() {
    const { fetchedImg1, fetchedImg2, fetchedImg3, fetchedImg4, fetchedImg5, fetchedImg6, openModal, modalIndex, modalFlow, myUserPlan, refreshGallery } = this.state
    const { myUser, setMyUser, setCheckOutFlag } = this.props;

    const ModalComponents = {
      0: <ModalLogin setModalIndex={this.setModalIndex} setMyUser={setMyUser} />,
      1: <ModalCreate_UpdateAccount modalFlow={modalFlow} myUser={myUser} setMyUser={setMyUser} setModalIndex={this.setModalIndex} />,
      2: <ModalConfirmAccount modalFlow={modalFlow} setMyUser={setMyUser} myUser={myUser} setModalIndex={this.setModalIndex} />,
      3: <ModalWelcomeAccount />,
      4: <ModalWelcomeBack setModalFlow={this.setModalFlow} setModalIndex={this.setModalIndex} setMyUser={setMyUser} myUser={myUser} />,
      5: <ModalPaymentInfo myUserPlan={myUserPlan} setCheckOutFlag={setCheckOutFlag} />,
    };

    return (
      <React.Fragment>
        <div className="myWidth">

          <Header changeModalstatus={this.changeModalstatus} myUser={myUser}>
            <HeaderImage image={fetchedImg1} />
          </Header>

          <Gallery listByCategory_={this.listByCategory_} refreshGallery={refreshGallery}>
            {fetchedImg2 && fetchedImg3 && fetchedImg4 && fetchedImg5 ? (
              <GalleryImages
                image1={fetchedImg2}
                image2={fetchedImg3}
                image3={fetchedImg4}
                image4={fetchedImg5}
                refreshGallery={refreshGallery}
              />
            ) : (
              <GalleryImagesLoading />
            )}
          </Gallery>

          <Implementation />

          <Demo />

          <Pricing setMyUserPayment={this.setMyUserPlan} changeModalstatus={this.changeModalstatus} myUser={myUser} setMyUser={setMyUser} setModalIndex={this.setModalIndex} />

          {openModal && (
            <Modal setModalIndex={this.setModalIndex} changeModalstatus={this.changeModalstatus}>
              {ModalComponents[modalIndex]}
            </Modal>
          )}

        </div>

        <Footer />

      </React.Fragment >
    )
  }
}

export default App