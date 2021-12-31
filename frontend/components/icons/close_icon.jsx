import React from "react";

export default function CloseIcon({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className='close-icon'
      focusable="false"
      viewBox="0 0 20 20"
      role="img">
      <g clipPath="url(#clip0)"
      >
        <path d="M0.949037 16.2225C0.167988 17.0036 0.167988 18.2699 0.949037 19.051C1.73009 19.832 2.99642 19.832 3.77747 19.051L10 12.8284L16.2225 19.051C17.0036 19.832 18.2699 19.832 19.051 19.051C19.832 18.2699 19.832 17.0036 19.051 16.2225L12.8284 10L19.051 3.77746C19.832 2.99641 19.832 1.73008 19.051 0.949029C18.2699 0.16798 17.0036 0.167982 16.2225 0.94903L10 7.17157L3.77746 0.94903C2.99642 0.167982 1.73009 0.167982 0.949037 0.94903C0.167988 1.73008 0.167989 2.99641 0.949038 3.77746L7.17158 10L0.949037 16.2225Z">
        </path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="white">
          </rect>
        </clipPath>
      </defs>
    </svg>
  )
}