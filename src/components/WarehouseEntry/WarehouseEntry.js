import "./WarehouseEntry.scss";
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from "react-router-dom";

function WarehouseEntry(props) {
  return (
    <>
      <div>
        <div>
          <div>
            <p>Warehouse</p>
            <Link to="/warehouses/:id">{props.this.state.warehouses.name}</Link>
          </div>
          <div>
            <p>Address</p>
            <p>
              {props.this.state.warehouses.address}, {props.this.state.warehouses.city},
              {props.this.state.warehouses.country}
            </p>
          </div>
          <img className="delete-icon" src={deleteIcon} alt="delete-icon"/>
          <div>
            <p>Contact Name</p>
            <p>{props.this.state.warehouses.contact.name}</p>
          </div>
          <div>
            <p>Contact Infomration</p>
            <p>{props.this.state.warehouses.contact.phone}</p>
            <p>{props.this.state.warehouses.contact.email}</p>
          </div>
          <img className="edit-icon" src={editIcon} alt="edit-icon" />
        </div>
      </div>
    </>
  );
}

export default WarehouseEntry;
