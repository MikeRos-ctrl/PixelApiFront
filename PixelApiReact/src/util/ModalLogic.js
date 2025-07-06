  /*
   *ONLY TO OPEN AND CLOSE THE MAIN MODAL 
   */
  // changeModalstatus = () => {

  //   if (this.state.openModal == true) {
  //     document.body.classList.remove('no-scroll');
  //   } else {
  //     document.body.classList.add('no-scroll');
  //   }

  //   this.setState({
  //     openModal: !this.state.openModal
  //   });
  // }

  /*
  *TO CHANGE MODAL CONTENT: 
  *ModalLogin -> ModalCreateAccount -> ModalConfirmAccount -> ModalWelcomeAccount
  */
  // setModalIndex = (index) => {

  //   const { setMyUser } = this.props;

  //   if (index == 0) {
  //     setMyUser({
  //       id: null,
  //       accountType: null,
  //       email: null,
  //       ready: false
  //     })
  //   }

  //   this.setState({
  //     modalIndex: index
  //   });
  // }