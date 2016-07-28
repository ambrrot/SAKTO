function processGrade(grade){
  if (grade <= 70){
    
    console.log("There is no grade like that");
    }
  else if(grade > 100) {
      console.log("GRADE is OVERKILL");   
    }

 else if(grade=='INC'){ 
    console.log("Your Grade is incomplete");
    }
    
    else if(grade=='DROP'){
      console.log("You drop the subject");   
    }
else if (grade <75){
if (grade % 2){    
    console.log("Your new Grade is : " + (parseInt(grade)-3))
}
else {
    console.log("Your new Grade is : " + (parseInt(grade)-2))
}
}
else{ if(grade %2){
    console.log("Your new Grade is : " + (parseInt(grade)+5))
}
else {
    console.log("Your new Grade is : " + (parseInt(grade)+3))
} 
 }
}

module.exports = {
    processTheGrade:processGrade
    
}