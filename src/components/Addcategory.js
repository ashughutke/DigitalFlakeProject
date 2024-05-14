import React, {useMemo} from 'react';
import Categorytable from './Categorytable';
import { IoGridOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Addcategory = ({ children }) => {
  
  return (
    <div>
      <div className="contianer">
        <div className="row mt-3 justify-content-between align-items-center">
          <div className="col-md-4">
             <h4><span className="me-2"><IoGridOutline /></span> Add Category</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <form>
                <div className="row">
                    
                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                          <label htmlFor="categoryName">Category Name</label>
                            <input
                                id="categoryName"
                                type="text"
                                className="form-control"                                
                            />
                           
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                id="description"
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

export default Addcategory;