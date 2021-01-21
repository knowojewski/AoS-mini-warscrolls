<template>
  <div class="reminders-form">
      <h4 class="title">REMINDERS</h4>
      <div class="content">
          <div class="content-left">
              <p class="reminder-name">Move</p>
              <p class="reminder-name">Save</p>
              <p class="reminder-name">Wounds</p>
              <p class="reminder-name">Bravery</p>
          </div>
          <div class="content-right">
              <div class="inputs">
                  <input type="text" class="input" placeholder="First" v-model="reminders.move.first">
              </div>
              <div class="inputs">
                  <input type="text" class="input" placeholder="First" v-model="reminders.save.first">
                  <input type="text" class="input" placeholder="Second" v-model="reminders.save.second">
              </div>
              <div class="inputs">
                  <input type="text" class="input" placeholder="First" v-model="reminders.wounds.first">
                  <input type="text" class="input" placeholder="Second" v-model="reminders.wounds.second">
              </div>
              <div class="inputs">
                  <input type="text" class="input" placeholder="First" v-model="reminders.bravery.first">
                  <input type="text" class="input" placeholder="Second" v-model="reminders.bravery.second">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class RemindersForm extends Vue {
    @Prop(Object) reminders;

    mounted() {
        console.log(this.reminders);
    }
}
</script>

<style lang="scss">
.reminders-form {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 180px;
    width: 220px;
    height: 150px;
    box-shadow: 0px 0px 10px #DFDFDF;
    padding: 0px 15px 5px 15px;

    .title {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }

    .content {
        flex: 1;
        width: 100%;
        display: flex;

        .content-left {
            width: 33.3%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .reminder-name {
                font-size: 15px;
            }
        }

        .content-right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 66.6%;

            .inputs {
                display: flex;
                justify-content: space-around;

                input {
                    width: 60px;
                    height: 28px;
                    padding: 0 3px;
                    font-size: 15px;
                    border: none;
                    background: #ececec;
                }

                input::placeholder {
                    font-style: italic;
                }
            }
        }
    }
}
</style>