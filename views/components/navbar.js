export function createNavbar(){
    const header = document.createElement('header');

    const navbar = document.createElement('nav');
    navbar.innerHTML = `

    <nav class="bg-transparent backdrop-blur-xs fixed w-full z-20 top-0 start-0 border-default ">
      <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="pageLink group flex items-end space-x-2 rtl:space-x-reverse">
            <span class="self-center text-xl text-heading text-neutral-400 font-bold whitespace-nowrap group-hover:text-red-500">Alexandre</span>
            <span class="self-center text-xl text-heading text-white font-bold whitespace-nowrap" >Ferreira</span>
        </a>
        <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base text-white md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 bg-black/75 backdrop-blur-xs rounded-xl md:space-x-8 rtl:space-x-reverse md:backdrop-blur-none md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a href="/" class="pageLink block py-2 px-3 text-neutral-200 font-semibold rounded hover:text-white md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/about" class="pageLink block py-2 px-3 text-neutral-200 font-semibold rounded hover:text-white md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">About me</a>
            </li>

            <li>
                <button id="dropdownNvbarButton" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 rounded font-semibold text-neutral-200 md:w-auto hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                  Projects 
                  <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
              </button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar" class="z-10 hidden  bg-neutral-900 rounded-md shadow-lg w-44">
                  <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownNvbarButton">
                    <li>
                      <a href="/portfolio" class="pageLink inline-flex items-center justify-center w-full p-2 text-white hover:bg-neutral-800 rounded">Portfolio</a>
                    </li>
                    <li>
                      <a href="https://github.com/KuRo-AlexandreFerreira" target="_blank"  class="inline-flex items-center justify-center w-full p-2 text-white hover:bg-neutral-800  rounded">GitHub</a>
                    </li>
                  </ul>
              </div>
            </li>
            <li>
                <button id="dropdownNvbarButton2" data-dropdown-toggle="dropdownNavbar2" class="flex items-center justify-between w-full py-2 px-3 rounded font-semibold text-neutral-200 text-heading md:w-auto hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                  Contacts 
                  <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
              </button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar2" class="z-10 hidden  bg-neutral-900 rounded-md shadow-lg w-44">
                  <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownNvbarButton">
                    <li>
                      <a href="mailto:email@alexandreferreira.dev" class="inline-flex items-center justify-center w-full p-2 text-white  hover:bg-neutral-800 rounded">Email</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/alexandreferreira-dev/" target="_blank" class="inline-flex items-center justify-center w-full p-2 text-white hover:bg-neutral-800 rounded">LinkedIn</a>
                    </li>
                    <li>
                      <a href="#" class="inline-flex items-center justify-center w-full p-2 text-white hover:bg-neutral-800 rounded">CV</a>
                    </li>
                  </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    `;

    navbar.classList.add('navbar');
    navbar.id = 'navbar';

    header.appendChild(navbar);
    return header;

}

