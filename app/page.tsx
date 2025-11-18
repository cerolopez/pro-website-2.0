import Hero from './components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <div className="pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 px-4 md:px-16 lg:px-20 py-8 md:py-12">
            <section id="about" className="pb-16 pt-8 scroll-mt-16 mx-4 md:mx-8 lg:mx-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">
                About
              </h2>
              <div className="text-left space-y-12">
                <div className="space-y-4">
                  <p className="text-base text-black dark:text-gray-300">
                  I've always been a maker at heart, whether I'm writing, designing, or building with code. That creative foundation combined with technical curiosity has shaped my career. With a BA in linguistics, an MS in computer science, and over a decade in digital content, I've found my niche making AI experiences intuitive and human-centered.
                  </p>
                  <p className="text-base text-black dark:text-gray-300">
                    My career has taken me from content editing at an e-learning startup to Meta's research marketing team, and most recently into AI and prompt engineering. After being laid off in 2022 while enrolled in grad school, I was able to fully focus on my master's coursework at Northeastern, graduating in 2024 with a focus on NLP, frontend web development, and HCI/UX.
                  </p>
                  <p className="text-base text-black dark:text-gray-300">
                    These days, I'm based in San Jose, working on projects that combine generative AI, UX design, and content strategy. I'm particularly drawn to work that makes powerful technology feel approachable and intuitive. Whether I'm crafting prompts, designing interfaces, or developing web applications, I'm always thinking about the humans on the other side of the screen.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

            <section id="experience" className="pb-16 pt-8 scroll-mt-16 mx-4 md:mx-8 lg:mx-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">
                Experience
              </h2>
              <div className="space-y-12">
                {/* Job Entry 1 */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3 sm:flex-shrink-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
                      August 2025 – October 2025
                    </p>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-md font-bold text-black dark:text-white mb-2">
                      AI/Prompt Engineer - Fleek
                    </h3>
                    <p className="text-sm text-black dark:text-gray-300 mb-3">
                      Developing system instructions for AI character creation flow, including AI image generation and LLM chat. Bridging the gap between product and engineering by refining UX flows to be developer- and user-friendly
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        AI Characters
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        LLM Chatbots
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        AI Image Gen
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Entry 2 */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3 sm:flex-shrink-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
                      May 2025 – August 2025
                    </p>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-md font-bold text-black dark:text-white mb-2">
                      UX Writer & Content Designer - Google via Dexian
                    </h3>
                    <p className="text-sm text-black dark:text-gray-300 mb-3">
                      Analyzed the quality of datasets used for LLM training and fine tuning. Developed LLM evaluation rubrics to quantify dataset quality. Fact-checked prompt responses generated by LLMs and human curators. Led small team of curators in generating golden datasets for LLM training
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        LLMs
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Dataset Curation
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Data Analysis
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Entry 3 */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3 sm:flex-shrink-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
                      May 2024 – May 2025
                    </p>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-md font-bold text-black dark:text-white mb-2">
                      Content Developer - SRI via AMF Media
                    </h3>
                    <p className="text-sm text-black dark:text-gray-300 mb-3">
                      Curated web design and UX on external branded website to reduce friction in user experience. Conducted user interviews for internal comms site in order to identify pain points with the goal of improving employees' experiences and increasing efficiency. Created wire frames in Figma informed by UX design principles and research results to reduce the risk of having to either rebuild the product and incur additional cost or compromise quality
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        UX Research
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Content Design
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Content Strategy
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Entry 4 */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3 sm:flex-shrink-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
                      August 2023 - May 2024
                    </p>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-md font-bold text-black dark:text-white mb-2">
                      AI Content Writer - MotherTongue
                    </h3>
                    <p className="text-sm text-black dark:text-gray-300 mb-3">
                      Evaluated, wrote, fact-checked, and curated responses generated by LLM in response to user queries at large search engine company.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Research & Fact-Checking
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        LLM Data Curation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Entry 5 */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3 sm:flex-shrink-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
                      January 2020 - January 2023
                    </p>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-md font-bold text-black dark:text-white mb-2">
                      Content Strategist/Manager - Meta
                    </h3>
                    <p className="text-sm text-black dark:text-gray-300 mb-3">
                    Led large-scale website initiatives and UX optimization projects for the Meta Research site in collaboration with web vendors. Developed content strategy for the Meta Research blog in collaboration with program managers and research teams. Earned promotion in 2021.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Web Content Management
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Editorial Management
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Content Strategy
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Entry 6 */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3 sm:flex-shrink-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
                    May 2018 - December 2019
                    </p>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-md font-bold text-black dark:text-white mb-2">
                      Content Strategist - Meta via Crystal Equation
                    </h3>
                    <p className="text-sm text-black dark:text-gray-300 mb-3">
                      Managed the Meta Research blog and website, ensuring editorial consistency, brand alignment, and a cohesive user experience while optimizing content for SEO. Collaborated with program managers to develop print brochures, flyers, blog content, and other collateral, ensuring editorial excellence, brand consistency, and timely delivery of marketing materials. Received headcount in 2019.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Project Management
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Writing & Editing
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Content Strategy
                      </span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex justify-center mt-16">
                <a
                  href="https://www.linkedin.com/in/cecilia-r-lopez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  See Full Experience on LinkedIn
                </a>
              </div>
            </section>

            <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

            <section id="projects" className="pb-16 pt-8 scroll-mt-16 mx-4 md:mx-8 lg:mx-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">
                Projects
              </h2>
              <div className="space-y-12">
                {/* Project 1: AI Characters */}
                <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex-shrink-0 relative overflow-hidden shadow-lg">
                  <Image
                    src="/ai-character-site.png"
                    alt="AI Characters website"
                    fill
                    className="object-cover"
                  />
                </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-md font-bold text-black dark:text-white mb-2">
                      AI Characters Portfolio Website
                    </h3>
                    <div className="flex gap-4 mb-3">
                      <a
                        href="https://cecilialopez.dev/ai-characters/"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
                      >
                        Website
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/cerolopez/pro-website-2.0"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
                      >
                        GitHub
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.figma.com/design/NWzQysngTRDaNyNLUfsBAG/AI-Character-UI?node-id=0-1&t=E9hA5OunRtMchxdo-1"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
                      >
                        Figma
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="text-sm text-black dark:text-gray-300 mb-3">
                      This is a subsection of my professional website that showcases my AI characters and their capabilities. It includes a blog section for updates.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        OpenAI API
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Prompt Engineering
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        LLM Chatbot
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Full Stack Development
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        UX Design
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Content Strategy
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project 2: Behalf Bot */}
                <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex-shrink-0 relative overflow-hidden shadow-lg">
                  <Image
                    src="/behalf-bot.png"
                    alt="Behalf Bot project"
                    fill
                    className="object-cover"
                  />
                </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-md font-bold text-black dark:text-white mb-2">
                      Behalf Bot
                    </h3>
                    <div className="flex gap-4 mb-3">
                      <a
                        href="https://behalf-bot.onrender.com/"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
                      >
                        Website
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/cerolopez/behalf-bot"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
                      >
                        GitHub
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.figma.com/design/jF0ICriuOsl4um4eCvzERg/Behalf-Bot?node-id=0-1&t=cArwpCXopZhExj0j-1"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
                      >
                        Figma
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="text-sm text-black dark:text-gray-300 mb-3">
                      Building off OpenAI's GPT-4, I curated responses by crafting instructions based off various use cases, providing data available on my LinkedIn and website. I built the chatbot UI on Flask using Python for the backend and vanilla JavaScript, and HTML/CSS for the frontend. I also made an API to use on this website.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        OpenAI API
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Prompt Engineering
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        LLM Chatbot
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project 3: Professional Website 2.0 */}
                <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex-shrink-0 relative overflow-hidden shadow-lg">
                  <Image
                    src="/professional-website.png"
                    alt="Professional Website 2.0 project"
                    fill
                    className="object-cover"
                  />
                </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-md font-bold text-black dark:text-white mb-2">
                      Professional Website 2.0
                    </h3>
                    <div className="flex gap-4 mb-3">
                      <a
                        href="https://github.com/cerolopez/pro-website-2.0"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
                      >
                        GitHub
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.figma.com/design/di6DzC8FADCI7k7IQjl4qj/Professional-Website-2.0?node-id=0-1&t=LPqOuoykIy6uCpTz-1"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
                      >
                        Figma
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="text-sm text-black dark:text-gray-300 mb-3">
                      Using Cursor as my AI coding assistant, I designed and built a new professional website (this one!) from scratch using React, Next.js, Tailwind CSS, and TypeScript. I also added a new chatbot feature on the website using the Behalf Bot API.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Web Development
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        Figma Prototyping
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                        LLM Chatbot
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Cecilia Lopez. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
