import React from 'react';
import { SearchIcon, WikipediaIcon } from '../components/Icon/IconList';
import { cssConstants } from './cssConstants';

export const constants = {
    progressBar: {
        maxValue: 100,
    },
    photos: {
        size: '533px',
    },
    hero: {
        background: {
            width: '1200px',
            height: '630px',
            fileName: 'PopeFrancis.jpg'
        },
        navBar: {
            title: 'Rule of Thumb.',
            linkArray: [
                {
                    id: 1,
                    route: '/past-trials',
                    children: 'Past Trials'
                },
                {
                    id: 2,
                    route: '/',
                    children: 'How it Works'
                },
                {
                    id: 3,
                    route: '/',
                    children: 'Log in/Sign Up'
                },
                {
                    id: 4,
                    route: '/',
                    children: <SearchIcon width={2} color={cssConstants.colors.white.hex}/>
                }
            ]   
        },
        character:
        {
            smallText: 'whats\'s your opinion on',
            biggestText: 'Pope Francis?',
            description: 'He\'s talking tought on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
            moreInfo:
            {
                link: '#',
                text: ' More Information',
                icon: ( width, color ) => (<WikipediaIcon width={width} color={color}/>)
            },
            bigText: 'What\'s Your Veredict?',
        },
    },
    candidates: [
        { 
            id:1, 
            fileName:'kanye-west.jpg',
            name: 'kayne west',
            lastUpdate: '1 month ago in Entretaiment',
            aditionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        },
        { 
            id:2, 
            fileName:'mark-zuckerberg.jpg',
            name: 'mark zuckerberg',
            lastUpdate: '1 month ago in Busisness',
            aditionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        { 
            id:3, 
            fileName:'cristina-fernandez-de-kirchner.jpg',
            name: 'cristina fernández de kirchner',
            lastUpdate: '1 month ago in Politics',
            aditionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        { 
            id:4, 
            fileName:'malala.jpg',
            name: 'malala yousafzai',
            lastUpdate: '1 month ago in Entretaiment',
            aditionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
};
