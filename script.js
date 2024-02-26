@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
body{
    background-color: antiquewhite;
}

*{
    margin: 0;
    padding: 0;
}

nav{
    font-family: 'Ubuntu', sans-serif;
}

nav ul{
    display: flex;
    align-items: center;
    list-style-type: none;
    height: 65px;
    background-color: black;
    color: white;
}

nav ul li{
    padding: 0 12px;
}
.brand img{
    width: 44px;
    padding: 0 8px;
}

.brand {
    display: flex;
    align-items: center;
    font-weight: bolder;
    font-size: 1.3rem;
}
.brand img {
    vertical-align: middle;
    width: 60px; /* Adjust the size as needed */
    height: 50px; /* Adjust the size as needed */
    transition: transform 0.2s ease-in-out;
}

/* Add this rule for the hover effect */
.brand img:hover {
    transform: scale(1.5); /* Adjust the scale factor for the hover effect */
}

.container{
    min-height: 72vh;
    background-color: black;
    color: rgb(0, 0, 0);
   font-family: 'Varela Round', sans-serif;
   display: flex;
   margin: 23px auto;
   width: 80%;
   border:20px color(srgb rgb(0, 12, 244) green blue)
   border-radius: 12px;
   padding: 34px;
   background-image: url('bg.jpg');
}

.bottom{
    display: flex;
    
    position: sticky;
    bottom: 0;
    height: 130px;
    background-color: black;
    color: white;

    justify-content: center;
    align-items: center;
    flex-direction: column; 
}

.icons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
    margin-bottom: 20px; /* Adjusted margin to create space between icons and progress bar */
}
.icons i{
    cursor: pointer;
}
.icons i {
    margin: 0 4px; /* Adjusted margin to create space between icons */
}
#myProgressBar{
    display :flex;
    width: 80vw; 
    cursor: pointer;
}

.songItemContainer{
    margin-top: 74px;
}

.songItem{
    height: 60px;
    display: flex;
    background-color: rgb(252, 220, 150);
    
    color: black;
    margin: 12px 0;
    justify-content: space-between;
    align-items: center;
    border-radius: 40px;
}

.songItem img{
    height:50px;
    width: 50px;
    margin: 50px 20px;
    
    border-radius: 70px;
  
}
.songItem img:hover {
    transform: scale(1.5); /* Adjust the scale factor for the hover effect */
}

.timestamp{
    margin: 0 23px;
}

.timestamp i{
    cursor: pointer;
}

.songInfo{
    position: absolute;
    left: 10vw;
    font-family: 'Varela Round', sans-serif;
}

.songInfo img{
    opacity: 0;
    transition: opacity 0.4s ease-in;
}

@media only screen and (max-width: 1100px) {
    body {
      background-color: rgb(0, 0, 0);
    }
  }
