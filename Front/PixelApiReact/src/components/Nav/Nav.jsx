import './index.css';
import React, { useState, useEffect, Component } from 'react';

class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isResponsive: (window.innerWidth <= 850) ? true : false,
            showMenu: false
        }
    }
}