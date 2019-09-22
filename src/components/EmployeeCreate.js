import React,{Component} from 'react';
import {
    Card,
    CardSection,
    Button,
} from './common';
import {StyleSheet,View,Dimensions} from 'react-native'
import {connect} from 'react-redux';
import {employeeUpdate ,employeeCreate} from '../actions';
import EmployeeForm from './EmployeeForm';

var {height,width} = Dimensions.get('window');

class EmployeeCreate extends Component{
    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name,phone,shift: shift || 'Monday'});
    }
    render(){
        return(
            <Card>
                <EmployeeForm {...this.props}/>

                <CardSection>
                    <View style={{flex:1,alignItems:'center'}}>
                    <View style={styles.loginButton}>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Create
                        </Button>
                    </View>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}
export default connect(mapStateToProps,{
    employeeUpdate,employeeCreate
})(EmployeeCreate);

const styles = StyleSheet.create({
    loginButton:{
      color:'#fff',
      backgroundColor:'#24538F',
      height:height/13,
      width:width/5,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:width/25,
      marginBottom:width/25,
      fontFamily: 'Feather',
    },
  });
  