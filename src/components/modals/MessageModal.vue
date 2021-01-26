<template>
  <div class="messages">
    <div v-for="message in getMessages" :key="message.id" class="message-box">
        <h4 class="message-title">{{ message.title }}</h4>
        <hr class="message-line">
        <p class="message-content">{{ message.content }}</p>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class MessageModal extends Vue {
    @Getter getMessages
}
</script>

<style lang="scss">
.messages {
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    z-index: 12;
}

.message-box {
    width: 500px;
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.85);
    color: #fff;
    padding: 30px;
    margin-bottom: 7px;
    text-align: center;

    .message-title {
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .message-line {
        margin: 10px;
        background-color: #fff;
    }

    .message-content { font-size: 18px; }
}

.message-box.display {
    display: block;
}
</style>