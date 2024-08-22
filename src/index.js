
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];

  if ( !matrix || matrix.length === 0 ) return [];
  
  for ( let i = 0; i < matrix.length; i++ ) {
  ( i % 2 === 0 ) ? arr = arr.concat( matrix[i] ) : arr = arr.concat( matrix[i].reverse() );
  };
  return arr;
}
