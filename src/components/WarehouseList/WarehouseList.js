import "./WarehouseList.scss";

import sortIcon from '../../assets/icons/sort-24px.svg';


import WarehouseElement from "../WarehouseElement/WarehouseElement";
//import { v4 as uuid } from "uuid";
// add import statement for editWarehouse page/components that will be made 

function WarehouseList({ warehouses, showDeleteModal }) {
  return (    
      <div className="wrapper">
          <div className="column-labels">
            <div className="column-labels__left column-labels__left--wh">
              <div className="column-labels__column column-labels__wh">
                <h4 className="column-labels__text">Warehouse</h4>
                <img className="column-labels__sort-icon" src={sortIcon}/>
              </div>
              <div className="column-labels__column column-labels__address">
                <h4 className="column-labels__text">Address</h4>
                <img className="column-labels__sort-icon" src={sortIcon}/>
              </div>
              <div className="column-labels__column column-labels__contactName">
                <h4 className="column-labels__text">Contact Name</h4>
                <img className="column-labels__sort-icon" src={sortIcon}/>
              </div>
            </div>
            <div className="column-labels__right column-labels__right--wh">
              <div className="column-labels__column column-labels__contactInformation">
                <h4 className="column-labels__text">Contact Information</h4>
                <img className="column-labels__sort-icon" src={sortIcon}/>
              </div>
              <div className="column-labels__column column-labels__actions column-labels__actions--wh">
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
