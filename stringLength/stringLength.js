const stringLength = string => {
   const length = string.length;
   if((length < 1) || (length > 10)) {
   throw new Error ('Characters must be in the range of 1 to 10');
   }
   return length;
}
module.exports = stringLength;