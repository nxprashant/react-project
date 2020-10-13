import React from 'react';

const Image = (props) => {

   const { height, width , altText, text, path} = props;
   return (
       <div>
           <img src = {path} height={height} width={width} alt={altText} onClick={()=> console.log('Dev')}/>
           <h4>{text}</h4>
       </div>
   )
};

export default Image;