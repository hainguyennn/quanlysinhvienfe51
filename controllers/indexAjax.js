// Tạo ra 1 object chứa các thông tin backend cung cấp
// var objectGetSinhVien = {
//     url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // Đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
//     method: 'GET' // Giao thức backend cung cấp
// }

// Khai báo service
var svService = new SinhVienService();

var layThongTinSinhVien = function () {
    var promise = svService.layDanhSachSinhVien(); // Gọi service lấy dữ liệu từ backend về
    promise.then(function (result) { // Hàm xử lý khi kết quả trả về thành công
        console.log(result.data);
        var content = '';
        // Từ dữ liệu table
        for (var i = 0; i < result.data.length; i++) {
            // Lấy ra từng sinh viên từ kết quả server trả về
            var sv = result.data[i];
            // Tạo đối tượng sinh viên chứa dữ liệu đó
            var sinhVien = new SinhVien();
            sinhVien.maSinhVien = sv.maSinhVien;
            sinhVien.tenSinhVien = sv.tenSinhVien;
            sinhVien.email = sv.email;
            sinhVien.diemToan = sv.diemToan;
            sinhVien.diemLy = sv.diemLy;
            sinhVien.diemHoa = sv.diemHoa;
            sinhVien.loaiSinhVien = sv.loaiSinhVien;
            sinhVien.diemRenLuyen = sv.diemRenLuyen;
            content += `<tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.tinhDiemTrungBinh().toFixed(2)}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xoá</button></td>
                <td><button class="btn btn-dark" onclick="chinhSua('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
            </tr>`
        }
        document.getElementById('tblSinhVien').innerHTML = content;
    }).catch(function (err) {
        console.log(err.response.data)
    })
}
layThongTinSinhVien();

// Dùng thư viện axios gửi yêu cầu đến server
// promise bất đồng bộ, chạy đến cuối cùng log ra trước
// var promise = axios({
//     url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // Đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
//     method: 'GET' // Giao thức backend cung cấp
// });
// var layDuLieuThanhCong = function (result) { // Hàm xử lý khi kết quả trả về thành công
//     console.log(result.data);
//     var content = '';
//     // Từ dữ liệu table
//     for (var i = 0; i < result.data.length; i++) {
//         // Lấy ra từng sinh viên từ kết quả server trả về
//         var sv = result.data[i];
//         // Tạo đối tượng sinh viên chứa dữ liệu đó
//         var sinhVien = new SinhVien();
//         sinhVien.maSinhVien = sv.maSinhVien;
//         sinhVien.tenSinhVien = sv.tenSinhVien;
//         sinhVien.email = sv.email;
//         sinhVien.diemToan = sv.diemToan;
//         sinhVien.diemLy = sv.diemLy;
//         sinhVien.diemHoa = sv.diemHoa;
//         sinhVien.loaiSinhVien = sv.loaiSinhVien;
//         sinhVien.diemRenLuyen = sv.diemRenLuyen;
//         content += `<tr>
//             <td>${sinhVien.maSinhVien}</td>
//             <td>${sinhVien.tenSinhVien}</td>
//             <td>${sinhVien.email}</td>
//             <td>${sinhVien.loaiSinhVien}</td>
//             <td>${sinhVien.tinhDiemTrungBinh().toFixed(2)}</td>
//             <td>${sinhVien.diemRenLuyen}</td>
//             <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xoá</button></td>
//             <td><button class="btn btn-dark" onclick="chinhSua('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
//         </tr>`
//     }
//     document.getElementById('tblSinhVien').innerHTML = content;
// }

// var layDuLieuThatBai = function (err) { // Hàm xử lý khi kết quả trả về thanh công
//     console.log(err.response.data);
// }

// Phương thức .then(callback): nhận vào 1 hàm có 1 tham số là kết quả trả về thành công từ phía server (Trả về dữ liệu)
// Phương thức .catch(callback): nhận vào 1 hàm có 1 tham số là kết quả trả về từ phía server thất bại (Trả lỗi)
// promise.then(layDuLieuThanhCong).catch(layDuLieuThatBai);

//----------------------POST: Chức năng thêm sinh viên vào server

document.getElementById('btnThemSinhVien').onclick = function () {
    // Lấy thông tin người dùng nhập vào từ thư viện
    var sv = new SinhVien();
    sv.maSinhVien = document.getElementById('maSinhVien').value;
    sv.tenSinhVien = document.getElementById('tenSinhVien').value;
    sv.email = document.getElementById('email').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    sv.loaiSinhVien = document.getElementById('dropdownlist').value;
    console.log('sinhVien', sv);

    // Tạo ra object backend cần
    // var objectModel = {
    //     "maSinhVien": 0,
    //     "tenSinhVien": "string",
    //     "loaiSinhVien": "string",
    //     "diemToan": 0,
    //     "diemLy": 0,
    //     "diemHoa": 0,
    //     "diemRenLuyen": 0,
    //     "email": "string"
    // }
    axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien', // link backend cung cấp
        method: 'POST', // Phương thức backend cung cấp
        data: sv // Theo định dạng backend yêu cầu
    }).then(function (result) {
        console.log("Kết quả", result.data)
        // Cách 1: location.reload => load lại file script => gọi api lấy danh sách sinh viên mới về lại
        location.reload();
        // Cách 2: Gọi lại api layDanhSachSinhVien tại đây
    }).catch(function (err) {
        console.log("Kết quả", err.response.data)
    })
}

var xoaSinhVien = function (maSinhVien) {
    // Gọi api từ backend => trả promise
    var promise = svService.xoaSinhVien(maSinhVien);
    // Dùng promise xử lý thành công hoặc thất bại
    promise.then(function (result) {
        console.log(result.data);

        // Load lại api lấy thông tin sinh viên
        layThongTinSinhVien();
    }).catch(function (err) {
        console.log(err.response.data)
    })
}
var chinhSua = function (maSinhVien) {
    // Gọi api lấy về thông tin sinh viên từ server dựa vào mã
    var promise = svService.layThongTinSinhVien(maSinhVien);
    promise.then(function (result) {
        // Lấy về thành công => Gán dữ liệu lên các thẻ input
        var sinhVien = result.data;
        document.getElementById('maSinhVien').value = sinhVien.maSinhVien;
        document.getElementById('tenSinhVien').value = sinhVien.tenSinhVien;
        document.getElementById('email').value = sinhVien.email;
        document.getElementById('diemToan').value = sinhVien.diemToan;
        document.getElementById('diemLy').value = sinhVien.diemLy;
        document.getElementById('diemHoa').value = sinhVien.diemHoa;
        document.getElementById('diemRenLuyen').value = sinhVien.diemRenLuyen;
    }).catch(function (err) {
        console.log(err.response.data)
    })
}

document.getElementById('btnCapNhatSinhVien').onclick = function(){
    // Lấy thông tin sinh viên từ người dùng sau khi chỉnh sửa
    var sinhVienUpdate = new SinhVien();
    sinhVienUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    sinhVienUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    sinhVienUpdate.email = document.getElementById('email').value;
    sinhVienUpdate.diemToan = document.getElementById('diemToan').value;
    sinhVienUpdate.diemLy = document.getElementById('diemLy').value;
    sinhVienUpdate.diemHoa = document.getElementById('diemHoa').value;
    sinhVienUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    sinhVienUpdate.loaiSinhVien = document.getElementById('dropdownlist').value;

    // Gọi api cập nhật sinh viên từ BE cung cấp
    var promise = svService.capNhatThongTinSinhVien(sinhVienUpdate.maSinhVien,sinhVienUpdate);
    promise.then(function(result){
        console.log(result.data);
        // Xử lý khi cập nhật thành công
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.result.data)
    })
}