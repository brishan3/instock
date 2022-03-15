import { Component } from 'react';
import axios from 'axios';
import './Warehouses.scss';
import WarehouseEntry from '../../components/WarehouseEntry/WarehouseEntry';


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
        axios.get(`/warehouses`)
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
            <>
            <div className="warehousePage">
                <div>
                    <h1>Warehouses</h1>
                    <form>
                        <input></input>
                        <button>Add New</button>
                    </form>
                </div>
                <WarehouseEntry 
                    name="this.state.warehouses.name" 
                    address="this.state.warehouses.address"
                    city="this.state.warehouses.city"
                    country="this.state.warehouses.country"
                    contactName="this.state.warehouses.contact.name"
                    contactPhone="this.state.warehouses.contact.phone"
                    contactEmail="this.state.warehouses.contact.email"
                   
                />
                <WarehouseEntry 
                    name="this.state.warehouses.name" 
                    address="this.state.warehouses.address"
                    city="this.state.warehouses.city"
                    country="this.state.warehouses.country"
                    contactName="this.state.warehouses.contact.name"
                    contactPhone="this.state.warehouses.contact.phone"
                    contactEmail="this.state.warehouses.contact.email"
                   
                />
                <WarehouseEntry 
                    name="this.state.warehouses.name" 
                    address="this.state.warehouses.address"
                    city="this.state.warehouses.city"
                    country="this.state.warehouses.country"
                    contactName="this.state.warehouses.contact.name"
                    contactPhone="this.state.warehouses.contact.phone"
                    contactEmail="this.state.warehouses.contact.email"
                   
                />
                <WarehouseEntry 
                    name="this.state.warehouses.name" 
                    address="this.state.warehouses.address"
                    city="this.state.warehouses.city"
                    country="this.state.warehouses.country"
                    contactName="this.state.warehouses.contact.name"
                    contactPhone="this.state.warehouses.contact.phone"
                    contactEmail="this.state.warehouses.contact.email"
                   
                />
                <WarehouseEntry 
                    name="this.state.warehouses.name" 
                    address="this.state.warehouses.address"
                    city="this.state.warehouses.city"
                    country="this.state.warehouses.country"
                    contactName="this.state.warehouses.contact.name"
                    contactPhone="this.state.warehouses.contact.phone"
                    contactEmail="this.state.warehouses.contact.email"
                   
                />
                <WarehouseEntry 
                    name="this.state.warehouses.name" 
                    address="this.state.warehouses.address"
                    city="this.state.warehouses.city"
                    country="this.state.warehouses.country"
                    contactName="this.state.warehouses.contact.name"
                    contactPhone="this.state.warehouses.contact.phone"
                    contactEmail="this.state.warehouses.contact.email"
                   
                />
                <WarehouseEntry 
                    name="this.state.warehouses.name" 
                    address="this.state.warehouses.address"
                    city="this.state.warehouses.city"
                    country="this.state.warehouses.country"
                    contactName="this.state.warehouses.contact.name"
                    contactPhone="this.state.warehouses.contact.phone"
                    contactEmail="this.state.warehouses.contact.email"
                   
                />
                <WarehouseEntry 
                    name="this.state.warehouses.name" 
                    address="this.state.warehouses.address"
                    city="this.state.warehouses.city"
                    country="this.state.warehouses.country"
                    contactName="this.state.warehouses.contact.name"
                    contactPhone="this.state.warehouses.contact.phone"
                    contactEmail="this.state.warehouses.contact.email"
                   
                />
                

                
            </div>
            
            </>
        );
    }
}

export default Warehouses;

{/* <div>
                    <ul class="headings__list">
                        <li class="headings__item">Warehouse</li>
                        <li class="headings__item">Address</li>
                        <li class="headings__item">Contact Name </li>
                        <li class="headings__item">Contact Information </li>
                        <li class="headings__item">Actions </li>
                    </ul>
                    <div class="shows__details"></div>
                </div> */}