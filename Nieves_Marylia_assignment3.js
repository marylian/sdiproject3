/**
 * @author Mary
 */
//alert("JavaScript works!");

var procedureFunct={
    procFunc: function(myBudget){ //Procedure without any return.
        if (myBudget<=25000){ 
            console.log("This car is too expensive!! I cant afford it"); //Output if condition is met.
        }
        else {
            console.log("This is within my budget but I am not sure about the color"); //Output if condition is not met.
        }
    },
    boolFunc: function(vehicleMake, gasMileage){	
		console.log("Which car is this and how much is the mileage?");
	if (vehicleMake=="Hyundai" && gasMileage>=40){ 		//Comparision operation
    	console.log("This is a "+vehicleMake+" and it gives "+gasMileage+" MPG"); //Output if condition is met.
		return (booleanValue=true); //Boolean returned back.
	}
   	  else{
         console.log("I would like to see a "+vehicleMake+" first.") //Output if condition is not met.
         return (booleanValue=false); // Boolean returned back.
		}
	},
	
	numberFunc: function(carServiced){ //Number function
        var mileLimit=20000;     //Local variable for the number function.
        while (carServiced<mileLimit) { //while loop
            carServiced+=5000; // This math will be executed for the number of times the condition is met.
            console.log ("We recommend you service your car at "+carServiced+" miles"); //Output from the math.
        }
        mileService=20000;
        return (mileService); //When the condition is not met, number is returned.
},

	stringFunc: function(string1, string2){ //String function.
    var i=string1.concat(string2); // String concatenation & var i is a local variable.
    j=i;
    return (j);    //String is returned back.
},

 	jsonFunc: function(carDealer){
	console.log("These are luxury cars");
	for (var i=0; i<carDealer.carDetails.length; i++){
		var luxuryCars=carDealer.carDetails[i];
		console.log("This one is a"+luxuryCars.Manufacturer+", model name "+ luxuryCars.Model+" and it costs " +luxuryCars.Price);
	}
}

};


procedureFunct.procFunc(25001);



procedureFunct.boolFunc("Hyundai", 40);


procedureFunct.numberFunc(0);


procedureFunct.stringFunc("I would really like to buy", " a 370z, but its going to burn a hole in my pocket");
console.log(j);




jsonData(carDealer);


//var carList=["Z370", "Infinity 37S", "BMW 3 series", "Mercedes CLR"]; //Declaration of array
//var priceList=[50000, 48000, 33000, 60000]; //Declaration of array



//procedureFunct.arrayFunc(carList, 2); //Array function with a number and an array as an argument.
//console.log(carList[j]+" will cost you "+priceList[j]);



/*

var myBudget; //Declaration of numeric variable
var procedureFunc;
var vehicleMake; //Declaration of string variable
var gasMileage; //Declaration of numeric variable
var booleanFunc;
var booleanValue;
var numberFunc;
var mileService;
var carList=["Z370", "Infinity 37S", "BMW 3 series", "Mercedes CLR"]; //Declaration of array
var priceList=[50000, 48000, 33000, 60000]; //Declaration of array
var arrayFunc;
var stringFunc;
var carServiced=0;
var priceSum=0;
var i;
var j;
var string1;
var string2;

procedureFunc=function(myBudget){ //Procedure without any return.
if (myBudget<25000){ 
    console.log("This car is too expensive!! I cant afford it"); //Output if condition is met.
}
else {
    console.log("This is within my budget but I am not sure about the color"); //Output if condition is not met.
    }
};


booleanFunc=function(vehicleMake, gasMileage){ //Boolean function
 console.log("Which car is this and how much is the mileage?");
if (vehicleMake=="Hyundai" && gasMileage>="40"){ //Comparision operation
    console.log("This is a "+vehicleMake+" and it gives "+gasMileage+" MPG"); //Output if condition is met.
    return (booleanValue=true); //Boolean returned back.
}
     else{
         console.log("I would like to see a "+vehicleMake+" first.") //Output if condition is not met.
         return (booleanValue=false); // Boolean returned back.
     }
};
     
numberFunc=function(carServiced){ //Number function
        var mileLimit=20000;     //Local variable for the number function.
        while (carServiced<mileLimit) { //while loop
            carServiced+=5000; // This math will be executed for the number of times the condition is met.
            console.log ("We recommend you service your car at "+carServiced+" miles"); //Output from the math.
        }
        mileService=20000;
        return (mileService); //When the condition is not met, number is returned.
};

stringFunc=function(string1, string2){ //String function.
    var i=string1.concat(string2); // String concatenation & var i is a local variable.
    j=i;
    return (j);    //String is returned back.
};

arrayFunc=function(carList, i){ // Array function.
console.log ("Can you tell me the total amount for all these "+carList.length+" cars here");
    for (var i=0; i<priceList.length; i++){ //Local variable declared & for loop present.
        priceSum+=priceList[i]; //Math calculation.
        j=i;
    }
    console.log("The total amount that you would pay for all these cars is $"+priceSum); //Output
    return (carList[j]); //Returned array

};


procedureFunc(20000); //Calling the procedure with one argument.
booleanFunc("Hyundai", 39); //Calling boolean function with 2 arguments.
if (booleanValue==true){
    console.log("I cant believe they make such good cars");
}
else{
    console.log("I would still like to see a Hyundai");
} //End boolean function.

numberFunc(0);{ //Number function with a number as an argument.
    console.log ("However, please do keep in mind that we will be providing you with a free service for "+mileService);
}


stringFunc("I would really like to buy", " a 370z, but its going to burn a hole in my pocket"); //String function with two string arguments.
console.log(j); 


arrayFunc(carList, 2); //Array function with a number and an array as an argument.
console.log(carList[j]+" will cost you "+priceList[j]);


*/