import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import api from '../../api/services';


class ModalFeedback extends Component {

    constructor(props) {
        super(props);
        this.state = {};
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
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="input1" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="input1" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12" style={{ marginTop: 5 }}>
                                    <div className="form-group">
                                        <label htmlFor="input1" className="form-label">Description</label>
                                        <textarea className="form-control" rows="3" id="textarea1" placeholder="Type your message..."></textarea>
                                    </div>
                                </div>
                            </div>
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

export default ModalFeedback;