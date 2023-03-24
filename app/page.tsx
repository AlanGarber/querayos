'use client'
import { useEffect, useState } from 'react'
const wash = require('washyourmouthoutwithsoap');
import React from "react";

export default function HomePage() {
    const languages = wash.supported();
    const [posLang,setPosLang]=useState()
    const [languageChosen, setlanguageChosen] = useState('')
    const [badWordLanguageChosen, setbadWordLanguageChosen] = useState()
    const [arrBadWords, setArrBadWords] = useState([])
    const [languagesTranslated, setlanguagesTranslated] = useState([
        'belarusian', 'Bulgarian', 'Catalan', 'Czech', 'Welsh', 'Danish', 'German', 'Greek', 'English', 'Spanish', 'Estonian', 'Basque', 'Farsi', 'Finnish', 'French', 'Gaelic', 'Galician', 'Hindi', 'Croatian', 'Hungarian', 'Armenian', 'Indonesian', 'Icelandic', 'Italian', 'Japanese', 'Kannada', 'Korean', 'Latin', 'Lithuanian', 'Latvian', 'Macedonian', 'Malayalam', 'Mongolian', 'Marathi', 'Malay', 'Maltese', 'Burmese', 'Dutch', 'Polish', 'Portuguese', 'Romanian', 'Russian', 'Slovak', 'Slovenian', 'Albanian', 'Serbian', 'Swedish', 'Telugu', 'Thai', 'Turkish', 'Ukrainian', 'Uzbek', 'Vietnamese', 'Zulu'
    ])


    useEffect(() => {
        setlanguageChosen(languages[Math.floor(Math.random() * languages.length)])
    }, [])

    useEffect(() => {
        setArrBadWords(wash.words(languageChosen))
        setPosLang(languages.indexOf(languageChosen))
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
                    <h3>{languageChosen}</h3>
                    <h3>{languagesTranslated[posLang]}</h3>
                </div>
            </body>
        </html>
    );
}