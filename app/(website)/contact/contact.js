"use client";

import Container from "@/components/container";
import Image from "next/image";
import Unsplash from "@/components/img/unsplash.png";
import Phone from "@/components/icons/phone.svg";
import MapPin from "@/components/icons/map-pin.svg";
import MessageCircle from "@/components/icons/message-circle.svg";
import Email from "@/components/icons/mail.svg";
import FormFields from "@/components/formFields";
import EventTracker from "@/components/eventTracker";

export default function Contact() {
  const contact = [
    {
      icon: Phone,
      title: "+55 (11) 99999-9999",
    },
    {
      icon: Email,
      title: "E-mail: exclusivo@inovtour.com", 
    },
    {
      icon: MessageCircle,
      title: "Atendimento 7/24hs",
    },
  ];

  return (
    <>
      <EventTracker eventName="pageView" eventParams={{ page: "ContactPage" }} />
      <div>
        <Image
          src={Unsplash}
          width={200}
          height={200}
          alt=""
          className="w-full md:flex hidden"
        />
      </div>
      <div className="md:absolute md:top-20 flex w-full flex-col items-center md:flex-row">
        <div className="mx-auto rounded-lg bg-white p-6 md:w-1/2">
          <h3 className="mb-4 text-center text-2xl md:text-3xl font-semibold text-gray-900">
            Fale com a INOVTOUR
          </h3>
          <p className="mb-4 text-center text-xs md:text-sm text-gray-700">
            Preencha as informações e nossos especialistas irão entrar em contato com você.
          </p>
          <FormFields />
        </div>
      </div>
      <Container>
        <div className="flex md:flex-row flex-col justify-between py-14 md:gap-0 gap-8">
          <div className="flex flex-col gap-5 text-left">
            <p className="text-3xl font-medium">Caso prefira entrar em contato</p>
            {contact.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image src={item.icon} width={28} height={28} alt={item.title} />
                <p className="text-lg text-dark2">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 text-left">
            <p className="text-3xl font-medium">Nossa localização</p>
            <div className="flex items-center md:items-start gap-2">
              <Image src={MapPin} width={28} height={28} alt="Map Pin" />
              <p className="w-96 text-lg text-dark2">
                Endereço: Av. Dr. Chucri Zaidan, S/N | Bloco B | 24º Andar | <br />
                Chácara Santo Antônio | São Paulo-SP
                <br />
                Edifício EZ Towers
                <br />
                CEP: 04711-130
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
