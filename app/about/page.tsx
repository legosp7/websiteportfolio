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
        <h1 className="mb-4 text-xl font-semibold tracking-tighter">Skills</h1>
        
        <ItemGroup>
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
    </div>
    )
}