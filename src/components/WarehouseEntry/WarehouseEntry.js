import "./WarehouseEntry.scss";
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from "react-router-dom";

function WarehouseEntry(props) {
  return (
    <>
      <div className="warehouseTable">
        <div className="warehouseTable__location">
          <div className="warehouseTable__warehouse">
            <h4 className="warehouseTable__header">Warehouse</h4>
            <Link to="/warehouses/:id" className="warehouseTable__name">{props.name}warehouse name {">"} </Link>
          </div>
          <div className="warehouseTable__address">
            <h4 className="warehouseTable__header">Address</h4>
            <p className="body-medium">
              {props.address}street, 
              {props.city}city,
              {props.country}country
            </p>
          </div>
          <img className="delete-icon" src={deleteIcon} alt="delete-icon"/>
        </div>

        <div className="warehouseTable__contact">
          <div className="warehouseTable__contactName">
            <h4 className="warehouseTable__header">Contact Name</h4>
            <p className="body-medium">{props.name}contact name</p>
          </div>
          <div>
            <h4 className="warehouseTable__header">Contact Infomration</h4>
            <p className="body-medium">phone {props.phone}</p>
            <p className="body-medium">email {props.email}</p>
          </div>
          <img className="edit-icon" src={editIcon} alt="edit-icon" />
        </div>  
      </div>
    </>
  );
}

export default WarehouseEntry;
