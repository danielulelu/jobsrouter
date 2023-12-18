import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Find out the open positions below</p>

      <Outlet />
    </div>
  );
}
