import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Video Player</h1>
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        allowFullScreen
      ></iframe>
      <p>Never gonna give you up!</p>
    </div>
  );
};

export default App;
