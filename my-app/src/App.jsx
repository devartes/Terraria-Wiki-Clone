
import './App.css';
import './sidebar.css';
import './main.css';

function App() {
  return (
    <div className="container">
      <header className="headerContent">
        <div className="logo"><img src={require("./assets/img/header-logo.png")} alt="logo wiki.gg" /></div>
        <ul className="userArea">
          <li><a href="/">Create account</a></li>
          <li><a href="/">Log in</a></li>
        </ul>
      </header>
      <div className="main">
        <div className="title">
          <a href="/">
            <img src={require("./assets/img/Site-logo-overworld.webp")} alt="logo wiki.gg" />
          </a>
        </div>

        <div className="mainBlock">
          <div className="asideBlock">
            <aside className="sidebarNavigation">
              <h3 className="subtitle">Navigation</h3>
              <ul>
                <li><a href="/" title="Visit the main page [Alt+Shift+z]">Main page</a></li>
                <li><a href="/">Recent changes</a></li>
                <li><a href="/">Random page</a></li>
                <li><a href="/">Wiki projects</a></li>
                <li><a href="/">Wiki rules</a></li>
                <li><a href="/">Style guide</a></li>
                <li><a href="/">Community noticeboard</a></li>
                <li><a href="/">Admin noticeboard</a></li>
                <li><a href="/">Help</a></li>
              </ul>
            </aside>
            <aside className="subsidebarNavigation">
              <h3 className="subtitle">Guides</h3>
              <ul>
                <li><a href="/">Getting started</a></li>
                <li><a href="/">Walkthrough</a></li>
                <li><a href="/">Class setups</a></li>
                <li><a href="/">Enemy farming</a></li>
                <li><a href="/">Crafting 101</a></li>
                <li><a href="/">Mining techniques</a></li>
                <li><a href="/">Bases</a></li>
                <li><a href="/">Pvp</a></li>
                <li><a href="/">more...</a></li>
              </ul>
            </aside>
            <aside className="subsidebarNavigation">
              <h3 className="subtitle">Portals</h3>
              <ul>
                <li><a href="/">terraria.org</a></li>
                <li><a href="/">re-logic.com</a></li>
                <li><a href="/">Terraria Forums</a></li>
                <li><a href="/">Terraria Twitter</a></li>
                <li><a href="/">Terraria Facebook</a></li>
                <li><a href="/">Terraria Instagram</a></li>
                <li><a href="/">Terraria Subreddit</a></li>
                <li><a href="/">Terraria Discord</a></li>
                <li><a href="/">Wiki Discord</a></li>
              </ul>
            </aside>
            <aside className="subsidebarNavigation">
              <h3 className="subtitle">Tools</h3>
              <ul>
                <li><a href="/">What links here</a></li>
                <li><a href="/">Related changes</a></li>
                <li><a href="/">Special pages</a></li>
                <li><a href="/">Printable version</a></li>
                <li><a href="/">Permanent link</a></li>
                <li><a href="/">Page information</a></li>
                <li><a href="/">Page values</a></li>
                <li><a href="/">Cite this page</a></li>
              </ul>
            </aside>
            <aside className="subsidebarNavigation">
              <h3 className="subtitle">Other languages</h3>
              <ul>
                <li><a href="/">Italiano</a></li>
                <li><a href="/">Random page</a></li>
                <li><a href="/">Wiki projects</a></li>
                <li><a href="/">Wiki rules</a></li>
                <li><a href="/">Style guide</a></li>
                <li><a href="/">Community noticeboard</a></li>
                <li><a href="/">Admin noticeboard</a></li>
                <li><a href="/">Help</a></li>
              </ul>
            </aside>
          </div>
          <div className="mainBlockContainer">
            teste
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
