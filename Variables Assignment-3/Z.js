export default function Z(){
    // declaring 4 local variables using var keyword.
    var a1 = 1
    var b1 = 2
    var c1 = 3
    var d1 = 4
    return(
        // Returning sum of all the local variables.
        <>
        <h2>From Z component:</h2>
        <h2>A+B+C+D: {a1}+{b1}+{c1}+{d1} = {a1+b1+c1+d1}</h2>
        </>
    );
}