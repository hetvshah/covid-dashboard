const Footer = () => {
  return (
    <footer>
      <div style={{ textAlign: 'center', paddingBottom: '1rem' }}>
        © {new Date().getFullYear()}, made by {` `}
        <a
          style={{ color: '#ad0000' }}
          href="https://hetvishah.netlify.app/"
          target="__blank"
          rel="noreferrer"
        >
          hetvi shah
        </a>
        ; built with
        {` `}
        <a
          style={{ color: '#ad0000' }}
          href="https://reactjs.org/docs/create-a-new-react-app.html"
          target="__blank"
          rel="noreferrer"
        >
          react
        </a>
      </div>

      {/* <Image src="images/logo.png" alt="logo" className={footerStyles.logo} /> */}
    </footer>
  );
};

export default Footer;
