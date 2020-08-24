import React from 'react';
import Card from './Card';

const CardList = ({ robot }) => {
    return (
        <div>
       {
           robot.map((item)  => {
               return (
                   <Card key={ item.id }
                   name={ item.name }
                   email={ item.email }
                   />
               );
           })  
       }
        </div>
    );
}

export default CardList;