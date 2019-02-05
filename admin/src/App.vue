<template>

  <div class="container trening">
    <h1> Trening </h1>
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="ProgressStyle"></div>
    </div>

    <div class="box">
      <transition name="flip" mode="out-in">
    <AppStartScreen v-if="state == 'start'"
                    @onStart="onStart">
    </AppStartScreen>
    <AppQuestion    v-else-if="state == 'question'"
                    @success = "onQuestSuccess"
                    @error = "onQuestError"
                    :settings = "levels[level]">
    </AppQuestion>
    <AppMessage v-else-if="state == 'message'"
                :type="this.message.type"
                :text="this.message.text"
                @onNext = "onNext">

    </AppMessage>
    <AppResults v-else-if="state == 'result'" 
                :stats="stats"
                @repeat="onStart"
                @nextLevel="onStart">
    </AppResults>
    <div v-else class='jumbotron'>Unknown state</div>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: 'start',
      stats: {
        success: 0,
        error: 0
      },
      message: {
        type: '',
        text: ''
      },
      questMax: 3,

      level: 0,
      leves: [
      {
        from: 10,
        to: 40,
        range: 5,
        variants: 2
      },
      {
        from: 100,
        to: 200,
        range: 20,
        variants: 4
      },
      {
        from: 500,
        to: 900,
        range: 60,
        variants: 6
      }],
    }
  },

  computed: {
    questDone() {
      return this.stats.success - this.stats.error
    },

    ProgressStyle() {
      return {
        width: (this.questDone / this.questMax) * 100  + '%'
      }
    }
  },

  methods: {
    onStart(){
      this.state = 'question';
      this.stats.success = 0;
      this.stats.error = 0; 
    },
      onQuestSuccess() {
        this.state = 'message';
        this.message.text = "Good job!";
        this.message.type = "success";
        this.stats.success++;
    },
      onQuestError(msg){
        this.state = 'message';
        this.message.text = msg;
        this.message.type = 'warning';
        this.stats.error++;
    },
      onNext(){
        if(this.questDone < this.questMax){
        this.state = 'question';
        } else { this.state = 'result'};
      },
  }
}
</script>

<style scope>

.trening {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.box{
  margin: 10px;

}
.flip-enter{

}

.flip-enter-active{
  animation: flipInX 0.3s linear;
}

.flip-leave{

}

.flip-leave-active{
   animation: flipOutX 0.3s linear;
}

@keyframes flipInX{
  from{transform: rotateX(90deg);}
  to{transform: rotateX(0deg);}
}

@keyframes flipOutX{
  from{transform: rotateX(0deg);}
  to{transform: rotateX(90deg);}
}
</style>
