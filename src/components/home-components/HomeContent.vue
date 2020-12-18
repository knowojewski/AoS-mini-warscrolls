<template>
  <section class="home-content">
      <div class="row">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a enim id elit luctus pellentesque. Sed malesuada ipsum et ipsum rhoncus, sed commodo dolor viverra. Vestibulum ac metus vel libero vehicula viverra a sit amet urna. 

            Proin a risus ornare lacus efficitur lacinia. Integer in ex ultricies, ullamcorper dui non, tempor diam. Nam congue ut enim a semper. Nullam luctus ante quis purus laoreet convallis et quis dolor. Cras vitae tortor nibh. Phasellus malesuada tristique nulla, ac aliquam massa vestibulum et. 

            Mauris accumsan magna velit, aliquam fringilla purus eleifend vel. Quisque tempor justo ut malesuada vulputate. Aliquam nibh arcu, commodo non ex a, semper tempor nisi.

            Etiam mattis vel felis ac auctor. Suspendisse ut accumsan est. Integer id condimentum metus, a mattis orci. Integer semper urna non massa cursus tempor. Sed quis luctus mauris. Quisque eu lacinia quam. Aliquam elementum vitae lectus id dictum. Morbi convallis odio eget viverra vestibulum.
            </p>
      </div>
  </section>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomeContent extends Vue {

}
</script>

<style lang="scss" scoped>
.home-content {
    width: 100%;
    height: 100vh;
    padding: 50px 0;
}
</style>