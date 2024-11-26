import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import data from "../data/cta.json";
import { mailchimpLink } from "../global";

//SUBSCRIBE FORM
function SubscribeForm({ status, message, onValidated }) {
  let email;
  const submit = (e) => {
    e.preventDefault();
    onValidated({
      EMAIL: email.value,
    });
  };

  return (
    <form>
      <div className="input-group">
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <button className="button button__primary" onClick={submit}>
          <span>Subscribe</span>
        </button>
      </div>
      <div className="message col m-10px-t hero__subscribe__form__message">
        {status === "sending" && (
          <div className=" alert alert-warning">sending...</div>
        )}
        {status === "error" && (
          <div
            className="alert alert-danger"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
      {status === "success" && (
        <div
          className="alert alert-success hero__subscribe__form__success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </form>
  );
}

const Ctav2 = ({ isBg }) => {
  const { ctav2 } = data;
  return (
    // <!-- ========== CTA v2 section start ========== -->
    <section
      id="cta2"
      className={`cta2 section-padding  ${isBg === "yes" ? "bg-one" : ""}`}
      style={{ backgroundImage: `url(${ctav2.backgroundImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="cta2__wrapper">
              <div className="section-title text-left">
                <span className="badge-text">{ctav2.title}</span>
                <h2 className="display-6 m-20px-b">{ctav2.subtitle}</h2>
              </div>
              <div className="cta2__form">
                <MailchimpSubscribe
                  url={mailchimpLink.link}
                  render={({ subscribe, status, message }) => (
                    <SubscribeForm
                      status={status}
                      message={message}
                      onValidated={(formData) => subscribe(formData)}
                    />
                  )}
                />
                <p className="m-10px-t">
                  <small>{ctav2.smallText}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== CTA v2 section end ========== -->
  );
};

export default Ctav2;
