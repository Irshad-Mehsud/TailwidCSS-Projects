
document.addEventListener("DOMContentLoaded", function () {
const menuButton = document.querySelector(".menu-toggler-btn");
const desktopMenu = document.querySelector(".nav-menu");
const mobileMenu = document.getElementById("mobile-menu");

// Always show desktop menu on large screens
function updateMenuVisibility() {
   const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
   
   if (isDesktop) {
       desktopMenu.classList.remove("hidden");
       mobileMenu.classList.add("hidden");
   } else {
       desktopMenu.classList.add("hidden");
   }
}

// Initial check
updateMenuVisibility();

// Toggle mobile menu
if (menuButton) {
   menuButton.addEventListener("click", function () {
       mobileMenu.classList.toggle("hidden");
   });
}

// Update on window resize
window.addEventListener("resize", updateMenuVisibility);
});

var cars = {
honda: {
 civic: {
   name: "Civic 2024",
   price: 344444,
   color: ["Red", "Yellow", "Blue", "Black"],
   image: "https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2023/03/2303-CR-V-LX-Thumb.jpg",
   gates: 4,
   company: { name: "Honda" }
 },
 accord: {
   name: "Accord 2024",
   price: 420000,
   color: ["White", "Black", "Gray"],
   image: "https://static.pakwheels.com/2022/11/2023-Honda-Accord-1.jpg",
   gates: 4,
   company: { name: "Honda" }
 },
 city: {
   name: "City 2024",
   price: 250000,
   color: ["Silver", "Black", "Blue"],
   image: "https://static.pakwheels.com/2016/02/2016-Honda-Accord-Hybrid-Auto-Expo-3-Feature-e1454503682194.jpg",
   gates: 4,
   company: { name: "Honda" }
 }
},
toyota: {
 corolla: {
   name: "Corolla 2024",
   price: 350000,
   color: ["Black", "Silver", "White"],
   image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
   gates: 4,
   company: { name: "Toyota" }
 },
 camry: {
   name: "Camry 2024",
   price: 480000,
   color: ["White", "Black", "Gray"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWIJvvvdkg6y3GOkTqLGzqZUa_Dyj-WPyQQ&s",
   gates: 4,
   company: { name: "Toyota" }
 },
 fortuner: {
   name: "Fortuner 2024",
   price: 650000,
   color: ["Black", "Blue", "Silver"],
   image: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/12/ferrari-roma-pricing-for-south-africa-2.jpg",
   gates: 4,
   company: { name: "Toyota" }
 }
},
bmw: {
 series3: {
   name: "BMW 3 Series 2024",
   price: 550000,
   color: ["Black", "Blue", "White"],
   image: "https://i.ytimg.com/vi/8ePEUTwBaBY/maxresdefault.jpg",
   gates: 4,
   company: { name: "BMW" }
 },
 series5: {
   name: "BMW 5 Series 2024",
   price: 750000,
   color: ["Black", "Gray", "Blue"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgYN0sQUo0mNMXJjYfvFqFvhmcEaOtwq3XA&s",
   gates: 4,
   company: { name: "BMW" }
 },
 x5: {
   name: "BMW X5 2024",
   price: 900000,
   color: ["White", "Black", "Blue"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyU50Ac29P6kgGeVvDBv1duNYhQTVbGZXoQ&s",
   gates: 4,
   company: { name: "BMW" }
 }
},
mercedes: {
 cclass: {
   name: "Mercedes C-Class 2024",
   price: 600000,
   color: ["Black", "Silver", "White"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGbFiOCb-6nyo7elJpmsizHaAJA26ZhnAEw&s",
   gates: 4,
   company: { name: "Mercedes" }
 },
 eclass: {
   name: "Mercedes E-Class 2024",
   price: 850000,
   color: ["Black", "Gray", "Blue"],
   image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/11/mercedes-amg-gt-63-s-e-performance.jpg",
   gates: 4,
   company: { name: "Mercedes" }
 },
 gclass: {
   name: "Mercedes G-Class 2024",
   price: 1200000,
   color: ["Black", "White", "Silver"],
   image: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/08/Mercedes-SLR-McLaren-Mansory.jpg",
   gates: 4,
   company: { name: "Mercedes" }
 }
},
audi: {
 a4: {
   name: "Audi A4 2024",
   price: 580000,
   color: ["White", "Black", "Gray"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-OxIEG4V4UYKDqNI_-YyoBBJsVaYpzSE1Q&s",
   gates: 4,
   company: { name: "Audi" }
 },
 a6: {
   name: "Audi A6 2024",
   price: 700000,
   color: ["Black", "Silver", "White"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnJ5kkS2tbyfaOscO_-p7jwrE2a60XIAC1A&s",
   gates: 4,
   company: { name: "Audi" }
 },
 q7: {
   name: "Audi Q7 2024",
   price: 950000,
   color: ["Black", "Blue", "White"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-OxIEG4V4UYKDqNI_-YyoBBJsVaYpzSE1Q&s",
   gates: 4,
   company: { name: "Audi" }
 }
},
tesla: {
 model3: {
   name: "Tesla Model 3",
   price: 500000,
   color: ["White", "Black", "Red"],
   image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjByb2Fkc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
   gates: 4,
   company: { name: "Tesla" }
 },
 modelS: {
   name: "Tesla Model S",
   price: 900000,
   color: ["Black", "Silver", "White"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApe0Dvzef56qSy39qU6Mdswe7bvEVRZd7xA&s",
   gates: 4,
   company: { name: "Tesla" }
 },
 modelX: {
   name: "Tesla Model X",
   price: 1100000,
   color: ["White", "Black", "Blue"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Y4hCZLYFa7KWGWqS712asQksL9OlvmjDCQ&s",
   gates: 4,
   company: { name: "Tesla" }
 }
},
ford: {
 mustang: {
   name: "Ford Mustang",
   price: 700000,
   color: ["Red", "Black", "White"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApe0Dvzef56qSy39qU6Mdswe7bvEVRZd7xA&s",
   gates: 2,
   company: { name: "Ford" }
 },
 explorer: {
   name: "Ford Explorer",
   price: 800000,
   color: ["Black", "Gray", "Silver"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Y4hCZLYFa7KWGWqS712asQksL9OlvmjDCQ&s",
   gates: 4,
   company: { name: "Ford" }
 },
 ranger: {
   name: "Ford Ranger",
   price: 650000,
   color: ["Blue", "Black", "White"],
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApe0Dvzef56qSy39qU6Mdswe7bvEVRZd7xA&s",
   gates: 4,
   company: { name: "Ford" }
 }
}
};

function displayAllCars() {
console.log("displayAllCars() is running...");
let cardSection = document.getElementById("car-card-section");
if (!cardSection) {
   console.error("Error: #car-card-section not found!");
   return;
}
let content = "";  // Store generated HTML
for (let company in cars) {
   for (let model in cars[company]) {
       let car = cars[company][model];
       console.log("Car found:", car.name); // Debug log

       content += `
               <div class="card w-[300px]  lg:h-[400px] h-[450px] bg-red-500 rounded-md">
                   <div class="card-img max-w-full ">
                    <img src="${car.image}" alt="${car.name}">
                   </div>
                   <div class="card-detail border-t-1">
                    <h1 class="text-center text-2xl font-bold">${car.name}</h1>
                   <div class="discription w-full flex felx-col px-2 py-6" >
                       <div class="model font-medium mr-2">
                       <h4>Comapany <span class="font-thin">${car.company.name}</span></h4>
                       <h4>Model <span class="font-thin">${model.toUpperCase()}</span></h4>
                       </div>
                       <div class="price font-medium">
                           <h4>Price <span class="font-thin">$${car.price}</span></h4>
                           <h4>Color <span class="font-thin">${car.color.join(", ")}</span></h4>
                       </div>
                   </div>
                   </div>

                   <div class="button-div flex justify-center font-medium lg:mb-4">
                       <button class="w-[70%] bg-red-900 h-12 rounded-md">Add To Cart</button>
                   </div>
               </div>


       `;
   }
}

cardSection.innerHTML = content; // ✅ Update UI at once
}
document.addEventListener("DOMContentLoaded", displayAllCars);




window.onload = function () {
var company = document.getElementById("company");
var model = document.getElementById("model");

// Initialize dropdowns
company.innerHTML = "<option value=''>Select a Company</option>";
model.innerHTML = "<option value=''>Select a Model</option>";

// Populate company dropdown
for (let key in cars) {
   company.innerHTML += `<option value="${key}">${key}</option>`;
}

function selectedCompany() {
   model.innerHTML = "<option value=''>Select a Model</option>"; // Reset models

   let selectedCompany = company.value;
   console.log(selectedCompany)
   if (selectedCompany && cars[selectedCompany]) {
       for (let key in cars[selectedCompany]) {
           model.innerHTML += `<option value="${key}">${key}</option>`;
           console.log(selectedCompany)
       }

   }
}
company.addEventListener("change", selectedCompany);
};




