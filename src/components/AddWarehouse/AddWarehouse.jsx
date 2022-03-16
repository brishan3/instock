import "./AddWarehouse.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();
  const whName = e.target.whName;
  const address = e.target.address;
  const city = e.target.city;
  const country = e.target.country;
  const name = e.target.name;
  const position = e.target.position;
  const phone = e.target.phone;
  const email = e.target.email; 

  if (!whName.value.trim()) {
    whName.focus();
    whName.classList.add("input--error");
  } else if (!address.value.trim()) {
    address.focus();
    address.classList.add("input--error");
  } else if (!city.value.trim()) {
    city.focus();
    city.classList.add("input--error");
  } else if (!country.value.trim()) {
    country.focus();
    country.classList.add("input--error");
  } else if (!name.value.trim()) {
    name.focus();
    name.classList.add("input--error");
  } else if (!position.value.trim()) {
    position.focus();
    position.classList.add("input--error");
  } else if (!phone.value.trim()) {
    phone.focus();
    phone.classList.add("input--error");
  } else if (!email.value.trim()) {
    email.focus();
    email.classList.add("input--error");
  } else {
    console.log(whName.value, address.value,city.value, country.value, name.value, position.value,phone.value, email.value)
  }
}

export default function EditWarehouse() {
  return (
    <div className="box-shadow">
      <div className="edit-inven__subheader">
        <img src={backArrow} alt="back arrow" className="back-icon" />
        <h2 className="subheader__text">Add New Warehouse</h2>
      </div>
      <form className="edit-inven__details" id="warehouse-form" onSubmit={handleSubmit}>
        <div className="details__container">
          <h3 className="detail__subheader">Warehouse Details</h3>
          <div className="details__form">
            <label htmlFor="whName" className="details__label">
              Warehouse Name
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Warehouse Name"
              id="whName"
              required
            />
            <label htmlFor="address" className="details__label">
              Street Address
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Street Address"
              id="address"
              required
            />
            <label htmlFor="city" className="details__label">
              City
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="City"
              id="city"
              required
            />
            <label htmlFor="country" className="details__label">
              Country
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Country"
              id="country"
              required
            />
          </div>
        </div>
        <div className="details__container">
          <h3 className="detail__subheader">Contact Details</h3>
          <div className="details__form">
            <label htmlFor="name" className="details__label">
              Contact Name
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Warehouse Name"
              id="name"
              required
            />
            <label htmlFor="position" className="details__label">
              Position
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Street Address"
              id="position"
              required
            />
            <label htmlFor="phone" className="details__label">
              Phone Number
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Phone Number"
              id="phone"
              required
            />
            <label htmlFor="email" className="details__label">
              Email
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Email"
              id="email"
              required
            />
          </div>
        </div>
      </form>
      <div className="buttons">
        <button className="cancel-btn">
          Cancel
        </button>
        <button type="submit"  form="warehouse-form" className="save-btn">
          Save
        </button>
      </div>
    </div>
  );
}
