import "./WarehouseEntry.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
//import { v4 as uuid } from "uuid";

function WarehouseEntry({ warehouses }) {
  return (    
      <div className="wrapper">
        <ul className="warehouses body-medium">
          {warehouses.map((warehouse) => (
            <li className="warehouses__list" key={warehouse.id}>
              <div className="warehouses__wrapper">
                <div className="warehouses__content">
                  <h4 className="warehouses__header">Warehouse</h4>
                  <Link to="/warehouses/:id" className="warehouses__description">
                   {warehouse.name}
                  </Link>
                </div>
                <div className="warehouses__content">
                  <h4 className="warehouses__header">Contact Name</h4>
                  <p className="warehouses__contactName">{warehouse.contact.name}</p>
                </div>               
              </div>
              <div className="warehouses__wrapper">
                <div className="warehouses__content">
                  <h4 className="warehouses__header">Address</h4>
                  <p className="warehouses__address">
                   {warehouse.address},
                   {warehouse.city},
                   {warehouse.country}
                  </p>
                </div>
                <div className="warehouses__content">
                  <h4 className="warehouses__header">Contact Infomration</h4>
                  <p className="warehouses__phone"> {warehouse.contact.phone}</p>
                  <p className="warehouses__email"> {warehouse.contact.email}</p>
                </div>
              </div>
              <div className="warehouses__buttons">
                <button className="warehouses__button">
                  <img 
                    className="delete-icon" 
                    src={deleteIcon} 
                    alt="delete-icon" 
                  />
                </button>
                <button className="warehouses_buttons">
                  <img 
                    className="edit-icon" 
                    src={editIcon} 
                    alt="edit-icon" 
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default WarehouseEntry;


        //   <div className="warehouseTable" key={warehouse.id}>
        //     <div className="warehouseTable__location">
        //       <div className="warehouseTable__warehouse">
        //         <h4 className="warehouseTable__header">Warehouse</h4>
        //         <Link to="/warehouses/:id" className="warehouseTable__name">
        //           {warehouse.name}
        //         </Link>
        //       </div>
        //       <div className="warehouseTable__address">
        //         <h4 className="warehouseTable__header">Address</h4>
        //         <p className="body-medium">
        //           {warehouse.address},
        //           {warehouse.city},
        //           {warehouse.country}
        //         </p>
        //       </div>
        //       <img className="delete-icon" src={deleteIcon} alt="delete-icon" />
        //     </div>

        //     <div className="warehouseTable__contact">
        //       <div className="warehouseTable__contactName">
        //         <h4 className="warehouseTable__header">Contact Name</h4>
        //         <p className="body-medium">{warehouse.contact.name}</p>
        //       </div>
        //       <div>
        //         <h4 className="warehouseTable__header">Contact Infomration</h4>
        //         <p className="body-medium"> {warehouse.contact.phone}</p>
        //         <p className="body-medium"> {warehouse.contact.email}</p>
        //       </div>
        //       <img className="edit-icon" src={editIcon} alt="edit-icon" />
        //     </div>
        //   </div>
        // ))}