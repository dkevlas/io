export interface Logo {
    name: string,
    img: string,
};

export const frontend: Logo[] = [
    // {
    //     name: 'HTML5',
    //     img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/html-5.png'
    // },
    // {
    //     name: 'CSS3',
    //     img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/css-3.png'
    // },
    {
        name: 'React',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/React.png', 
    },
    {
        name: 'JavaScript',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/javascript.png'
    },
    {
        name: 'TypeScript',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/typescript.png',
    },
    {
        name: 'Angular',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/angular.png'
    },
    {
        name: 'Tailwind CSS',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/TailwindCSS.png'
    },
    {
        name: 'SASS',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/sass.png'
    },
]

export const backend: Logo[] = [
    {
        name: 'NodeJs',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/backend/node.png'
    },
    {
        name: 'Express',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/backend/express.png',
    },
    {
        name: 'MongoDB',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/backend/mongodb.png'
    }
]

export const tools: Logo[] = [
    {
        name: 'npm',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/tools/npm.png'
    },
    {
        name: 'Ilustrator',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/tools/ilustrador.png'
    },
    {
        name: 'Photoshop',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/tools/photoshop.png'
    },
    {
        name: 'S3',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/tools/simple-storage-service.png'
    },
    {
        name: 'Linux',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/tools/linux.png'
    },
    {
        name: 'Git',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/tools/git.png'
    },
    {
        name: 'GitHub',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/tools/github.jpg'
    }
]

export const allLogos: Logo[][] = [
    frontend,
    backend,
    tools
];