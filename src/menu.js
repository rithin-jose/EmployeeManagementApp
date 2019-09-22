import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {List,Content,ListItem} from 'native-base';
import {Actions, Drawer} from 'react-native-router-flux';
import { employeesFetch,userLogout } from './actions';
import { connect } from 'react-redux';


class Drawer2 extends Component{
    onButtonPress(){
        this.props.userLogout();
      }

    render(){
        return(
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#2c3e50'}}>

            </View>
            <View style={{flex:2}}>
                <Content>
                    <List>
                        <ListItem>
                            <Text onPress={()=> {alert('you pressed menu1')}}>
                                Menu1
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text onPress={()=> {alert('you pressed menu2')}}>
                                Menu2
                            </Text>
                        </ListItem>
                        <ListItem onPress = {()=>{alert('you pressed menu3')}}>
                            <Text>
                                Menu 3
                            </Text>
                        </ListItem>
                    </List>
                </Content>
            </View>
        </View>   
    );
  }
}

export default connect(null, { 
    employeesFetch,userLogout
   })(Drawer2);