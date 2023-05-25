//vadlidation
function kiemTraRong(checkInput, idThongBao) {
  var kiemTraSpace = /^\s+|\s+$/.test(checkInput);
  if (kiemTraSpace) {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng không nhập khoảng trống!";
    return false;
  }
  if (checkInput) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML = "Vui lòng không để trống!";
    return false;
  }
}
function taiKhoan2den6kytu(checkInput, idThongBao) {
  var khongCoSpace = /^\s+$/.test(checkInput);
  if (!khongCoSpace && checkInput.length <= 6 && checkInput.length > 2) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập ít nhất 6 kí tự và không có khoảng trắng";
    return false;
  }
}

function tenNhanVien(checkInput, idThongBao) {
  var onlyString = /^[a-zA-Z0-9_ ]*$/.test(checkInput);
  if (onlyString) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML = "Vui lòng chỉ nhập chữ cái";
    return false;
  }
}
function kiemTraEmail(checkInput, idThongBao) {
  var kiemTraEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var emailHopLe = kiemTraEmail.test(checkInput);
  if (emailHopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng email!";
    return false;
  }
}
function kiemTraPass(checkInput, idThongBao) {
  var kiemTraMK = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,10})$/;
  var mkHopLe = kiemTraMK.test(checkInput);
  if (mkHopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML =
      "Mật khẩu bao gồm 6-10 ký tự, ít nhất 1 chữ cái viết hoa, 1 chữ cái thường, 1 chữ số!";
    return false;
  }
}
function kiemTraLuongCB(checkInput, idThongBao) {
  var onlyNum = /^[0-9]*$/.test(checkInput);
  var onlyString = /^[a-zA-Z]+$/.test(checkInput);
  var noSpace = /^\s+$/.test(checkInput);
  if (onlyNum && checkInput >= 1000000 && checkInput <= 20000000) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else if (onlyString || noSpace) {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML = "Chỉ nhập số!";
    return false;
  } else {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML =
      "Chỉ nhập số! Tối thiểu là 1 000 000, tối đa là 20 000 000!";
    return false;
  }
}
function kiemTraSoGioLam(checkInput, idThongBao) {
  var onlyNum = /^[0-9]*$/.test(checkInput);
  var onlyString = /^[a-zA-Z]+$/.test(checkInput);
  if (onlyNum && checkInput >= 80 && checkInput <= 200) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else if (onlyString) {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML = "Chỉ nhập số!";
    return false;
  } else {
    document.getElementById(idThongBao).style.display = "inline-block";
    document.getElementById(idThongBao).innerHTML =
      "Chỉ nhập số! Tối thiểu là 80, tối đa là 200!";
    return false;
  }
}
//LocalStorage
function saveLocalStorage() {
  localStorage.setItem("arrQLNV", JSON.stringify(arrQLNV));
}
function removeLocalStorage(viTriXoa) {
  localStorage.removeItem(arrQLNV[viTriXoa]);
}
function getLocalStorage() {
  var arrQLNVLocal = JSON.parse(localStorage.getItem("arrQLNV"));

  if (arrQLNVLocal != null) {
    arrQLNV = arrQLNVLocal;
  }
}
