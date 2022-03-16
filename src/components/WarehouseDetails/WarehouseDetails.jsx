import './WarehouseDetails.scss';
import { Component } from "react";
import EditButton from '../EditButton/EditButton';
import { Link } from "react-router-dom";
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import sortIcon from '../../assets/icons/sort-24px.svg';
import axios from 'axios';

// 2922c286-16cd-4d43-ab98-c79f698aeab0

class WarehouseDetails extends Component {
  state = {
    warehouse: {},
    contact: {},
    warehouseInventory: []
  }

  getInventoryByWarehouseId = () => {
    let currentID = this.props.match.params.id;
    // console.log(currentID);
    axios
      .get(`${process.env.REACT_APP_API_URL}/inventory/warehouse/${currentID}`)
      .then( (res) => {
        // console.log(res.data);
        this.setState(
          {
            warehouseInventory: res.data
          }
        )
      })
      .catch( (result) => {
        console.log(result);
      })
  }

  getWarehouseById = () => {
    let currentID = this.props.match.params.id;
    // console.log(currentID);
    axios
      .get(`${process.env.REACT_APP_API_URL}/warehouses/${currentID}`)
      .then( (res) => {
        // console.log(res.data);
        this.setState(
          {
            warehouse: res.data,
            contact: res.data.contact
          }
        )
        this.getInventoryByWarehouseId(currentID);
      })
      .catch( (result) => {
        console.log(result);
      })
  }

  componentDidMount = () => {
    this.getWarehouseById();
  }

  render = () => {
    // console.log(this.state.warehouse.contact);
    return (
      <>
        <div className='details-subheader'>
          <h2 className='details-subheader__title'>{this.state.warehouse.name}</h2>
          < EditButton route='/warehouses/edit/:id'/>
        </div>
        <div className="details body-medium">
          <div className="details__address">
            <h4 className="details__title">Warehouse address:</h4>
            <p className="details__text">{`${this.state.warehouse.address},`}<br/>{`${this.state.warehouse.city}, ${this.state.warehouse.country}`}</p>
          </div>
          <div className="details__contact">
            <div className="details__contact-name">
              <h4 className="details__title">Contact name:</h4>
              <p className="details__text">{this.state.contact.name}</p>
              <p className="details__text">{this.state.contact.position}</p>
            </div>
            <div className="details__contact-info">
              <h4 className="details__title">Contact information:</h4>
              <p className="details__text">{this.state.contact.phone}</p>
              <p className="details__text">{this.state.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="column-labels">
          <div className="column-labels__column column-labels__item">
            <h4 className="column-labels__text">Inventory item</h4>
            <img className="column-labels__sort-icon" src={sortIcon}/>
          </div>
          <div className="column-labels__column column-label__category">
            <h4 className="column-labels__text">Category</h4>
            <img className="column-labels__sort-icon" src={sortIcon}/>
          </div>
          <div className="column-labels__column column-labels__status">
            <h4 className="column-labels__text">Status</h4>
            <img className="column-labels__sort-icon" src={sortIcon}/>
          </div>
          <div className="column-labels__column column-labels__quantity">
            <h4 className="column-labels__text">Quantity</h4>
            <img className="column-labels__sort-icon" src={sortIcon}/>
          </div>
          <div className="column-labels__column column-labels__actions">
            <h4 className="column-labels__text">Actions</h4>
          </div>
        </div>
        <ul className="inventory-list">
            <li className='inventory-item'>
              {/* <div className="inventory-item__details">
                <div className="inventory-item__column inventory-item__item">
                  <h4 className="inventory-item__label">Inventory item</h4>
                </div>
                <div className="inventory-item__column inventory-item__category">
                  <h4 className="inventory-item__label">Category</h4>
                </div>
                <div className="inventory-item__column inventory-item__column--status">
                  <h4 className="inventory-item__label">Status</h4>
                </div>
                <div className="inventory-item__column inventory-item__quantity">
                  <h4 className="inventory-item__label">Quantity</h4>
                </div>
              </div>
              <div className="inventory-item__column inventory-item__actions">
                <h4 className="inventory-item__label">Actions</h4>
              </div> */}
            </li>
        </ul>
      </>
    )
  }
}

export default WarehouseDetails;