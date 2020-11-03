function Dagomzet() {
    let omzet = 0;

    this.voegToeAanDagomzet = function (klantTotaal) {
        omzet = omzet + klantTotaal;
    }

}

function shoppingcart() {
    let totaalBedrag = 0;

    this.getTotaalBedrag = function () {
        return totaalBedrag;
    }

    this.vulshoppingcart = function (aantalSnoep, aantalChocola, aantalKoek) {

        let snoep = new Snoep(aantalSnoep);
        let chocola = new Chocola(aantalChocola);
        let koek = new Koek(aantalKoek);

        this.setshoppingcartBedrag(snoep, chocola, koek);
    }

    this.setshoppingcartBedrag = function (snoep, chocola, koek) {
        totaalBedrag = totaalBedrag + snoep.getTotaal();
    }

}

function Snoep(aantal) {
    let prijs = 2.45;
    let totaalBedrag = 0;

    this.berekenSnoepTotaal = function (aantal) {
        totaalBedrag =  prijs * aantal;
    }

    this.getTotaal = function () {
        return totaalBedrag;
    }

    this.berekenSnoepTotaal(aantal);
}

function Koek(aantal) {
  let prijs = 3.95;
  let totaalBedrag = 0;

  this.berekenKoekTotaal = function (aantal) {
      totaalBedrag =  prijs * aantal;
  }

  this.getTotaal = function () {
      return totaalBedrag;
  }

  this.berekenKoekTotaal(aantal);
}

function Chocola(aantal) {
  let prijs = 1.95;
  let totaalBedrag = 0;

  this.berekenChocolaTotaal = function (aantal) {
      totaalBedrag =  prijs * aantal;
  }

  this.getTotaal = function () {
      return totaalBedrag;
  }

  this.berekenChocolaTotaal(aantal);
}

function Klant() {
    let shoppingcart = new shoppingcart();

    this.wijzigAankopen = function (snoep, chocola, koek) {
       shoppingcart.vulshoppingcart(snoep, chocola, koek);
    };

    this.teBetalen = function () {
        return shoppingcart.getTotaalBedrag();
    }
}

function (opbrengstSnoep) {
    totaalBedrag =  prijs * aantal;
}

function (opbrengstChocola) {
    totaalBedrag =  prijs * aantalChocola;
}

function (opbrengstKoek) {
    totaalBedrag =  prijs * aantalKoek;
}

let klant = new Klant();
klant.wijzigAankopen(20,1,1);
console.log('Totaalbedrag in shoppingcart: ' + klant.teBetalen());

let dagomzet = new Dagomzet();
console.log('De totale dagomzet bedraagt: ' + 0 );
