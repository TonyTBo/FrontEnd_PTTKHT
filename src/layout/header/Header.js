import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
  var CurrentDate = moment().format('DD-MM-YYYY');
  const history = useHistory();

  const logout = () => {
    toast.success('Logout success');
    // history.push('/login');
  };

  return (
    <div className="header">
      <div className="header-item-icon width-45">Wellcome to group 6</div>
      <div className="header-item width-25">
        <div className="header-item-lable">{`Time & Date`}</div>
        <div className="header-item-value">{CurrentDate}</div>
      </div>
      <div className="header-item width-20">
        <div className="header-item-lable">Employee ID</div>
        <div className="header-item-value"> TonyTBo</div>
      </div>
      <div onClick={logout} className="header-item width-15">
        Log Out
      </div>
    </div>
  );
};

export default Header;
