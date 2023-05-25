function taiKhoanUeser(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCoBan = luongCoBan;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.tongLuong = function () {
    var chucVu = this.chucVu;
    var tienLuong = this.luongCoBan;
    if (chucVu === "Sếp") {
      return tienLuong * 3;
    } else if (chucVu === "Trưởng phòng") {
      return tienLuong * 2;
    } else if (chucVu === "Nhân viên") {
      return tienLuong * 1;
    }
  };
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "Nhân Viên Xuất Sắc";
    } else if (this.gioLam >= 172) {
      return "Nhân Viên Giỏi";
    } else if (this.gioLam >= 160) {
      return "Nhân Viên Khá";
    } else if (this.gioLam < 160) {
      return "Nhân Viên Trung Bình";
    }
  };
}
function resetThemTaiKhoan() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("datepicker").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "";
  document.getElementById("gioLam").value = "";
}
function timViTriQLNV(taiKhoan) {
  var viTri = -1;
  for (var i = 0; i < arrQLNV.length; i++) {
    if (arrQLNV[i].taiKhoan == taiKhoan) {
      viTri = i;
    }
  }
  return viTri;
}
function capNhatQLNV(taiKhoan) {
  var viTriCapNhat = timViTriQLNV(taiKhoan);
  var taiKhoanUeser = arrQLNV[viTriCapNhat];
  document.getElementById("tknv").readOnly = true;
  document.getElementById("email").readOnly = true;
  document.getElementById("tknv").value = taiKhoanUeser.taiKhoan;
  document.getElementById("name").value = taiKhoanUeser.hoTen;
  document.getElementById("email").value = taiKhoanUeser.email;
  document.getElementById("password").value = taiKhoanUeser.matKhau;
  document.getElementById("datepicker").value = taiKhoanUeser.ngayLam;
  document.getElementById("luongCB").value = taiKhoanUeser.luongCoBan * 1;
  document.getElementById("chucvu").value = taiKhoanUeser.chucVu;
  document.getElementById("gioLam").value = taiKhoanUeser.gioLam * 1;
}
