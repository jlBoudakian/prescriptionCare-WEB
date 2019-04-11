import React, { Component } from "react";


class Teste extends Component {
    render() {
        return (
            <div>
                {/* SIDEBAR */}
                <div class="sidebar clearfix">
                    <ul class="sidebar-panel nav">
                        <li class="sidetitle">MAIN</li>
                        <li><a href="index.html"><span class="icon color5"><i class="fa fa-home"></i></span>Dashboard<span
                            class="label label-default">2</span></a></li>
                        <li><a href="mailbox.html"><span class="icon color6"><i class="fa fa-envelope-o"></i></span>Mailbox<span
                            class="label label-default">19</span></a></li>
                        <li>
                            <a href="#"><span class="icon color7"><i class="fa fa-flask"></i></span>UI Elements<span
                                class="caret"></span></a>
                            <ul>
                                <li><a href="icons.html">Icons</a></li>
                                <li><a href="tabs.html">Tabs</a></li>
                                <li><a href="buttons.html">Buttons</a></li>
                                <li><a href="panels.html">Panels</a></li>
                                <li><a href="notifications.html">Notifications</a></li>
                                <li><a href="modal-boxes.html">Modal Boxes</a></li>
                                <li><a href="progress-bars.html">Progress Bars</a></li>
                                <li><a href="others.html">Others<span class="label label-danger">NEW</span></a></li>
                            </ul>
                        </li>
                        <li><a href="charts.html"><span class="icon color8"><i class="fa fa-bar-chart"></i></span>Charts</a></li>
                        <li>
                            <a href="#"><span class="icon color9"><i class="fa fa-th"></i></span>Tables<span class="caret"></span></a>
                            <ul>
                                <li><a href="basic-table.html">Basic Tables</a></li>
                                <li><a href="data-table.html">Data Tables</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><span class="icon color10"><i class="fa fa-check-square-o"></i></span>Forms<span
                                class="caret"></span></a>
                            <ul>
                                <li><a href="form-elements.html">Form Elements</a></li>
                                <li><a href="layouts.html">Form Layouts</a></li>
                                <li><a href="text-editors.html">Text Editors</a></li>
                            </ul>
                        </li>
                        <li><a href="widgets.html"><span class="icon color11"><i class="fa fa-diamond"></i></span>Widgets</a></li>
                        <li><a href="calendar.html"><span class="icon color8"><i class="fa fa-calendar-o"></i></span>Calendar<span
                            class="label label-danger">NEW</span></a></li>
                        <li><a href="typography.html"><span class="icon color12"><i class="fa fa-font"></i></span>Typography</a></li>
                        <li>
                            <a href="#"><span class="icon color14"><i class="fa fa-paper-plane-o"></i></span>Extra Pages<span
                                class="caret"></span></a>
                            <ul>
                                <li><a href="social-profile.html">Social Profile</a></li>
                                <li><a href="invoice.html">Invoice<span class="label label-danger">NEW</span></a></li>
                                <li><a href="login.html">Login Page</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li><a href="forgot-password.html">Forgot Password</a></li>
                                <li><a href="lockscreen.html">Lockscreen</a></li>
                                <li><a href="blank.html">Blank Page</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="404.html">404 Page</a></li>
                                <li><a href="500.html">500 Page</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="sidebar-panel nav">
                        <li class="sidetitle">MORE</li>
                        <li><a href="grid.html"><span class="icon color15"><i class="fa fa-columns"></i></span>Grid System</a></li>
                        <li><a href="maps.html"><span class="icon color7"><i class="fa fa-map-marker"></i></span>Maps</a></li>
                        <li><a href="customizable.html"><span class="icon color10"><i
                            class="fa fa-lightbulb-o"></i></span>Customizable</a></li>
                        <li><a href="helper-classes.html"><span class="icon color8"><i class="fa fa-code"></i></span>Helper Classes</a>
                        </li>
                        <li><a href="changelogs.html"><span class="icon color12"><i class="fa fa-file-text-o"></i></span>Changelogs</a>
                        </li>
                    </ul>
                </div>
                {/* CONTENT */}
                <div class="content">

                    {/* Start Page Header */}
                    <div class="page-header">
                        <h1 class="title">Blank Page</h1>
                        <ol class="breadcrumb">
                            <li><a href="index.html">Dashboard</a></li>
                            <li><a href="#">Extra Pages</a></li>
                            <li class="active">Blank Page</li>
                        </ol>

                        {/* Start Page Header Right Div */}
                        <div class="right">
                            <div class="btn-group" role="group" aria-label="...">
                                <a href="index.html" class="btn btn-light">Dashboard</a>
                                <a href="#" class="btn btn-light"><i class="fa fa-refresh"></i></a>
                                <a href="#" class="btn btn-light"><i class="fa fa-search"></i></a>
                                <a href="#" class="btn btn-light" id="topstats"><i class="fa fa-line-chart"></i></a>
                            </div>
                        </div>
                        {/* End Page Header Right Div */}

                    </div>
                    {/* End Page Header */}

                    {/* //////////////////////////////////////////////////////////////////////////// */}
                    {/* START CONTAINER */}
                    <div class="container-default">


                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                    </div>
                    {/* END CONTAINER */}
                    {/* //////////////////////////////////////////////////////////////////////////// */}


                    {/* Start Footer */}
                    <div class="row footer">
                        <div class="col-md-6 text-left">
                            Copyright © 2015 <a href="http://themeforest.net/user/egemem/portfolio" target="_blank">Egemem</a> All rights reserved.
</div>
                        <div class="col-md-6 text-right">
                            Design and Developed by <a href="http://themeforest.net/user/egemem/portfolio" target="_blank">Egemem</a>
                        </div>
                    </div>
                    {/* End Footer */}


                </div>            </div>
        )
    }
}

export default Teste;