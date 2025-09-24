"use client";

import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { useState } from "react";
import Check from "../components/icons/check.svg";
import LinkedIn from "../components/icons/linkedIn.svg";
import Facebook from "../components/icons/facebook.svg";
import Instagram from "../components/icons/instagram.svg";
import Logo from "../public/img/logo.png";
import FooterContact from "./footerContact"; // Importa o novo componente

export default function Footer({
  title,
  description,
  email,
  phone,
  social,
  copyright,
  logo,
  logoalt,
}) {
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Name:", name);
    console.log("Email:", emailInput);
  };

  // Find URLs for each social media
  const facebookURL =
    social?.find((socialItem) => socialItem.media === "facebook")?.url || "#";
  const linkedinURL =
    social?.find((socialItem) => socialItem.media === "linkedin")?.url || "#";
  const instagramURL =
    social?.find((socialItem) => socialItem.media === "instagram")?.url || "#";

  return (
    <div className="bg-dark2">
      <div className="mb-5 px-16 py-8 text-left">
        <a href="#top" className="text-white hover:text-blue-600">
          Voltar ao topo <span className="text-blue-500">↑</span>
        </a>
      </div>
      <div className="flex flex-col gap-8 md:gap-16 px-16 text-sm text-gray-500 dark:text-gray-600 md:flex md:flex-row">
        <div className="w-64">
          <h3 className="text-center font-medium text-white">Receba promoções</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-2 mt-2 w-full rounded border-2 border-grey2 p-2"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="mb-2 mt-2 w-full rounded border-2 border-grey2 p-2"
            />
            <div className="flex items-end justify-end">
              <button
                type="submit"
                className="flex gap-1 rounded bg-blue-700 p-3 font-semibold text-white hover:bg-blue-800"
              >
                Enviar
                <Image src={Check} alt={"check"} width={20} height={20} className="" />
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Localização</h3>
          <p className="w-[300px] text-left text-xs text-grey3 leading-tight">
            Av. Dr. Chucri Zaidan, S/N | Bloco B | 24º Andar | <br />
            Chácara Santo Antônio | São Paulo-SP<br />
            Edifício EZ Towers<br />
            CEP: 04711-130
          </p>
        </div>
        <FooterContact phone={phone} email={email} />
        <div>
          <Image
            src={logo?.asset?.url || Logo}
            alt={logo?.alt || "LOGO INOVTOUR"}
            width="200"
            height="50"
            className="mb-5 mx-auto"
          />
          <div className="mt-2 items-center md:items-start flex flex-col">
            <p className="text-xs text-grey3">
              INOVTOUR VIAGENS E TURISMO LTDA
            </p>
            <p className="text-xs text-grey3">
              CNPJ: 12.207.821/0001-82
            </p>
          </div>
          <div className="mt-16 flex justify-around">
            <a
              href={facebookURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Facebook}
                alt="Facebook"
                width="28"
                height="28"
              />
            </a>
            <a
              href={instagramURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Instagram}
                alt="Instagram"
                width="28"
                height="28"
              />
            </a>
            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={LinkedIn}
                alt="LinkedIn"
                width="28"
                height="28"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-3 pt-12 md:flex-row">
        <div className="flex space-x-4 text-sm font-semibold text-grey1">
          <a href="/terms" className="hover:text-blue-500">
            Condições gerais
          </a>{" "}
          <span>|</span>
          <a href="/privacy-policy" className="hover:text-blue-500">
            Política de Privacidade
          </a>
        </div>
      </div>

      <div className="bg-dark1 py-2 text-center text-sm font-semibold text-white">
      Desenvolvido por Govinda Systems DAO
      </div>
    </div>
  );
}
