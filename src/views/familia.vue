<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>
<template>
    <h1>A familia de Douglas é composta por diversos membros da sociedade</h1>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
        <img src="@/assets/familia1.jpeg" height="600">
        <br>
        Ricardo (irmão) | eu mesmo | Dr. Amaral (Pai)
    </div>
    <div class="carousel-item" data-bs-interval="10000">
        <img src="@/assets/familia2.jpeg" height="600">
        <br>
        Ricardo (irmão) | Maria Amaral (Mãe) | eu mesmo      
    </div>
    <div class="carousel-item">
        <img src="@/assets/casamento1.jpeg" height="600">
        <br>
        Francieli | eu mesmo          
    </div>
    <div class="carousel-item">
        <img src="@/assets/lila.jpg" height="600">
        <br>
        Lila (gata)           
    </div> 
    <div class="carousel-item">
        <img src="@/assets/melvim.jpeg" height="600">
        <br>
        Melvm (gato)             
    </div>     
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>