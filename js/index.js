console.log("first");
var arrQLNV = [
  new taiKhoanUeser(
    "SE140604",
    "Đặng Trung Hiếu",
    "hieubede@gmail.com",
    "123456",
    "2023-05-03",
    70,
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
  <button onclick="openModal('${
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
  var ngayLam = document.getElementById("datepicker").value;
  var luongCoBan = document.getElementById("luongCB").value * 1;
  var chucVu = document.getElementById("chucvu").value + "";
  var gioLam = document.getElementById("gioLam").value * 1;
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
  arrQLNV.push(taiKhoanMoi);
  console.log("arrQLNV: ", arrQLNV);
  renderGiaoDien();
  resetThemTaiKhoan();
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
function openModal(taiKhoan) {
  document.getElementById("myModal").classList.add("pt-5");
  document.getElementById("myModal").style.opacity = 1;
  document.getElementById("myModal").style.display = "block";
  var viTriXoa = timViTriQLNV(taiKhoan);
  var taiKhoanUeser = arrQLNV[viTriXoa];
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
  document.getElementById("myModal").classList.remove("pt-5");
  document.getElementById("myModal").style.opacity = 0;
  document.getElementById("myModal").style.display = "none";
}
function timXepLoaiNhanVien() {
  var inputXepLoai = document.getElementById("searchName").value;
  var nameViTriXepLoai = [];
  var viTriXepLoai = [];
  var kq = "";
  // var index = -1;
  // for (var i = 0; i < arrQLNV.length; i++) {
  //   if (inputXepLoai === arrQLNV[i].xepLoai()) {
  //     index = i;
  //     console.log("arrQLNV: ", arrQLNV[index]);
  //     arrQLNV.splice(i, 1, arrQLNV[i]);
  //   }
  //   renderGiaoDien();
  // }

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

document
  .getElementById("btnTimNV")
  .addEventListener("click", timXepLoaiNhanVien());
