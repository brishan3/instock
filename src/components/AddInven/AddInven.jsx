import "./AddInven.scss";
import React from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
class AddInven extends React.Component {
  state = {
    isSubmitted: false,
    error: false,
    status: "instock",
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    //Validation
    if (
      e.target.itemname.value === "" ||
      e.target.description.value === "" ||
      e.target.category.value === "Select" ||
      e.target.quantity.value === "0" ||
      e.target.warehouse.value === "Select"
    ) {
      this.setState({ error: true });
    }
    // Validated
    else {
      // Grab the warehouseID for later use
      axios
        .get(`${process.env.REACT_APP_API_URL}/warehouses`)
        .then((response) => {
          let foundWarehouse = response.data.find(
            (warehouse) => warehouse.name === e.target.warehouse.value
          );
          // Creating new object from the form
          let newInventory = {
            id: uuidv4(),
            warehouseID: foundWarehouse.id,
            warehouseName: e.target.warehouse.value,
            itemName: e.target.itemname.value,
            description: e.target.description.value,
            category: e.target.category.value,
            status: e.target.status.value,
            quantity: e.target.quantity.value || 0,
          };
          // Post the object to the server
          axios
            .post(`${process.env.REACT_APP_API_URL}/inventory`, newInventory)
            .then((response) => {
              this.setState({ isSubmitted: true });
              e.target.reset();
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div className="box-shadow">
        <div className="add-inven__subheader">
          <Link to="/inventory">
            <img src={backArrow} alt="back arrow" className="back-icon" />
          </Link>
          <h2 className="subheader__text">Add New Inventory Item</h2>
        </div>
        <form
          className="add-inven__details"
          id="form"
          onSubmit={this.submitHandler}
        >
          <div className="details__container">
            <h3 className="detail__subheader">Item Details</h3>
            <div className="details__form">
              <label htmlFor="name" className="details__label">
                Item Name
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Item Name"
                id="name"
                name="itemname"
              />
              <label htmlFor="description" className="details__label">
                Description
              </label>
              <textarea
                type="text"
                className="details__textarea"
                placeholder="Please enter a brief item description..."
                id="description"
                name="description"
              ></textarea>
              <label htmlFor="category" className="details__label">
                Category
              </label>
              <div className="select-container">
                <select
                  name="category"
                  id="category"
                  className="details__select"
                >
                  <option value="Select">Select</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Gear">Gear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Health">Health</option>
                </select>
              </div>
            </div>
          </div>
          <div className="availability__container">
            <h3 className="detail__subheader">Item Availability</h3>
            <div className="details__form">
              <label htmlFor="status" className="details__label">
                Status
              </label>
              <div className="stock__status">
                <input
                  type="radio"
                  id="instock"
                  name="status"
                  value="instock"
                  defaultChecked
                  onChange={this.onChangeHandler}
                />
                <label htmlFor="instock" className="radio-btn">
                  In stock
                </label>
                <input
                  type="radio"
                  id="outofstock"
                  name="status"
                  value="outofstock"
                  onChange={this.onChangeHandler}
                />
                <label htmlFor="outofstock" className="radio-btn">
                  Out of stock
                </label>
              </div>
              <label
                htmlFor="name"
                className={`details__label ${
                  this.state.status === "outofstock"
                    ? "details__label--none"
                    : ""
                }`}
              >
                Quantity
              </label>
              <input
                type="text"
                className={`details__input details__input--quantity ${
                  this.state.status === "outofstock"
                    ? "details__input--none"
                    : ""
                }`}
                placeholder="0"
                id="name"
                name="quantity"
              />
              <label htmlFor="warehouse" className="details__label">
                Warehouse
              </label>
              <div className="select-container">
                <select
                  name="warehouse"
                  id="warehouse"
                  className="warehouse__select"
                >
                  <option value="Select">Select</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Washington">Washington</option>
                  <option value="Jersey">Jersey</option>
                  <option value="San Fran">San Fran</option>
                  <option value="Santa Monica">Santa Monica</option>
                  <option value="Seattle">Seattle</option>
                  <option value="Miami">Miami</option>
                  <option value="Boston">Boston</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <div className="buttons">
          <Link to="/inventory" className="cancel-btn">
            Cancel
          </Link>
          <button type="submit" form="form" className="add-btn save-btn">
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default AddInven;
