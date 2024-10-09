const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");
const mainContent = document.querySelector(".main__content1")


function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark"
    ? rootHtml.setAttribute("data-theme", "light")
    : rootHtml.setAttribute("data-theme", "dark")
  
  

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");
  });
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

async function getInfos() {
  await fetch("../../infos.json")
    .then((response) => response.json())
    .then((Infos) =>{
      let novo_main__content1 = infosToHtml_main__content1(Infos)
        mainContent.innerHTML += novo_main__content1
        console.log(localStorage)
    })
    
}

function infosToHtml_main__content1(Infos) {
  // TODO Incluir links git e linkedin no JSON 
  return ` 
    <h1><b>Soluções Criativas &</b> Desenvolvimento </h1>
      <p>${Infos.Info_Pessoal.Nome}, ${Infos.Info_Pessoal.Cidade}, ${Infos.Info_Pessoal.Cargo_Desejado}</p> 
      <ul class="menu menu--social">
        <li>
          
          <a class="menu__link" href="https://github.com/Ricardo-Gabriel" target="_blank">
            <i class="menu__icon bi bi-github"></i>
          </a>
        </li>
        <li>
          <a class="menu__link" href="https://www.linkedin.com/in/ricardogtsilva42/" target="_blank">
            <i class="menu__icon bi bi-linkedin"></i>
          </a>
        </li>
        
      </ul>
      <a href="#projetos">
        <button class="btn btn--primary">
          <span>Ver Projetos</span>
          <i class="bi bi-arrow-down-right"></i>
        </button>  
      </a>
  `
}




getInfos()