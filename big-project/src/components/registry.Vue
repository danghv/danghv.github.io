<template>
  <div class="container" id="app">
    <h1>thông tin thêm về bạn</h1>
    <div class="row">
      <div class="col-sm-6">
        <h3>hình dáng</h3>
        <div class="form-group">
          <label for="sel1">thân hình</label>
          <select class="form-control" id="sel1">
            <input type="text"> search
            <option v-for="body in bodys">{{body}}</option>
          </select>

          <label for="sel2">dân tộc</label>
          <select class="form-control" id="sel2">
            <input type="text"> search
            <option v-for="folk in folks">{{folk}}</option>
          </select>

          <label for="sel3">màu mắt</label>
          <select class="form-control" id="sel3">
            <input type="text"> search
            <option v-for="eyecolor in eyecolors">{{eyecolor}}</option>
          </select>

          <label for="sel4">màu tóc</label>
          <select class="form-control" id="sel4">
            <input type="text"> search
            <option v-for="haircolor in haircolors">{{haircolor}}</option>
          </select>

          <label for="sel5">chòm sao</label>
          <select class="form-control" id="sel5">
            <input type="text"> search
            <option v-for="horoscope in horoscopes">{{horoscope}}</option>
          </select>
        </div>  
      </div>

      <div class="col-sm-6">
        <h3>hoàn cảnh sống</h3>
        <div class="form-group">
          <label for="sel6">quan hệ giới tính</label>
          <select class="form-control" id="sel6">
            <option v-for="relationship in relationships">{{relationship}}</option>
          </select>

          <label for="sel7">tình trạng mối quan hệ</label>
          <select class="form-control" id="sel7">
            <option v-for="marriage in marriages">{{marriage}}</option>
          </select>

          <label for="sel8">tình trạng sống</label>
          <select class="form-control" id="sel8">
            <option v-for="livewith in livewiths">{{livewith}}</option>
          </select>

          <label for="sel9">con cái</label>
          <select class="form-control" id="sel9">
            <option v-for="children in childrens">{{children}}</option>
          </select>
        </div>
      </div>
      
    </div>

    <div class="row">
      <div class="col-sm-6">
        <h3>thói quen</h3>
        <div class="form-group">
          <label for="sel10">thức khuya</label>
          <select class="form-control" id="sel10">
            <input type="text"> search
            <option v-for="sleepytime in sleepytimes">{{sleepytime}}</option>
          </select>

          <label for="sel11">ngủ nướng</label>
          <select class="form-control" id="sel11">
            <input type="text"> search
            <option v-for="wakeup in wakeups">{{wakeup}}</option>
          </select>

          <label for="sel13">đi chơi</label>
          <select class="form-control" id="sel13">
            <input type="text"> search
            <option v-for="dated in dateds">{{dated}}</option>
          </select>

          <div class="form-group">
            <label for="sel1">hút thuốc</label>
            <select class="form-control" id="sel1">
              <option v-for="smoke in smokes">{{smoke}}</option>
            </select>

            <label for="sel1">bia rượu</label>
            <select class="form-control" id="sel1">
              <option v-for="drink in drinks">{{drink}}</option>
            </select>
          </div>
        </div>  
      </div>

      <div class="col-sm-6">
        <h3>lý lịch</h3>
        <div class="form-group">
          <label for="sel14">văn hóa</label>
          <select class="form-control" id="sel14">
            <option v-for="education in educations">{{education}}</option>
          </select>

          <label for="sel15">là con thứ mấy trong gia đình</label>
          <select class="form-control" id="sel15">
            <option v-for="rank in ranks">{{rank}}</option>
          </select>

          <label for="sel16">bạn đến từ</label>
          <select class="form-control">
            <option v-for="city in cities">{{city}}</option>
          </select>
          <!-- test multiselected -->
          
          <label for="sel16">music</label>
          <ul class="chosen-list" id="chosen-list" v-on:click="displayList">
            <li v-for="listMusic in listMusics">{{listMusic}}</li>
            <li id='input-list'>
              <input class="form-control form-music" type="text" placeholder="hãy chọn ...">
            </li>
          </ul>
          <ul id="list-music" v-show="show">
            <li v-on:click="appendList(music)" v-for="music in musics">{{music}}</li>
          </ul>
          
        </div>
      </div>  
    </div>

    <div class="row">
      <div class="col-sm-12">
        <router-link to='registrystep3'><button class="btn btn-success">bước tiếp theo</button></router-link>
        
      </div>
    </div>
  </div>

</template>
<style>
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  .chosen-list {
    list-style: none;
  }
  .chosen-list ul li {
    display: inline-block;
    float: left;
  }
  #list-music {
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: none;
  }
  #list-music li {
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    text-align: center;
    font-weight: bold;
    display: block;
    padding: 0 2px 1px;
  }
  #list-music li:hover {
    background-color: #3d96fb;
  }
  #chosen-list{
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 34px;
    display: flex;
    justify-content: center;
  }
</style>
<script>
  export default {
    name: 'app',
    methods: {
      displayList () {
        var x = document.getElementById('list-music')
        if (x.style.display === 'none') {
          x.style.display = 'block'
        } else {
          x.style.display = 'none'
        }
      },
      appendList (value) {
        // console.log(value)
        this.listMusics.push(value)
        if (this.show === false) {
          this.show = true
        } else this.show = false
      }
    },
    data () {
      return {
        show: true,
        listMusics: [],
        bodys: ['-', 'vừa phải', 'thể thao', 'mảnh mai', 'cơ bắp vạm vỡ', 'hơi béo', 'to đẹp'],
        folks: ['-', 'châu âu', 'châu á', 'châu phi', 'ả rập', 'la tinh', 'nam châu á'],
        eyecolors: ['-', 'đen', 'nâu', 'xanh da trời', 'xanh lá cây', 'xám'],
        haircolors: ['-', 'nâu', 'đen', 'vàng hoe', 'cạo trọc', 'đỏ', 'hói', 'trắng', 'xám', 'vàng nhạt'],
        horoscopes: ['-', 'bạch dương', 'kim ngưu', 'song sinh', 'sao giải', 'sư tử', 'xử nữ', 'thiên bình', 'bọ cạp', 'nhân mã', 'ma kết', 'bảo bình', 'song ngư'],
        sleepytimes: ['-', 'ngủ sớm', 'bình thường', 'khuya', 'cú đêm', 'thỉnh thoảng thức khuya'],
        wakeups: ['-', 'cuối tuần', 'không bao giờ', 'thỉnh thoảng', 'thường xuyên'],
        entertaiments: ['-', 'game', 'xem phim', 'đọc sách', 'nghe nhạc'],
        dateds: ['-', 'bar', 'nhà hàng', 'rạp chiếu phim', 'ăn vặt'],
        smokes: ['-', 'không', 'có', 'xã giao'],
        drinks: ['-', 'không', 'có', 'xã giao'],
        relationships: ['-', 'ngay thẳng', 'cởi mở', 'với hai giới', 'đồng tính'],
        marriages: ['-', 'mở', 'độc thân', 'đã kết hôn'],
        livewiths: ['-', 'một mình', 'bạn cùng phòng', 'gia đình'],
        childrens: ['-', 'chưa', 'có một con', 'có hơn một con', 'có con nhưng không sống cùng'],
        educations: ['-', 'cấp 3', 'trung cấp', 'cao đẳng', 'đại học', 'thạc sỹ', 'tiến sỹ'],
        ranks: ['-', 'con trưởng', 'con thứ 2', 'con thứ 3', 'con thứ 4', 'con út', 'con thứ 5', 'con thứ 6'],
        cities: ['-', 'thái bình', 'hà nội', 'tp hồ chí minh', 'đà nẵng'],
        musics: ['-', 'pop', 'k-pop', 'rock']
      }
    }
  }

</script>
