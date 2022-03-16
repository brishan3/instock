import { Component } from "react";
import "./Inventory.scss";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import InventoryEntry from "../../components/InventoryEntry/InventoryEntry";
import axios from "axios";

class Inventory extends Component {
  state = {
    inventories: [],
  };

  componentDidMount() {
    this.getAllInventories();
  }

  //Function to get all inventories from the API
  getAllInventories() {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/inventory`)
      .then((response) => {
        this.setState({
          inventories: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <SearchHeader title="Inventory" content="+ add new item" />
        <InventoryEntry inventories={this.state.inventories} />
      </>
    );
  }
}

export default Inventory;
