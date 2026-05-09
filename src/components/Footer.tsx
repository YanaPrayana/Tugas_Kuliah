import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} Universitas Amikom Yogyakarta</p>
      <p>Version 1.0.0</p>
    </footer>
  );
}
