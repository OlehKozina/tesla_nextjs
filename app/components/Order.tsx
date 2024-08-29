import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface OrderProps {
  onOrderClose: () => void;
}

const Order: React.FC<OrderProps> = ({ onOrderClose }) => {
  return (
    <section className="relative z-30">
      <div className="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-[rgba(0, 0, 0, 0.5)] px-0 py-5">
        <div className="relative w-full max-w-[880px] h-full max-h-[880px] bg-primary-red text-white rounded-[32px] p-12 pt-[100px] overflow-auto text-center shadow-lg">
          <button
            className="relative border-none bg-transparent cursor-pointer float-right top-[-50px]"
            type="button"
          >
            <FontAwesomeIcon
              icon={faXmark}
              onClick={onOrderClose}
              className="text-xl text-white"
            />
          </button>
          <div className="modal__form_margin"></div>
          <h2 className="mb-2 text-5xl section-titles">Order a car</h2>
          <p className="relative mx-auto mt-0 mb-[72px] text-lg">
            Fill out the form so we can contact you!
          </p>
          <form className="modal__form" name="contact-form">
            <div className="form-field">
              <label className="form-field__label hidden">Name</label>
              <input
                className="py-4 px-10 mb-10 w-[60%] rounded-lg border-solid border-pink-300 bg-white text-base leading-[1.17]"
                type="text"
                id="user-name"
                name="user-name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-field">
              <label className="form-field__label hidden">Phone</label>
              <input
                className="py-4 px-10 mb-10 w-[60%] rounded-lg border-solid border-pink-300 bg-white text-base leading-[1.17]"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone"
                pattern="^\+[0-9]{12}"
                required
              />
            </div>
            <div className="form-field">
              <label className="form-field__label hidden">E-mail</label>
              <input
                className="py-4 px-10 mb-10 w-[60%] rounded-lg border-solid border-pink-300 bg-white text-base leading-[1.17]"
                type="email"
                id="e-mail"
                name="e-mail"
                placeholder="Your e-mail"
                required
              />
            </div>
            <button
              className="text-sm font-bold leading-10 text-center uppercase bg-primary-red text-[#fff] border-solid border-pink min-w-[180px] h-10 mt-3 mb-5 ml-0 mr-10 cursor-pointer button"
              type="submit"
            >
              Contact us
            </button>
            <p className="form-field__terms">
              <input className="checkbox" type="checkbox" />I agree to the
              <a className="text-white font-semibold link ml-2" href="#">
                privacy policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order;
