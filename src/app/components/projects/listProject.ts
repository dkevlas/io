interface Image {
    small: string,
    medium: string,
    large: string
}

export interface Projects {
    idProject: string,
    title: string,
    imgOriginal: string,
    description: string,
    images: Image,
    link?: string,
    codeRepo?: string,
    technology: Tech[]
}

interface Tech {
    name: string,
    ico: string
}
export const projects: Projects[] = [
    {
        idProject: 'harry-potter',
        title: 'Harry Potter',
        imgOriginal: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-04-Harry-Potter/original.webp',
        description: ' He desarrollado una versión responsive e interactiva, donde no solo he replicado el diseño, sino que también he creado acciones para esos botones, aportando así una nueva dimensión al proyecto.',
        images: {
            small: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-04-Harry-Potter/small.jpg',
            medium: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-04-Harry-Potter/medium.jpg',
            large: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-04-Harry-Potter/large.jpg',
        },
        codeRepo: 'https://dkevlas.github.io/harry-potter/',
        technology: [
            {
                name: 'HTML',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/html.svg',
            },
            {
                name: 'SCSS',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/sass.svg', 
            },
            {
                name: 'TYPESCRIPT',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/typescript.svg', 
            },
            {
                name: 'ANGULAR',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/angular.svg'
            }            
        ],
        link: 'https://dkevlas.github.io/harry-potter/'
    },
    {
        idProject: 'game-of-thrones',
        title: 'Game Of Thrones',
        imgOriginal: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-03-Game-Of-Thrones/light/Design-Original.jpg',
        description: 'Este proyecto recrea una web inspirada en una imagen de Game of Thrones. Originalmente solo era para escritorio, pero lo he hecho responsive, añadiendo interacción y lógica con SCSS, TypeScript y Angular.',
        images: {
            small: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-03-Game-Of-Thrones/light/Mobile-Large.webp',
            medium: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-03-Game-Of-Thrones/light/Tablet-Large.webp',
            large: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-03-Game-Of-Thrones/light/Laptop-Standard.webp'
        },
        codeRepo: 'https://github.com/dkevlas/GameOfThonesClone.git',
        technology: [
            {
                name: 'HTML',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/html.svg',
            },
            {
                name: 'SCSS',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/sass.svg', 
            },
            {
                name: 'TYPESCRIPT',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/typescript.svg', 
            },
            {
                name: 'ANGULAR',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/angular.svg'
            }  
        ],
        link: 'https://dkevlas.github.io/got-web/'
    },
    {
        idProject: 'your-name',
        title: 'Your Name',
        imgOriginal: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-01-Your-Name/light/Design-Original.webp',
        description: 'Este proyecto mejora un diseño web encontrado en Pinterest. Lo adapté a un formato responsivo para celular, tablet y desktop usando Angular. Es modular, pero no incluye interacciones.',
        images: {
            small: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-01-Your-Name/light/Mobile-Large.webp',
            medium: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-01-Your-Name/light/Tablet-Large.webp',
            large: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-01-Your-Name/light/Laptop-Standard.webp'
        },
        codeRepo: 'https://github.com/dkevlas/YourNameClone.git',
        technology: [
            {
                name: 'HTML',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/html.svg',
            },
            {
                name: 'SCSS',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/sass.svg', 
            },
            {
                name: 'ANGULAR',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/angular.svg'
            }
        ]
    },
    {
        idProject: 'native',
        title: 'Native',
        imgOriginal: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-02-Native/light/Design-Original.webp',
        description: 'Este proyecto mejora un diseño web de Pinterest. Adapté el original, que solo era para una pantalla, a un formato responsivo para celular, tablet y desktop. Solo utilicé HTML y SCSS, sin interacción.',
        images: {
            small: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-02-Native/light/Mobile-Large.webp',
            medium: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-02-Native/light/Tablet-Large.webp',
            large: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-02-Native/light/Laptop-Standard.webp'
        },
        codeRepo: 'https://github.com/dkevlas/NativeClone.git',
        technology: [
            {
                name: 'HTML',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/html.svg',
            },
            {
                name: 'SCSS',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/icons-svg/sass.svg', 
            },
        ],
    }
]