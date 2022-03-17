import './WarehouseInvElement.scss'
import editIcon from '../../assets/icons/edit-24px.svg'
import chevronIcon from '../../assets/icons/chevron_right-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import { Link } from 'react-router-dom'

function WarehouseInvElement({name, category, status, quantity, id}) {
  return (
    <li className="inventory-item body-medium">
      <div className="inventory-item__details">
        <div className="inventory-item__details-block inventory-item__details-block--left">
          <div className="inventory-item__column inventory-item__item">
            <h4 className="inventory-item__label">Inventory item</h4>
            <Link className="inventory-item__text-block" to={`/inventory/${id}`}>
              <p className="inventory-item__text inventory-item__text--item">
                {name}
              </p>
              <img className="inventory-item__item-chevron" src={chevronIcon} />
            </Link>
          </div>
          <div className="inventory-item__column inventory-item__category">
            <h4 className="inventory-item__label">Category</h4>
            <p className="inventory-item__text inventory-item__text--category">
              {category}
            </p>
          </div>
        </div>
        <div className="inventory-item__details-block inventory-item__details-block--right">
          <div className="inventory-item__column">
            <h4 className="inventory-item__label">Status</h4>
            {status.toLowerCase() === "in stock" ? 
              (
                <p className="inventory-item__text inventory-item__stock inventory-item__stock--true">{status}</p>
              ) : (
                <p className="inventory-item__text inventory-item__stock">{status}</p>
              )
            }
          </div>
          <div className="inventory-item__column inventory-item__quantity">
            <h4 className="inventory-item__label">Quantity</h4>
            <p className="inventory-item__text">{quantity}</p>
          </div>
        </div>
      </div>
      <div className="inventory-item__details--right">
        <div className="inventory-item__column inventory-item__quantity--tablet">
          <h4 className="inventory-item__label">Quantity</h4>
          <p className="inventory-item__text">{quantity}</p>
        </div>
        <div className="inventory-item__column inventory-item__actions">
          <button className="inventory-item__delete-button">
            <img
              className="inventory-item__action-icon"
              src={deleteIcon}
              alt="Delete icon"
            />
          </button>
          <Link to={`/inventory/edit/${id}`}>
            <img
              className="inventory-item__action-icon"
              src={editIcon}
              alt="Edit icon"
            />
          </Link>
        </div>
      </div>
    </li>
  )
}

export default WarehouseInvElement;