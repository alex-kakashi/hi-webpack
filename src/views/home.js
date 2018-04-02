import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { image_path } from '../utils'

import './home.scss'
const dropdown_image = "dropdown_comment.png";

class Home extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  static defaultProps = {
    ...React.Component.defaultProps,
    history: {},
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dataList: [1, 2, 3, 4],
      indexCardShowDropdown: -1,

      modal: false

    };
  }

  toggle() {
    // const weakThis = this
    // this.setState({
    //   dropdownOpen: !this.state.dropdownOpen
    // });

    this.setState({
      modal: !this.state.modal
    });

  }

  _renderCard = (items) => {
    return items.map((item, index) => {
      return (
        <Dropdown
          key={index}
          direction="down"
          isOpen={this.state.indexCardShowDropdown === index}
          toggle={() => {
            this.state.indexCardShowDropdown === index ?

              this.setState({ indexCardShowDropdown: -1 }) :
              this.setState({ indexCardShowDropdown: index })
          }}>
          <DropdownToggle caret>Dropright 2</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-row">
          {this._renderCard([1, 2, 3])}
        </div>

        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  render2() {
    return (
      <div style={{ backgroundColor: '#000' }}>
        <div class="d-flex flex-row">
          <Dropdown
            direction="down"
            isOpen={this.state.btnDropleft2}
            toggle={() => { this.setState({ btnDropleft2: !this.state.btnDropleft2 }); }}
          >
            <DropdownToggle tag="div">
              <img src={image_path + dropdown_image}
                style={{ width: 30, height: 30 }} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown
            direction="down"
            isOpen={this.state.btnDropleft2}
            toggle={() => { this.setState({ btnDropright2: !this.state.btnDropright2 }); }}>
            <DropdownToggle caret>Dropright 2</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            direction="down"
            isOpen={this.state.btnDropleft}
            toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}
          >
            <DropdownToggle caret>Dropleft 3</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown
            direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
            <DropdownToggle caret>Dropright 4</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default withRouter(connect(mapStateToProps)(Home))