'use client'
import { useEffect, useState } from 'react'
const wash = require('washyourmouthoutwithsoap');
import React from "react";

export default function HomePage() {
    const languages = wash.supported();
    const [languageChosen, setlanguageChosen] = useState('')
    const [badWordLanguageChosen, setbadWordLanguageChosen] = useState()
    const [arrBadWords, setArrBadWords] = useState([])
    const [languagesTranslated, setLanguagesTranslated] = useState([
        'belarusian', 'Bulgarian', 'Catalan', 'Czech', 'Welsh', 'Danish', 'German', 'Greek', 'English', 'Spanish', 'Estonian', 'Basque', 'Farsi', 'Finnish', 'French', 'Gaelic', 'Galician', 'Hindi', 'Croatian', 'Hungarian', 'Armenian', 'Indonesian', 'Icelandic', 'Italian', 'Japanese', 'Kannada', 'Korean', 'Latin', 'Lithuanian', 'Latvian', 'Macedonian', 'Malayalam', 'Mongolian', 'Marathi', 'Malay', 'Maltese', 'Burmese', 'Dutch', 'Polish', 'Portuguese', 'Romanian', 'Russian', 'Slovak', 'Slovenian', 'Albanian', 'Serbian', 'Swedish', 'Telugu', 'Thai', 'Turkish', 'Ukrainian', 'Uzbek', 'Vietnamese', 'Zulu'
    ])
    const [languagesSelected, setLanguagesSelected] = useState([null, null, null])


    useEffect(() => {
        setlanguageChosen(languages[Math.floor(Math.random() * languages.length)])

        for (let i = 0; i < 3; i++) {
            let newArr = [...languagesSelected];
            newArr[i] = languages[Math.floor(Math.random() * languages.length)];
            setLanguagesSelected(newArr);
            console.log(languagesSelected);
            
        }
    }, [])

    useEffect(() => {
        setArrBadWords(wash.words(languageChosen))
    }, [languageChosen])

    useEffect(() => {
        if (arrBadWords) {
            setbadWordLanguageChosen(arrBadWords[Math.floor(Math.random() * arrBadWords.length)])
        }
    }, [arrBadWords])

    return (
        <html>
            <body>
                <div>
                    <h1>Que Rayos</h1>
                </div>
                <div>
                    <h3>{badWordLanguageChosen}</h3>
                    <h3>{languagesTranslated[languages.indexOf(languageChosen)]}</h3>
                    <h3>{languagesSelected[0]}</h3>
                    <h3>{languagesSelected[1]}</h3>
                    <h3>{languagesSelected[2]}</h3>
                </div>
            </body>
        </html>
    );
}