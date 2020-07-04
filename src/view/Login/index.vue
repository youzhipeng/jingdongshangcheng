<template>
<div class="login">
    <p class="hander">登入</p>
<van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      登入
    </van-button>
  </div>
</van-form>
</div>
</template>

<script>
import { Form, Field, Button } from "vant";
export default {
  name: "login",
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {
  },
  methods: {
    onSubmit() {
      // console.log("登入");
      let data={
        username:this.username,
        password:this.password
      }
      this.$http.login(data).then((res) =>{
        let token = res.data.token
        localStorage.setItem("token",token)
        this.$router.replace("/home")
      })
    },
    getl() {
    
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  .hander {
    text-align: center;
  }
}
</style>
