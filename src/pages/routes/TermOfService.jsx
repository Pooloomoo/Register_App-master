import React from "react";

export default function TermOfService() {
  return (
    <div className="container" style={{ width: "50%" }}>
      <div className="col">
        <h1>Term of Service</h1>
        <p className="text-sm">last update 12/01/2023</p>

        <div className="mb-4">
          <ol>Acceptance of Terms</ol>
          <li>
            By using our website or application, you agree to comply with and be
            bound by the following terms and conditions.
          </li>
          <li>
            If you do not agree to these terms, please refrain from using our
            services.
          </li>
        </div>
        <div className="mb-4">
          <ol>User Conduct</ol>
          <li>
            Users are responsible for maintaining the confidentiality of their
            account information and passwords.
          </li>
          <li>
            Users agree not to engage in any activity that disrupts or
            interferes with the functionality of our website or application.
          </li>
          <li>
            Users must provide accurate and updated information during the
            registration process.
          </li>
        </div>

        <div className="mb-4">
          <ol>Intellectual Property</ol>
          <li>
            All content on our website or application, including text, graphics,
            logos, and images, is the property of [Your Company] and is
            protected by intellectual property laws.
          </li>
          <li>
            Users may not reproduce, distribute, or use any content from our
            website or application without prior written consent.
          </li>

          <div className="mb-4">
            <ol>Privacy Policy</ol>
            <li>
              Users agree to the terms outlined in our Privacy Policy regarding
              the collection and use of personal information.
            </li>
            <li>
              Our Privacy Policy is an integral part of these Terms of Service.
            </li>
          </div>

          <div className="mb4">
            <ol>Termination of Services</ol>
            <li>
              [Your Company] reserves the right to terminate or suspend services
              to users who violate these terms or engage in fraudulent or
              unlawful activities.
            </li>
          </div>

          <div className="mb-4">
            <ol>Changes to Terms</ol>
            <li>
              [Your Company] may update or modify these terms at any time
              without prior notice.
            </li>
            <li>
              Users are encouraged to review the terms periodically for changes.
            </li>
          </div>

          <div className="mb-4">
            <ol>Limitation of Liability</ol>
            <li>
              [Your Company] is not liable for any direct, indirect, incidental,
              consequential, or punitive damages resulting from the use or
              inability to use our website or application.
            </li>
          </div>

          <div className="mb-4">
            <ol>Governing Law</ol>
            <li>
              These terms are governed by and construed in accordance with the
              laws of [Your Country/State].
            </li>
          </div>

          <div className="mb-4">
            <ol>Contact Information</ol>
            <li>
              For inquiries or concerns regarding these terms, please contact us
              at [contact@email.com].
            </li>
          </div>

          <div>These Terms of Service were last updated on 12/01/2023.</div>
        </div>
      </div>
    </div>
  );
}
