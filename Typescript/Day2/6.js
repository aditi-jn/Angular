var Experiment = /** @class */ (function () {
    function Experiment() {
    }
    Experiment.prototype.setter = function (str) {
        this.str = str.toLocaleLowerCase();
    };
    Experiment.prototype.operation = function () {
        var count = 0;
        console.log(this.str[0]);
        var vowel = ['a', 'e', 'i', 'o', 'u'];
        if (vowel.includes(this.str[0])) {
            for (var i = 0; i < this.str.length - 1; i++) {
                if (vowel.includes(this.str[i])) { }
                else {
                    count += 1;
                }
            }
        }
        else {
            for (var i = 0; i < this.str.length - 1; i++) {
                if (vowel.includes(this.str[i]))
                    count += 1;
            }
        }
        console.log(count);
    };
    return Experiment;
}());
var object1 = new Experiment();
object1.setter('Mradul');
object1.operation();
