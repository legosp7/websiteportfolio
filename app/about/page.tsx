import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

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
        <Tabs defaultValue="Languages" className="w-full">
        <TabsList className="bg-transparent border-b-2 mb-4">
            <TabsTrigger value="Languages">Languages</TabsTrigger>
            <TabsTrigger value="Technologies">Frameworks</TabsTrigger>
            <TabsTrigger value="Courses Taken">Tools</TabsTrigger>
        </TabsList>
        <TabsContent value="Languages">
            <Card>
                <CardHeader>
                    <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>C++</li>
                        </ul>
                    </CardDescription>
                </CardContent>
            </Card>
        </TabsContent>
        </Tabs>
        
    </section>
    </div>
    )
}