import './WarehouseElement.scss'
import editIcon from '../../assets/icons/edit-24px.svg'
import chevronIcon from '../../assets/icons/chevron_right-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import { Link } from 'react-router-dom'

function WarehouseElement({name, address, city, country, contactName, contactPhone, contactEmail, id}) {
    return (
        <li className="warehouse-item body-medium">
        <div className="warehouse-item__details">
          <div className="warehouse-item__details-block warehouse-item__details-block--left">
            <div className="warehouse-item__column warehouse-item__warehouse">
              <h4 className="warehouse-item__label">Warehouse</h4>
              <Link className="warehouse-item__text-block" to={`/warehouse/${id}`}>
                <p className="warehouse-item__text warehouse-item__text--warehouse">
                  {name}
                </p>
                <img className="warehouse-item__warehouse-chevron" src={chevronIcon} />
              </Link>
            </div>
            <div className="warehouse-item__column warehouse-item__address">
              <h4 className="warehouse-item__label">Address</h4>
              <p className="warehouse-item__text warehouse-item__text--address">
                {address}, {city}, {country}
              </p>
            </div>
          </div>
          <div className="warehouse-item__details-block warehouse-item__details-block--right">
            <div className="warehouse-item__column">
              <h4 className="warehouse-item__label">Contact Name</h4>
              <p className="warehouse-item__text warehouse-item__contactName">{contactName}</p>
            </div>
            <div className="warehouse-item__column warehouse-item__contactInformation">
              <h4 className="warehouse-item__label">Contact Information</h4>
              <p className="warehouse-item__text">{contactPhone}</p>
              <p className="warehouse-item__text">{contactEmail}</p>
            </div>
          </div>
        </div>
        <div className="warehouse-item__details--right">
          <div className="warehouse-item__column warehouse-item__contactInformation--tablet">
            <h4 className="warehouse-item__label">Contact Information</h4>
            <p className="warehouse-item__text">{contactPhone}</p>
            <p className="warehouse-item__text">{contactEmail}</p>
          </div>
          <div className="warehouse-item__column warehouse-item__actions">
            <Link to={`/warehouse/delete/${id}`} className="warehouse-item__delete-button">
              <img
                className="warehouse-item__action-icon"
                src={deleteIcon}
                alt="Delete icon"
              />
            </Link>
            <Link to={`/warehouse/edit/${id}`}>
              <img
                className="warehouse-item__action-icon"
                src={editIcon}
                alt="Edit icon"
              />
            </Link>
          </div>
        </div>
      </li>
    )
}
export default WarehouseElement;
