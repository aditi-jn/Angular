var p = function (str) {
    var str1 = "";
    for (var i = str.length - 1; i >= 0; i--)
        str1 += str[i];
    (str1.toLowerCase() === str.toLowerCase()) ? console.log("palindrome") : console.log("not palindrome");
};
p("Naman");
