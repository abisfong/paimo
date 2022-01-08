import React from "react";

export default function HeartIcon(props) {
  return (
    <svg
      onClick={props.onClick}
      className={`heart-icon ${props.className}`}
      focusable="false"
      viewBox="0 0 20 20"
      role="img"
    >
      <path d="M10 5.6c.4-1.8 2.2-3.2 4.2-3 2.4 0 4.8 1.7 4.6 5.5-.3 4.2-7.2 11-8.7 11C8.7 19 1.7 12 1.5 8c-.4-3.8 2-5.5 4.4-5.5 2 0 3.8 1.3 4.2 3"></path>
      <title>Heart</title>
    </svg>
  )
}