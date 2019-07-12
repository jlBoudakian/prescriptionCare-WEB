import React, { Component } from "react";

class Exam extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="input1" className="form-label">Title</label>
                            <input type="text" className="form-control" id="input1" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <form className="form-horizontal">
                            <fieldset>
                                <div className="control-group">
                                    <div className="controls">
                                        <div className="input-prepend input-group">
                                            <span className="add-on input-group-addon"><i className="fa fa-calendar"></i></span>
                                            <input type="text" id="date-picker" className="form-control" value="03/18/2015" />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
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

            </div>)
    }
}

export default Exam;