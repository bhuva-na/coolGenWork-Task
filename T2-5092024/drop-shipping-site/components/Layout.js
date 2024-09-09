import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
   <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' , border:"1px solid black"}}>
  {/* Left: Logo */}
  <div>
    <img src="/path/to/logo.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
  </div>
  
  {/* Center: Navigation Links */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link active" ><h6>HOME</h6></Link>
          </li>
          <li className="nav-item">
            <Link href="/products" className="nav-link active"><h6>PRODUCTS</h6></Link>
          </li>
          <li className="nav-item">
            <Link href="/products" className="nav-link active"><h6>CONTACT US</h6></Link>
          </li>
          <li className="nav-item">
            <Link href="/products" className="nav-link active"><h6>ABOUT US</h6></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  {/* Right: Login */}
  <div>
    <Link href="/login">
      Login
    </Link>
  </div>
</header>



      <main>{children}</main>

      <footer>
        <p>DropShipping World © 2024</p>
      </footer>
    </>
  );
}
