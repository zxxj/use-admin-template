<template>
  <div class="login">
    <Row class="login-container">
      <Col :span="18" :xs="0" :lg="18" class="left-container"></Col>
      <Col :span="6" :xs="24" :lg="6" class="right-container">
        <div class="login-form-container">
          <Form class="form" :model="loginForm">
            <FormItem label="账号" class="label">
              <Input v-model:value="loginForm.username" />
            </FormItem>
            <FormItem label="密码" class="label">
              <Input v-model:value="loginForm.password" type="password" />
            </FormItem>

            <FormItem>
              <Button class="loginBtn" @click="loginBtnClick">登录</Button>
            </FormItem>
          </Form>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script setup lang="ts">
import { Row, Col, Form, FormItem, Input, Button } from 'ant-design-vue';
import { ref } from 'vue';

const loginForm = ref({
  username: 'admin',
  password: '111111',
});

const loginBtnClick = () => {
  console.log(123);
};
</script>

<style scoped lang="scss">
.login {
  .login-container {
    width: 100%;
    height: 100vh;

    .left-container {
      width: 80%;
      height: 100%;
      background-image: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
      );
    }

    .right-container {
      background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
      .login-form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        .form {
          display: flex;
          flex-direction: column;
          width: 60%;

          .loginBtn {
            margin-left: 40px;
            width: 70%;
            color: #fff;
            background-image: linear-gradient(
              to right,
              #eea2a2 0%,
              #bbc1bf 19%,
              #57c6e1 42%,
              #b49fda 79%,
              #7ac5d8 100%
            );
          }
        }
      }
    }
  }
}

:deep(.ant-form-item-control-input-content) {
  display: flex !important;
  justify-content: center !important;
}
:deep(
    :where(.css-dev-only-do-not-override-hkh161).ant-form-item
      .ant-form-item-label
      > label
  ) {
  color: #fff !important;
}

:deep(
    :where(.css-dev-only-do-not-override-hkh161).ant-btn-default:not(
        :disabled
      ):hover
  ) {
  color: #fff !important;
  border-color: #fff !important;
}
</style>
