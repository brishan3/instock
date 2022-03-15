import { Component } from 'react';
import axios from 'axios';
import './Warehouses.scss';


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
        axios.get()
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
                        <button></button>
                    </form>
                </div>
                <div>
                    <ul class="headings__list">
                        <li class="headings__item">Warehouse</li>
                        <li class="headings__item">Address</li>
                        <li class="headings__item">Contact Name </li>
                    </ul>
                    <div class="shows__details"></div>
                </div>
            </div>
            
            </>
        );
    }
}

export default Warehouses;