
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
                <li><a href="/" title="A list of recent changes in the wiki [Alt+Shift+r]">Recent changes</a></li>
                <li><a href="/" title="Load a random page [Alt+Shift+x]">Random page</a></li>
                <li><a href="/">Wiki projects</a></li>
                <li><a href="/">Wiki rules</a></li>
                <li><a href="/">Style guide</a></li>
                <li><a href="/">Community noticeboard</a></li>
                <li><a href="/">Admin noticeboard</a></li>
                <li><a href="/" title="The place to find out">Help</a></li>
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
                <li><a href="/" title="A list of all wiki pages that link here [Alt+Shift+j]">What links here</a></li>
                <li><a href="/" title="Recent changes in pages linked from this page [Alt+Shift+k]">Related changes</a></li>
                <li><a href="/" title="A list of all special pages [Alt+Shift+q]">Special pages</a></li>
                <li><a href="/" title="Printable version of this page [Alt+Shift+p]">Printable version</a></li>
                <li><a href="/" title="Permanent link to this revision of the page">Permanent link</a></li>
                <li><a href="/" title="More information about this page">Page information</a></li>
                <li><a href="/">Page values</a></li>
                <li><a href="/" title="Information on how to cite this page">Cite this page</a></li>
              </ul>
            </aside>
            <aside className="subsidebarNavigation">
              <h3 className="subtitle">Other languages</h3>
              <ul>
                <li><a href="/" title="Terraria Wiki/it – italiano">Italiano</a></li>
                <li><a href="/" title="Terraria Wiki/yue – 粵語">粵語</a></li>
                <li><a href="/" title="Terraria Wiki – français">Français</a></li>
                <li><a href="/" title="Terraria Wiki – 中文">中文</a></li>
                <li><a href="/" title="Terraria Wiki – português">Português</a></li>
                <li><a href="/" title="Terraria Wiki/sv – svenska">Svenska</a></li>
                <li><a href="/" title="Terraria Wiki/Редактируемая копия – русский">Русский</a></li>
                <li><a href="/" title="Terraria Wiki – 한국어">한국어</a></li>
                <li><a href="/" title="Terraria Wiki – Deutsch">Deutsch</a></li>
                <li><a href="/" title="Terraria Wiki/vi – Tiếng Việt">Tiếng Việt</a></li>
                <li><a href="/" title="Terraria Wiki – magyar">Magyar</a></li>
                <li><a href="/" title="Terraria Wiki/lv – latviešu">Latviešu</a></li>
                <li><a href="/" title="Terraria Wiki/ja – 日本語">日本語</a></li>
                <li><a href="/" title="Terraria Wiki/tr – Türkçe">Türkçe</a></li>
                <li><a href="/" title="Terraria Wiki/th – ไทย">ไทย</a></li>
                <li><a href="/" title="Terraria Wiki/id – Bahasa Indonesia">Bahasa Indonesia</a></li>
                <li><a href="/" title="Terraria Wiki – polski">Polski</a></li>
                <li><a href="/" title="Terraria Wiki – українська">Українська</a></li>
                <li><a href="/" title="Terraria Wiki/nl – Nederlands">Nederlands</a></li>
                <li><a href="/" title="Terraria Wiki/es – español">Español</a></li>
                <li><a href="/" title="Terraria Wiki/hi – हिन्दी">हिन्दी</a></li>
                <li><a href="/" title="Terraria Wiki/no – norsk">Norsk</a></li>
                <li><a href="/" title="Terraria Wiki/fi – suomi">Suomi</a></li>
                <li><a href="/" title="Terraria Wiki/lt – lietuvių">Lietuvių</a></li>
                <li><a href="/" title="Terraria Wiki/cs – čeština">Čeština</a></li>
                <li><a href="/" title="Terraria Wiki/el – Ελληνικά">Ελληνικά</a></li>
              </ul>
            </aside>
            <div className="merch">
              <a href="/"><img src={require("./assets/img/Merch.webp")} alt="merch" /></a>
            </div>
          </div>
          <div className="mainBlockContainer">
            <div className="head">
              <div className="headerRight">
                <div className="headerToggle">
                  <span></span>
                </div>
                <ul className="headerTab">
                  <li className="selected"><a href="/">Main page</a></li>
                  <li><a href="/">Discussion</a></li>
                </ul>
              </div>
              <div className="headerLeft">
                <ul className="headerTab">
                  <li className="selected"><a href="/">Read</a></li>
                  <li><a href="/">View source</a></li>
                  <li><a href="/">History</a></li>
                </ul>
                <div className="formContent">
                  <input type="text" placeholder="Search Terraria Wiki" />
                  <button></button>
                </div>
              </div>
            </div>
            <div className="mainWrapper">
              <div className="welcomeContent">
                <div className="welcomeContentBlock">
                  oi
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <footer>
        <div className="footerRight"><a href="/">
          © wiki.gg
        </a>
          Copyright 2022 All Rights Reserved
        </div>
        <div className="footerMiddle"> <img src={require("./assets/img/wiki-footer.png")} alt="wiki" /></div>
        <div className="footerLeft"><a href="/">Terms of Service</a>|<a href="/">Privacy Policy</a></div>
      </footer>
    </div>
  );
}

export default App;
