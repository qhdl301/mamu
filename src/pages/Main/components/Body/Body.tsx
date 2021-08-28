import { Box } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Movielist from '../List';

const Body = () => {
    
  return (
    <Box component="span">
        <Route exact path="/Detail" component={Movielist}></Route>
    </Box>
  )
}

export default Body;