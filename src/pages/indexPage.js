import React from 'react';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const IndexPage = ({ index }) => {
  const history = useHistory();
  React.useEffect(() => {
    
    if (index === 1) {
      history.push('/login');
    } else {
      history.push('/dashboard');
    }
    // eslint-disable-next-line
  }, [index]);
  return <div></div>;
};

export default IndexPage;