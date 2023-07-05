<template>

<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"label-width="100px" class="demo-ruleForm">

	<el-form-item label="用户名" prop="age">
    	<el-input v-model.number="ruleForm2.age"></el-input>
  	</el-form-item>
  	<el-form-item label="密码" prop="pass">
    	<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  	</el-form-item>
  
  
  	<el-form-item>
    	<el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
    	<el-button @click="resetForm('ruleForm2')">重置</el-button>
  	</el-form-item>
</el-form>

</template>
<script>
import axios from 'axios';

  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 9999) {
              callback(new Error('请输入学号或者工号'));
            } else {
              callback();
            }
          }
        }, 1000);
    	};
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            // this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
     
      return {
        ruleForm2: {
          pass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          // checkPass: [
          //   { validator: validatePass2, trigger: 'blur' }
          // ],
          
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      	submitForm(formName) {
        	this.$refs[formName].validate((valid) => {
	          if (valid) {
	            
	            this.check();
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
      	},
	    resetForm(formName) {
	        this.$refs[formName].resetFields();
	    },
      	check(){
	      	let host="http://0.0.0.0:8080";
	      	let pw=this.ruleForm2.pass;
	      	// console.log(this.ruleForm2.age);
	      	axios.post(host+'/login/check/role', {
	                        userName:this.ruleForm2.age,
	                        passWord:pw,
	                        }).then(function (response) {
	            if (200===response.data.code) {
	            	// this.$router.push('admin');
	            	console.log(response.data.data.user_role);
                if (3===response.data.data.user_role) {
                    window.location.href='http://0.0.0.0:8081/#/';
                    // console.log("ss");
                }else{
                    window.location.href='http://0.0.0.0:8081/#/admin';
                }
	            	
	            }
                
			});
    	},
    }
}
</script>
