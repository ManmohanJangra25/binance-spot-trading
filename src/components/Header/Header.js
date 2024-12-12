import "./header.css";

export default function Header() {
  return (
    <div className="container-fluid main_header d-flex align-center">
      <header>
        <div className="headerLogo d-flex align-center">
          <img src="./assets/images/binance_logo.png" alt="logo" width="120px"/>
        </div>
      </header>
    </div>
  )
}
