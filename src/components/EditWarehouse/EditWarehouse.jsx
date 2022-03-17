import "./EditWarehouse.scss";
import React from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import error from "../../assets/icons/error-24px.svg";
import axios from "axios";
// CHANGE OUT ALL THE EDIT INVENTORY STUFF FOR WAREHOUSE SPECIFIC DETAILS
//ALL CODE BELOW IS JUST FOR SHOW/PLACEHOLDER

class EditWarehouse extends React.Component {
  state = {
    whname: "",
    address: "",
    city: "",
    country: "",
    name: "",
    position: "",
    phone: "",
    email: "",
  };
  getWarehouseById = () => {
    let currentID = this.props.match.params.id;
    // console.log(currentID);
    axios
      .get(`${process.env.REACT_APP_API_URL}/warehouses/${currentID}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          whname: res.data.name,
          address: res.data.address,
          city: res.data.city,
          country: res.data.country,
          name: res.data.contact.name,
          position: res.data.contact.position,
          phone: res.data.contact.phone,
          email: res.data.contact.email,
        });
      })
      .catch((result) => {
        console.log(result);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, event.target.value);
  };

  componentDidMount() {
    this.getWarehouseById();
  }

  render() {
    return (
      <div className="box-shadow">
        <div className="edit-inven__subheader">
          <img src={backArrow} alt="back arrow" className="back-icon" />
          <h2 className="subheader__text">Edit Warehouse</h2>
        </div>
        <form className="edit-inven__details" id="warehouse-form">
          <div className="details__container">
            <h3 className="details__subheader">Warehouse Details</h3>
            <div className="details__form">
              <label htmlFor="whName" className="details__label">
                Warehouse Name
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Warehouse Name"
                id="whName"
                name="whName"
                value={this.state.whname}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
              <label htmlFor="address" className="details__label">
                Street Address
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Street Address"
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
              <label htmlFor="city" className="details__label">
                City
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="City"
                id="city"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
              <label htmlFor="country" className="details__label">
                Country
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Country"
                id="country"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
            </div>
          </div>
          <div className="details__container">
            <h3 className="details__subheader">Contact Details</h3>
            <div className="details__form">
              <label htmlFor="name" className="details__label">
                Contact Name
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Name"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
              <label htmlFor="position" className="details__label">
                Position
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Position"
                id="position"
                name="position"
                value={this.state.position}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
              <label htmlFor="phone" className="details__label">
                Phone Number
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Phone Number"
                id="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
              <label htmlFor="email" className="details__label">
                Email
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
            </div>
          </div>
        </form>
        <div className="buttons">
          <Link to="/warehouses" className="cancel-btn">
            Cancel
          </Link>
          <button type="submit" form="warehouse-form" className="save-btn">
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default EditWarehouse;
