<template>
  <section class="scrolls-content">
      <div class="row">
          <p class="scrolls-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a enim id elit luctus pellentesque. Sed malesuada ipsum et ipsum rhoncus, sed commodo dolor viverra. Vestibulum ac metus vel libero vehicula viverra a sit amet urna.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a enim id elit luctus pellentesque. Sed malesuada ipsum et ipsum rhoncus, sed commodo dolor viverra. Vestibulum ac metus vel libero vehicula viverra a sit amet urna. 
          </p>
      </div>
      <div class="scrolls-box">
            <div class="box-part box-top">
                <div class="box-title">
                    <img class="icon" src="../../assets/cog-icon.png" alt="Cog Icon">
                    <h4 class="title">Your miniscrolls</h4>
                </div>
            </div>
            <ContentMiddle />
            <div class="box-part box-bottom">
                <button class="btn box-btn">
                    <i class="fas fa-tools"></i>
                    Create Miniscroll
                </button>
            </div>
        </div>
  </section>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import ContentMiddle from './ContentMiddle';

@Component({
  components: {
    ContentMiddle
  }
})
export default class ScrollsContent extends Vue {

}
</script>

<style lang="scss">
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

.scrolls-content {

    .scrolls-paragraph {
        margin: 40px 0;
        font-size: 20px;
    }

    .scrolls-box {
        max-width: 1400px;
        margin: 0 auto;

        .box-part {
            width: 100%;
            background: $dark-grey;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .box-top {
            .box-title{
                display: flex;
                align-items: center;
                position: relative;

                .icon {
                    margin-right: 8px;
                }

                .title {
                    font-size: 22px;
                    font-weight: 400;
                    color: #f5f5f5;
                }
            }

            .box-title::after, .box-title::before {
                content: '';
                position: absolute;
                height: 1px;
                width: 100%;
                top: 50%;
                background-color: #f5f5f5;
            }

            .box-title::after { right: -110%; }

            .box-title::before { left: -110%; }
        }
    }
}
</style>