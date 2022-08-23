import './App.css';

function App() {
  return (
    <div>
			<label htmlFor="issu-name">Name of your issu</label>
			<input type="text" name="issu-name" placeholder='Enter name of issu' />
			<label htmlFor="issu-description">Description of your issu</label>
			<input type="text" name="issu-description" placeholder='Enter description of issu' />
			<button>Send</button>
		</div>
  );
}

export default App;
