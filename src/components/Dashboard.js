import React from 'react';


const Dashboard = ({ children }) => {
  return (
    <div>
        <div className="container">
          <div className="row justify-content-center align-items-center mt-lg-5">
            <div className="col-md-5">
              <div className="text-center">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGpMv3HPEQSbDil9UHRiegYz8O_FcTH3aaAMZoL5-RQ&s"
                    width="200"
                    className="mx-auto mb-1" />
                    <p className="text-muted">Welcome to Digitalflake Admin</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;