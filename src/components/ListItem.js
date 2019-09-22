import React, {Component} from 'react';
import {Text,TouchableWithoutFeedback,View} from 'react-native';
import {CardSection} from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component{
    onRowPress(){
        console.log(this.props);
        Actions.employeeEdit({employee: this.props.test});
    }

    render(){
        const {name} = this.props.test;
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection style={{borderRadius:0}}>
                        <Text style={{fontSize:18,paddingLeft:15}}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ListItem;