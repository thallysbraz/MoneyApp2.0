import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import If from "../operator/if";
import { selectTab } from "./tabActions";

class TabHeader extends Component {
  render() {
    return (
      <li>
        <a
          href="javascript:;"
          data-toggle="tab"
          data-target={this.props.target}
        >
          <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
        </a>
      </li>
    );
  }
}

export default TabHeader;
