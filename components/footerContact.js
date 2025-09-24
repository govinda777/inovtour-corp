// components/FooterContact.js

import React from "react";

const FooterContact = ({ phone, email }) => {
  const whatsappURL = `https://wa.me/${phone?.replace(/[^0-9]/g, "")}`;

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-base font-semibold text-white">Contato</h3>
      <p className="text-xs text-grey3">
      Atendimento Exclusivo e Personalizado 7/24hs
      </p>
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-500 hover:text-blue-700"
      >
        {phone}
      </a>
      <p className="text-xs text-grey3">{email}</p>
    </div>
  );
};

export default FooterContact;
