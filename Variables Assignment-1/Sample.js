export default function Sample(props){
    // a variable is declared using var keyword(recreation and updation is allowed).
    var a = 5
    // b variable is declared using let keyword(recreation --> Error and updation is allowed).  ).
    let b = 3
    // c varaible is declared using const keyword.(recreation and updation -->Error). 
    const c = 3
    /* X,Y,Z variables are declared using var keyword and
     Number()method is used to convert the string value from App.js to integer.*/
    var X = Number(props.x)// props.x here x is a variable from app.js containing string value.
    var Y = Number(props.y)// props.y here y is a variable from app.js containing string value.
    var Z = Number(props.z)// props.z here z is a variable from app.js containing string value.
    return(
        // returning the output as sum of(X+a,Y+b,Z+c).
        <>
        <h2>Sum of :</h2>
        <h2>x+a = {X}+{a} = {X+a}  |   y+b = {Y}+{b} = {Y+b}  |  z+c = {Z}+{c} = {Z+c}</h2>
        </>

    );
}