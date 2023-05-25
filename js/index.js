console.log("first");
var arrQLNV = [];
getLocalStorage();
console.log("arrQLNV: ", arrQLNV);
renderGiaoDien();

console.log(taiKhoanUeser);
function renderGiaoDien() {
  var content = "";
  for (var i = 0; i < arrQLNV.length; i++) {
    var taiKhoanUeser1 = new taiKhoanUeser();
    var taiKhoanItem = arrQLNV[i];
    Object.assign(taiKhoanUeser1, taiKhoanItem);
    content += `<tr>
   <th>${taiKhoanUeser1.taiKhoan}</th>
   <th>${taiKhoanUeser1.hoTen}</th>
   <th>${taiKhoanUeser1.email}</th>
   <th>${taiKhoanUeser1.ngayLam}</th>
   <th>${taiKhoanUeser1.chucVu}</th>
   <th>${taiKhoanUeser1.tongLuong()}</th>
   <th>${taiKhoanUeser1.xepLoai()}</th>
   <th><button class="btn btn-danger me-3" onclick="xoaQLSV('${
     taiKhoanUeser1.taiKhoan
   }')"><i class="fa-solid fa-trash"></i></button>
  <button data-toggle="modal" data-target="#myModal" onclick="capNhatQLNV('${
    taiKhoanUeser1.taiKhoan
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
  if (!valid) {
    return;
  } else {
    arrQLNV.push(taiKhoanMoi);
    console.log("arrQLNV: ", arrQLNV);
    saveLocalStorage(arrQLNV);
    renderGiaoDien();
    resetThemTaiKhoan();
  }
}
function xoaQLSV(taiKhoan) {
  var viTriXoa = timViTriQLNV(taiKhoan);
  if (viTriXoa != -1) {
    arrQLNV.splice(viTriXoa, 1);
  }
  saveLocalStorage();
  renderGiaoDien();
  console.log("arrQLNV: ", arrQLNV);
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
  saveLocalStorage(arrQLNV);
  renderGiaoDien(arrQLNV);
  resetThemTaiKhoan();
  document.getElementById("tknv").readOnly = false;
  document.getElementById("email").readOnly = false;
}
document.getElementById("btnCapNhat").onclick = capNhatTTNV;
function timXepLoaiNhanVien() {
  var inputXepLoai = document.getElementById("searchName").value;
  arrQLNV = [];
  getLocalStorage();
  console.log("arrQLNV: ", arrQLNV);
  var arrXeploai = [];
  for (var i = 0; i < arrQLNV.length; i++) {
    var taiKhoanUeser1 = new taiKhoanUeser();
    var taiKhoanItem = arrQLNV[i];
    Object.assign(taiKhoanUeser1, taiKhoanItem);
    if (
      inputXepLoai == taiKhoanUeser1.xepLoai() &&
      inputXepLoai == "Nhân Viên Xuất Sắc"
    ) {
      arrXeploai.push(arrQLNV[i]);
      console.log("Nhân Viên Xuất Sắc");
    } else if (
      inputXepLoai == taiKhoanUeser1.xepLoai() &&
      inputXepLoai == "Nhân Viên Giỏi"
    ) {
      arrXeploai.push(arrQLNV[i]);
      console.log("Nhân Viên Giỏi");
    } else if (
      inputXepLoai == taiKhoanUeser1.xepLoai() &&
      inputXepLoai == "Nhân Viên Khá"
    ) {
      arrXeploai.push(arrQLNV[i]);
      console.log("Nhân Viên Khá");
    } else if (
      inputXepLoai == taiKhoanUeser1.xepLoai() &&
      inputXepLoai == "Nhân Viên Trung Bình"
    ) {
      arrXeploai.push(arrQLNV[i]);
      console.log("Nhân Viên Trung Bình");
    } else if (!inputXepLoai) {
      return console.log("Không có tài nguyên tìm");
    }
  }
  localStorage.setItem("arrQLNV", JSON.stringify(arrXeploai));
  console.log("arrQLNV: ", arrQLNV);
  console.log("arrXeploai: ", arrXeploai);
  console.log("taiKhoanUeser1: ", taiKhoanUeser1);
  console.log("arrQLNV: ", arrQLNV);
  renderGiaoDien();
}
