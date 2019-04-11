import React, { Component } from "react";


class Sidebar extends Component {
    render() {
        return (

            <div class="sidebar clearfix">
                <ul class="sidebar-panel nav">
                    <li class="sidetitle">MAIN</li>
                    <li><a href="/"><span class="icon color5"><i class="fa fa-home"></i></span>HomePage</a></li>
                    <li><a href="/medicines"><span class="icon color6"><i class="fa fa-medkit"></i></span>Medicines</a></li>
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
            </div>


        )
    }
}



export default Sidebar;