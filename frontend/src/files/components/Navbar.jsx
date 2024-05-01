import static_URLs from '../../config/staticUrls';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark primary-color">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={static_URLs.logo} alt="toolbox" height="40" />
        </a>
      </div>
    </nav>
  );
};
