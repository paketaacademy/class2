const news = [
  {
    title: "Against Expectations, Southwestern Summers Are Getting Even Drier",
    description:
      "The finding by researchers runs counter to a basic tenet of climate change - that warming increases humidity. It's also bad news for fire seasons.",
    author: "",
    legend: "",
    image: "",
  },
  {
    title: "",
    description: "",
    author: "",
    legend: "",
    image: "/Imagens/keagan-henman--ndLL94OKYA-unsplash.jpg",
  },
  {
    title: "Mark Peel, Who Helped Forge a New Culinary Path, Dies at 66",
    description:
      "A pillar of California's pioneering food scene, he worked at Spago and was a founder of the renowned Campanile and La Brea Bakery.",
    author: "",
    legend: "",
    image: "",
  },
  {
    title: "",
    description: "Connecticut Legalizes Recreational Marijuana",
    author: "",
    legend: "",
    image: "",
  },
  {
    title: "",
    description: "Google Faces Fresh E.U. Inquiry Over Ad Technology",
    author: "",
    legend: "",
    image: "",
  },
  {
    title: "",
    description: "European Soccer Says No to Pride Display at Munich Stadium",
    author: "",
    legend: "",
    image: "",
  },
  {
    title: "",
    description: "Resistance Fighters Battle Myanmar's Military in Mandalay",
    author: "",
    legend: "",
    image: "",
  },
  {
    title: "",
    description:
      "Man Charged With Stealing 21 Tons of Pistachios in California",
    author: "",
    legend: "",
    image: "",
  },
  {
    title: "The Pandemic Stimulus Was Front-Loaded. That Could Mean a Bumpy Year.",
    description:"There's a risk that the affluent, who saved money by limiting things like traveling and dining out, will sit on their cash rather than spend it.",
    author: "",
    legend: "",
    image: "",
  },
  {
    title: "Home Sales Slow as Shortage and Climbing Prices Limit Buyers",
    description:"Buyers continued to leave cities in search of more space and better work-from home scenarios, leading to a spike in demand. Here's the latest on the economy.",
    author: "",
    legend: "",
    image: "",
  },
];

const rendernews = () => {
  const item = news[0];
  const allItems = `
            <a href="#">
                <h3>${item.title}</h3>
            </a>
            <a href="#"><span>${item.description}</span>
            </a>
    `;
  document.getElementById("container__newsleft").innerHTML = allItems;
};
const rendernews2 = () => {
  const item = news[1];
  const allItems2 = `
    <a href="HTML/pag2.html" target="_blank"><img
    src="${item.image}" alt="Imagem de Seca"></a>
    `;
  document.getElementById("container__img").innerHTML = allItems2;
};

const rendernews3 = () => {
  const item = news[2];
  const allItems = `
                    <a href="HTML/pag2.html" target="_blank">
                        <h3>${item.title}</h3>
                    </a>
                    <a href="HTML/pag2.html" target="_blank"><span>${item.description}</span></a>
                `;
  document.getElementById("container__newsright").innerHTML = allItems;
};

const rendernews4 = () => {
    const item3 = news[3]
    const item4= news[4]
    const item5 = news[5]
    const item6= news[6]
    const item7 = news[7]

    const allItems = `
                <div>
                    <a href="HTML/pag2.html" target="_blank"><span>${item3.description}</span></a>
                </div>

                <div>
                    <a href="HTML/pag2.html" target="_blank"><span>${item4.description}</span></a>
                </div>

                <div>
                    <a href="HTML/pag2.html" target="_blank"><span>${item5.description}</span></a>
                </div>

                <div>
                    <a href="HTML/pag2.html" target="_blank"><span>${item6.description}</span></a>
                </div>

                <div>
                    <a href="HTML/pag2.html" target="_blank"><span>${item7.description}</span></a>
                </div>
                  `;
    document.getElementById("container__breaknews").innerHTML = allItems;
  };

  const rendernews5 = () => {
    const item8= news[8]
    const item9 = news[9]

    const allItems = `
                    <div class="newsbot__right">
                        <a href="HTML/pag2.html" target="_blank">
                            <h3>${item8.title}</h3>
                        </a>
                        <a href="HTML/pag2.html" target="_blank"><span>${item8.description}</span>
                        </a>
                    </div>

                    <div class="newsbot__left">
                        <a href="HTML/pag2.html" target="_blank">
                            <h3>${item9.title}</h3>
                        </a>
                        <a href="HTML/pag2.html" target="_blank"><span>${item9.description}</span>
                        </a>
                    </div>
                  `;
    document.getElementById("container__newsbot").innerHTML = allItems;
  };



const morenews = () => {
  rendernews();
  rendernews2();
  rendernews3();
  rendernews4();
  rendernews5();

};

export default morenews;
