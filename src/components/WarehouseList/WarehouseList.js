import "./WarehouseList.scss";

import sortIcon from '../../assets/icons/sort-24px.svg';


import WarehouseElement from "../WarehouseElement/WarehouseElement";
//import { v4 as uuid } from "uuid";
// add import statement for editWarehouse page/components that will be made 

function WarehouseList({ warehouses, showDeleteModal }) {
  return (    
      <div className="wrapper">
          <div className="column-labels">
            <div className="column-labels__left">
              <div className="column-labels__column column-labels__item">
                <h4 className="column-labels__text">Warehouse</h4>
                <img className="column-labels__sort-icon" src={sortIcon}/>
              </div>
              <div className="column-labels__column column-labels__category">
                <h4 className="column-labels__text">Address</h4>
                <img className="column-labels__sort-icon" src={sortIcon}/>
              </div>
              <div className="column-labels__column column-labels__status">
                <h4 className="column-labels__text">Contact Name</h4>
                <img className="column-labels__sort-icon" src={sortIcon}/>
              </div>
            </div>
            <div className="column-labels__right">
              <div className="column-labels__column column-labels__quantity">
                <h4 className="column-labels__text">Contact Information</h4>
                <img className="column-labels__sort-icon" src={sortIcon}/>
              </div>
              <div className="column-labels__column column-labels__actions">
                <h4 className="column-labels__text">Actions</h4>
              </div>
            </div>
          </div>
        <ul className="warehouses-list">
          {
            warehouses.map((warehouse) => {
              return (
                <WarehouseElement
                  name={warehouse.name}
                  address={warehouse.address}
                  city={warehouse.city}
                  country={warehouse.country}
                  contactName={warehouse.contact.name}
                  contactPhone={warehouse.contact.phone}
                  contactEmail={warehouse.contact.email}
                  id={warehouse.id}
                  key={warehouse.id}
                  showDeleteModal={showDeleteModal}
                  />
              )})
          }
        </ul>
      </div>

  );
}

export default WarehouseList;