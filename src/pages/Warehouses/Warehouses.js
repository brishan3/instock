import { Component } from 'react';
import axios from 'axios';
import './Warehouses.scss';
import WarehouseEntry from '../../components/WarehouseEntry/WarehouseEntry';
import SearchField from '../../components/SearchField/SearchField';
import MainButton from '../../components/MainButton/MainButton';
import WarehousesTable from '../../components/WarehousesTable/WarehousesTable';


class Warehouses extends Component {
    state = {
        warehouses: [],
        selectedWarehouse: {},
    };

    //fetching API data and setting state when it mounts for the first time
    componentDidMount() {
        this.getWarehousesData();
    }

    getWarehousesData(){
        axios.get(`${process.env.REACT_APP_API_URL}`)
        .then((response) => {
            this.setState({
                warehouses:response.data,
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render () {
        return (
            <div className="warehousesPage">
                <div className="warehousesHeader">
                    <h1 className="warehousesHeader__title">Warehouses</h1>
                    <SearchField />
                    <MainButton>
                        <h3 className="warehousesHeader__button">+ Add New Warehouse</h3>
                    </MainButton>                
                </div>
                <WarehousesTable 
                
                />
                   
            </div>
        );
    }
}

export default Warehouses;
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