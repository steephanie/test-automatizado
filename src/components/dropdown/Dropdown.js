/*
1- Dropdown comece fechado;
2- Quero que o dropdown mostre as opçoes do menu quando ele for clicado;
3- Quando selecionar um item no menu, fechar o dropdown e indicar qual opção foi selecionado;
*/
// TDD - Desenvolvimento a base de teste;

import { useState } from "react";

export const Dropdown = ({ title, options, onSelect }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSelection = (option) => {
        //console.log(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="buttonDropdown">
            <button onClick={() => setIsOpen(true)}>{title}</button>
            {isOpen && (
                <ul role="menu">
                    {options.map((option) => (
                        <li key={option} role="menuitem" onClick={() => handleSelection(option)}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};