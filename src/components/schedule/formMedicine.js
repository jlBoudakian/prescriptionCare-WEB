import React, { Component } from "react";

class Medicine extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-lg-12">
                        <div className="form-group">
                            <label htmlFor="input1" className="form-label">Title</label>
                            <input type="text" className="form-control" id="input1" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-12 col-lg-6">
                        <form class="form-horizontal">
                            <fieldset>
                                <div class="control-group">
                                    <div class="controls">
                                        <div class="input-prepend input-group">
                                            <span class="add-on input-group-addon"><i class="fa fa-calendar"></i></span>
                                            <input type="text" id="date-range-picker" class="form-control" value="03/18/2015 - 03/23/2015" />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="col-md-4 col-lg-6">
                        <div className="form-group">
                            <label htmlFor="input1" className="form-label" style={{ marginRight: 5 }}>Medicine:</label>
                            <select className="selectpicker">
                                <option></option>
                                <option>Paracetamol</option>
                                <option>Omeprazol</option>
                                <option>Selene</option>
                                <option>Zinco</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="input1" className="form-label">Description</label>
                            <textarea className="form-control" rows="3" id="textarea1" placeholder="Type your message..."></textarea>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Medicine;