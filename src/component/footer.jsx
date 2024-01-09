import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../StyleComponent/index.css';

export default function Footer() {
  return (
    <div className="fixed-bottom w-100">
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-3">
        <p className="text-body-primary text-light">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
}
