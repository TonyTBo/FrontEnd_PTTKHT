import React from 'react';
import { useHistory } from 'react-router-dom';

const DashboardPage = () => {
  const history = useHistory();
  return (
    <div className="dashboard">
      <div
        onClick={() => history.push('/dashboard/manager')}
        className="dashboard-item"
      >
        <div className="dashboard-item-lable">Manager</div>
      </div>
      <div
        onClick={() => history.push('/dashboard/employee')}
        className="dashboard-item"
      >
        <div className="dashboard-item-lable">Employee</div>
      </div>
      <div
        onClick={() => history.push('/dashboard/manager')}
        className="dashboard-item"
      >
        <div className="dashboard-item-lable">Order</div>
      </div>
      <div
        onClick={() => history.push('/dashboard/manager')}
        className="dashboard-item"
      >
        <div className="dashboard-item-lable">Ship</div>
      </div>
    </div>
  );
};

export default DashboardPage;
