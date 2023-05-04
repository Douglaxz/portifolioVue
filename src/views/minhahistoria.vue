<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>
<template>
    <h1>Douglas, a história nunca contada dessa lenda viva</h1>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
            <img src="@/assets/primeira.jpg" height="600">
            <br>
            Eu, em 1680, Luxemburgo
        </div>
        <div class="carousel-item">
            <img src="@/assets/eua.jpeg" height="600">
            <br>
            Trabalhando de modelo nos Estados Unidos para não ser deportado        
        </div>
        <div class="carousel-item">
            <img src="@/assets/eua2.jpeg" height="600">
            <br>
            Não deu certo, me pegaram
        </div>
        <div class="carousel-item">
            <img src="@/assets/rock2.jpeg" height="600">
            <br>
            Fingindo ser rockeiro
        </div> 
        
        <div class="carousel-item" data-bs-interval="10000">
            <img src="@/assets/academia.jpeg" height="600">
            <br>
            Na academia, tentando se machucar para parar de fazer exercício
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
    <p> A história do nosso grande herói começa em 1680 na Europa, em 1680, sem muitas opções de emprego para a época,
        nosso herói tornou-se um negociante de ouro, uma atividade muito respeitosa para a época.
    </p>
    <p> Logo depois, nosso herói ficou recluso e não sabemos muitos dados sobre ele. Mas sabemos que ele influenciou grandes
        acontecimentos na história que ajudaram a sociedade a se tornar o que é hoje.
    </p>
    <p> Depois de algum tempo, ele apareceu nos Estados Unidos para viver o sonho americano e ganhar dinheiro.
    </p>    
    <p> Hoje, Douglas é visto como um simbolo de justiça e poder por onde passa, levando mensagens de paz e amizade a todos
    </p>      
</template>