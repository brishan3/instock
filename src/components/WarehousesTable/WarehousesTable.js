import './WarehousesTable.scss';
import WarehouseEntry from '../WarehouseEntry/WarehouseEntry';

function WarehousesTable(props) {
    return (
        <div className="warehouses__table">
        <WarehouseEntry warehouses={props.warehouses} />
        
        
        </div>
    );
}

export default WarehousesTable 