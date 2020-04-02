import React from 'react';

const Link =(props)=> {
 const {value, href} = props;

 return (
    <a href={href}>{value}</a>
    )
};

export default Link;
