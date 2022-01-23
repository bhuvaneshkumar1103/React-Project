// here the {a,b,c} are used for destructing the props in the Sample function. 
export default function Sample({a,b,c}){
    // Number() method is used to convert the string value from app.js to number. 
    var A = Number(a)
    var B = Number(b)
    var C = Number(c)
    return(
        <h2>The Sum of A+B+C: {A}+{B}+{C} = {A+B+C}</h2>
    );
}