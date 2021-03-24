//Calculate Calories           //var NewCalo
function calCalorie() {
    var NewFood = document.getElementById("EatingFood").value;
    var NewServingUnit = document.getElementById("ServingUnit").value;
    var CaloperServ = document.getElementById("CaloperServ").value;
    var NewServing = parseFloat(document.getElementById("NewServing1").value) +
        parseFloat(document.getElementById("NewServing2").value);

    //validate input
    if (NewFood === "" || NewServingUnit === "" || CaloperServ === "" || NewServing === 0) {
        alert("Please enter values");
        return;
    }

    //Calculate Calories
    var NewTaken = CaloperServ * NewServing //want int
    var CaloTaken = 0;
    CaloTaken = CaloTaken + NewTaken;

    //Display the calorise

    document.getElementById("NewTaken").innerHTML = NewTaken;
    document.getElementById("CaloTaken").innerHTML = CaloTaken;
}
//click to call function
document.getElementById("Calories").onclick = function() {
    calCalorie();
};