import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <footer>
      <div className="copy-icon">
        <CopyrightIcon style={{ fontSize: "small" }} />
      </div>
      <div className="para">
        <p>Copyright {new Date().getFullYear()} - Yashraj Singh</p>
      </div>
    </footer>
  );
}

export default Footer;
