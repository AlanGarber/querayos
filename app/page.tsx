'use client'
import { useEffect } from 'react'
const wash = require('washyourmouthoutwithsoap');



export default function HomePage() {

    const languages = wash.supported();
    console.log(languages);
    const languageChosen = languages[Math.floor(Math.random() * languages.length)];
    console.log(languageChosen);
    

    return (
        <html>
            <body>
                <div>
                    <h1>Que Rayos</h1>
                </div>
                <div>
                    <h3>{languageChosen}</h3>
                </div>
            </body>
        </html>
    );
}