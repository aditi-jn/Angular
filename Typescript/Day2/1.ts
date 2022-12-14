let countstringlen = (array1:string[])=> { 
    array1.forEach(element => {
        console.log(element," ",element.length)
    });
}
let arr : string[] = ["aditi","jain","mradul","utkarsh"];
  countstringlen(arr);