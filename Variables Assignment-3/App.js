import './App.css';
import X from './Variable Assignments/Variables Assignment-3/X';
import Y from './Variable Assignments/Variables Assignment-3/Y';
import Z from './Variable Assignments/Variables Assignment-3/Z';
function App() {
  return (
    /* Calling X component with two values(a,b).
       Calling Y component with Three values (a,b,c)
       Calling Z component */
    <>
    <X a="1" b="2"  />
    <Y a="5" b="10" c="3"  />
    <Z />
    </>
  );
}

export default App;

