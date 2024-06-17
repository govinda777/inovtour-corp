// src/components/Workflow.js

import React, { useState } from 'react';
import './Workflow.css';

const steps = [
    {
        title: "Tipo de Passagens",
        options: [
            { text: "Corporativas", value: "corporativas" },
            { text: "Lazer", value: "lazer" }
        ]
    },
    {
        title: "Tamanho da Sua Empresa",
        options: [
            { text: "Pequena - 1 / 20 Pessoas", value: "pequena" },
            { text: "Média - 21 / 50 Pessoas", value: "media" },
            { text: "Grande - +50 Pessoas", value: "grande" }
        ]
    },
    {
        title: "Planos de Assinatura",
        options: [
            { text: "Free (SOS)", value: "free" },
            { text: "Silver", value: "silver" },
            { text: "Gold", value: "gold" }
        ]
    },
    {
        title: "Chamar a Ação",
        options: [
            { text: "Lista de Serviços", value: "lista_servicos" },
            { text: "Faça uma Cotação", value: "faca_cotacao" },
            { text: "Fale com os Nossos Consultores", value: "fale_consultores" }
        ]
    }
];

const Workflow = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [userPath, setUserPath] = useState([]);

    const handleOptionClick = (stepIndex, option) => {
        const newPath = [...userPath, { step: steps[stepIndex].title, selection: option.text }];
        setUserPath(newPath);

        if (stepIndex < steps.length - 1) {
            setCurrentStepIndex(stepIndex + 1);
        } else {
            alert('Obrigado! Todas as informações foram preenchidas.');
            console.log(newPath);
        }
    };

    const renderStep = (stepIndex) => {
        const step = steps[stepIndex];

        return (
            <div className="step">
                <div className="step-title">{step.title}</div>
                {step.options.map((option, index) => (
                    <div className="option" key={index}>
                        <button onClick={() => handleOptionClick(stepIndex, option)}>
                            {option.text}
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div id="workflow-container">
            {renderStep(currentStepIndex)}
        </div>
    );
};

export default Workflow;
