import { Component } from 'react';
import axios from 'axios';
import './Warehouses.scss';

import WarehouseEntry from '../../components/WarehouseEntry/WarehouseEntry';
import SearchHeader from '../../components/SearchHeader/SearchHeader';

// import SearchField from '../../components/SearchField/SearchField';
// import MainButton from '../../components/MainButton/MainButton';
// import WarehousesTable from '../../components/WarehousesTable/WarehousesTable';


class Warehouses extends Component {
    state = {
        warehouses: [],
    };

    //fetching API data and setting state when it mounts for the first time
    componentDidMount() {
        this.getAllWarehouses();
    }

    getAllWarehouses(){

        axios.get(`${process.env.REACT_APP_API_URL}/warehouses`)
        .then((response) => {
            this.setState({
                warehouses:response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render () {
        return (
            <>
                <SearchHeader title="Warehouses" content="+ add new warehouse"/>
                <WarehouseEntry warehouses={this.state.warehouses} />
            </>
        );
    }
}

export default Warehouses;

/* <div className="warehousesPage">
<div className="warehousesHeader">
    <h1 className="warehousesHeader__title">Warehouses</h1>
    <SearchField />
    <MainButton>
        <h3 className="warehousesHeader__button">+ Add New Warehouse</h3>
    </MainButton>                
</div>
<WarehousesTable 
    warehouses={this.state.warehouses}
/>
   
</div> */


                    /* <form className="warehousesForm">
                        <button type="submit" className="warehousesForm__btn">
                            <img className="warehousesForm__searchIcon" src={this.searchIcon} />
                        </button>
                        <input 
                            type="text" 
                            name="warehousesSearch" 
                            placeholder="Search..."
                            className="warehousesForm__searchInput"
                            id="warehousesSearchInput"
                        >
                        </input>
                    </form> */
/* <div>
                    <ul class="headings__list">
                        <li class="headings__item">Warehouse</li>
                        <li class="headings__item">Address</li>
                        <li class="headings__item">Contact Name </li>
                        <li class="headings__item">Contact Information </li>
                        <li class="headings__item">Actions </li>
                    </ul>
                    <div class="shows__details"></div>
                </div> */