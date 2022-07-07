//soru listesini alıp yönetmek için class mantığıyla Quiz constructor oluşturduk
function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
    this.dugruCevapSayisi = 0;
}

//direk Quiz e almak yerine prototype oluşturuyoruz
Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

