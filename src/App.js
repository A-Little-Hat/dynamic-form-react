import { useState } from 'react';
import MyForm from './components/MyForm';

function App() {
  const [count, setCount] = useState([{
    name: '',
  }]);


  return (
    <>
      <button type="button" onClick={() => {
        setCount([...count, {
          name: ''
        }])
      }}>
        Add Form
      </button>
      <div className="App">
        {
          count.map(function (object, i) {
            return <MyForm key={i} />;
          })
        }

      </div>
    </>
  );
}

export default App;
