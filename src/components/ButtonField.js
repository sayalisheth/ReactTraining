import React from 'react';
import { Button } from 'reactstrap';

const ButtonField =(props)=> {
 const {value, color} = props;

 return (
    <Button color={color} block>{value}</Button>
    )
};

export default ButtonField;
