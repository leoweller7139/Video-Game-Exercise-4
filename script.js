var hello = function(){
    document.getElementById("console").innerHTML="<p> Hello </p>";
}

hello();

class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
    }
    display = function(){
        document.getElementById(this.id).innerHTML=`<p> Name: ${this.name} <p> <p> Energy: ${this.energy} </p>`;
    }

    attack = function(opponent, item){
        let newEnergy = opponent.energy - item.iHitPoints;
        opponent.energy = newEnergy;
        document.getElementById("console").innerHTML=`<p> ${this.name} is attacking ${opponent.name} with a ${item.iName} ${item.img}... </p>`;
        opponent.display();
        console.log(opponent);

        // print game over on the HTML console when energy hits 0
        if(opponent.energy <= 0){
            document.getElementById(opponent.id).innerHTML=`<p> Dead </p>`;
            document.getElementById("console").innerHTML="<p> Game Over </p>";
        }
    }
}

const character1 = new Character("QB",100,"c1");
const character2 = new Character("WR",100,"c2");

character1.display();
character2.display();

class Item{
    constructor(iName,iHitPoints, img){
        this.iName=iName;
        this.iHitPoints=iHitPoints;
        this.img=img;
    }
}

const item1 = new Item('Football',20,'<br><img src="img/football.png"');
const item2 = new Item('Gatorade',10,'<br><img src="img/gatorade.png"');
const item3 = new Item('Water',5,'<br><img src="img/water.png"');

const items = [item1,item2,item3];

function selectItem(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
}

// reset function --- global

function reset(){
    document.getElementById("restart").reset();
}
