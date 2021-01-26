import React from "react";

import "./KoFi.css";

export default function KoFi(props) {
  const { color, id, label } = props;
  return (
    <div class="btn-container">
      <a
        title={label}
        class="kofi-button"
        style={{ backgroundColor: color }}
        href={"https://www.patreon.com/reshetovdenis"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="kofitext">
          {label}
        </span>
      </a>
    </div>
  );
}