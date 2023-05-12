<script>

export default {
  data() {
    return {
      formData: {},
      title: "Entre em contato:",
    };
  },
  methods: {
    trataSubmit(event) {
      event.preventDefault();
      
      /* document.getElementById("formulario").reset() */
      
      const dadosDoFormulario = {
        ...this.formData,
      };

      let dados=""

      for(const chave of Object.keys(this.formData)) {
        dados+=`${chave}: ${this.formData [chave]}, `
      }

      alert (dados)
      
      this.formData={}
    },
    minhaFuncaoUnica(event) {
      const nomeDoInput = event.target.name;
      const valorDoInput = event.target.value;

      this.formData[nomeDoInput] = valorDoInput;
    },
  },
};
</script>

<template>
  <h1></h1>
  <div class="contatos"></div>
  <h4>{{ title }}</h4>
  <form id="formulario" @submit="trataSubmit">
    <input
      class="input"
      name="username"
      placeholder="Name"
      :value="formData.username"
      @keyup="minhaFuncaoUnica"
    />
    <input
      class="input"
      name="sobrenome"
      placeholder="Sobrenome"
      :value="formData.sobrenome"
      @keyup="minhaFuncaoUnica"
    />
    <input
      class="input"
      name="email"
      placeholder="Email"
      :value="formData.email"
      @keyup="minhaFuncaoUnica"
    />
    <input
      class="input"
      name="celular"
      placeholder="Celular"
      :value="formData.celular"
      @keyup="minhaFuncaoUnica"
    />
    <textarea
      class="input"
      name="message"
      placeholder="Escreva uma mensagem"
      rows="3"
      :value="formData.message"
      @keyup="minhaFuncaoUnica"
    ></textarea>
    <button type="submit">Submit</button>
    
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30rem;
  width: 800px;
}
.input,
button {
  font-family: "Epilogue";
}

.input {
  background-color: #a3a3a3;
  border-color: black;
  border-width: 3px;
  padding: 1rem;
}

button {
  max-width: 200px;
  width: 50%;
  padding: 0.5rem ;
  background-color: #2d2d2d;
  color: white;
}

@media (max-width: 400px) {
  button {
    width: 100%;
    max-width: unset;
  }
}
</style>