document.addEventListener("DOMContentLoaded", function() {
    //variables
    var selectedFruit = {
        fruit: "(None)",
        ServingSize: "(None)",
        ServingCalo: 0,
    };

    var selectedServ = 0;

    var Fruits = [
        { fruit: "FruitArray", SS: " ", SC: 0 },
        { fruit: "Apple", SS: "1 large (242g)", SC: 100 },
        { fruit: "Avocado", SS: "1 medium (150g)", SC: 250 },
        { fruit: "Lemon", SS: "1 medium (58g)", SC: 15 },
        { fruit: "Peach", SS: "1 medium (147g)", SC: 60 },
        { fruit: "Cherries", SS: "21 cherries (140g)", SC: 100 },
        { fruit: "Pear", SS: "1 medium (166g)", SC: 100 },
    ];

    //check if there new item in Fruit Array
    var selFruitArray = Array.from(
        document.getElementById("selFruit").options
    ).map((e) => e.value);

    var sel = document.getElementById("selFruit");
    var newFruit = document.createElement("option");
    if (Fruits.length > selFruitArray.length) {
        let dif = Fruits.length - selFruitArray.length + 1;
        for (let i = 0; i < dif; i++) {
            for (let j = i; j < selFruitArray.length + i; j++) {
                if (selFruitArray.indexOf(Fruits[j].fruit) === -1) {
                    newFruit.value = Fruits[j].fruit;
                    newFruit.text = Fruits[j].fruit;
                    sel.add(newFruit, null);
                    console.log("add one new fruit");
                }
            }
        }
    }

    var fruit_SC = 0;
    let CaloTaken = 0;
    var Frecord = ["fruits selected:"];
    const limitCalo = 500;
    var select1;
    var selIndex;

    // $('select').on('change', function() {
    document.getElementById(`selFruit`).addEventListener(`change`, function() {
        selIndex = document.getElementById("selFruit").selectedIndex;
        select1 = Fruits[selIndex].fruit;
        fruit_SC = Fruits[selIndex].SC;

        selectedFruit.fruit = Fruits[selIndex].fruit;
        selectedFruit.ServingSize = Fruits[selIndex].SS;
        selectedFruit.ServingCalo = Fruits[selIndex].SC;
        document.getElementById("selectedFruit").innerHTML =
            Fruits[selIndex].fruit +
            ": Calories:" +
            Fruits[selIndex].SC +
            " per " +
            Fruits[selIndex].SS;

        document.getElementById("Estimate").onclick = function() {
            EstiCalo(fruit_SC);
        };
        document.getElementById("Confirm").onclick = function() {
            ConfirmSel(select1, Frecord, fruit_SC, selectedServ);
        };
    });

    function EstiCalo(fruit_SC) {
        selectedServ = document.getElementById("selServing").value;
        var EstTaken = fruit_SC * selectedServ;
        document.getElementById("EstTaken").innerHTML = EstTaken;
        var EstTotal = EstTaken + CaloTaken;
        if (EstTotal > limitCalo) {
            alert("You taken too much calorise! Please change");
            return;
        }
    }

    function ConfirmSel(select1, Frecord, fruit_SC, selectedServ) {
        if (
            select1 === "" ||
            fruit_SC === "" ||
            Frecord === "" ||
            selectedServ === 0
        ) {
            alert("Please do estimate");
            return;
        }
        Frecord.push(select1);
        document.getElementById("HistorySel").innerHTML +=
            Frecord[Frecord.length - 1] + ", ";
        // console.log(i);
        var NewTaken = fruit_SC * selectedServ;
        CaloTaken = CaloTaken + NewTaken;

        document.getElementById("NewTaken").innerHTML = NewTaken;
        document.getElementById("CaloTaken").innerHTML = CaloTaken;
        document.getElementById("selServing").innerHTML = " ";
        document.getElementById("EstTaken").innerHTML = " ";
    }
});