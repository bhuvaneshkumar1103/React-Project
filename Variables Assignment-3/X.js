// funtion 'X' is declared with props for accessing the values form the app.js..
export default function X(props){
    // Number() method is used to convert the string value from the app.js to number and stored in the local variables.
    var a = Number(props.a)
    var b = Number(props.b)
    return(
        // Returning the sum of values of the local variables.
        <>
        <h2>From X component:</h2>
        <h2>A+B: {a}+{b} = {a+b}</h2>
        </>
    );
}