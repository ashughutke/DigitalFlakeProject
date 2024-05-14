import React, {useMemo} from 'react';
import Categorytable from './Categorytable';
import { BsBoxSeam } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BsBoxArrowUp } from "react-icons/bs";

const Addproduct = ({ children }) => {
  
  return (
    <div>
      <div className="contianer">
        <div className="row mt-3 justify-content-between align-items-center">
          <div className="col-md-4">
             <h4><span className="me-2"><BsBoxSeam /></span> Add Product</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <form>
                <div className="row">
                    
                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                          <label htmlFor="category">Category </label>
                          <select
                                id="description"
                                type="text"
                                className="form-select"                                
                            >
                                    <option value=""></option>
                                    <option value="Active">Milk</option>
                                    <option value="Inactive">Fruits</option>
                            </select>                                                  
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <label htmlFor="Product Name">Product Name</label>
                            <input
                                id="Product Name"
                                type="text"
                                className="form-control"                                
                            />
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <label htmlFor="Pack Size">Pack Size</label>
                            <input
                                id="Pack Size"
                                type="text"
                                className="form-control"                                
                            />
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <label htmlFor="MRP">MRP</label>
                            <input
                                id="MRP"
                                type="text"
                                className="form-control"                                
                            />
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <label htmlFor="Product Image">Product Image</label><BsBoxArrowUp />
                            <input 
                        
                                id="Product Image"
                                type="text"
                                className="form-control"                                
                            />
                            
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select
                                id="description"
                                type="text"
                                className="form-select"                                
                            >
                                    <option value="">Select status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>                    

                </div>

                <div className="row mt-5">
                  <div className="col-md-12 text-end">
                    <div className="btn-group gap-2">
                      <button type="reset" className="btn btn-light" value="submit">Cancel</button>
                      <button type="submit" className="btn btn-dark bg-purple" value="submit">Save</button>
                    </div>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Addproduct;