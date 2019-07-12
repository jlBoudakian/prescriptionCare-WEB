import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import api from '../../api/services';
import Exam from './formExam';
import Appointment from './formAppointment';
import Medicine from './formMedicine';


class ModalSchedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exam: false,
            appointment: false,
            medicine: false
        };

        this.handleSelectOption = this.handleSelectOption.bind(this);

    }

    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).modal('show');
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
    }


    // handleCheck(e) {
    //     if (!this.state.name) {
    //         return alert('Name needed!');
    //     } else if (!this.state.quantity) {
    //         return alert('Quantity needed!');
    //     } else if (parseInt(this.state.quantity, 10) === 0) {
    //         return alert('Quantity needed!');
    //     } else if (!this.state.dosage) {
    //         return alert('Dosage needed!');
    //     } else {
    //         this.props.handleSave(e, this.state);
    //     }
    // }

    handleSelectOption = (option) => {
        const selectedOption = option.target.value;
        console.log('hello');
        switch (selectedOption) {
            case "0":
                // console.log('passou');
                this.setState({
                    exam: false,
                    appointment: false,
                    medicine: false
                });
                break;
            case "1":
                // console.log('passou');
                this.setState({
                    exam: true,
                    appointment: false,
                    medicine: false
                });
                break;
            case "2":
                this.setState({
                    exam: false,
                    appointment: true,
                    medicine: false
                });
                break;
            case "3":
                this.setState({
                    exam: false,
                    appointment: false,
                    medicine: true
                });
                break;
        }
    }


    render() {
        return (
            <div className="modal" id="myModal" tabIndex="-1" role="dialog" aria-hidden="true" >
                <div className="modal-dialog" style={{ width: "50%" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Add to schedule</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-4 col-lg-4" >
                                    <div className="form-group">
                                        <label htmlFor="input1" className="form-label" style={{ marginRight: 5 }}>Type:</label>
                                        <select className="selectpicker" onChange={(e) => this.handleSelectOption(e)} >
                                            <option value="0"></option>
                                            <option value="1">Exam</option>
                                            <option value="2">Appointment</option>
                                            <option value="3">Medicines</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {this.state.exam ? <Exam /> : null}
                            {this.state.appointment ? <Appointment /> : null}
                            {this.state.medicine ? <Medicine /> : null}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-default"
                                onClick={this.handleCheck}
                            >
                                Save changes
                        </button>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default ModalSchedule;