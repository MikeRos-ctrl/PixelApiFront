import React, { Component } from 'react';
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
import { Navbar } from '../Navbar/Navbar';
import { NormalPage } from '../Pages/normalPage';
import { DocumentationPage } from '../Pages/DocumentationPage';

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
    const { myModal, page } = this.props;

    const ModalComponents = {
      0: <ModalLogin />,
      1: <ModalCreate_UpdateAccount />,
      2: <ModalConfirmAccount />,
      3: <ModalWelcomeAccount />,
      4: <ModalWelcomeBack />
    };
    // pricingSection
    const PageComponents = {
      0: < NormalPage />,
      1: < DocumentationPage />
    }

    return (
      <React.Fragment>
        <div className="myWidth">

          <Navbar />

          {PageComponents[page]}

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
  const { myModal, myUser, page } = React.useContext(AppContext)
  return < App myModal={myModal} myUser={myUser} page={page} />
}

export { AppWrapper as App }