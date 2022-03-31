function Footer() {
    return (
      <footer className="page-footer blue darken-3">
        <div className="footer-copyright">
          <div className="container">
            Alexander Semashko © {new Date().getFullYear()} Copyright
            <a className="grey-text text-lighten-4 right" href="https://github.com/Webs95">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export { Footer };
  