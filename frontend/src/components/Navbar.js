import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  about
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
