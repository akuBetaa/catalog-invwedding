//Scroll Smooth Button
document.querySelectorAll(".scroll-button").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

//Pemanggilan Data untuk ditampilkan ke HTML
const dataTheme = document.getElementById("dataTheme");

theme.forEach((item) => {
  const dataItem = document.createElement("div");
  dataItem.classList.add("bg-grayplus", "p-3", "md:p-5", "rounded-2xl", "text-white");
  dataItem.innerHTML = `
                <img class="rounded-xl" src="${item.image}" alt="">
                <div class="py-3 flex flex-col md:gap-1">
                    <h1 class="font-medium text-lg md:text-xl lg:text-2xl">${item.name}</h1>
                    <div class="grid gap-2 lg:gap-4 text-xs text-colortext pt-2 md:px-3 lg:px-6">
                        <a href="${item.link}" class="bg-gray hover:bg-graybutton hover:text-gray rounded-full p-1.5 flex justify-center gap-2">
                            <i class="fi fi-rr-eye mt-0.5"></i>
                            Preview
                        </a>
                        <a href="https://wa.me/6281554909512" class="bg-gray hover:bg-graybutton hover:text-gray xs:rounded rounded-full p-1.5 py-2">
                            Pesan Sekarang
                        </a>
                    </div>
                </div>
            `;
  dataTheme.appendChild(dataItem);
});

//Dropdown FAQs
function toggleDropdown() {
  const textElement = document.getElementById('hiddenText');
  const buttonElement = document.getElementById('toggleButton');
  if (textElement.classList.contains('hidden')) {
    textElement.classList.remove('hidden');
    buttonElement.textContent = 'Sembunyikan';
  } else {
    textElement.classList.add('hidden');
    buttonElement.textContent = 'Tampilkan';
  }
}
