function gautiFunkcijosPavadinima(funkcijosPavadinimas = "Anoniminė funkcija") {
    return funkcijosPavadinimas;
  }
  
  function pavyzdineFunkcija() {
    console.log("Kviečiamos funkcijos pavadinimas:", gautiFunkcijosPavadinima("pavyzdineFunkcija"));
  }
  
  pavyzdineFunkcija();
  