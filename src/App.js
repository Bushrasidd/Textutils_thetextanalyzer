import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', paddingTop: '0', color: 'white' }}>
      <Navbar about1="About us" title="TextUtils" home="Home" />
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyze below" />
      </div>
    </div>
  );
}

export default App;

