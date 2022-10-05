// 設定bulma modal
class BulmaModal {
  constructor(selector) {
    this.elem = document.querySelector(selector)
    this.close_data()
  }
  
  show() {
    this.elem.classList.toggle('is-active')
    this.on_show()
  }
  
  close() {
    this.elem.classList.toggle('is-active')
    this.on_close()
  }
  
  close_data() {
    var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
    var that = this
    modalClose.forEach(function(e) {
      e.addEventListener("click", function() {
        
        that.elem.classList.toggle('is-active')
        var event = new Event('modal:close')
        that.elem.dispatchEvent(event);
      })
    })
  }
  
  on_show() {
    var event = new Event('modal:show')
  
    this.elem.dispatchEvent(event);
  }
  
  on_close() {
    var event = new Event('modal:close')
  
    this.elem.dispatchEvent(event);
  }
  
  addEventListener(event, callback) {
    this.elem.addEventListener(event, callback)
  }
}
// 登入會員 modal
let btn1 = document.querySelector("#btn1")
let mdl = new BulmaModal("#modal-login")
btn1.addEventListener("click", function () {
  mdl.show()
})
mdl.addEventListener('modal:show', function() {
  console.log("opened")
})
mdl.addEventListener("modal:close", function() {
  console.log("closed")
})

// 註冊會員 modal
let btn2 = document.querySelector("#btn2")
let md2 = new BulmaModal("#modal-register")
btn2.addEventListener("click", function () {
  md2.show()
})
md2.addEventListener('modal:show', function() {
  console.log("opened")
})
md2.addEventListener("modal:close", function() {
  console.log("closed")
})

// 登入會員事件
$('#register').on('click',() => {
  registerMember()
})

function registerMember() {
  let data = {
    name: $('#rgName').val(),
    email: $('#rgEmail').val(),
    password: $('#rgPassword').val()
  };
  if ($('#rgPassword').val() === $('#rgPasswordCheck').val()){
    axios.post("api/register", data)
    .then((res) => {
      if (res.status === 201){
        alert('註冊成功!');
        window.location.href = "/index"
      }
    })
    .catch((err) => {
      alert('註冊失敗!');
      location.reload();
    })
  } else {
    alert ('密碼驗證錯誤!請重新輸入')
  }
}