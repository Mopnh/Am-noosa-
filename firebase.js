import { db, ref, onValue } from './firebase.js';
const container = document.getElementById("productsContainer");
onValue(ref(db, "products"), snapshot => {
    container.innerHTML = ""; // تفريغ المحتوى
    snapshot.forEach(child => {
        const prod = child.val();
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${prod.image}"><div class="overlay"><div><h3>${prod.name}</h3><a href="https://wa.me/218928486845">اطلب الآن</a></div></div>`;
        container.appendChild(card);
    });
});
