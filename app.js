
var object = {a : 6, b : 66, c : 67, d : 68, e : 69, f : 70, g : 71, h : 72, i : 73, j : 74, k : 75, l : 76, m : 77, n : 78, o : 79, p : 80, q : 81, r : 82, s : 83, t : 84, u : 85, v : 86, w : 87, x : 88, y : 89, z : 90 };

document.addEventListener("keyup", function () {
        var words = document.getElementById("key").value;
        var splitWords = words.split("");

        var text = document.getElementById("key").value;
        var len = text.length;
        console.log(len);
        if(len){

            var values = splitWords.filter(function(val){
                return object[val]
            }).map(function(alp){
                return object[alp];
            });


            function getSum(total, num){
                return total + num;
            }
            function sum(){
                document.getElementById('counter').innerText = (values.reduce(getSum));
            }
            sum();
        }
        else{
            document.getElementById('counter').innerText = "0";
        }
    }
);