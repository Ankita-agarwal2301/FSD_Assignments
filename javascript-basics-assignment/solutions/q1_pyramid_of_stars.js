/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (inputValue) => {
     let finalValue ='';
     let i, j ,k;    
     for(i =1;i<=inputValue; i++)
     {
          for(k=inputValue;k>=i;k--)
               {
                    finalValue= finalValue +' ';     
               }
          for(j =1; j<=i; j++)
          {               
               finalValue = finalValue +'* ';      
                        
          }
          finalValue= finalValue+ ' \n';
     }
      
     //console.log(finalValue);
     return finalValue;  
};
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/
//pyramid(6);
//module.exports = pyramid;
module.exports = buildPyramid;
