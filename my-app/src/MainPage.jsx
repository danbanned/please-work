import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// JSX can be used without importing React in React 17+ (new JSX Transform)

// Import our stylesheet (we'll create MainPage.css)
import "./MainPage.css";

// Export component so it can be used in App.jsx
export default function MainPage() {
  return (
    // Top-level wrapper div
    <div className="container">
      
      {/* === LEFT SIDE DIAGRAM === */}
      <div className="diagram">
        {/* Center heart with title */}
        <div className="center">
          <div className="heart">❤️</div>
          <h1>VI Story</h1>
          <p>
            To visualize your goals, intentions, and aspirations across life
            areas in one inspiring, interactive book.
          </p>
        </div>

        {/* StoryBoarding Section */}
        <div className="box storyboard">
          <h2>StoryBoarding</h2>
          <ul>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Steps 3, 4, 5, 6</li>
          </ul>
        </div>

        {/* Imagine Design Section */}
        <div className="box imagine">
          <h2>Imagine Design</h2>
          <p>
            "Visualize every verbal. Show us who or what you’re talking about."
          </p>
          <ul>
            <li>Draw a guy</li>
            <li>Draw a box</li>
            <li>Draw a tree</li>
          </ul>
        </div>

        {/* Traits & Relates Section */}
        <div className="box traits">
          <h2>Traits & Relates</h2>
          <ul>
            <li>Emotions</li>
            <li>Morals</li>
          </ul>
          <p>“My body is my temple. I honor it with care...”</p>
          <button>ACTIONS!!</button>
        </div>

        {/* Roles Section */}
        <div className="box roles">
          <h2>Roles</h2>
          <ul>
            <li>I'm</li>
            <li>His</li>
            <li>Dad</li>
          </ul>
        </div>
      </div>

      {/* === RIGHT SIDE PANEL === */}
      <div className="panel">
        <h1>Vi Story</h1>
        <h2>What I can do for you?</h2>

        {/* Cards for features */}
        <div className="card-grid">
          <div className="card">
            <h3>Write your story</h3>
            <p>
              Can carry different meanings depending on context. 
              A way of empowerment.
            </p>
            <span>S</span>
          </div>

          <div className="card">
            <h3>Write your characters</h3>
            <p>
              Describe people, roles, or fictional figures. 
              Based on fact or creativity.
            </p>
            <span>C</span>
          </div>

          <div className="card">
            <h3>Write your scenes</h3>
            <p>
              A scene shows a specific moment where something meaningful happens.
            </p>
            <span>S</span>
          </div>

          <div className="card">
            <h3>Write your settings</h3>
            <p>
              A setting is time + place where the story unfolds.
            </p>
            <span>S</span>
          </div>
        </div>

        <h2>What can you do for me?</h2>

        {/* Lower interactive cards */}
        <div className="card-grid">
          <div className="card">Make your Story</div>
          <div className="card">Make your Character</div>
          <div className="card">Make your Scenes</div>
          <div className="card">Make your Settings</div>
        </div>
      </div>
    </div>
  );
}
