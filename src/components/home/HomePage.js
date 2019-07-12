import React, { Component } from 'react';
import Header from '../base/Header';
import Sidebar from '../base/Sidebar';
import Footer from '../base/Footer';
import api from '../../api/services';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // this.handleChangeEmail = this.handleChangeEmail.bind(this);

    }

    componentDidMount() {
        this.source = api.cancelToken.source();
    }
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
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

                    {/* START CONTAINER */}
                    <div className="container-default">


                        <div className="row">

                            <div className="col-md-12 col-lg-5">
                                <div className="panel panel-widget" style={{ height: 450 }}>
                                    <div className="panel-title">
                                        My medicines <span className="label label-danger">29</span>
                                    </div>
                                    <div className="panel-body table-responsive">

                                        <table className="table table-dic table-hover ">
                                            <tbody>
                                                <tr>
                                                    <td>Paracetamol</td>
                                                    <td>Folder</td>
                                                    <td className="text-r">27/2/2015 12:34 AM</td>
                                                </tr>
                                                <tr>
                                                    <td>Tylenol</td>
                                                    <td>Zip</td>
                                                    <td className="text-r">27/2/2015 12:34 AM</td>
                                                </tr>
                                                <tr>
                                                    <td>Selene</td>
                                                    <td>Html</td>
                                                    <td className="text-r">27/2/2015 12:34 AM</td>
                                                </tr>
                                                <tr>
                                                    <td>Centrum</td>
                                                    <td>Pdf</td>
                                                    <td className="text-r">27/2/2015 12:34 AM</td>
                                                </tr>
                                                <tr>
                                                    <td>Zinco</td>
                                                    <td>Folder</td>
                                                    <td className="text-r">27/2/2015 12:34 AM</td>
                                                </tr>
                                                <tr>
                                                    <td>B Complex</td>
                                                    <td>Folder</td>
                                                    <td className="text-r">27/2/2015 12:34 AM</td>
                                                </tr>
                                                <tr>
                                                    <td>Omeprazol</td>
                                                    <td>Folder</td>
                                                    <td className="text-r">27/2/2015 12:34 AM</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="col-md-6 col-lg-12">
                                    <div class="panel panel-default">

                                        <div class="panel-title">
                                            Side Effects
                                        </div>
                                        <div class="panel-heading">This is Panel Heading</div>

                                        <div class="panel-body">
                                            We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize...
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-12">
                                    <div class="panel panel-default">

                                        <div class="panel-title">
                                            Comment
                                        </div>
                                        <div class="panel-heading">This is Panel Heading</div>

                                        <div class="panel-body">
                                            We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize...
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-3">
                                <div class="panel panel-widget">
                                    <div class="panel-title">Schedule</div>
                                    <div class="panel-body">

                                        <ul class="mailbox-inbox">

                                            <li>
                                                <a href="#" class="item clearfix">
                                                    <span class="from">Exam - Blood test</span>
                                                    Lavosier - 09:00
                                                    <span class="date">22 July</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" class="item clearfix">
                                                    <span class="from">Appointment - Gastrologist</span>
                                                    Green Clinic - 15:00
                                                    <span class="date">28 July</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="item clearfix">
                                                    <span class="from">Exam - Vision test</span>
                                                    Blue Clinic - 11:00
                                                    <span class="date">2 Aug</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="item clearfix">
                                                    <span class="from">Exam - Urine test</span>
                                                    Lavosier - 16:00
                                                    <span class="date">12 Aug</span>
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
                </div>
            </div >
        )
    }
}


export default HomePage;