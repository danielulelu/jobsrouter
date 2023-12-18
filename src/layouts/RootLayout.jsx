import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <h1>Jobs Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Jobs</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
