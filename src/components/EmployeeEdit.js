import React, {Component} from 'react';
import {Card,CardSection,Button,Confirm,Input} from './common'; 
import {View,StyleSheet,Dimensions} from 'react-native';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate,employeeSave,employeeDelete} from '../actions';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';

var {height,width} = Dimensions.get('window');

class EmployeeEdit extends Component{
    state = {
        showModal: false,
        ad: '',
    };
    

    componentWillMount(){
        _.each(this.props.employee, (value,prop) =>{
            this.props.employeeUpdate({prop, value} );
        });
    }

    onButtonPress(){
        const {name,phone,shift}= this.props;
        this.props.employeeSave({name, phone, shift, uid:this.props.employee.uid});
    }
    
    onTextPress(){
        const {phone,shift} = this.props;
        const {ad} = this.state;
        Communications.text(phone, `Your upcoming shift is on ${shift} `+ad);
    }

    onAccept(){
        const {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline(){
        this.setState({showModal:false});
    }
    render(){
        console.log(this.state);
        return(
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                <Input
                    lable="Additional Details"
                    placeholder="Aditional details"
                    placeholderTextColor= "white"
                    value={this.state.text}
                    onChangeText={(ad) => this.setState({ad})}
                    />
                </CardSection>
                <CardSection>
                    <View style={styles.centerStyle}>
                    <View style={styles.loginButton}>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                    </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.centerStyle}>
                    <View style={styles.loginButton}>
                    <Button onPress = {this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                    </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.centerStyle}>
                    <View style={styles.loginButton}>
                    <Button onPress = {() => this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>
                    </View>
                    </View>
                </CardSection>
                <Confirm
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) =>{
    const{name,phone,shift} = state.employeeForm;
    return {name,phone,shift};
};

export default connect(mapStateToProps,{
    employeeUpdate,employeeSave,employeeDelete
})(EmployeeEdit);

const styles = StyleSheet.create({
    loginButton:{
      color:'#fff',
      backgroundColor:'#24538F',
      height:height/13,
      width:width/2,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:width/25,
      marginBottom:width/25,
      fontFamily: 'Feather',
    },
    centerStyle:{
        flex:1,
        alignItems:'center'
    }
  });