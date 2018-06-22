document.addEventListener("DOMContentLoaded", function(){


    var board = document.querySelector(".plansza");

    timer = setInterval(function(){
        var zombie = document.createElement("div");
        zombie.classList.add("zombie");

        var boom = document.createElement("div");
        boom.classList.add("boom");

        board.appendChild(zombie);


        //Losujemy liczbę od 10 do horyzont
        // trzeba elementowi zombie dodać style

        //Mieksce startu
        minPosition = 10;
        maxPosition = 300;
        randomPosition = Math.floor(Math.random() * (maxPosition - minPosition + 1)) + minPosition;

        zombie.style.bottom = randomPosition + "px";

        //Szybkość zombie
        minSpeed = 3;
        maxSpeed = 10;
        randomSpeed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
        zombie.style.animationDuration = "0.5s," + randomSpeed + "s"

        //Wielkość zombie
        scale = 1 - (randomPosition/350);
        zombie.style.transform = "scale(" + scale +")";

        //Z-index Zombie
        index = 350 - randomPosition;
        zombie.style.zIndex = index;


        zombie.addEventListener("animationend", function(event){
            this.remove();
        });

        zombie.addEventListener("click", function(event){
            this.remove();

            var positionX= event.clientX;
            var positionY = event.clientY;


            var boom = document.createElement("div");

            boom.classList.add("boom");
            boom.style.left = positionX +"px";
            boom.style.top = positionY +"px";
            boom.style.transform = "scale(3)"

            board.appendChild(boom);
            boom.addEventListener("animationend", function(event){
                this.remove();

            });
        });

    }, 1000)
})