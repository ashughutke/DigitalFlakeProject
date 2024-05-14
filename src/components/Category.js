import React, {useMemo} from 'react';
import Categorytable from './Categorytable';
import { IoGridOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Category = ({ children }) => {
  const data = useMemo(() => [
    { id: 1, name: 'Milk', description: 'Lorem ipsum is simply dummy text', status: 'Active' },
    { id: 2, name: 'Fruits', description: 'Lorem ipsum is simply dummy text', status: 'Active' },
    { id: 3, name: 'Vegetables', description: 'Lorem ipsum is simply dummy text', status: 'Inactive' },
  ], []);

  

  return (
    <div>
      <div className="contianer">
        <div className="row mt-3 justify-content-between align-items-center">
          <div className="col-md-4">
             <h4><span className="me-2"><IoGridOutline /></span> Category</h4>
          </div>
          <div className="col-md-2">
            <Link to="/addCategory" className="btn btn-primary bg-purple"><span className="me-2"><FaPlus /></span> Add New</Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <Categorytable data={data} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Category;