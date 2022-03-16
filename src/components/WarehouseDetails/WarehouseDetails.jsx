import './WarehouseDetails.scss';
import { Link } from "react-router-dom";
import editIcon from '../../assets/icons/edit-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import sortIcon from '../../assets/icons/sort-24px.svg';


function WarehouseDetails(props) {
  return (
    <>
    <div className='details-subheader'>
      <h2 className='details-subheader__title'>Warehouse Location</h2>
      <Link to='/warehouses/edit/:id' className='details-subheader__button'>
        <img className='details-subheader__button-icon' src={editIcon} alt="delete icon"/>
        <p className='details-subheader__button-text'>Edit</p>
      </Link>
    </div>
    <div className="details body-medium">
      <div className="details__address">
        <p className="details__title">Warehouse address:</p>
        <p className="details__text">33 Pearl Street SW, Washington, USA</p>
      </div>
      <div className="details__contact">
        <div className="details__contact-name">
          <p className="details__title">Contact name:</p>
          <p className="details__text">Graeme Lyon</p>
          <p className="details__text">Warehouse Manager</p>
        </div>
        <div className="details__contact-info">
          <p className="details__title">Contact information:</p>
          <p className="details__text">+1 (647) 504-0911</p>
          <p className="details__text">glyon@instock.com</p>
        </div>
      </div>
    </div>

    <div className="column-labels">
      <div className="column-labels__column columns-labels__item">
        <p className="column-labels__text">Inventory item</p>
        <img className="column-labels__sort-icon" src={sortIcon}/>
      </div>
      <div className="column-labels__column columns-labels__category">
        <p className="column-labels__text">Category</p>
        <img className="column-labels__sort-icon" src={sortIcon}/>
      </div>
      <div className="column-labels__column column-labels__status">
        <p className="column-labels__text">Status</p>
        <img className="column-labels__sort-icon" src={sortIcon}/>
      </div>
      <div className="column-labels__column columns-labels__quantity">
        <p className="column-labels__text">Quantity</p>
        <img className="column-labels__sort-icon" src={sortIcon}/>
      </div>
      <div className="column-labels__column columns-labels__actions">
        <p className="column-labels__text">Actions</p>
      </div>
    </div>
    <ul className="inventory-list">
        <li className='inventory-item'>
          
        </li>
    </ul>
    
    </>
  )
}

export default WarehouseDetails;