/***** initialize urdu words ******/

var abjadValues = {
    ا : 1,
    ب : 2,
    ت : 400,
    ث : 500,
    ج : 3,
    ح : 8,
    خ : 600,
    د : 4,
    ذ : 700,
    ر : 200,
    ز : 7,
    س : 60,
    ش : 300,
    ص : 90,
    ض : 800,
    ط : 9,
    ظ : 900,
    ع : 70,
    غ : 1000,
    ف : 80,
    ق : 100,
    ک : 20,
    ل : 30,
    م : 40,
    ن : 50,
    و : 6,
    ھ : 5,
    ہ : 5,
    ء : 1,
    ی : 10
};

document.addEventListener("keyup", function () {
        var words = document.getElementById("key").value;
        var splitWords = words.split("");
        //
        var text = document.getElementById("key").value;
        var len = text.length;
        if( len ){
            //get counter by id
            var counter = document.getElementById('counter');

            //that filter just for legacy and remove english words
            //TODO: that filter will be removed when all urdu words added
            splitWords = splitWords.filter(function(word){
                return abjadValues[word]
            });

            //wih chaining method got total count of words
            var values = splitWords = splitWords.map(function(obj){
                //got original values of words
                return abjadValues[obj];

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