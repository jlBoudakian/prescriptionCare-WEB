import React, { Component } from "react";
import Header from '../base/Header';
import Sidebar from '../base/Sidebar';
import Footer from '../base/Footer';
import api from '../../api/services';
import ModalFeedback from "./modalFeedback";

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: "",
            quantity: 0,
            dosage: "",
        };
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
        // this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        this.source = api.cancelToken.source();
    }

    handleShowModal() {
        console.log('passou')
        this.setState({
            showModal: true
        });
    }

    handleHideModal() {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Sidebar />

                {/* CONTENT */}
                <div className="content">

                    {/* Start Page Header */}
                    <div className="page-header">
                        <h1 className="title">Feedback</h1>
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
                        <div className="row">
                            <div className="col-md-12" style={{ marginBottom: 20 }}>
                                <button type="button" className="btn btn-primary" onClick={this.handleShowModal}>
                                    Add feedback
                                </button>
                            </div>
                        </div>
                        <div class="row">

                            {/* <!-- Start Panel --> */}
                            <div class="col-md-6 col-lg-4">
                                <div class="panel panel-default">

                                    <div class="panel-title">
                                        Basic
                                    </div>
                                    <div class="panel-heading">This is Panel Heading</div>

                                    <div class="panel-body">
                                        We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize...
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="panel panel-default">

                                    <div class="panel-title">
                                        Basic
                                    </div>
                                    <div class="panel-heading">This is Panel Heading</div>

                                    <div class="panel-body">
                                        We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize...
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="panel panel-default">

                                    <div class="panel-title">
                                        Basic
                                    </div>
                                    <div class="panel-heading">This is Panel Heading</div>

                                    <div class="panel-body">
                                        We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize...
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row">

                            {/* <!-- Start Panel --> */}
                            <div class="col-md-6 col-lg-4">
                                <div class="panel panel-default">

                                    <div class="panel-title">
                                        Basic
                                    </div>
                                    <div class="panel-heading">This is Panel Heading</div>

                                    <div class="panel-body">
                                        We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize...
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="panel panel-default">

                                    <div class="panel-title">
                                        Basic
                                    </div>
                                    <div class="panel-heading">This is Panel Heading</div>

                                    <div class="panel-body">
                                        We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize...
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="panel panel-default">

                                    <div class="panel-title">
                                        Basic
                                    </div>
                                    <div class="panel-heading">This is Panel Heading</div>

                                    <div class="panel-body">
                                        We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize...
                                    </div>

                                </div>
                            </div>
                        </div>

                        <Footer />
                        {this.state.showModal ?
                            <ModalFeedback
                                handleHideModal={this.handleHideModal}
                            // handleSave={this.handleSave}
                            // name={this.state.name}
                            // quantity={this.state.quantity}
                            // dosage={this.state.dosage}
                            /> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback;