import Container from "@/components/container";
import Banner from "@/components/banner";
import InfoSegment from "@/components/infoSegment";
import CallToAction from "@/components/callToAction";
import Image from 'next/image';
import React from 'react';
import {
    SolutionsBannerImg,
    SolutionsAirlineTicketsImg,
    SolutionsAccommodationImg,
    SolutionsCarRentalImg,
    SolutionsCorporateEventsImg,
    SolutionsPromotionPackagesImg,
    SolutionsCallToActionImg,
    SolutionsWatermark1Img,
    SolutionsWatermark2Img
} from "@/public/img/solutions";

export default function Workflow() {

    const bannerImgs = [
        SolutionsBannerImg,
    ];
    const bannerTitle = 'Transforme suas viagens em experiências excepcionais';
    const bannerSubtitle = 'Seja para destinos nacionais ou internacionais, temos tudo o que você precisa para viajar com conforto e eficiência';

    const segments = [
        {
            imgSrc: SolutionsAirlineTicketsImg,
            imgAlt: "Passagens aéreas",
            isImgRight: false,
            title: "Passagens aéreas",
            mainParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
            secondaryParagraph: "Suspendisse et rhoncus nisl, eu tempor urna.",
            buttonText: "Solicitar cotação",
            buttonLink: "/cotacao-passagens"
        },
        {
            imgSrc: SolutionsAccommodationImg,
            imgAlt: "Hospedagem",
            isImgRight: true,
            title: "Hospedagem",
            mainParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
            secondaryParagraph: "Suspendisse et rhoncus nisl, eu tempor urna.",
            buttonText: "Solicitar cotação",
            buttonLink: "/cotacao-hospedagem"
        },
        {
            imgSrc: SolutionsCarRentalImg,
            imgAlt: "Aluguel de carros",
            isImgRight: false,
            title: "Aluguel de carros",
            mainParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
            secondaryParagraph: "Suspendisse et rhoncus nisl, eu tempor urna.",
            buttonText: "Solicitar cotação",
            buttonLink: "/cotacao-carros"
        },
        {
            imgSrc: SolutionsCorporateEventsImg,
            imgAlt: "Eventos corporativos",
            isImgRight: true,
            title: "Eventos corporativos",
            mainParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
            secondaryParagraph: "Suspendisse et rhoncus nisl, eu tempor urna.",
            buttonText: "Solicitar cotação",
            buttonLink: "/cotacao-eventos"
        },
        {
            imgSrc: SolutionsPromotionPackagesImg,
            imgAlt: "Pacotes promocionais",
            isImgRight: false,
            title: "Pacotes promocionais",
            mainParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
            secondaryParagraph: "Suspendisse et rhoncus nisl, eu tempor urna.",
            buttonText: "Solicitar cotação",
            buttonLink: "/cotacao-eventos"
        }
    ];

    return (
        <Container>
            <Banner 
                images={bannerImgs} 
                title={bannerTitle} 
                subtitle={bannerSubtitle} 
            />
            {segments.map((segment, index) => (
                <React.Fragment key={index}>
                    <InfoSegment
                        imgSrc={segment.imgSrc}
                        imgAlt={segment.imgAlt}
                        isImgRight={segment.isImgRight}
                        title={segment.title}
                        mainParagraph={segment.mainParagraph}
                        secondaryParagraph={segment.secondaryParagraph}
                        buttonText={segment.buttonText}
                        buttonLink={segment.buttonLink}
                    />
                    {index < segments.length - 1 && (
                        <div className="relative py-12 flex justify-center">
                            <Image
                                src={segment.isImgRight ? SolutionsWatermark2Img : SolutionsWatermark1Img}
                                alt="Watermark"
                                width={800}
                                height={200}
                            />
                        </div>
                    )}
                </React.Fragment>
            ))}
            <CallToAction
                backgroundImage={SolutionsCallToActionImg}
                title="Gostou das opções de serviços que oferecemos?"
                subtitle="Nossos agentes estão à sua espera"
                buttonText="Sua jornada começa aqui"
                buttonLink="/contact"
            />
        </Container>
    );
}