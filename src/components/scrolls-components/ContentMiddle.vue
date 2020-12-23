<template>
  <div class="box-middle">
      <div v-for="miniscroll in getMiniscrolls" :key="miniscroll.id" class="warscroll">
        <div class="warscroll-front">
          {{ miniscroll.id }}
          <p>{{ miniscroll.name }}</p>
          <p v-for="weapon in miniscroll.weapons" :key="weapon.id">
            {{ weapon.name }}
          </p>
          <p v-for="ability in miniscroll.abilities" :key="ability.id">
            {{ ability.name }}
          </p>
          <p v-for="keyword in miniscroll.keywords" :key="keyword.id">
            {{ keyword.keyword }}
          </p>
        </div>
      </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class ContentMiddle extends Vue {
  @Getter getMiniscrolls;
}
</script>

<style lang="scss" scoped>
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

.box-middle {
  border-left: 2px solid $dark-grey;
  border-right: 2px solid $dark-grey;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.warscroll {
  font-family: sans-serif;
  display: flex;
  background: #fff;
  border: 1px solid #000000;
  box-shadow: none;
  transition: transform .3s, border .3s, box-shadow .3s;
  margin-right: 2px;
  margin-bottom: 2px;
  position: relative;
  overflow: hidden;
}
    
.warscroll-back {
  border-left: 1px solid #000000;
}

.warscroll-id {
  display: none;
}

.warscroll-front, .warscroll-back {
  height: 240px;
  width: 340px;
  padding: 5px 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}


</style>