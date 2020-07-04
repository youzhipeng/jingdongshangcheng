<template>
<div class="login">
    <p class="hander">注册</p>
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
    <van-field
    v-model="password2"
    type="password"
    name="密码"
    label="密码"
    placeholder="再次确认密码"
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
// Vue.prototype.$apis = apis
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
      password: "",
      password2:''
    };
  },
  mounted() {
    // let data={}
    // this.$apis(username,)
  },
  methods: {
    onSubmit() {
      let data={
        username:this.username,
        password:this.password,
        password2:this.password2
      }
      console.log(this.$http)
     this.$http.regist(data).then((res)=>{
       console.log(res)
      this.$router.replace("/login")
     })
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
