import "./AddWarehouse.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import error from "../../assets/icons/error-24px.svg";
import axios from "axios";

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
    whName.classList.add("details__input--error");
    whName.nextSibling.style.display = "block";
  } else if (!address.value.trim()) {
    address.focus();
    address.classList.add("details__input--error");
    address.nextSibling.style.display = "block";
  } else if (!city.value.trim()) {
    city.focus();
    city.classList.add("details__input--error");
    city.nextSibling.style.display = "block";
  } else if (!country.value.trim()) {
    country.focus();
    country.classList.add("details__input--error");
    country.nextSibling.style.display = "block";
  } else if (!name.value.trim()) {
    name.focus();
    name.classList.add("details__input--error");
    name.nextSibling.style.display = "block";
  } else if (!position.value.trim()) {
    position.focus();
    position.classList.add("details__input--error");
    position.nextSibling.style.display = "block";
  } else if (!phone.value.trim()) {
    phone.focus();
    phone.classList.add("details__input--error");
    phone.nextSibling.style.display = "block";
  } else if (!email.value.trim()) {
    email.focus();
    email.classList.add("details__input--error");
    email.nextSibling.style.display = "block";
  } else {
    const newWarehouse = {
      whname: whName.value,
      address: address.value,
      city: city.value,
      country: country.value,
      name: name.value,
      position: position.value,
      phone: phone.value,
      email: email.value,
    };

    const addWarehouse = axios.post(
      "http://localhost:8080/warehouses",
      newWarehouse
    );
    addWarehouse
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => {
        window.alert(err);
      });
  }
};

export default function EditWarehouse() {
  return (
    <div className="box-shadow">
      <div className="edit-inven__subheader">
        <img src={backArrow} alt="back arrow" className="back-icon" />
        <h2 className="subheader__text">Add New Warehouse</h2>
      </div>
      <form
        className="edit-inven__details"
        id="warehouse-form"
        onSubmit={handleSubmit}
      >
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
            />
            <p className="details__err">
              <img className="details__err--img" src={error} alt="error" /> This
              field is required
            </p>
            <label htmlFor="address" className="details__label">
              Street Address
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Street Address"
              id="address"
            />
            <p className="details__err">
              <img className="details__err--img" src={error} alt="error" /> This
              field is required
            </p>
            <label htmlFor="city" className="details__label">
              City
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="City"
              id="city"
            />
            <p className="details__err">
              <img className="details__err--img" src={error} alt="error" /> This
              field is required
            </p>
            <label htmlFor="country" className="details__label">
              Country
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Country"
              id="country"
            />
            <p className="details__err">
              <img className="details__err--img" src={error} alt="error" /> This
              field is required
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
              placeholder="Warehouse Name"
              id="name"
            />
            <p className="details__err">
              <img className="details__err--img" src={error} alt="error" /> This
              field is required
            </p>
            <label htmlFor="position" className="details__label">
              Position
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Street Address"
              id="position"
            />
            <p className="details__err">
              <img className="details__err--img" src={error} alt="error" /> This
              field is required
            </p>
            <label htmlFor="phone" className="details__label">
              Phone Number
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Phone Number"
              id="phone"
            />
            <p className="details__err">
              <img className="details__err--img" src={error} alt="error" /> This
              field is required
            </p>
            <label htmlFor="email" className="details__label">
              Email
            </label>
            <input
              type="text"
              className="details__input"
              placeholder="Email"
              id="email"
            />
            <p className="details__err">
              <img className="details__err--img" src={error} alt="error" /> This
              field is required
            </p>
          </div>
        </div>
      </form>
      <div className="buttons">
        <Link to="/"><button className="cancel-btn">Cancel</button></Link>
        <button type="submit" form="warehouse-form" className="save-btn">
          +Add Warehouse
        </button>
      </div>
    </div>
  );
}
