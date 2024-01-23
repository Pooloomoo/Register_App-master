// PrivacyPolicy.js
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ width: "50%" }}>
      <div className="col">
        <h1>Privacy Policy</h1>
        <p>Collection of Personal Information</p>
        <ol>
          <li>
            We may collect personal information from users when they register,
            log in, or fill out other forms on our website or application.
          </li>
          <li>
            The information we may collect includes names, email addresses,
            residential addresses, and phone numbers.
          </li>
        </ol>

        <p>Use of Personal Information</p>
        <ol>
          <li>
            The personal information collected is used for the following
            purposes:
          </li>
          <li>To register and manage user accounts.</li>
          <li>To provide personalized services based on user preferences.</li>
          <li>
            To process transactions and deliver the requested products or
            services.
          </li>
          <li>
            To send periodic emails regarding updates, promotions, or other
            relevant information.
          </li>
        </ol>

        <div className="mb-4">
          <ol>Protection of Information</ol>
          <li>
            We implement a variety of security measures to maintain the safety
            of users' personal information.
          </li>
          <li>
            Access to personal information is restricted to authorized personnel
            who are required to keep the information confidential.
          </li>
        </div>

        <p>Cookies</p>
        <ol>
          <li>
            We use cookies to enhance user experience and collect data about
            site traffic.
          </li>
          <li>
            Users can choose to disable cookies in their web browser, but it may
            affect the functionality of certain services.
          </li>
        </ol>

        <div className="mb-4">
          <ol>Third-Party Disclosure</ol>
          <li>
            We do not sell, trade, or otherwise transfer users' personal
            information to third parties without explicit consent.
          </li>
        </div>

        <p>Compliance with Laws</p>
        <ol>
          <li>
            We comply with all applicable data protection laws and regulations.
          </li>
        </ol>

        <div className="mb-4">
          <ol>Changes to Privacy Policy</ol>
          <li>
            We reserve the right to update or modify this privacy policy at any
            time. Users will be notified of any changes on our website or
            application.
          </li>
        </div>

        <p>User Consent</p>
        <ol>
          <li>
            By using our website or application, users consent to our privacy
            policy.
          </li>
          <li>
            For any inquiries regarding this privacy policy, please contact us
            at [contact@email.com].
          </li>
        </ol>

        <p>This privacy policy was last updated on [Date].</p>
      </div>
    </div>
  );
}
