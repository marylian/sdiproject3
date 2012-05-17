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

procedureFunct.jsonFunc(carDealer);
