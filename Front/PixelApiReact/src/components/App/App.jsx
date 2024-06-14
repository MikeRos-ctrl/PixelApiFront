import React, { useEffect, useRef, Component } from 'react';
import { Header } from '../Header/Header';
import { Gallery } from '../Gallery/Gallery';
import { UsePixelApi } from '../../util/UsePixelApi';
const { ApiCall, listByCategory } = UsePixelApi()

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null
    }
  }

  componentDidMount() {

    ApiCall().then(result => {
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

  render() {
    const { image1, image2, image3, image4, image5 } = this.state

    return (
      <React.Fragment>

        <Header image={image1} />

        <Gallery
          image1={image2}
          image2={image3}
          image3={image4}
          image4={image5}
          listByCategory={listByCategory}
        />

      </React.Fragment>
    )
  }
}

export default App