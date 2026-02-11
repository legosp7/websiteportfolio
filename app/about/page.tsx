import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
    return (
    <div>
    <section className="mb-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
        Hello there! My name is Stephen Pan, a software developer hopeful and Computer Science graduate 
        from the University of Arizona. I enjoy learning new things, from 3D modeling to web development, 
        and gaming with friends.
    </section>
    
    <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Skills</h2>
        <Tabs defaultValue="account" className="w-100">
            <TabsList>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="education">
                <h3>University of Arizona</h3>
                <h4>Tucson, Arizona</h4>
                <p>Bachelor of Science in Computer Science, May 2025</p>
                <p>Minor in Information Science and Technology Arts</p>
            </TabsContent>
            <TabsContent value="skills">Change your password here.</TabsContent>
        </Tabs> 
    </section>
    </div>
    )
}