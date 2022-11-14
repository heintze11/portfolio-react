// Footer to display on each the bottom of each page with links

const Footer = () => {
  return (
    <footer className="text-center m-1 p-1 mt-auto">
      <a
        className="footer-item m-1 p-1"
        href="https://github.com/heintze11"
        target="_blank"
      >
        Github
      </a>
      <a
        className="footer-item m-1 p-1"
        href="https://www.linkedin.com/in/leviheintzelman/"
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        className="footer-item m-1 p-1"
        href="https://stackoverflow.com/users/19106679/levi-h"
        target="_blank"
      >
        Stack Overflow
      </a>
    </footer>
  );
};

export default Footer;
