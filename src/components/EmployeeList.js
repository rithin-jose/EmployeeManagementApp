import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList,Text,View,TouchableWithoutFeedback ,StyleSheet,Dimensions} from 'react-native';
import {CardSection,Button} from './common'
import { employeesFetch,userLogout } from '../actions';
import {Actions} from 'react-native-router-flux';
import ListItem from './ListItem';

var {height,width} = Dimensions.get('window');

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees}) {
    this.dataSource = employees;
    console.log(this.dataSource);
  }

 
  render() {
    return (
      <View >
        <FlatList
          data={this.dataSource}
          renderItem={({item}) => <ListItem test={item}></ListItem>}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {

  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { 
  employeesFetch,userLogout
 })(EmployeeList);

 
const styles= StyleSheet.create({
  buttonStyles:{
     color:'#fff',
     backgroundColor:'#24538F',
     height:height/13,
     width:width/5,
     alignItems:'center',
     justifyContent:'center',
     borderRadius:width/25,
     marginBottom:width/25,
     fontFamily: "Feather",
  }
 
 });