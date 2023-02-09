module.exports = function check(str, bracketsConfig) {
  let openArr=[];
  let obj={};
  for (let i=0;i<=bracketsConfig.length-1;i++) {
    openArr.push(bracketsConfig[i][0]);
    obj[bracketsConfig[i][1]]=bracketsConfig[i][0];
  }
  let stack=[];
  for (let j=0;j<=str.length-1;j++) {
  
    let currentEl=str[j];
  
    if(openArr.includes(currentEl) && stack[stack.length-1]!=currentEl) {
  stack.push(currentEl);
    } else {
      if(stack.length==0){
      return false
      }
  
    let top=stack[stack.length-1];
    if(obj[currentEl]==top) {
stack.pop()
    } else if (obj[currentEl]==top && currentEl==top){
      stack.pop()
    } else {
      stack.push(currentEl)
    }
    }
  }


    
    return stack.length==0
 
 

  }
   




