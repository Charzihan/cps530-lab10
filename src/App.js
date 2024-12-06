import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          className="App-logo" 
          alt="logo" 
          style={{ width: '200px', height: '200px' }} // Makes logo smaller
        />
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '20px auto',
          fontSize: '1.2rem',
          lineHeight: '1.6'
        }}>
          <h2>How I got the React framework to work:</h2>
          <ol style={{ textAlign: 'left' }}>
            <li>
              In Windows powershell using Chocolatey I installed node.js and npm(Node Package Manager) with this command:
              <pre><code>choco install -y --force nodejs-lts</code></pre>
            </li>
            <li>
              Then after npm is installed, in command prompt I created a default javascript based react app with command:
              <pre><code>npx create-react-app cps530-lab10</code></pre>
            </li>
            <li>
              Next I opened the new react app folder with command:
              <pre><code>cd cps530-lab10</code></pre>
            </li>
            <li>
              The "gh-pages" npm package needed for github page dependencies is intalled using the following command:
              <pre><code>npm install gh-pages --save-dev</code></pre>
            </li>
            <li>
              The designated development dependencies are stored in a newly created "package.json" file
            </li>
            <li>
              In that file I add a new homepage property that links to this github page:
              <pre><code>"homepage": "https://Charzihan.github.io/cps530-lab10"</code></pre>
            </li>
            <li>
              I then add 2 deployment scripts to the file under the "scripts" section:
              <pre><code>"predeploy": "npm run build",
"deploy": "gh-pages -d build"</code></pre>
            </li>
            <li>
              I then initialize the local file with a git repo and deployed the react app using the command in command prompt:
              <pre><code>npm run deploy</code></pre>
            </li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;