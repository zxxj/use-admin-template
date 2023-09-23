<template>
  <div class="login">
    <Row class="login-container">
      <Col :span="18" :xs="0" :lg="18" class="left-container"></Col>
      <Col :span="6" :xs="24" :lg="6" class="right-container">
        <div class="login-form-container">
          <Form ref="formRef" :rules="rules" class="form" :model="loginForm">
            <FormItem class="label" name="username">
              <Input v-model:value="loginForm.username">
                <template #prefix><UserOutlined /></template>
              </Input>
            </FormItem>
            <FormItem class="label" name="password">
              <Input v-model:value="loginForm.password" type="password">
                <template #prefix><LockOutlined /></template>
              </Input>
            </FormItem>

            <FormItem>
              <Button
                class="loginBtn"
                :loading="isLoading"
                @click="loginBtnClick"
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script setup lang="ts">
import { Row, Col, Form, FormItem, Input, Button } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import useUserStore from '@/stores/modules/user';
import type { ILoginFormData } from '@/types/api/login';
import type { Rule } from 'ant-design-vue/es/form';

const userStore = useUserStore();

const formRef = ref();

const rules: Record<string, Rule[]> = {
  username: [{ required: true, message: '请输入用户名!', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码!', trigger: 'blur' }],
};

const loginForm = ref<ILoginFormData>({
  username: 'admin',
  password: '111111',
});

const isLoading = ref(false);

const loginBtnClick = async () => {
  isLoading.value = true;
  formRef.value
    .validate()
    .then(async () => {
      await userStore.loginAction(loginForm.value);
    })
    .catch(() => {
      isLoading.value = false;
    });
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
      background: url('../../assets/bg.jpg') no-repeat center center;
      background-size: cover;
    }

    .right-container {
      background-color: #bbc1bf;
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
            width: 80%;
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
