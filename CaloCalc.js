$(document).ready(function() {
    //variables
    var selectedFruit = {
        fruit: "(None)",
        ServingSize: "(None)",
        ServingCalo: 0
    };

    var selectedServ = 0;

    var Fruits = [{
            fruit: "Apple",
            SS: "1 large (242g)",
            SC: 100
        },
        {
            fruit: "Avocado",
            SS: "1 medium (150g)",
            SC: 250
        },
        {
            fruit: "Lemon",
            SS: "1 medium (58g)",
            SC: 15
        },
        {
            fruit: "Peach",
            SS: "1 medium (147g)",
            SC: 60
        },
        {
            fruit: "Cherries",
            SS: "21 cherries (140g)",
            SC: 100
        }
    ]

    console.log("Fruit Name:" + Fruits.length);
    for (let i = 0; i < Fruits.length - 1; i++) {
        console.log("Fruits:" + Fruits[i].fruit);
    }

    var fruit_SC = 0;
    let CaloTaken = 0;
    var Frecord = ["fruits selected:"];
    const limitCalo = 500;

    $('select').on('change', function() {
            var selIndex = parseInt(document.getElementById("selFruit").value);
            var select1 = Fruits[selIndex].fruit;
            console.log(select1);

            $("#selectedFruit").html(selectedFruitFnc(Fruits[selIndex].fruit, Fruits[selIndex].SS, Fruits[selIndex].SC));
            fruit_SC = Fruits[selIndex].SC;
            console.log(fruit_SC);

            document.getElementById("Estimate").onclick = function() {
                EstiCalo(fruit_SC);
            }
            document.getElementById("Confirm").onclick = function() {
                ConfirmSel(select1, Frecord, fruit_SC, selectedServ);
            };

            // console.log("Fruit length:"+Frecord.length);           

        })
        //      } while(i<3);
    function EstiCalo(fruit_SC) {
        selectedServ = document.getElementById("selServing").value;
        var EstTaken = fruit_SC * selectedServ;
        document.getElementById("EstTaken").innerHTML = "Estimate Calorise: " + EstTaken;
        var EstTotal = EstTaken + CaloTaken;
        if (EstTotal > limitCalo) {
            alert("You will take too much calorise! Please re-choose");
            return;
        }
    }

    function selectedFruitFnc(fruit, ServingSize, ServingCalo) {
        selectedFruit.fruit = fruit;
        selectedFruit.ServingSize = ServingSize;
        selectedFruit.ServingCalo = ServingCalo;
        return fruit + ": Calories:" + ServingCalo + " per " + ServingSize;
    }

    function ConfirmSel(select1, Frecord, fruit_SC, selectedServ) {
        if (select1 === "" || fruit_SC === "" || Frecord === "" || selectedServ === 0) {
            alert("Please do estimate");
            return;
        }
        Frecord.push(select1);
        document.getElementById("HistorySel").innerHTML += Frecord[Frecord.length - 1] + ", ";
        // console.log(i);
        var NewTaken = fruit_SC * selectedServ;
        CaloTaken = CaloTaken + NewTaken;

        document.getElementById("NewTaken").innerHTML = NewTaken;
        document.getElementById("CaloTaken").innerHTML = CaloTaken;
        document.getElementById("EstTaken").innerHTML = "Estimate Calories";
    }

});