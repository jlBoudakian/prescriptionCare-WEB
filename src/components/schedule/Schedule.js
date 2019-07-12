import React, { Component } from 'react';
import Header from '../base/Header';
import Sidebar from '../base/Sidebar';
import Footer from '../base/Footer';
import ModalSchedule from './modalSchedule';
import api from '../../api/services';


class Schedule extends Component {

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
                <div className="content">

                    {/* Start Page Header */}
                    <div className="page-header">
                        <h1 className="title">Schedule</h1>
                        <ol className="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/schedule">Schedule</a></li>
                            <li><a href="/feedback">Feedback</a></li>
                            <li><a href="/medicines">Medicines</a></li>
                        </ol>
                    </div>
                    {/* End Page Header */}

                    {/* START CONTAINER */}
                    <div className="container-default">
                        <div className="row">
                            <div className="col-md-12" style={{ marginBottom: 20 }}>
                                <button type="button" className="btn btn-primary" onClick={this.handleShowModal}>
                                    Add to schedule
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <div className="panel panel-widget">
                                    <div className="panel-title">Exams</div>
                                    <div className="panel-body">

                                        <ul className="mailbox-inbox">

                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Exam - Blood test</span>
                                                    Lavosier - 09:00
                                                    <span className="date">22 July</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Exam - Xray</span>
                                                    Lavosier - 09:00
                                                    <span className="date">28 July</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Exam - Vision test</span>
                                                    Blue Clinic - 11:00
                                                    <span className="date">2 Aug</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Exam - Urine test</span>
                                                    Lavosier - 16:00
                                                    <span className="date">12 Aug</span>
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="panel panel-widget">
                                    <div className="panel-title">Appointments</div>
                                    <div className="panel-body">

                                        <ul className="mailbox-inbox">

                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Appointment - Gastrologist</span>
                                                    Green Clinic - 15:00
                                                    <span className="date">28 July</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Appointment - Gastrologist</span>
                                                    Green Clinic - 15:00
                                                    <span className="date">28 July</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Appointment - Gastrologist</span>
                                                    Green Clinic - 15:00
                                                    <span className="date">28 July</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Appointment - Gastrologist</span>
                                                    Green Clinic - 15:00
                                                    <span className="date">28 July</span>
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="panel panel-widget">
                                    <div className="panel-title">Prescriptions</div>
                                    <div className="panel-body">

                                        <ul className="mailbox-inbox">

                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Prescription - Paracetamol</span>
                                                    09:00 - 18:00
                                                    <span className="date">22 July</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Prescription - Paracetamol</span>
                                                    09:00 - 18:00
                                                    <span className="date">22 July</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Prescription - Paracetamol</span>
                                                    09:00 - 18:00
                                                    <span className="date">22 July</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="item clearfix">
                                                    <span className="from">Prescription - Paracetamol</span>
                                                    09:00 - 18:00
                                                    <span className="date">22 July</span>
                                                </a>
                                            </li>


                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* END CONTAINER */}

                    <Footer />
                    {this.state.showModal ?
                        <ModalSchedule
                            handleHideModal={this.handleHideModal}
                        // handleSave={this.handleSave}
                        // name={this.state.name}
                        // quantity={this.state.quantity}
                        // dosage={this.state.dosage}
                        /> : null}
                </div>
            </div>
        )
    }
}


export default Schedule;