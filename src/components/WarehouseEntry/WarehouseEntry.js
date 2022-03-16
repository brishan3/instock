import "./WarehouseEntry.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
// where to place key={warehouse.id} for this?
function WarehouseEntry(props) {
  return (
    
      <>
        {props.warehouses.map((warehouse) => (
          <div className="warehouseTable" key={warehouse.id}>
            <div className="warehouseTable__location">
              <div className="warehouseTable__warehouse">
                <h4 className="warehouseTable__header">Warehouse</h4>
                <Link to="/warehouses/:id" className="warehouseTable__name">
                  {warehouse.name}
                </Link>
              </div>
              <div className="warehouseTable__address">
                <h4 className="warehouseTable__header">Address</h4>
                <p className="body-medium">
                  {warehouse.address},
                  {warehouse.city},
                  {warehouse.country}
                </p>
              </div>
              <img className="delete-icon" src={deleteIcon} alt="delete-icon" />
            </div>

            <div className="warehouseTable__contact">
              <div className="warehouseTable__contactName">
                <h4 className="warehouseTable__header">Contact Name</h4>
                <p className="body-medium">{warehouse.contact.name}</p>
              </div>
              <div>
                <h4 className="warehouseTable__header">Contact Infomration</h4>
                <p className="body-medium"> {warehouse.contact.phone}</p>
                <p className="body-medium"> {warehouse.contact.email}</p>
              </div>
              <img className="edit-icon" src={editIcon} alt="edit-icon" />
            </div>
          </div>
        ))}
      </>
      
    
  );
}

export default WarehouseEntry;
