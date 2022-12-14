class Experiment{
    str:string;
    setter(str:string){
        this.str=str.toLocaleLowerCase();
    }
    operation(){
        let count:number=0;
        console.log(this.str[0]);
        let vowel:string[]=['a','e','i','o','u'];
        if(vowel.includes(this.str[0])){
            for(let i=0;i<this.str.length-1;i++)
            {
                if(vowel.includes(this.str[i])){}
                else{
                    count+=1;
                }
            }
            
        }
        else
        {
            for(let i=0;i<this.str.length-1;i++)
            {
                if(vowel.includes(this.str[i]))
                    count+=1;   
            }

        }
        console.log(count);
    }
}
let object1:Experiment=new Experiment();
object1.setter('Mradul');
object1.operation();