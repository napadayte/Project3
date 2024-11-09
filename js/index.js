"use strict";

window.addEventListener('load', () => {

	const preloader = document.getElementById('preloader');
	preloader.style.display = 'none';
  
	const mainContent = document.getElementById('main-content');
	mainContent.style.display = 'block';
	document.body.style.display = 'grid';
	document.body.style.overflow = 'unset';
  });

const DATA = [
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m1.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "8 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f1.png",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m2.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Тетяна",
    "last name": "Мороз",
    photo: "./img/trainers/trainer-f2.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
  },
  {
    "first name": "Сергій",
    "last name": "Коваленко",
    photo: "./img/trainers/trainer-m3.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
  },
  {
    "first name": "Олена",
    "last name": "Лисенко",
    photo: "./img/trainers/trainer-f3.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
  },
  {
    "first name": "Андрій",
    "last name": "Волков",
    photo: "./img/trainers/trainer-m4.jpg",
    specialization: "Бійцівський клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
  },
  {
    "first name": "Наталія",
    "last name": "Романенко",
    photo: "./img/trainers/trainer-f4.jpg",
    specialization: "Дитячий клуб",
    category: "спеціаліст",
    experience: "3 роки",
    description:
      "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
  },
  {
    "first name": "Віталій",
    "last name": "Козлов",
    photo: "./img/trainers/trainer-m5.jpg",
    specialization: "Тренажерний зал",
    category: "майстер",
    experience: "10 років",
    description:
      "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
  },
  {
    "first name": "Юлія",
    "last name": "Кравченко",
    photo: "./img/trainers/trainer-f5.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
  },
  {
    "first name": "Олег",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-m6.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "12 років",
    description:
      "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
  },
  {
    "first name": "Лідія",
    "last name": "Попова",
    photo: "./img/trainers/trainer-f6.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
  },
  {
    "first name": "Роман",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m7.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
  },
  {
    "first name": "Анастасія",
    "last name": "Гончарова",
    photo: "./img/trainers/trainer-f7.jpg",
    specialization: "Басейн",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
  },
  {
    "first name": "Валентин",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-m8.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
  },
  {
    "first name": "Лариса",
    "last name": "Петренко",
    photo: "./img/trainers/trainer-f8.jpg",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "7 років",
    description:
      "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
  },
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m9.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "11 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f9.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m10.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Наталія",
    "last name": "Бондаренко",
    photo: "./img/trainers/trainer-f10.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "8 років",
    description:
      "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
  },
  {
    "first name": "Андрій",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m11.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
  },
  {
    "first name": "Софія",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-f11.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "6 років",
    description:
      "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
  },
  {
    "first name": "Дмитро",
    "last name": "Ковальчук",
    photo: "./img/trainers/trainer-m12.png",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
  },
  {
    "first name": "Олена",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-f12.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "5 років",
    description:
      "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
  },
];

let filteredData = JSON.parse(JSON.stringify(DATA));

const sorting = document.querySelector(".sorting");

sorting.children[1].id = "default";
sorting.children[2].id = "surname";
sorting.children[3].id = "experience";

const filtersHidden = document.querySelectorAll("[hidden]");
filtersHidden.forEach((el) => {
  el.removeAttribute("hidden");
});

const form = document.querySelector("form");
const trainerTemplate = document.querySelector("#trainer-card");
const trainerContainer = document.querySelector(".trainers-cards__container");

function renderTrainers(DATA) {
  trainerContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  DATA.forEach((e) => {
    const clone = trainerTemplate.content.cloneNode(true);
    const btnElement = clone.querySelector(".trainer__show-more");
    const nameElement = clone.querySelector(".trainer__name");
    const imgElement = clone.querySelector(".trainer__img");

    btnElement.dataset.unique = e.photo;
    nameElement.textContent = e["first name"];
    imgElement.src = e.photo;

    fragment.append(clone);
  });

  trainerContainer.append(fragment);
}

function defaultSort(DATA) {
  renderTrainers(DATA);
}

function surnameSort(DATA) {
  const sortedData = DATA.slice().sort((a, b) =>
    a["last name"].localeCompare(b["last name"])
  );
  renderTrainers(sortedData);
}

function experienceSort(DATA) {
  const sortedData = DATA.slice().sort((a, b) => {
    const numA = parseInt(a.experience);
    const numB = parseInt(b.experience);
    return numB - numA;
  });
  renderTrainers(sortedData);
}

defaultSort(filteredData);


//  open & close cart
trainerContainer.addEventListener("click", (e) => {
  const modalTemplate = document.querySelector("#modal-template");
  const clone = modalTemplate.content.cloneNode(true);

  const modalElement = clone.querySelector(".modal");
  const modalBodyElement = clone.querySelector(".modal__body");
  const imgElement = clone.querySelector(".modal__img");
  const nameElement = clone.querySelector(".modal__name");
  const categoryElement = clone.querySelector(".modal__point--category");
  const experienceElement = clone.querySelector(".modal__point--experience");
  const specializationElement = clone.querySelector(
    ".modal__point--specialization"
  );
  const textElement = clone.querySelector(".modal__text");

  if (e.target.closest("button")) {
    const result = filteredData.find(
      (trainer) => trainer.photo === e.target.dataset.unique
    );

    imgElement.src = result.photo;
    nameElement.textContent = `${result["last name"]} ${result["first name"]}`;
    categoryElement.textContent = result.category;
    experienceElement.textContent = result.experience;
    specializationElement.textContent = result.specialization;
    textElement.textContent = result.description;
    document.body.prepend(clone);
    document.body.style.overflow = "hidden";
  }

  modalBodyElement.addEventListener("click", (e) => {
    if (e.target.closest("button")) {
      document.body.style.overflow = "";
      modalElement.remove();
    }
  });
});

function firstLetterUp(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
  
	const checkedDirection = form.direction.value.replaceAll(" ", "-");
	const checkedCategory = form.category.value;
  
	if (form.direction.value === "all" && form.category.value === "all") {
		filteredData = [...DATA];
	} else if (form.direction.value === "all" && form.category.value !== "all") {
	  const category = form
		.querySelector(`[for="${checkedCategory}"]`)
		.textContent.toLowerCase();
		filteredData = DATA.filter((item) => item.category === category);
	} else if (form.direction.value !== "all" && form.category.value === "all") {
	  const direction = firstLetterUp(
		form.querySelector(`[for="${checkedDirection}"]`).textContent
	  );
	  filteredData = DATA.filter((item) => item.specialization === direction);
	} else {
	  const direction = firstLetterUp(
		form.querySelector(`[for="${checkedDirection}"]`).textContent
	  );
	  const category = form
		.querySelector(`[for="${checkedCategory}"]`)
		.textContent.toLowerCase();
		filteredData = DATA.filter(
		(item) => item.specialization === direction && item.category === category
	  );
	}
  
	console.log(filteredData);
  
	const activeSort = document.querySelector(".sorting__btn--active");
	if (activeSort.id === "default") {
	  return defaultSort(filteredData);
	}
	if (activeSort.id === "experience") {
	  return experienceSort(filteredData);
	}
	if (activeSort.id === "surname") {
	  return surnameSort(filteredData);
	}
  });
  

  sorting.addEventListener("click", (e) => {
	if (e.target.closest("button")) {
	  [...sorting.children].forEach((el) => {
		el.classList.remove("sorting__btn--active");
	  });
	  e.target.classList.add("sorting__btn--active");
  
	  if (e.target.id === "default") {
		return defaultSort(filteredData);
	  }
	  if (e.target.id === "experience") {
		return experienceSort(filteredData);
	  }
	  if (e.target.id === "surname") {
		return surnameSort(filteredData);
	  }
	}
  });
  