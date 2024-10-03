import "../footer/footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <h2>LOGO</h2>
      <div className="nav">
        <ul>
          <h6>Features</h6>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Branded Links</li>
        </ul>

        <ul>
          <h6>Resources</h6>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>

        <ul>
          <h6>Company</h6>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="socilalIcon">
        <img src="../img/face.png" alt="" />
        <img src="../img/twitter.png" alt="" />
        <img src="../img/pinterest.png" alt="" />
        <img src="../img/insta.png" alt="" />
      </div>
    </div>
  );
}
