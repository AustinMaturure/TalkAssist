import "../css/footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <h1>TalkAssist</h1>

        <div className="legal">
          <p className="copy-right">
            &copy; {new Date().getFullYear()} TalkAssist. All rights reserved.
            Designed and developed by
            <a
              className="austin-portfolio"
              href="https://austinmaturure.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⚡
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
