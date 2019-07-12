import React, { Component } from "react";
import Header from './base/Header';
import Sidebar from './base/Sidebar';
import Footer from './base/Footer';

class Teste extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />

                {/* CONTENT */}
                <div className="content">

                    {/* Start Page Header */}
                    <div className="page-header">
                        <h1 className="title">Home</h1>
                        <ol className="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/schedule">Schedule</a></li>
                            <li><a href="/feedback">Feedback</a></li>
                            <li><a href="/medicines">Medicines</a></li>
                        </ol>
                    </div>
                    {/* End Page Header */}

                    {/* //////////////////////////////////////////////////////////////////////////// */}
                    {/* START CONTAINER */}
                    <div className="container-default">


                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />


                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Teste;