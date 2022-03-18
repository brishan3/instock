import { Component } from 'react';
import axios from 'axios';
import './Warehouses.scss';
// import ReactDOM from 'react-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import DeleteWarehouse from '../../components/DeleteWarehouse/DeleteWarehouse';

// import SearchField from '../../components/SearchField/SearchField';
// import MainButton from '../../components/MainButton/MainButton';
// import WarehousesTable from '../../components/WarehousesTable/WarehousesTable';


class Warehouses extends Component {
    state = {
        warehouses: [],
        show:false,
        toDelete:{}


    };

    showDeleteModal = (name, id) => {
        this.setState({ show: true, toDelete: {name:name, id:id} });

    };

    hideDeleteModal = () => {
        this.setState({ show:false, toDelete:{} });
    };

    deleteWarehouse = () => {
        console.log(this.state.toDelete);
        let currentID = this.state.toDelete.id;
        axios
            .delete(`${process.env.REACT_APP_API_URL}/warehouses/${currentID}`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    warehouses: response.data,
                    toDelete:{},
                    show:false
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    //if (response.status === 200) above? 
    // %% EARLIER ATTEMPT //%%
    // deleteWarehouse = (id) => {
    //     const newWarehouseList = this.state.warehouse.filter((warehouse) => {
    //         return warehouse.id !== id
    //     });
    //     axios.delete(`${process.env.REACT_APP_API_URL}/warehouses/${id}`)
    //     .then((response) => {
    //         this.setState( { 
    //             warehouse:response.data
    //         })
    //     })
    // }


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
                <WarehouseList 
                    warehouses={this.state.warehouses}
                    showDeleteModal={this.showDeleteModal} 
                />
                <DeleteWarehouse 
                    show={this.state.show}
                    hideDeleteModal={this.hideDeleteModal}
                    deleteWarehouse={this.deleteWarehouse}
                    warehouseName={this.state.toDelete.name}
                     //warehouseID={this.state.toDelete.id}
                /> 
            </>
        );
    }
}

export default Warehouses;
