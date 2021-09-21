// Code your solution in this file!


function distanceFromHqInBlocks(street){
    if(street > 42){
        return (street - 42);
    }
    else if (street < 42){
        return (42 - street);
    }
    else return 0;
}

function distanceFromHqInFeet(street){
    return (distanceFromHqInBlocks(street) * 264);
}


function distanceTravelledInFeet(block1, block2){
    if(block1 > block2){
        return (block1 - block2) * 264;
    }
    else if (block1 < block2){
        return (block2 - block1) * 264;
    }
    else return 0;
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    }
    else if ((distanceTravelledInFeet(start, destination)) > 400 && (distanceTravelledInFeet(start, destination)) <= 2000){
        let total = (distanceTravelledInFeet(start, destination) - 400) * .02;
        return total;
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && (distanceTravelledInFeet(street, destination)) < 2500) {
        return((distanceTravelledInFeet(start, destination) - 2000) * 25) + (1600 * .02);
    }
}