<script>
import { RouterLink, RouterView } from 'vue-router'
import Minhahistoria from './views/minhahistoria.vue';
import familia from './views/familia.vue';
import emprego from './views/emprego.vue';
import conhecimento from './views/conhecimento.vue';
import hobbie from './views/hobbie.vue';
import treinamentoDiv from './views/treinamentoDiv.vue';
import 'bootstrap/dist/css/bootstrap.css';
import contatos from './views/contatos.vue'

export default{
  components: {
    Minhahistoria,
    familia,
    emprego,
    conhecimento,
    hobbie,
    treinamentoDiv,
    contatos
  }
}
</script>

<template>
  <header>
    <div class="divCabecalho">
        <nav>
          <RouterLink to="/"><i class="bi bi-clock-history"></i> História</RouterLink>  | 
          <RouterLink to="/familia"><i class="bi bi-people"></i> Familia</RouterLink>  | 
          <RouterLink to="/emprego"><i class="bi bi-briefcase"></i> Experiências</RouterLink>  | 
          <RouterLink to="/conhecimento"><i class="bi bi-award"></i> Conhecimentos</RouterLink>  | 
          <RouterLink to="/hobbie"><i class="bi bi-joystick"></i> Hobbies</RouterLink> | 
          <RouterLink to="/treinamentoDiv"><i class="bi bi-arrows-movebi bi-person-workspace"></i> Projetos</RouterLink> |
          <RouterLink to="/contatos"><i class="bi bi-person-lines-fill"></i> Contatos</RouterLink>

        </nav>
      </div>  
  </header>
  
  <main>
    <RouterView />

  </main>
  <footer>
    <a href="http://www.facebook.com/douglas.amaral2306" target="_blank"><i class="bi bi-facebook" style="font-size: 2rem; color: white;"></i></a>
    <a href="http://www.github.com/Douglaxz" target="_blank"><i class="bi bi-github" style="font-size: 2rem; color: white;"></i></a>
    <a href="https://www.linkedin.com/in/douglas-amaral-dga/" target="_blank"><i class="bi bi-linkedin" style="font-size: 2rem; color: white;"></i></a>
    <a href="http://www.instagram.com/douglaxz" target="_blank"><i class="bi bi-instagram" style="font-size: 2rem; color: white;"></i></a>
    <a href="http://www.webwhatsapp.com/5541996686000" target="_blank"><i class="bi bi-whatsapp" style="font-size: 2rem; color: white;"></i></a>
  </footer>
</template>

<style scoped>
</style>

