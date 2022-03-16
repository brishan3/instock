import './WarehousesTable.scss';
import WarehouseEntry from '../WarehouseEntry/WarehouseEntry';

function WarehousesTable() {
    return (
        <div className="warehouses__table">
        <WarehouseEntry />
        <WarehouseEntry />
        </div>
    );
}

export default WarehousesTable 