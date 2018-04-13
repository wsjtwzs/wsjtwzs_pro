<template>

  <div>
    <div class="container">

      <button class="btn btn-default btn-success btn-block " @click="toNext">下一页</button>
      <div style="width: 200px;background-color: red;height: 200px" >
        <img  style="overflow: hidden" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3637558653,1735813698&fm=58"/>
      </div>

      <span class="glyphicon glyphicon-search">111111111</span>

      <a href="https://www.baidu.com"> 跳转到百度</a>


      <div class="jumbotron">
        <h1>我的第一个 Bootstrap 页面</h1>
        <p>重置窗口大小，查看响应式效果！</p>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <h3>Column 1</h3>
          <p>学的不仅是技术，更是梦想！</p>
          <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
        </div>
        <div class="col-sm-4">
          <h3>Column 2</h3>
          <p>学的不仅是技术，更是梦想！</p>
          <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
        </div>
        <div class="col-sm-4">
          <h3>Column 3</h3>
          <p>学的不仅是技术，更是梦想！</p>
          <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-striped table-bordered table-condensed">
          <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>头像</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in pageData">
            <td>{{index}}</td>
            <td>{{item.title}}</td>
            <td>
              <img class="img-circle img-responsive" style="border-radius:50%" :src="item.image" width="50px" height="50px"/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="dropdown">
        <button type="button" class="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">主题
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
          <li role="presentation">
            <span>111111111</span>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">数据挖掘</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">数据通信/网络</a>
          </li>
          <li role="presentation" class="divider"></li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">分离的链接</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return{
          msg:'9999',
        pageData:[
          {title:'111',image:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3637558653,1735813698&fm=58'},
          {title:'222',image:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3637558653,1735813698&fm=58'},
          {title:'333',image:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3637558653,1735813698&fm=58'},
          {title:'444',image:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3637558653,1735813698&fm=58'},
          {title:'555',image:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3637558653,1735813698&fm=58'},
          {title:'666',image:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3637558653,1735813698&fm=58'},
          {title:'777',image:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3637558653,1735813698&fm=58'},
          {title:'888',image:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3637558653,1735813698&fm=58'},
        ]
      }
    },
    methods:{
      toNext: function () {
        this.$router.push('/user_detail')
      }
    }
  }
</script>

<style>
  .table th, .table td {
    text-align: center;
    vertical-align: middle!important;
  }
</style>

