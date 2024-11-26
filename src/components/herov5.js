import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import data from "../data/hero.json";
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
      <div
        className="input-group"
      >
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

const Herov5 = ({ isBg }) => {
  const { herov5 } = data;
  return (
    <section
      id="hero"
      className={`hero hero__padding overflow-hidden position-relative ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="circle x1"></div>
      <div className="circle x2"></div>
      <div className="circle x3"></div>
      <div className="circle x4"></div>
      <div className="circle x5"></div>
      <div className="container">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="hero__content position-relative">
              <div className="badge-text mb-2 fs-3 fw-bold">Hello,</div>
              <h1 className="display-4 mb-2 text-capitalize">
                I am {herov5.name}
              </h1>
              <div className="badge-text mb-4 fs-5 fw-bold">{herov5.title}</div>
              <p className="mb-5 fs-5">{herov5.description}</p>
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
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="hero__book">
              <div className="hero__book--wrapper">
                <img className="img-fluid" src={herov5.bookImage} alt="" />
              </div>
            </div>
            <div className="hero__author text-center">
              <div className="hero__author--inner hero__author--inner2">
                <div
                  className="hero__author--inner--pic hero__author--inner2--pic d-flex align-items-end justify-content-center"
                  style={{ backgroundImage: `url(${herov5.writerImage})` }}
                ></div>
                <div className="frame frame-1"></div>
                <div className="frame frame-2"></div>
                <div className="frame frame-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herov5;
