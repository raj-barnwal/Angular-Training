app.filter('addPostFix', addPostFix);
app.filter('changeAfterThreeChar',changeAfterThreeChar);

function addPostFix() {
    return ( function (input) {
        if (!input) {
            return '';
        }
        else if (input % 10 === 1 && input !== "11") {
            return input + 'st';
        }
        else if (input % 10 === 2 && input !== "12") {
            return input + 'nd';
        }
        else if (input % 10 === 3 && input !== "13") {
            return input + 'rd';
        }
        else return input + 'th';
    })
}

function changeAfterThreeChar() {
    return (function (characters,index) {
        if(!characters){
            return '';
        }
        else {
            var str=characters.substring(index);
            var strBefore=characters.substring(0,index);
            return strBefore+str.toUpperCase();
        }
    })
}