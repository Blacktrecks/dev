import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Ecoplant',
        description: "Me and my team created Ecoplant, a friendly and smart companion for your plants. ",
        tools: ['React', 'Django', 'OpenAI API', 'Android', 'Docker', 'Node','Nginx'],
        role: 'FrontEnd Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Cooking Master App',
        description: 'I have designed and developed a full-stack web app for managing cooking recipes. I created the UI using Bootstrap, JavaScript, MUI, TailwindCSS, and React .',
        tools: ['JavaScript', 'Tailwind CSS', "Firebase", "NestJS", "Bootstrap", "Netifly", "Material UI"],
        role: 'Full Stack Developer',
        code: 'https://github.com/Blacktrecks/proiect-egc328',
        demo: 'https://github.com/Blacktrecks/proiect-egc328',
        image: travel,
    },
    {
        id: 3,
        name: 'Ecomerce ',
        description:'We created an eco-friendly e-commerce application using Angular for the frontend and C# for the backend. Our goal was to provide users with a seamless shopping experience while promoting sustainable practices.',
        tools: ['TypeScript', 'MySql', "C#", "AUth0", "Bootstrap", "Azure", "Material UI","Angular"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },