<template>
  <div class="Welcome">
    <section class="ALECTRION">
      <p>ALECTRION</p>
      <div class="Mensaje">Procesar imagen</div>
          <div>
    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>

    <label >
      <input class="Mensaje" type="file" ref="file" @change="uploadImage($event)" />
    </label>

    <div class="alert alert-light" role="alert">{{ message }}</div>

    <div class="card">
      <div class="Message">List of Files</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(file, index) in fileInfos"
          :key="index"
        >
          <a :href="file.url">{{ file.name }}</a>
        </li>
      </ul>
    </div>
  </div>


    </section>


    <footer>Desarrollado por ... &copy; 2020</footer>
  </div>
</template>
<script>
// import axios from  'axios'
// import func from '../../vue-temp/vue-editor-bridge'
 export default {
        name:'images',
        data(){
            return{
               ammount: 0
            }
        }
 }
//  methods: {
//       tryme() {
//         this.message = Date()
//       }
//  }
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css?family=Orbitron');
.Welcome {
  position: absolute;
  background-image: url("img/Welcome.jpg");
  width: 100%;
  height: 100%;
}

.ALECTRION {
  position: relative;
  top: 30%;
  transform: translateY(-50%);
  text-align: center;
}

p {
  font-family: Orbitron;
  font-size: 200px;
  font-weight: bold;
  color: white;
  text-shadow: #a945c7 0px 0px 30px;
  margin: 0px
}

.Mensaje {
  font-family: Orbitron;
  font-size: 35px;
  color: #a945c7;
  text-shadow: #a945c7 0px 0px 10px;
  position: relative;
  bottom: 25px;
}

button {
  position: relative;
  top: 175px;
  left: 50%;
  transform: translateX(-100%);
  font-family: Consolas;
  font-size: 30px;
  letter-spacing: 1px;
  background-color:  transparent; 
  padding: 10px 36px;
  transition-duration: 0.2s;
  border: 1px solid #a945c7;
  display: inline-block;
}

button:hover {
  background: #f2f2f2;
  box-shadow: 0 0 10px #a945c7, 0 0 40px #a945c7, 0 0 80px #a945c7;
}

footer {
  font-family: Consolas;
  font-size: 20px;
  color: white;
  position: absolute;
  left: 20px;
  bottom: 20px;
}
</style>
  