
export default function render(){
    
    const main = document.getElementById("main");
    
    main.innerHTML = `
        <div class="content h-full w-full flex justify-center items-center p-4 ">
            <div class="aboutDiv flex flex-col items-center justify-center w-full max-w-3xl min-h-full md:mt-30 pt-16">
                
                <p class=" text-white text-2xl text-center wrap-break-word mb-5">
                Full-Stack Developer with a strong foundation in Java-based enterprise architectures. Highly disciplined and adaptable, currently balancing a rigorous coding curriculum with professional commitments. Passionate about clean code and architectural patterns, with experience in international collaboration (Erasmus+) and managing large-scale operations. Committed to continuous learning and delivering user-centric digital solutions.
                </p>

                <p class="text-red-700 text-xl font-bold text-center mb-2.5">Skills</p>

                <p class="text-white text-lg text-center"><span class="font-bold">Languages:</span> Java (SE/EE), JavaScript (ES6+), SQL, HTML5, CSS3</p>
                <p class="text-white text-lg text-center"><span class="font-bold">Backend & Frameworks:</span> Spring MVC, Spring Boot, REST APIs, Maven</p>
                <p class="text-white text-lg text-center"><span class="font-bold">Frontend & UI:</span> Single Page Applications (SPA), React (Learning), DOM Manipulation, Responsive Design, Tailwind/Bootstrap</p>
                <p class="text-white text-lg text-center"><span class="font-bold">Databases:</span> PostgreSQL, MySQL</p>
                <p class="text-white text-lg text-center"><span class="font-bold">Tools & Methodology:</span> Git/GitHub, Object-Oriented Programming (OOP), MVC Architecture, Postman (for API testing)</p>

                <div class="buttonsCointainer flex mt-5 space-x-5">
                <a href="https://github.com/KuRo-AlexandreFerreira" target="_blank" title="Visit my Github page!" class="aboutIcon">
                    <img src="resources/githubLogo.png" alt="GitHub Logo">
                </a>
                <a href="https://www.linkedin.com/in/alexandreferreira-dev/" target="_blank" title="Visit my LinkedIn profile!" class="aboutIcon">
                    <img src="resources/linkedinLogo.png" alt="LinkedIn Logo">
                </a>
                <a href="https://www.instagram.com/_alexandre.f_/" target="_blank" title="Visit my Instagram profile!" class="aboutIcon">
                    <img src="resources/instagramLogo.png" alt="Instagram Logo">
                </a>  
                </div>

            </div>
        </div>
    `

}