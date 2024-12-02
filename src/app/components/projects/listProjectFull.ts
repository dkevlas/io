export interface ProjectsFull{
    title?: string,
    img?: string,
    description?: string,
    linkWeb?: string,
    codeRepo?: string
    tecnology: Tech[]
};

interface Tech {
    name: string,
    ico: string
}
export const projectsFull: ProjectsFull[] = [
    {
        title: 'Notes',
        description: 'Aplicación web de gestión de notas con frontend minimalista y responsivo desarrollado en React y Tailwind CSS, y backend implementado en Express con JWT y bcrypt para autenticación segura mediante cookies. El proyecto incluye funcionalidad CRUD completa, autenticación de usuarios, rutas lazy para optimizar la carga y componentes reutilizables para mejorar la escalabilidad. Está desplegado en Render (backend) y Vercel (frontend).',
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/projects-full/notes.jpg',
        linkWeb: 'https://notes-app-v1-theta.vercel.app/',
        codeRepo: 'https://github.com/dkevlas/notes-app-v1.git',
        tecnology: [
            {
                name: 'React',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/React.png', 
            },
            {
                name: 'NodeJs',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/backend/node.png'
            },
            {
                name: 'MongoDB',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/backend/mongodb.png'
            },
            {
                name: 'Tailwind CSS',
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/TailwindCSS.png'
            }
        ]
    },
]
