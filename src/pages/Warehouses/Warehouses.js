import { Component } from 'react';
import axios from 'axios';
import './Warehouses.scss';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import DeleteWarehouse from '../../components/DeleteWarehouse/DeleteWarehouse';


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
                <SearchHeader title="Warehouses" content="+ add new warehouse" link="warehouses"/>
                <WarehouseList 
                    warehouses={this.state.warehouses}
                    showDeleteModal={this.showDeleteModal} 
                />
                <DeleteWarehouse 
                    show={this.state.show}
                    hideDeleteModal={this.hideDeleteModal}
                    deleteWarehouse={this.deleteWarehouse}
                    warehouseName={this.state.toDelete.name}
                /> 
            </>
        );
    }
}

export default Warehouses;
