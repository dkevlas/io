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
    codeRepo: string,
    technology: string[]
}

export const projects: Projects[] = [
    {
        idProject: 'game-of-thrones',
        title: 'Game Of Thrones',
        imgOriginal: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-03-Game-Of-Thrones/Design-Original.jpg',
        description: 'imagen 1',
        images: {
            small: '',
            medium: '',
            large: ''
        },
        codeRepo: 'https://github.com/dkevlas/GameOfThonesClone.git',
        technology: ['HTML', 'SASS', 'TYPESCRIPT', 'ANGULAR'],
        link: 'https://dkevlas.github.io/got-web/'
    },
    {
        idProject: 'your-name',
        title: 'Your Name',
        imgOriginal: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-01-Your-Name/Design-Original.jpg',
        description: 'imagen 2',
        images: {
            small: '',
            medium: '',
            large: ''
        },
        codeRepo: 'https://github.com/dkevlas/YourNameClone.git',
        technology: ['HTML', 'SASS', 'ANGULAR']
    },
    {
        idProject: 'native',
        title: 'Native',
        imgOriginal: 'https://my-design-imitations.s3.us-east-2.amazonaws.com/design-02-Native/Design-Original.png',
        description: 'imagen 3',
        images: {
            small: '',
            medium: '',
            large: ''
        },
        codeRepo: 'https://github.com/dkevlas/NativeClone.git',
        technology: ['HTML', 'SASS'],
    },
]