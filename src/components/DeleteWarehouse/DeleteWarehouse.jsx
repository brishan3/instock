import './DeleteWarehouse.scss';
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
class DeleteWarehouse extends React.Component {
    deleteHandler = (e) => {
        e.preventDefault();
    }

    render(){
        return(
        <>
            <div className="delete-warehouse__container">
                <div className="delete-warehouse__container--top">
                    <h1 className="delete-warehouse__header"> Delete warehouse.name?</h1>
                    <p className="delete-warehouse__text">Please confirm that you'd like to delete the warehouse.name from the list of warehouses. You won't be able to undo this action. </p> 
                </div>
                <div className="delete-warehouse__container--bottom">
                    <Link to="/warehouses" className="cancel-btn">
                        Cancel
                    </Link>
                    <button type="delete" className='delete-btn'>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )}
 
}

export default DeleteWarehouse;

