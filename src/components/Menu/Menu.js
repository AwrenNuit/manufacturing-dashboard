import "./Menu.css";

export default function Menu() {
  return (
    <div id="menu-whitespace">
      <div id="menu-wrapper">
        {/* UPDATE ACTIVE BASED ON URL */}
        <div className="menu-tab active">
          <h3>OEE</h3>
          <div className="active-tab"></div>
        </div>
        <div className="menu-tab">
          <h3>Yield</h3>
          <div className="active-tab"></div>
        </div>
        <div className="menu-tab">
          <h3>Orders</h3>
          <div className="active-tab"></div>
        </div>
      </div>
      <div id="menu-tab-mask"></div>
    </div>
  );
}
