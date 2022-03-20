/**
 * Bài Tập 1:
 *
 * Đầu Vào :
 * Nhập ngẫu nhiên
 * - tạo biến Ngày
 * - tạo biến Tháng
 * - tạo biến Năm
 * Xử Lý :
 *  (year % 4 === 0 && year % 100 !== 0)
 * (year % 100 === 0 && year % 400 === 0)
 * (year % 400 === 0)
 * - Kiểm Tra Tháng có 31 ngày
 * - Kiểm Tra Tháng có 30 ngày
 * - Kiểm Tra Tháng 2 có 29 ngày  ( nếu là năm nhuận)
 * - Kiểm Tra Tháng 2 có 28 ngày  (nếu là năm không nhuận)
 * - Kiểm tra Ngày Hôm Trước và Ngày Hôm Sau
 * Đầu Ra: Show kết quả
 *
 *
 */

document.getElementById("btnKiemTraNgay").onclick = function () {
  var day = document.getElementById("txtDay").value;
  var month = document.getElementById("txtMonth").value;
  var year = document.getElementById("txtYear").value;

  var leapYear = 0;
  var maxDay = 31;
  var yesterday = day - 1;
  var tommorrow = day + 1;
  var lastMonth = month;
  var nextMonth = month;
  var lastYear = year;
  var nextYear = year;

  var result = `năm ${year} là năm bình thường`;

  if (year % 4 === 0 && year % 100 !== 0) {
    result = ` Năm ${year} là năm nhuận `;
    leapYear = 1;
  }
  if (year % 100 === 0 && year % 400 === 0) {
    result = ` Năm ${year} là năm nhuận `;
    leapYear = 1;
  }
  if (year % 400 === 0) {
    result = ` Năm ${year} là năm nhuận `;
    leapYear = 1;
  }

  switch (month) {
    case (1, 3, 5, 7, 8, 10, 12):
      break;
    case (4, 6, 9, 11):
      maxDay = 30;
      break;

    case 2:
      if (leapYear == 1) {
        max = 29;
      } else {
        max = 28;
      }

      break;
  }

  if (tommorrow > maxDay) {
    tommorrow = 1;
    if (tommorrow == 1) {
      nextMonth = nextMonth + 1;
      if (nextMonth > 12) {
        nextMonth = 1;
        nextYear = nextYear + 1;
      }
    }
  }
  if (yesterday < 1) {
    yesterday = maxDay;
    if (yesterday == maxDay) {
      lastMonth = lastMonth - 1;
      if (lastMonth < 1) {
        lastMonth = 12;
        lastYear = lastYear - 1;
      }
    }
  }

  if (day > maxDay || month > 12) {
    result = `Ngày Tháng Không Phù Hợp`;
    alert(result);
    return;
  }
  document.getElementById("btnThongBaoNgay").innerHTML =
    result +
    "</br>" +
    "Ngày Hôm Sau :" +
    tommorrow +
    "/" +
    nextMonth +
    "/" +
    nextYear +
    "</br>" +
    "Ngày Hôm Trước :" +
    yesterday +
    "/" +
    lastMonth +
    "/" +
    lastYear;
};

/**
 * Bài Tập 2:
 *
 * Đầu Vào :
 * Nhập ngẫu nhiên
 * - tạo biến Ngày
 * - tạo biến Tháng
 * - tạo biến Năm
 * Xử Lý :
 *  (year % 4 === 0 && year % 100 !== 0)
 * (year % 100 === 0 && year % 400 === 0)
 * (year % 400 === 0)
 * - Kiểm Tra Tháng có 31 ngày
 * - Kiểm Tra Tháng có 30 ngày
 * - Kiểm Tra Tháng 2 có 29 ngày  ( nếu là năm nhuận)
 * - Kiểm Tra Tháng 2 có 28 ngày  (nếu là năm không nhuận)
 * Đầu Ra: Show kết quả
 *
 *
 */

document.getElementById("btnKiemNgay").onclick = function () {
  var month = document.getElementById("txtMonth2").value;
  var year = document.getElementById("txtYear2").value;

  var leapYear = 0;
  var result = `Năm ${year} là năm bình thường`;

  if (year % 4 === 0 && year % 100 !== 0) {
    result = `Năm ${year} là năm nhuận`;
    leapYear = 1;
  }
  if (year % 100 === 0 && year % 400 === 0) {
    result = `Năm ${year} là năm nhuận`;
    leapYear = 1;
  }
  if (year % 400 === 0) {
    result = `Năm ${year} là năm nhuận`;
    leapYear = 1;
  }

  switch (month) {
    case 1:
      result += ` </br> Tháng ${month} có 31 ngày`;
      break;
    case 3:
      result += ` </br> Tháng ${month} có 31 ngày`;
      break;
    case 5:
      result += ` </br> Tháng ${month} có 31 ngày`;
      break;
    case 7:
      result += ` </br> Tháng ${month} có 31 ngày`;
      break;
    case 8:
      result += ` </br> Tháng ${month} có 31 ngày`;
      break;
    case 10:
      result += ` </br> Tháng ${month} có 31 ngày`;
      break;
    case 12:
      result += ` </br> Tháng ${month} có 31 ngày`;
      break;
    case 4:
      result += ` </br> Tháng ${month} có 30 ngày`;
      break;
    case 6:
      result += ` </br> Tháng ${month} có 30 ngày`;
      break;
    case 9:
      result += ` </br> Tháng ${month} có 30 ngày`;
      break;
    case 11:
      result += ` </br> Tháng ${month} có 30 ngày`;
      break;

    case 2:
      if (leapYear == 1) {
        result += ` </br> Tháng ${month} có 29 ngày`;
      } else {
        result += ` </br> Tháng ${month} có 28 ngày`;
      }
      break;
  }
  document.getElementById("footerKiemNgay").innerHTML = result;
};

/**
 * Bài Tập 3:
 * 
 * Đầu Vào :
 * - tạo biến SoNguyen3So

 * xử Lý :
 * 
* - tách số hàng đơn vị : n%10
 * - tách số hàng chục : Math.floor(n/10)
 * - tách số hàng trăm : Math.floor(n / 100)
 * 
 * 
 * Đầu ra: show kết quả
 */

document.getElementById("btnDocChu").onclick = function () {
  var SoNguyen3So = document.getElementById("txtNumber").value * 1;

  var donvi = SoNguyen3So % 10;
  var hangchuc = Math.floor((SoNguyen3So % 100) / 10);
  var hangtram = Math.floor(SoNguyen3So / 100);

  var inHangDonVi;
  var inHangChuc;
  var inHangTram;

  if (donvi >= 0 || donvi <= 10) {
    switch (donvi) {
      case 1:
        inHangDonVi = "Một";

        break;
      case 2:
        inHangDonVi = "Hai";

        break;
      case 3:
        inHangDonVi = "Ba";

        break;
      case 4:
        inHangDonVi = "Bốn";

        break;
      case 5:
        inHangDonVi = "Năm";

        break;
      case 6:
        inHangDonVi = "Sáu";

        break;
      case 7:
        inHangDonVi = "Bảy";

        break;
      case 8:
        inHangDonVi = "Tám";

        break;
      case 9:
        inHangDonVi = "Chín";

        break;

      default:
        break;
    }
  }

  if (hangchuc >= 1 || hangchuc <= 9) {
    switch (hangchuc) {
      case 1:
        inHangChuc = "Mười";

        break;
      case 2:
        inHangChuc = "Hai Mươi";

        break;
      case 3:
        inHangChuc = "Ba Mươi";

        break;
      case 4:
        inHangChuc = "Bốn Mươi";

        break;
      case 5:
        inHangChuc = "Năm Mươi";

        break;
      case 6:
        inHangChuc = "Sáu Mươi";

        break;
      case 7:
        inHangChuc = "Bảy Mươi";

        break;
      case 8:
        inHangChuc = "Tám Mươi";

        break;
      case 9:
        inHangChuc = "Chín Mươi";
        break;

      default:
        break;
    }
  }

  if (hangtram >= 1 || hangtram <= 9) {
    switch (hangtram) {
      case 1:
        inHangTram = "Một Trăm";

        break;
      case 2:
        inHangTram = "Hai Trăm";

        break;
      case 3:
        inHangTram = "Ba Trăm";

        break;
      case 4:
        inHangTram = "Bốn Trăm";

        break;
      case 5:
        inHangTram = "Năm Trăm";

        break;
      case 6:
        inHangTram = "Sáu Trăm";

        break;
      case 7:
        inHangTram = "Bảy Trăm";

        break;
      case 8:
        inHangTram = "Tám Trăm";

        break;
      case 9:
        inHangTram = "Chín Trăm";
        break;

      default:
        break;
    }
  }
  var inChu = inHangTram + " " + inHangChuc + " " + inHangDonVi;
  document.getElementById("btnThongBao").innerHTML = inChu;
};

/**
 * Bài Tập : 4
 *
 * Đầu Vào :
 * - Tạo Biến toanDoHs1X,Y,Z
 * - Tạo Biến toanDoHs2X,Y,Z
 * - Tạo Biến toanDoHs3X,Y,Z
 * - Tạo Biến toanDoTruongX,Y,Z
 *
 * XỬ lý :
 * Công Thức tính khoản cách giữa 2 điểm :
 * AB = Math.sqrt(Math.pow(XA-XB, 2 ) + Math.pow(YA-YB, 2 ) + Math.pow(ZA-ZB, 2 ))
 * - Tính khoảng cách từ nhà HS1 > Trường
 * - Tính khoảng cách từ nhà HS2 > Trường
 * - Tính khoảng cách từ nhà HS3 > Trường
 *
 *
 * Đầu Ra : show kết quả
 *
 */

document.getElementById("btnTinhQuangDuong").onclick = function () {
  var toanDoHs1X = document.getElementById("txtToaDoHs1X").value;
  var toanDoHs1Y = document.getElementById("txtToaDoHs1Y").value;
  var toanDoHs1Z = document.getElementById("txtToaDoHs1Z").value;

  var toanDoHs2X = document.getElementById("txtToaDoHs2X").value;
  var toanDoHs2Y = document.getElementById("txtToaDoHs2Y").value;
  var toanDoHs2Z = document.getElementById("txtToaDoHs2Z").value;

  var toanDoHs3X = document.getElementById("txtToaDoHs3X").value;
  var toanDoHs3Y = document.getElementById("txtToaDoHs3Y").value;
  var toanDoHs3Z = document.getElementById("txtToaDoHs3Z").value;

  var toanDoTruongX = document.getElementById("txtToaDoTruongX").value;
  var toanDoTruongY = document.getElementById("txtToaDoTruongY").value;
  var toanDoTruongZ = document.getElementById("txtToaDoTruongZ").value;
  var ketQua;

  // Tính khoảng cách từ nhà HS1 > Trường

  var hocSinh1 = Math.sqrt(
    Math.pow(toanDoHs1X - toanDoTruongX, 2) +
      Math.pow(toanDoHs1Y - toanDoTruongY, 2) +
      Math.pow(toanDoHs1Z - toanDoTruongZ, 2)
  );
  // Tính khoảng cách từ nhà HS2 > Trường

  var hocSinh2 = Math.sqrt(
    Math.pow(toanDoHs2X - toanDoTruongX, 2) +
      Math.pow(toanDoHs2Y - toanDoTruongY, 2) +
      Math.pow(toanDoHs2Z - toanDoTruongZ, 2)
  );
  // Tính khoảng cách từ nhà HS3 > Trường

  var hocSinh3 = Math.sqrt(
    Math.pow(toanDoHs3X - toanDoTruongX, 2) +
      Math.pow(toanDoHs3Y - toanDoTruongY, 2) +
      Math.pow(toanDoHs3Z - toanDoTruongZ, 2)
  );

  if (hocSinh1 > hocSinh2 && hocSinh1 > hocSinh3) {
    ketQua = "Sinh Viên 1 Nhà Xa Trường Nhất";
  } else if (hocSinh2 > hocSinh1 && hocSinh2 > hocSinh3) {
    ketQua = "Sinh Viên 2 Nhà Xa Trường Nhất";
  } else if (hocSinh3 > hocSinh1 && hocSinh3 > hocSinh1) {
    ketQua = "Sinh Viên 2 Nhà Xa Trường Nhất";
  }

  document.getElementById("btnAiXaNhat").innerHTML = ketQua;
};
