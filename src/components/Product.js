import React, {useMemo} from 'react';
import Producttable from './Producttable';
import { BsBoxSeam } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { LuMilk } from "react-icons/lu";
import { GiMilkCarton } from "react-icons/gi";

const Product = ({ children }) => {
  const data = useMemo(() => [
    { id: 1, name: 'Amul Tazza', packsize: '500ml', category: 'Milk', mrp: 'Rs 27', image: <Link><LuMilk /></Link>, status: 'Active' },
    { id: 2, name: 'Gokul Cow', packsize: '500ml', category: 'Milk', mrp: 'Rs 27', image: '<GiMilkCarton />', status: 'Inactive' },
    { id: 3, name: 'Shimla Apple', packsize: '1Kg', category: 'Fruits', mrp: 'Rs 150', image: '' , status: 'Active' },
  ], []);

  

  return (
    <div>
      <div className="contianer">
        <div className="row mt-3 justify-content-between align-items-center">
          <div className="col-md-4">
             <h4><span className="me-2"><BsBoxSeam /></span> Product</h4>
          </div>
          <div className="col-md-2">
            <Link to="/addProduct" className="btn btn-primary bg-purple"><span className="me-2"><FaPlus /></span> Add New</Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <Producttable data={data} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Product;