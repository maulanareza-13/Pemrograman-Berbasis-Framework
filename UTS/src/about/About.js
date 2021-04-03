import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './About.css';

class About extends Component {

    render() {
        return (
            <div className="cart">
                <div className="container">
                    <h1>Biodata Saya</h1>
                    <div className="cart-list">
                    <p>Nama:Maulana Reza Pratama</p>
                        <p>Kelas: TI-3E</p>
                        <p>Nim: 1841720046</p>
                        <div className="img-wrp">
                        <img src={`/media/profil.jpeg`}/>    
                        </div>                                         
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
