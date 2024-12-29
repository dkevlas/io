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
        title: "Yume",
        description: "Aplicación web de compras con carrito de compras y gestión de productos. El frontend está desarrollado en React y Tailwind CSS, mientras que el backend utiliza Express y Mongoose para la gestión de datos. El proyecto incluye un carrito de compras funcional, visualización de productos, y arquitectura modular y escalable. No se implementan pagos reales, ya que el enfoque está en mostrar habilidades técnicas. Todo el sistema está preparado para futuros escalados y mejoras",
        img: "https://global-media-repository.s3.us-east-2.amazonaws.com/app-full-stack/yume-v2/yume-v2.webp",
        linkWeb: "https://yume.sennid.com",
        codeRepo: "https://github.com/dkevlas/yume-v2.git",
        tecnology: [
            {
                name: "React",
                ico: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/frontend/React.png'
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
