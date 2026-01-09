import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Left Sidebar Navigation */}
          <nav className="hidden md:block sticky top-8">
            <div className="space-y-4">
              <a
                href="#about"
                className="block text-foreground hover:text-primary transition-colors text-lg"
              >
                About
              </a>
              <a
                href="#education"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Education
              </a>
              <a
                href="#projects"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
            </div>
          </nav>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Header */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Amicable Monye
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Computer Science Student
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Second-year Computer Science student with hands-on full-stack
                development experience and strong foundation in web
                technologies. Proficient in JavaScript/TypeScript, Java, and SQL
                with growing expertise in Microsoft technologies (Azure, C#).
                Experienced collaborating in Agile environments with real
                clients to deliver functional software solutions. Eager to apply
                modern development skills to enterprise Windows management
                systems.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Halifax, NS</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (902) 448-2225</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:amixmonye@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    amixmonye@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/amicable-monye-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/Amicablemonye"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Education Section */}
            <section id="education">
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">
                        Bachelor of Computer Science
                      </h3>
                      <span className="text-muted-foreground text-sm">
                        2024 – 2027
                      </span>
                    </div>
                    <p className="text-primary mb-2">Dalhousie University</p>
                    <p className="text-muted-foreground">Halifax, NS</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">
                        Bachelor of Information Technology
                      </h3>
                      <span className="text-muted-foreground text-sm">
                        2023 – 2024
                      </span>
                    </div>
                    <p className="text-primary mb-2">St Francis College</p>
                    <p className="text-muted-foreground">Brooklyn, NY</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
              <h2 className="text-3xl font-bold mb-8">Projects</h2>
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">
                        Weather App Using an API
                      </h3>
                      <Badge variant="secondary">
                        <p>
                          In Progress
                          <br />
                          Dec 2025 - Present
                        </p>
                      </Badge>
                    </div>
                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Integrated third-party API (OpenWeatherMap) with
                          authentication and JSON parsing—experience relevant to
                          integrating with Microsoft APIs (Active Directory,
                          Azure services)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implemented comprehensive error handling for network
                          failures, invalid inputs, and service
                          degradation—defensive programming practices essential
                          for enterprise software
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Currently refactoring to Flask web application to gain
                          experience building server-side applications and web
                          interfaces, expanding full-stack capabilities
                        </span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">REST API Integration</Badge>
                      <Badge variant="outline">Flask</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold mb-4">
                        Student Task Manager
                      </h3>
                      <Badge variant="secondary">
                        <p>May 2025 - July 2025</p>
                      </Badge>
                    </div>
                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Built web-based task management application using
                          modern JavaScript frameworks (Next.js/React) and
                          TypeScript for type safety—demonstrates proficiency in
                          web development technologies aligned with Quest's
                          management console interfaces
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implemented component-based UI architecture with
                          reusable elements (forms, cards, navigation) following
                          software design patterns applicable to enterprise
                          management dashboards
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Designed data persistence layer using browser storage
                          with error handling for edge cases—experience
                          applicable to building reliable client-side enterprise
                          applications
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Applied responsive HTML5/CSS3 design ensuring
                          interface works across different screen sizes and
                          browsers, important for cross-platform management
                          tools
                        </span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">HTML5</Badge>
                      <Badge variant="outline">Tailwind CSS</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Experience Section */}
            <section id="Pexperience">
              <h2 className="text-3xl font-bold mb-8">
                Professional Experience
              </h2>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        Team Software Development Project
                      </h2>

                      <h3 className="text-xl font-semibold">
                        Design and Innovation in Entrepreneurship Course
                      </h3>
                      <p className="text-primary">St Francis College</p>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      02.2023 – 12.2023
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Worked in 7-person development team on web application
                        project, coordinating with multiple contributors using
                        shared codebase and version control
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Collaborated with external stakeholders (Shepherd's Food
                        Bank) to gather requirements and understand real-world
                        user needs
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Tested and documented software defects systematically,
                        providing detailed reproduction steps and actionable
                        feedback to development team
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Presented technical work to non-technical audience,
                        developing communication skills essential for working
                        with enterprise customers
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Skills Section */}
            <section id="skills">
              <h2 className="text-3xl font-bold mb-8">Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      Technical Skills
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium mb-2">Programming</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Java</Badge>
                          <Badge variant="secondary">Python</Badge>
                          <Badge variant="secondary">JavaScript</Badge>
                          <Badge variant="secondary">C (Flex)</Badge>
                          <Badge variant="secondary">
                            JavaScript/TypeScript
                          </Badge>
                          <Badge variant="secondary">SQL</Badge>
                          <Badge variant="secondary">C# (learning)</Badge>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Frameworks</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">Next.js</Badge>
                          <Badge variant="secondary">Tailwind CSS</Badge>
                          <Badge variant="secondary">Agile/scrum(Flex)</Badge>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Foundations</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">OOP</Badge>
                          <Badge variant="secondary">Data Structures</Badge>
                          <Badge variant="secondary">JUnit</Badge>
                          <Badge variant="secondary">Regex</Badge>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Tools</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Git</Badge>
                          <Badge variant="secondary">GitHub</Badge>
                          <Badge variant="secondary">VS Code</Badge>
                          <Badge variant="secondary">Command Terminal</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      Soft Skills
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Communication and teamwork</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Problem-solving and analytical skills</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Adaptability and learning mindset</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Leadership and collaboration</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Time management and organization</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Creativity and innovation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © 2025 Amicable Monye. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
