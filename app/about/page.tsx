import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

//gonna be using items here
const skills = [
    {
        name: "Python",
        image: "/skills/python.svg",
    },
    {
        name: "Java",
        image: "/skills/Java.svg",
    },
    {
        name: "C",
        image: "/skills/C.svg",
    },
    {
        name: "PostgreSQL",
        image: "/skills/PostgreSQL.svg",
    },
    {
        name: "Typescript",
        image: "/skills/TypeScript.svg",
    },
    {
        name: "React",
        image: "/skills/React.svg",
    },
    {
        name: "HTML5",
        image: "/skills/HTML5.svg",
    },
    {
        name: "TailwindCSS",
        image: "/skills/TailwindCSS.svg",
    },
    {
        name: "Git",
        image: "/skills/Git.svg",
    },
    {
        name: "Python Flask",
        image: "/skills/Flask.svg",
    }
]

const experiences = [
    {
        name: "Astrophysical Research Consortium",
        position: "Control and Operations Software Intern",
        duration: "December 2025 - Present",
        description1: "Responsible for developing and maintaining the Boson observer graphical user interface by enhancing the application's functionality by collaborating with observers from APO and LCO to identify and prioritize key features.",
        description2: "Designed new applications windows, implementing core functionalities, and conducting functional testing using React and Typescript, allowing astronomers to easily view telescope status at a glance, building off of an already existing codebase."
    },
    {
        name: "Apache Point Observatory",
        position: "Software Developer Intern",
        duration: "June 2025 - Present",
        description1: "Developed a web application using Python Flask and Postgresql to allow employees to manage and upload their night log, streamlining the process while allowing ease of use and accessibility by rewriting the system from an older version, reducing the number of windows by 60%.",
        description2: "Gathered user requirements to ensure the final product meets the user’s needs, and ensures that users can smoothly transition from the old platform to the new application, using CSS, HTML, and Javascript to replicate the older format with a new front end."
    },
    {
        name: "University of Arizona Computer Science Department",
        position: "Senior Undergraduate Teaching Assistant",
        duration: "August 2022 - May 2025",
        description1: "Assisted students in understanding course material and completing assignments for the entry-level Python and Java programming courses, which serves as an introduction to programming and computer science concepts for students.",
        description2: "Provided support to students by answering questions, providing feedback on assignments, and facilitating discussions during office hours and review sessions, helping students build a strong foundation in programming and computer science principles."
    },
    {
        name: "New Mexico Tech Department of Computer Science",
        position: "Undergraduate Researcher",
        duration: "June 2023 - August 2023",
        description1: "Helped co-author a paper by working together on a team and developing semi-supervised machine learning models using Python and its libraries such as PyOd to detect electricity theft.",
        description2: "Worked closely with the supervising professor, setting weekly objectives and addressing challenges in implementation of the machine learning models, contributing to the research project and gaining valuable experience in the field of machine learning and data analysis."
    }
]

export default function Page() {
    return (
    <div>
    <section className="mb-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
        Hello there! My name is Stephen Pan, a software developer hopeful and Computer Science graduate 
        from the University of Arizona. I enjoy learning new things, from 3D modeling to web development, 
        and gaming with friends.
    </section>
    <Separator />
    <section className="mb-8 mt-8">
        <h1 className="mb-4 text-xl font-semibold tracking-tighter">Skills and Languages</h1>
        
        <ItemGroup className="grid grid-cols-2 gap-4">
            {skills.map((skill) => {
                return (
                    <Item key={skill.name}>
                        <ItemMedia variant="image">
                            <Image
                                src={skill.image}
                                alt={`${skill.name} logo`}
                                width={32}
                                height={32}
                            />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>{skill.name}</ItemTitle>
                        </ItemContent>
                    </Item>
                )
            })}
        </ItemGroup>
    </section>
    <Separator />
    <section className="mb-8 mt-8">
        <h1 className="mb-4 text-xl font-semibold tracking-tighter">Work Experience</h1>
        {experiences.map((experience) => {
            return (
                <div key={experience.name} className="mb-6">
                    <h2 className="text-lg font-medium tracking-tighter">{experience.name}</h2>
                    <div className="text-sm text-muted-foreground mb-2 flex items-baseline justify-between">
                        <p>{experience.position}</p>
                        <p>{experience.duration}</p>
                    </div>
                    <p className="text-m mb-2">{experience.description1}</p>
                    <p className="text-m mb-2">{experience.description2}</p>
                </div>
            )
        })}
    </section>
    <Separator />
    <section className="mb-8 mt-8">
    <h1 className="mb-4 text-xl font-semibold tracking-tighter">Education</h1>
    <div>
        <h2 className="text-lg font-medium tracking-tighter">University of Arizona</h2>
        <p className="text-sm text-muted-foreground mb-2">Bachelor of Science in Computer Science, May 2025</p>
        <p className="text-xs text-muted-foreground mb-2">Minor in Information Science and Technology Arts</p>
        <p className="text-m mb-2">Relevant Coursework: Discrete Math, Data Structures and Algorithms, Software Development, Database Design, Web and Text Retrieval, Machine Learning</p>
    </div>
    </section>
    <Separator />
    <section className="mb-8 mt-8">
    <a href="/stephenpanresume.pdf" download className="text-primary hover:underline">
        Download my resume!
    </a>
    </section>
        
    </div>
  )
}