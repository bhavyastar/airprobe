import { Grid, Card, Tabs,Tab, Box } from '@mui/material';
import { useState } from 'react';
import Registration from './Registration';
import UserLogin from './UserLogin';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
}

return <>

      <Grid item lg={5} sm={7} xs={12}>
      
      <Card  sx={{   mx: 5, width: '190%', height: '100%' }}>
          <Box sx={{ mx: 3,height: 600 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'red' }}>
              <Tabs value={value} textColor='secondary' indicatorColor='variant' onChange={handleChange}>
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Registration />
            </TabPanel>
          </Box>
        
        </Card>
      </Grid>
  
  </>;
};

export default LoginReg;
