
function myFunction(e){
    e.classList.toggle("show")

    var elem = document.getElementById("navID")

    Style = window.getComputedStyle(elem),
    left = Style.getPropertyValue("left");

    if(right == "0px"){
        elem.style.left = "-260px"
    }else{
        elem.style.left = "0px"
    }
}

// myFunction();


.navbar{
    position: absolute;
    left: 0px;
    height: 100%;
    width: 260px;

    background-color:rgb(50,50,50);
    text-align: center;
    transition: 1s ease;
    /* box-sizing: border-box; */

    font-family: 'Caveat', cursive;
    /* color: white; */
    font-size: xx-large;
    /* background-image: linear-gradient(to right, black, #59C3C3, black) ; */
    /* width: 100vw; */
    text-align: center;
    /* margin: 10px; */
}

.navbar > .side-nav{
    list-style: none;
    /* padding: 0; */
    margin-left: .5em;
    margin-top: 1em;
}
.nav-item{
    display: flex;
    margin-bottom: 1em;
}
.nav-item > .nav-link{
    text-decoration: none;
    /* font-size: 1em; */
    /* padding: 1em; */
    flex: 1;
}

.toggle-collapse{
    float: right;
    margin-left: -3.3em;
    counter-reset: "";
    outline: inherit;
    border: 0px;
    background: transparent;
}

.nav-item > .nav-link:hover{
    background-color: red;
    color: black;
}

/* TOGGLE ICON BEGINS HERE */
.toggle-icon,
.toggle-icon::before,
.toggle-icon::after{
    content: "";
    width: 30px;
    height: 4px;
    position: fixed;
    background-color: black;
    border-radius: 2em;
    border: 1px solid black;
    cursor: pointer;
    transition: 1s ease;
    margin-top: 0.8em;
}

.toggle-icon::before{
    position: absolute;
    right: -1px; 
    margin-top: -0.8em;
}

.toggle-icon::after{
    position: absolute;
    right: -1px;
    margin-top: 0.6em;
    width: 20px;
}

.toggle-icon{
    width: 20px;
}

.show .toggle-icon::after{
    width: 30px;
}
.show .toggle-icon{
    width: 30px;
}

/* TOGGLE ICON ENDS HERE */

/* .nav-item:last-child > .nav-link i{
    padding: .1em;
}

.nav-item:hover:last-child > .nav-link{
    background-color: black;
    color: white;
}
 */









 

.container{
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* margin-bottom: 20px; */

    /* background-color: #EBEBEB; */
    /* background-image: url("https://images.hdqwalls.com/wallpapers/anime-clouds-birds-flying-4k-o2.jpg"); */
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    /* overflow: auto; */
    /* width: 90vw; */
    /* height: 75vh; */
    /* max-height: 750px; */
    /* box-shadow: 6px 6px 15px #52489C; */
    /* padding: 25px; */
    /* background-position: left; */
    /* border: 2px solid #52489C; */
    /* border-radius: 15px; */

}