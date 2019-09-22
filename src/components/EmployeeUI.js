import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,Dimensions,TouchableWithoutFeedback} from 'react-native';
import {Card,CardSection} from './common';
import Emp from '../images/logo.png'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';

var {height,width} = Dimensions.get('window');

export default class EmployeeView extends Component{
  onTextPress(){
    console.log(this.props.employee);
    const {phone} = this.props.employee;
    Communications.text(phone, `,`);
}
  onCallPress(){
    console.log(this.props.employee);
    const {phone} = this.props.employee;
    Communications.phonecall(phone,false);
}
    
  render(){
    const {name,phone,shift} = this.props.employee;
    return(
      <Card>
        <CardSection style={styles.cent}>
          <Image source={Emp} style={styles.emp}></Image>
        </CardSection>

        <CardSection style={styles.cent}>
          <Text>{name}</Text>
        </CardSection>
        <CardSection style={styles.cent}>
          <Text>{phone}</Text>
        </CardSection>
        <CardSection style={styles.cent}>
          <Text>{shift}</Text>
        </CardSection>
        <CardSection style={styles.cent}>
          <TouchableWithoutFeedback onPress={()=>{this.onCallPress()}}>
          <View style={styles.callButton}>
            <Icon name="md-call" size={30}/>
          </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>{this.onTextPress()}}>
          <View style={styles.msgButton}>
            <Icon name="md-mail" size={30}/>
          </View>
          </TouchableWithoutFeedback>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  emp:{
    height:height/7,
    width:width/4,
  },
  cent:{
    justifyContent: 'center',
    fontSize:height/35,
  },
  callButton:{
    flex:1,
    backgroundColor:'#85e640',
    borderRadius:0.5,
    alignItems:'center'
  },
  msgButton:{
    flex:1,
    backgroundColor:'#f0e40e',
    borderRadius:0.5,
    alignItems:'center'
  }
});