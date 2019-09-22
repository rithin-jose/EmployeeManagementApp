import React from 'react';
import {ToastAndroid} from 'react-native';
import {Dimensions} from 'react-native';

import{Scene,Router,Actions, Drawer,ActionConst} from 'react-native-router-flux';
import LoginForm from './components/login';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeView from './components/EmployeeView';
import EmployeeUI from './components/EmployeeUI';
import CreateUser from './components/SignUp';
import forgotPass from './components/FrogotPass';
import Menu from './menu'
import Drawer1 from './Drawer1';
import Drawer2 from './Drawer2';
import Icon from 'react-native-vector-icons/Ionicons';

var {height,width} = Dimensions.get('window');

const MenuIcon = () => {
   
    return(
        <Icon name='md-menu' size={30} />
    );
}

const RouterComponent = () => {
    return(
       <Router screenStyle={{marginTop: height/20}}>
           <Scene key="root" hideNavBar>
               <Scene key='auth'>
                    <Scene key='login' component={LoginForm} initial hideNavBar ></Scene>
                    <Scene key='signup' component={CreateUser} navTransparent></Scene>
                    <Scene key='forgot' component={forgotPass} navTransparent></Scene>
               </Scene>
               <Scene key="main">    
               <Scene
               key="drawer"
               drawer
               contentComponent={Menu}
               drawerIcon={MenuIcon}
               drawerWidth={300}
               hideNavBar
             
               >
                   <Scene
                    key="drawer1"
                    title="Welcome"
                    component={Drawer1}
                    titleStyle={{marginLeft:height/8,marginHorizontal:undefined}}
                   />
               </Scene>                    
                    <Scene key='employeelist' component={EmployeeList} title='Employees'></Scene>
                    <Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee'></Scene>  
                    <Scene key ="employeeEdit" component={EmployeeEdit} title="Edit Employee"/>
                    <Scene key ="employeeView" component={EmployeeView} title="View Employee"/>
                    <Scene key ="employeeUi" component={EmployeeUI} title="test"/>
                </Scene>
            </Scene>
       </Router>
    );
};

export default RouterComponent;