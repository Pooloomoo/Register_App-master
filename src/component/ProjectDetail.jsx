import React from "react";
import "../../StyleComponent/projectdetail.css";

export default function ProjectDetail({ showPopup, onClose }) {
  return (
    <div className={`popup ${showPopup ? "open" : ""}`}>
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="contentText">
          <h2>Tech Scoop God</h2>
          <p>Become a god of programer amoung noobs</p>

          <table className="table table-bordered text-light">
            <tbody>
              <tr>
                <th>Position:</th>
                <td>Software Engineer</td>
              </tr>
              <tr>
                <th>Salary:</th>
                <td>$80,000</td>
              </tr>
              <tr>
                <th>Amount:</th>
                <td>10</td>
              </tr>
              <tr>
                <th>Education:</th>
                <td>Bachelor's Degree</td>
              </tr>
              <tr>
                <th>Responsibility:</th>
                <td>Developing and maintaining software applications</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={onClose}
          className="btn btn-warning text-light d-flex justify-content-center "
          id="submitbtn"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
