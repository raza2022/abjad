/***** initialize urdu words ******/
//TODO: capital values need to be implemented with (word + shift || caps lock)
var urduWords = {
    ا : 65,
    ب : 66,
    چ : 67,
    د : 68,
    ع : 69,
    ف : 70,
    گ : 71,
    ھ : 72,
    ی : 73,
    ج : 74,
    ک : 75,
    ل : 76,
    م : 77,
    ن : 78,
    ہ : 79,
    پ : 80,
    ق : 81,
    ر : 82,
    س : 83,
    ت : 84,
    ئ : 85,
    ط : 86,
    و : 87,
    ش : 88,
    ے : 89,
    ز : 90 };

/***** give values to key codes ******/
//remember here the original abjad words values given
var abjadValues = {
    65 : 1,
    66 : 2,
    67 : 3,
    68 : 4,
    69 : 70,
    70 : 80,
    71 : 5,
    72 : 10,
    73 : 10,
    74 : 20,
    75 : 30,
    76 : 40,
    77 : 50,
    78 : 5,
    79 : 5,
    80 : 100,
    81 : 100,
    82 : 200,
    83 : 60,
    84 : 400,
    85 : 10,
    86 : 9,
    87 : 6,
    88 : 300,
    89 : 89,
    90 : 7
};


document.addEventListener("keyup", function () {
        var words = document.getElementById("key").value;
        var splitWords = words.split("");
        //
        var text = document.getElementById("key").value;
        var len = text.length;
        console.log(len);
        if(len){
            //get counter by id
            var counter = document.getElementById('counter');

            //that filter just for legacy and remove english words
            //TODO: that filter will be removed when all urdu words added
            splitWords = splitWords.filter(function(word){
                return urduWords[word]
            });

            //wih chaining method got total count of words
            var values = splitWords = splitWords.map(function(obj){
                //convert to key codes
                return urduWords[obj];
                //got original values of words
            }).map(function(val){
                return abjadValues[val]
            });
            counter.innerText = sum(values)
        }
        else{
            document.getElementById('counter').innerText = "0";
        }
    }
);

/***** function for addition ******/
function getSum(total, num){
    return total + num;
}

/***** reduce function pass operator function argument ******/
function sum(values){
    return values.reduce(getSum, 0);
}