import React from 'react';
import Header from './Header';
import Sidenav from './Sidenav';

const Pagelayout = ({ children }) => {
  return (
    
    <div>
    <Header />
    <div className="container-fluid px-1">
      <div className="row">
        <div className="col-md-3">
          <Sidenav />
        </div>
        <div className="col-md-9">
          {children}
        </div>
      </div>
    </div>
    
    
  
</div>
  );
};

export default Pagelayout;