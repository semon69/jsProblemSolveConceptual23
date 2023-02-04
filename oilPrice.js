function oilPrice(diesel, petrol, octane){
    const dieselPricePerLiter = 114;
    const petrolPricePerLiter = 130;
    const octanePricePerLiter = 135;

    const totalDieselPrice = diesel * dieselPricePerLiter;
    const totalPetrolPrice = petrol * petrolPricePerLiter;
    const totalOctanePrice = octane * octanePricePerLiter;

    const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    return totalOilPrice;
}

console.log(oilPrice(30, 20, 10));