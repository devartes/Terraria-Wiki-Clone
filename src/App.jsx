
import './App.css';
import './sidebar.css';
import './main.css';
import './index.css';

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
              <span className="subtitle">Navigation</span>
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
              <span className="subtitle">Guides</span>
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
              <span className="subtitle">Portals</span>
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
              <span className="subtitle">Tools</span>
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
              <span className="subtitle">Other languages</span>
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
                  <div className="welcomeContentGroup">
                    <div className="welcomeTitle">
                      <h1>Welcome to the Official <span>Terraria Wiki,</span></h1>
                      <span className="welcomeSubTitle">the comprehensive reference written and maintained by the players.</span>
                      <span className="dataWiki">
                        <span>171 active editors&nbsp;</span>are currently maintaining&nbsp;<span>4,767 articles (46,235 total pages)&nbsp;</span>and&nbsp;<span>23,180 files.</span>
                      </span>
                    </div>
                    <div className="midia">
                      <div className="midiaContent">
                        <ul className="links">
                          <span>Links:</span>
                          <li><a href="/"><img src={require("./assets/img/16px-Terraria_icon.png")} alt="terraria icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Re-Logic_icon.png")} alt="re-logic icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Facebook.svg.png")} alt="facebook icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Twitter.svg.png")} alt="twitter icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Instagram.svg.png")} alt="instagram icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Discord.svg.png")} alt="discord icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Reddit.svg.png")} alt="reddit icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Twitch.svg.png")} alt="twitch icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-TikTok.svg.png")} alt="tiktok icon" /></a></li>
                        </ul>
                        <ul className="buyTerraria">
                          <span>Buy Terraria:</span>
                          <li><a href="/"><img src={require("./assets/img/16px-Steam.svg.png")} alt="steam icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-GOG.com.svg.png")} alt="gog.com icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-PlayStation_Store.svg.png")} alt="playstation icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Xbox_360.svg.png")} alt="xbox icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Xbox_One.svg.png")} alt="xbox one icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Google_Play.svg.png")} alt="google play icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Amazon.svg.png")} alt="amazon icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Apple_App_Store.svg.png")} alt="apple icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Stadia.svg.png")} alt="stadia icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Microsoft_Store.svg.png")} alt="microsoft icon" /></a></li>
                          <li><a href="/"><img src={require("./assets/img/16px-Nintendo_eShop.svg.png")} alt="nintendo eshop icon" /></a></li>
                        </ul>
                      </div>
                      <div className="versionContent">
                        <div className="desktopBlock">
                          <div className="desktopBlockGroup">
                            <ul className="desktopIcons">
                              <li><a href="/"><img src={require("./assets/img/26px-Windows_10.svg.png")} alt="windows" /></a></li>
                              <li><a href="/"><img className="colorInvert" src={require("./assets/img/26px-MacOS.svg.png")} alt="macos" /></a></li>
                              <li><a href="/"><img src={require("./assets/img/22px-Linux.svg.png")} alt="linux" /></a></li>
                            </ul>
                            <ul className="desktopVersion">
                              <li className="smallTextPrimary"><a href="/">Steam</a>•<a href="/">GOG.com</a></li>
                              <li className="versionText"><a href="/">1.4.3.6</a></li>
                              <li className="smallTextSecundary"><a href="/">Latest version</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="mobileBlock">
                          <div className="mobileBlockGroup">
                            <ul className="mobileIcons">
                              <li><a href="/"><img src={require("./assets/img/26px-Apple_iOS.svg.png")} alt="Ios icon" /></a></li>
                            </ul>
                            <ul className="mobileVersion">
                              <li className="smallTextPrimary"><a href="/">App Store</a></li>
                              <li className="versionText"><a href="/">1.4.3.2.2</a></li>
                              <li className="smallTextSecundary"><a href="/">Desktop 1.4.3.2</a></li>
                            </ul>
                          </div>
                          <div className="mobileBlockGroup">
                            <ul className="mobileIcons">
                              <li><a href="/"><img src={require("./assets/img/24px-Google_Play.svg.png")} alt="Google play icon" /></a></li>
                            </ul>
                            <ul className="mobileVersion">
                              <li className="smallTextPrimary"><a href="/">Google Play</a></li>
                              <li className="versionText"><a href="/">1.4.3.2.2</a></li>
                              <li className="smallTextSecundary"><a href="/">Desktop 1.4.3.2</a></li>
                            </ul>
                          </div>
                          <div className="mobileBlockGroup">
                            <ul className="mobileIcons">
                              <li><a href="/"><img src={require("./assets/img/28px-Amazon.svg.png")} alt="windows" /></a></li>
                            </ul>
                            <ul className="mobileVersion">
                              <li className="smallTextPrimary"><a href="/">Amazon Appstore</a></li>
                              <li className="versionText"><a href="/">1.4.0.5.2</a></li>
                              <li className="smallTextSecundary"><a href="/">Desktop 1.4.0.5</a></li>
                            </ul>
                          </div>
                          <div className="mobileBlockGroup">
                            <ul className="mobileIcons">
                              <li><a href="/"><img src={require("./assets/img/32px-Stadia.svg.png")} alt="windows" /></a></li>
                            </ul>
                            <ul className="mobileVersion">
                              <li className="smallTextPrimary"><a href="/">Stadia</a></li>
                              <li className="versionText"><a href="/">1.4.0.5.3</a></li>
                              <li className="smallTextSecundary"><a href="/">Desktop 1.4.0.5</a></li>
                            </ul>
                          </div>
                          <div className="mobileBlockGroup">
                            <ul className="mobileIcons">
                              <li><a href="/"><img src={require("./assets/img/27px-Windows_Phone.svg.png")} alt="windows" /></a></li>
                            </ul>
                            <ul className="mobileVersion">
                              <li className="smallTextPrimary"><a href="/">Microsoft Store</a></li>
                              <li className="versionText"><a href="/">1.2.4.3</a></li>
                              <li className="smallTextSecundary"><a href="/">Desktop 1.2.4.1</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="consoleBlock">
                          <div className="consoleBlockGroup">
                            <ul className="consoleIcons">
                              <li><a href="/"><img src={require("./assets/img/26px-Nintendo_Switch.svg.png")} alt="windows" /></a></li>
                            </ul>
                            <ul className="consoleVersion">
                              <li className="smallTextPrimary"><a href="/">Nintendo Switch</a></li>
                              <li className="versionText"><a href="/">1.4.3.2.0</a></li>
                              <li className="smallTextSecundary"><a href="/">Desktop 1.4.3.2</a></li>
                            </ul>
                          </div>
                          <div className="consoleBlockGroup">
                            <ul className="consoleIconsTwo">
                              <li><a href="/"><img src={require("./assets/img/21px-Xbox_One.svg.png")} alt="windows" /></a></li>
                              <li><a href="/"><img className="colorInvert" src={require("./assets/img/51px-Playstation_4.svg.png")} alt="macos" /></a></li>
                            </ul>
                            <ul className="consoleVersion">
                              <li className="smallTextPrimary"><a href="/">Xbox One</a>•<a href="/">PS4</a></li>
                              <li className="versionText"><a href="/">1.4.3.2.0</a></li>
                              <li className="smallTextSecundary"><a href="/">Desktop 1.4.3.2</a></li>
                            </ul>
                          </div>
                          <div className="consoleBlockGroup">
                            <div className="consoleDivision">
                              <ul className="consoleIcons">
                                <li><a href="/"><img src={require("./assets/img/21px-Xbox_360.svg.png")} alt="Xbox 360 icon" /></a></li>
                                <li className="consoleIconsMargin"><a href="/"><img className="colorInvert" src={require("./assets/img/51px-Playstation_3.svg.png")} alt="Playstation 3" /></a></li>
                              </ul>
                              <ul className="consoleIcons">
                                <li><a href="/"><img src={require("./assets/img/37px-Wii_U.svg.png")} alt="Wii U" /></a></li>
                                <li><a href="/"><img className="colorInvert" src={require("./assets/img/60px-Playstation_Vita.svg.png")} alt="Playstation Vita" /></a></li>
                              </ul>
                            </div>
                            <ul className="consoleVersion">
                              <li className="smallTextPrimary"><a href="/">Xbox 360</a>•<a href="/">Wii U</a></li>
                              <li className="versionText"><a href="/">1.09</a></li>
                              <li className="smallTextSecundary"><a href="/">Desktop 1.2.4.1</a></li>
                            </ul>
                          </div>
                          <div className="consoleBlockGroup">
                            <ul className="consoleIcons">
                              <li><a href="/"><img src={require("./assets/img/43px-3DS.svg.png")} alt="windows" /></a></li>
                            </ul>
                            <ul className="consoleVersion">
                              <li className="smallTextPrimary"><a href="/">3DS</a></li>
                              <li className="versionText"><a href="/">1.05</a></li>
                              <li className="smallTextSecundary"><a href="/">Desktop 1.2.1</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="mainContent">
                <div className="teste1 border">1</div>
                <div className="teste2 border">2</div>
                <div className="teste3 border">3</div>
                <div className="teste4 border">4</div>
                <div className="teste5 border">5</div>
                <div className="teste6 border">6</div>
                <div className="teste7 border">7</div>
                <div className="teste8 border">8</div>
                <div className="teste9 border">9</div>
                <div className="teste10 border">10</div>
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
        <div className="footerMiddle"><img src={require("./assets/img/wiki-footer.png")} alt="wiki" /></div>
        <div className="footerLeft"><a href="/">Terms of Service</a>|<a href="/">Privacy Policy</a></div>
      </footer>
    </div>
  );
}

export default App;
