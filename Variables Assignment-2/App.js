import './App.css';
import Sample from './Variable Assignments/Variables Assignment-2/Sample';

function App() {
  return (
    // Calling Sample component three times with different a,b,c values.
    <>
    <Sample a="1" b="2" c="3"  />
    <Sample a="5" b="10" c="3"  />
    <Sample a="1" b="3" c="1"  />
    </>
  );
}

export default App;

