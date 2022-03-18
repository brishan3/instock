import "./InventoryList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import { v4 as uuid } from "uuid";
import sortIcon from "../../assets/icons/sort-24px.svg";

function InventoryList({ inventories }) {
  return (
    <>
      <ul className="items  mobile">
        {inventories.map((inventory) => (
          <li className="items__list" key={uuid()}>
            <div className="items__wrapper">
              <div className="items__content">
                <h4 className="items__header">inventory item</h4>
                <p className="items__name">
                  {inventory.itemName}
                  <img src={chevronRight} alt="chevron right" />
                </p>
              </div>
              <div className="items__content">
                <h4 className="items__header">status</h4>
                <div
                  className={`items__tag ${
                    inventory.status === "In Stock"
                      ? "items__green"
                      : "items__red"
                  }`}
                >
                  <h3 className="items__status">{inventory.status}</h3>
                </div>
              </div>
            </div>
            <div className="items__wrapper">
              <div className="items__content">
                <h4 className="items__header">category</h4>
                <p className="items__category">{inventory.category}</p>
              </div>
              <div className="items__content">
                <h4 className="items__header">qtd</h4>
                <p className="items_qtd">{inventory.quantity}</p>
              </div>
            </div>
            <div className="items__wrapper">
              <div className="items__content"></div>
              <div className="items__content">
                <h4 className="items__header">warehouse</h4>
                <p className="items__warehouse">{inventory.warehouseName}</p>
              </div>
            </div>
            <div className="items__buttons">
              <button className="items__button">
                <img
                  className="items__icon"
                  src={deleteIcon}
                  alt="delete-icon"
                />
              </button>
              <button className="items__button">
                <img className="items__icon" src={editIcon} alt="edit-icon" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <table className="table body-medium tablet-desktop">
        <tr className="table__head">
          <th className="table__header">
            <div className="table__label">
              <h4>inventory item</h4>
              <img className="column-labels__sort-icon" src={sortIcon} />
            </div>
          </th>
          <th className="table__header">
            <div className="table__label">
              <h4> category </h4>
              <img className="column-labels__sort-icon" src={sortIcon} />
            </div>
          </th>
          <th className="table__header">
            <div className="table__label">
              <h4> status</h4>
              <img className="column-labels__sort-icon" src={sortIcon} />
            </div>
          </th>
          <th className="table__header">
            <div className="table__label">
              <h4> qtd</h4>
              <img className="column-labels__sort-icon" src={sortIcon} />
            </div>
          </th>
          <th className="table__header">
            <div className="table__label">
              <h4> warehouse</h4>
              <img className="column-labels__sort-icon" src={sortIcon} />
            </div>
          </th>
          <th className="table__header">
            <div className="table__label">
              <h4>actions </h4>
              <img className="column-labels__sort-icon" src={sortIcon} />
            </div>
          </th>
        </tr>
        {inventories.map((inventory) => (
          <tr className="table__row" key={uuid()}>
            <td className="table__data name">
              {inventory.itemName}
              <img src={chevronRight} alt="chevron right" />
            </td>
            <td className="table__data">{inventory.category}</td>
            <td className="table__data">
              <div
                className={`table__tag ${
                  inventory.status === "In Stock"
                    ? "table__green"
                    : "table__red"
                }`}
              >
                <h3 className="table__status">{inventory.status}</h3>
              </div>
            </td>
            <td className="table__data">{inventory.quantity}</td>
            <td className="table__data">{inventory.warehouseName}</td>
            <td className="table__data icons">
              <button className="items__button">
                <img
                  className="items__icon"
                  src={deleteIcon}
                  alt="delete-icon"
                />
              </button>
              <button className="items__button">
                <img className="items__icon" src={editIcon} alt="edit-icon" />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default InventoryList;
