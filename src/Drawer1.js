import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Dimensions,Image,TouchableWithoutFeedback} from 'react-native';
import {Actions} from'react-native-router-flux';
import { connect } from 'react-redux';
import {userLogout } from './actions';

var {height,width} = Dimensions.get('window');

class Drawer1 extends Component{

  onButtonPress(){
    alert('asdf');
    this.props.userLogout();
  }
    render(){
        return(
          <ScrollView>
          <TouchableWithoutFeedback onPress={()=>{Actions.employeeCreate()}}>
            <View style={styles.dashboardStyle}>
              <View style={styles.imageContainerStyle}>
                <Image source={require('./images/emp1.jpg')}  style={styles.imageStyle} ></Image>
              </View>
              <View style={styles.imageTextStyle}>
                <Text style={{fontSize:height/30}}>Add Employee</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>{Actions.employeeView()}}>                
            <View style={styles.dashboardStyle}>
              <View style={styles.imageContainerStyle}>
                <Image source={require('./images/emp2.jpg')} style={styles.imageStyle}></Image>
              </View>
              <View style={styles.imageTextStyle}>
                <Text style={{fontSize:height/30}}>View Employee</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>{Actions.employeelist()}}>
            <View style={styles.dashboardStyle}>
              <View style={styles.imageContainerStyle}>
                <Image source={require('./images/emp3.jpg')} style={styles.imageStyle}></Image>
              </View>
              <View style={styles.imageTextStyle}>
                <Text style={{fontSize:height/30}}>Edit Employee</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>{this.onButtonPress()}}>
            <View style={styles.dashboardStyle}>
              <View style={styles.imageContainerStyle}>
                <Image source={require('./images/emp4.jpg')}  style={styles.imageStyle} ></Image>
              </View>
              <View style={styles.imageTextStyle}>
                <Text style={{fontSize:height/30}}>Logout</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          </ScrollView>
    );
  }
}

export default connect(null, { 
  userLogout
 })(Drawer1);

const styles = StyleSheet.create({
  dashboardStyle:{
    height:height/3,
    backgroundColor:'#fff',
    marginBottom:width/30,

  },
  imageContainerStyle:{
    flex:2,
  },
  imageStyle:{
    flex:1,
    height: undefined,
    width: undefined
  },
  imageTextStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
  }
})