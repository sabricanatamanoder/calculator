/* Variables -İşlev Kazandırmak istediğimiz butonları seçiyoruz.*/

const keys = document.getElementsByTagName("li");
const result = document.querySelector("p");
const clear = document.querySelector(".clear");

/* For döngüsüyle keys içerisinde gezebiliriz. */
for (let i = 0; i < keys.length; i++) {
  //Eşittir tuşuna basıldığında, calculate fonksiyonunu; başka bir tuşa basıldığında ise
  //addToCurrentValue fonksiyonunu çağırmak istiyoruz.
  if (keys[i].innerHTML === "=") {
    keys[i].addEventListener("click", calculate);
  } else {
    keys[i].addEventListener("click", addToCurrentValue(i));
  }
}

function addToCurrentValue(i) {
  return () => {
    //basılan tuş x ise ekranda * işaretini, değilse basılan tuşu göster diyoruz.
    if (keys[i].innerHTML === "x") {
     /*The JavaScript += operator takes the values from the right of the operator and adds it to the variable on the left. */
      result.innerHTML += "*";
    } else {
      result.innerHTML += keys[i].innerHTML;
    }
  };
}

function calculate() {
  //eval() fonksiyonu JavaScript kodunu alarak tamamlama değerini döndürür. Misal: eval('2 + 2') = 4
  return (result.innerHTML = eval(result.innerHTML));
}

//C butonuna basıldığında ekranı temizlemek için:
clear.addEventListener("click", () => {
  result.innerHTML = "";
});
