import "./EditWareouse.scss";
import React from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
// CHANGE OUT ALL THE EDIT INVENTORY STUFF FOR WAREHOUSE SPECIFIC DETAILS 
//ALL CODE BELOW IS JUST FOR SHOW/PLACEHOLDER

class EditWarehouse extends React.Component {
  render() {
    return (
      <div className="box-shadow">
        <div className="edit-inven__subheader">
          <img src={backArrow} alt="back arrow" className="back-icon" />
          <h2 className="subheader__text">Edit Inventory Item</h2>
        </div>
        <form className="edit-inven__details">
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
              />
              <label htmlFor="description" className="details__label">
                Description
              </label>
              <textarea
                type="text"
                className="details__textarea"
                placeholder="Please enter a brief item description..."
                id="description"
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
                  checked
                />
                <label htmlFor="instock" className="radio-btn">
                  In stock
                </label>
                <input
                  type="radio"
                  id="outofstock"
                  name="status"
                  value="outofstock"
                  checked
                />
                <label htmlFor="outofstock" className="radio-btn">
                  Out of stock
                </label>
              </div>
              <label htmlFor="warehouse" className="details__label">
                Warehouse
              </label>
              <div className="select-container">
                <select
                  name="warehouse"
                  id="warehouse"
                  className="warehouse__select"
                >
                  <option value="Manhattan">Manhattan</option>
                  <option value="Washington">Washington</option>
                  <option value="Jersey">Jersey</option>
                  <option value="San Fran">San Fran</option>
                  <option value="Santa Monica">Santa Monica</option>
                  <option value="Seattle">Seattle</option>
                  <option value="Miami">Miama</option>
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
          <Link to="/inventory" className="save-btn">
            Save
          </Link>
        </div>
      </div>
    );
  }
}
