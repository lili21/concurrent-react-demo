import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/input">Input Demo</Link>
            </li>
            <li>
              <Link to="/input-concurrent">Input Concurrent Demo</Link>
            </li>
            <li>
              <Link to="/tab">Tab Demo</Link>
            </li>
            <li>
              <Link to="/tab-concurrent">Tab Concurrent Demo</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
