let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;

    const li = document.createElement("li");
    li.textContent = `${name} - ${price} شيكل`;
    document.getElementById("cart-items").appendChild(li);

    document.getElementById("total").textContent = `المجموع: ${total} شيكل`;
}

function sendWhatsApp() {
    if(cart.length === 0){
        alert("السلة فارغة!");
        return;
    }

    let message = "مرحباً، أود طلب:\n";
    cart.forEach(item => {
        message += `- ${item.name} (${item.price} شيكل)\n`;
    });
    message += `\nالمجموع: ${total} شيكل`;

    let phone = "972569512066";
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
