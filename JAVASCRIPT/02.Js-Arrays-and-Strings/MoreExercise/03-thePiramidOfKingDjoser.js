function calculateResources(base, increment) {
    let materials = {
        "stones": 0,
        "marble": 0,
        "lapis": 0,
        "gold": 0
    }

    let layerCount = 0;
    let total = 0;
    let materialAmount = 0;
    let stonesAmount = 0;
    let height = 0;

    for (let i = base; i > 0; i -= 2) {
        layerCount += 1;
        total = i * i;
        if ((i === 1) || (i === 2)) {
            materials["gold"] = total * increment;
            break
        }
        materialAmount = (4 * i) - 4;
        if (layerCount % 5 === 0) {
            materials["lapis"] += materialAmount * increment;
        } else {
            materials["marble"] += materialAmount * increment
        }
        stonesAmount = total - materialAmount;
        materials["stones"] += stonesAmount * increment;
    }
    height = Math.floor(increment * layerCount);

    console.log(`Stone required: ${Math.ceil(materials["stones"])}`);
    console.log(`Marble required: ${Math.ceil(materials["marble"])}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(materials["lapis"])}`);
    console.log(`Gold required: ${Math.ceil(materials["gold"])}`);
    console.log(`Final pyramid height: ${height}`);
}


calculateResources(11, 1);
calculateResources(11, 0.75);
calculateResources(12, 1);
calculateResources(23, 0.5);

