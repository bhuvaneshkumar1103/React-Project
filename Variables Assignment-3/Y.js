// funtion 'Y' is declared with props for accessing the values form the app.js.. 
export default function Y(props){
    // Number() method is used to convert the string value from the app.js to number and stored in the local variables.
    var a = Number(props.a)
    var b = Number(props.b)
    var c = Number(props.c)
    return(
        // Returning the sum of values of the local variables.
        <>
        <h2>From Y component:</h2>
        <h2>A+B+C: {a}+{b}+{c} = {a+b+c}</h2>
        </>
    );
}