console.log("first");
var arrQLNV = [
  new taiKhoanUeser(
    "SE1406",
    "Đặng Trung Hiếu",
    "hieubede@gmail.com",
    "123456",
    "2023-05-03",
    1200000,
    "Nhân viên",
    195
  ),
];
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
console.log(taiKhoanUeser);
function renderGiaoDien() {
  var content = "";
  for (var i = 0; i < arrQLNV.length; i++) {
    var taiKhoanUeser = arrQLNV[i];
    content += `<tr>
   <th>${taiKhoanUeser.taiKhoan}</th>
   <th>${taiKhoanUeser.hoTen}</th>
   <th>${taiKhoanUeser.email}</th>
   <th>${taiKhoanUeser.ngayLam}</th>
   <th>${taiKhoanUeser.chucVu}</th>
   <th>${taiKhoanUeser.tongLuong()}</th>
   <th>${taiKhoanUeser.xepLoai()}</th>
   <th><button class="btn btn-danger me-3" onclick="xoaQLSV('${
     taiKhoanUeser.taiKhoan
   }')"><i class="fa-solid fa-trash"></i></button>
  <button data-toggle="modal" data-target="#myModal" onclick="capNhatQLNV('${
    taiKhoanUeser.taiKhoan
  }')" class="btn btn-warning me-3"><i class="fa-solid fa-pen"></i></button></th>

 </tr>
    `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
function themTaiKhoan() {
  var taiKhoan = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value + "";
  var luongCoBan = document.getElementById("luongCB").value;
  var chucVu = document.getElementById("chucvu").value + "";
  var gioLam = document.getElementById("gioLam").value;
  console.log("chucVu: ", chucVu);
  console.log("luongCoBan: ", luongCoBan);
  var taiKhoanMoi = new taiKhoanUeser(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
  var valid = true;
  if (chucVu == "Chọn chức vụ" || chucVu == "") {
    document.getElementById("tbChucVu").style.display = "inline-block";
    document.getElementById("tbChucVu").innerHTML = "Vui lòng không để trống!";
  } else if (chucVu !== "Chọn chức vụ") {
    document.getElementById("tbChucVu").innerHTML = "";
    document.getElementById("tbChucVu").style.display = "none";
  }
  if (ngayLam == "") {
    document.getElementById("tbNgay").style.display = "inline-block";
    document.getElementById("tbNgay").innerHTML = "Vui lòng không để trống!";
  } else {
    document.getElementById("tbNgay").style.display = "none";
    document.getElementById("tbNgay").innerHTML = "";
  }
  valid = true;
  valid =
    kiemTraRong(taiKhoan, "tbTKNV") &
    kiemTraRong(hoTen, "tbTen") &
    kiemTraRong(email, "tbEmail") &
    kiemTraRong(matKhau, "tbMatKhau") &
    kiemTraRong(luongCoBan, "tbLuongCB") &
    kiemTraRong(gioLam, "tbGiolam");
  valid &&= taiKhoan2den6kytu(taiKhoan, "tbTKNV");
  valid &&= kiemTraEmail(email, "tbEmail");
  valid &&= tenNhanVien(hoTen, "tbTen");
  valid &&= kiemTraPass(matKhau, "tbMatKhau");
  valid &&= kiemTraLuongCB(luongCoBan, "tbLuongCB");
  valid &&= kiemTraSoGioLam(gioLam, "tbGiolam");
  // if (kiemTraRong(taiKhoan, "tbTKNV")) {
  //   taiKhoan2den6kytu(taiKhoan, "tbTKNV");
  // }

  // if (kiemTraRong(email, "tbEmail")) {
  //   kiemTraEmail(email, "tbEmail");
  // }
  // if (kiemTraRong(hoTen, "tbTen")) {
  //   tenNhanVien(hoTen, "tbTen");
  // }
  // if (kiemTraRong(matKhau, "tbMatKhau")) {
  //   kiemTraPass(matKhau, "tbMatKhau");
  // }
  // if (kiemTraRong(luongCoBan, "tbLuongCB")) {
  //   kiemTraLuongCB(luongCoBan, "tbLuongCB");
  // }
  // if (kiemTraRong(gioLam, "tbGiolam")) {
  //   kiemTraSoGioLam(gioLam, "tbGiolam");
  // }

  if (!valid) {
    return;
  } else {
    arrQLNV.push(taiKhoanMoi);
    console.log("arrQLNV: ", arrQLNV);
    renderGiaoDien();
    resetThemTaiKhoan();
  }
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

function xoaQLSV(taiKhoan) {
  var viTriXoa = timViTriQLNV(taiKhoan);
  if (viTriXoa != -1) {
    arrQLNV.splice(viTriXoa, 1);
  }
  renderGiaoDien();
  console.log("arrQLNV: ", arrQLNV);
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
function capNhatTTNV() {
  var taiKhoan = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCoBan = document.getElementById("luongCB").value * 1;
  var chucVu = document.getElementById("chucvu").value + "";
  var gioLam = document.getElementById("gioLam").value * 1;
  var taiKhoanMoi = new taiKhoanUeser(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
  for (var i = 0; i < arrQLNV.length; i++) {
    if (arrQLNV[i].taiKhoan == taiKhoanMoi.taiKhoan) {
      arrQLNV[i] = taiKhoanMoi;
    }
  }
  renderGiaoDien();
  resetThemTaiKhoan();
  document.getElementById("tknv").readOnly = false;
  document.getElementById("email").readOnly = false;
  // document.querySelector(".modal-backdrop.fade").style.opacity = 0;
  // document.getElementById("myModal").classList.remove("pt-5");
  // document.getElementById("myModal").style.opacity = 0;
  // document.getElementById("myModal").style.display = "none";
}
document.getElementById("btnCapNhat").onclick = capNhatTTNV;
function timXepLoaiNhanVien() {
  var inputXepLoai = document.getElementById("searchName").value;

  if (inputXepLoai == "Nhân Viên Xuất Sắc") {
    arrQLNV = arrQLNV.filter(
      (element) => element.xepLoai() == "Nhân Viên Xuất Sắc"
    );
  } else if (inputXepLoai == "Nhân Viên Giỏi") {
    arrQLNV = arrQLNV.filter(
      (element) => element.xepLoai() == "Nhân Viên Giỏi"
    );
  } else if (inputXepLoai == "Nhân Viên Giỏi") {
    arrQLNV = arrQLNV.filter((element) => element.xepLoai() == "Nhân Viên Khá");
  } else if (inputXepLoai == "Nhân Viên Trung Bình") {
    arrQLNV = arrQLNV.filter(
      (element) => element.xepLoai() == "Nhân Viên Trung Bình"
    );
  }
  renderGiaoDien();

  console.log("arrQLNV: ", arrQLNV);
  // console.log("index: ", index);
  console.log("arrQLNV: ", arrQLNV);
  // console.log("arrQLNV: ", arrQLNV[index]);
}
