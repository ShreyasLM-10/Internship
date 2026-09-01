import { useState } from "react";
import Button from "./Button";

/**
 * Reusable contact Form with controlled inputs and validation.
 *
 * Props:
 *   formTitle – heading displayed above the form (string)
 */
function Form({ formTitle = "Get In Touch" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate a single field and return an error string or empty string
  function validateField(name, value) {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Email is required.";
        // Simple email pattern check
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return "Please enter a valid email address.";
        return "";
      case "message":
        if (!value.trim()) return "Message is required.";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters.";
        return "";
      default:
        return "";
    }
  }

  // Validate the entire form; returns true if valid
  function validateAll() {
    const newErrors = {};
    for (const key of Object.keys(formData)) {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateAll()) return;

    // Simulate successful submission (no server call)
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  }

  // Conditional rendering: show success message after submission
  if (submitted) {
    return (
      <section className="form-section" id="contact">
        <div className="form-success">
          <span className="form-success__icon" aria-hidden="true">✓</span>
          <h2 className="form-success__title">Message Sent!</h2>
          <p className="form-success__text">
            Thank you for reaching out. We will get back to you soon.
          </p>
          <Button
            text="Send Another Message"
            variant="secondary"
            onClick={() => setSubmitted(false)}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="form-section" id="contact">
      <h2 className="section__title">{formTitle}</h2>
      <p className="section__subtitle">
        Have a question or want to work together? Drop us a message.
      </p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        {/* Name field */}
        <div className="form__group">
          <label htmlFor="form-name" className="form__label">
            Name
          </label>
          <input
            id="form-name"
            name="name"
            type="text"
            className={`form__input ${errors.name ? "form__input--error" : ""}`}
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            maxLength={100}
            required
            autoComplete="name"
          />
          {errors.name && (
            <p className="form__error" role="alert">
              ⚠ {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div className="form__group">
          <label htmlFor="form-email" className="form__label">
            Email
          </label>
          <input
            id="form-email"
            name="email"
            type="email"
            className={`form__input ${errors.email ? "form__input--error" : ""}`}
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            maxLength={254}
            required
            autoComplete="email"
          />
          {errors.email && (
            <p className="form__error" role="alert">
              ⚠ {errors.email}
            </p>
          )}
        </div>

        {/* Message field */}
        <div className="form__group">
          <label htmlFor="form-message" className="form__label">
            Message
          </label>
          <textarea
            id="form-message"
            name="message"
            className={`form__textarea ${errors.message ? "form__input--error" : ""}`}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            maxLength={1000}
            required
          />
          {errors.message && (
            <p className="form__error" role="alert">
              ⚠ {errors.message}
            </p>
          )}
        </div>

        <div className="form__actions">
          <Button text="Send Message" type="submit" variant="primary" />
          <Button
            text="Reset"
            type="reset"
            variant="secondary"
            onClick={() => {
              setFormData({ name: "", email: "", message: "" });
              setErrors({});
            }}
          />
        </div>
      </form>
    </section>
  );
}

export default Form;
