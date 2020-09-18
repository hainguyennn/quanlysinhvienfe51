// Tạo ra mảng dữ liệu để quản lý các sinh viên
var mangSinhVien = [];
var validate = new Validation();
// Định nghĩa sự kiện khi người dùng click vào nút thêm sinh viên
document.getElementById('btnThemSinhVien').onclick = function () {
    // Tạo đối tượng lưu trữ thông tin sinh viên
    var sv = new SinhVien();
    sv.maSinhVien = document.getElementById('maSinhVien').value;
    sv.tenSinhVien = document.getElementById('tenSinhVien').value;
    sv.email = document.getElementById('email').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    sv.loaiSinhVien = document.getElementById('dropdownlist').value;

    //Kiểm tra đối tượng sinh viên
    console.log(sv);

    // Tạo thẻ td chứa nội dung người dùng nhập vào
    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sv.maSinhVien;

    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;

    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;

    // var tdLoaiSinhVien = document.createElement('td');
    // tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;

    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh().toFixed(2);
    // // toFixed(2) lấy 2 chữ số hàng thập phân
    // var tdDiemRenLuyen = document.createElement('td');
    // tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;

    // // Tạo td chứa các nút chức năng xoá sửa
    // var tdChucNang = document.createElement('td');

    // var btnXoaSinhVien = document.createElement('button');
    // btnXoaSinhVien.className = 'btn btn-danger';
    // btnXoaSinhVien.innerHTML = 'Xoá';
    // btnXoaSinhVien.onclick = function(){
    //     // this đại diện cho nút button#btnXoaSinhVien
    //     this.parentElement.parentElement.remove();
    //     // button là con thẻ td nên phải parentElement ra ngoài 1 cấp là td, parentElement cái nữa gặp tr và remove nó đi
    // }

    // tdChucNang.appendChild(btnXoaSinhVien);

    // // Tạo thẻ tr
    // var trSinhVien = document.createElement('tr');
    // // Thêm thẻ td vào tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdLoaiSinhVien);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdDiemRenLuyen);
    // trSinhVien.appendChild(tdChucNang);

    // var tbodySinhVien = document.getElementById('tblSinhVien');
    // tbodySinhVien.appendChild(trSinhVien);

    // Kiểm tra dữ liệu hợp lệ
    var valid = true;
    // ----------Kiểm tra rỗng-----------
    valid &= validate.kiemTraRong(sv.maSinhVien, 'mã sinh viên', '#err_maSinhVien_ktRong') & validate.kiemTraRong(sv.tenSinhVien, 'Tên sinh viên', '#err_tenSinhVien_ktRong')
        & validate.kiemTraRong(sv.email, 'Email', '#err_email_ktRong') & validate.kiemTraRong(sv.diemToan, 'Điểm toán', '#err_diemToan_ktRong')
        & validate.kiemTraRong(sv.diemLy, 'Điểm lý', '#err_diemLy_ktRong') & validate.kiemTraRong(sv.diemHoa, 'Điểm hoá', '#err_diemHoa_ktRong')
        & validate.kiemTraRong(sv.diemRenLuyen, 'Điểm rèn luyện', '#err_diemRenLuyen_ktRong');
    // ----------Kiểm tra tất cả là ký tự ----------
    valid &= validate.kiemTraChu(sv.tenSinhVien, 'Tên sinh viên', '#err_tenSinhVien_allLetters');
    // ----------Kiểm tra email --------------------
    valid &= validate.kiemTraEmail(sv.email, 'Email', '#err_email_format');
    if (!valid) {
        return;
    }
    // ----------Kiểm tra số------------------------
    // valid &= validate.kiemTraTatCaSo(sv.maSinhVien, 'Mã sinh viên', '#err_maSinhVien_allNumber') & validate.kiemTraTatCaSo(sv.diemToan, 'Điểm toán', '#err_diemToan_allNumber')
    //     & validate.kiemTraTatCaSo(sv.diemLy, 'Điểm lý', '#err_diemLy_allNumber') & validate.kiemTraTatCaSo(sv.diemHoa, 'Điểm hoá', '#err_diemHoa_allNumber')
    //     & validate.kiemTraTatCaSo(sv.diemRenLuyen, 'Điểm rèn luyện', '#err_diemRenLuyen_allNumber');
    // ---------Kiểm tra độ dài ký tự -------------
    //valid &= validate.kiemTraDoDai(sv.maSinhVien, 'Mã sinh viên', '#err_maSinhVien_ktKiTu', 10, 0) & validate.kiemTraDoDai(sv.tenSinhVien, 'Tên sinh viên', '#err_tenSinhVien_ktKiTu', 20, 0);
    //-------------------- Kiểm tra giá trị --------------------
    // valid &= validate.kiemTraGiaTri(sv.diemToan, 'Điểm toán', '#err_diemToan_maxMinValue', 0, 10) & validate.kiemTraGiaTri(sv.diemLy, 'Điểm lý', '#err_diemLy_maxMinValue', 0, 10)
    //     & validate.kiemTraGiaTri(sv.diemHoa, 'Điểm hoá', '#err_diemHoa_maxMinValue', 0, 10) & validate.kiemTraGiaTri(sv.diemRenLuyen, 'Điểm rèn luyện', '#err_diemRenLuyen_maxMinValue', 0, 10);
    //----------------
    // trim() hàm loại bỏ khoảng trống đầu cuối
    // if(sv.maSinhVien.trim() === ''){
    //     document.getElementById('err_maSinhVien_ktRong').innerHTML = 'Mã sinh viên không được bỏ trống!'
    //     //return; // Lệnh trả về và không làm tiếp các đoạn code phía sau
    //     valid = false;
    // }else{
    //     document.getElementById('err_maSinhVien_ktRong').innerHTML = '';
    // }
    // if(sv.tenSinhVien.trim() === ''){
    //     document.getElementById('err_tenSinhVien_ktRong').innerHTML = 'Tên sinh viên không được bỏ trống!'
    //     //return; // Lệnh trả về và không làm tiếp các đoạn code phía sau
    //     valid = false;
    // }else{
    //     document.getElementById('err_tenSinhVien_ktRong').innerHTML = '';
    // }
    // if(sv.email.trim() === ''){
    //     document.getElementById('err_email_ktRong').innerHTML = 'Email không được bỏ trống!'
    //     //return; // Lệnh trả về và không làm tiếp các đoạn code phía sau
    //     valid = false;
    // }else{
    //     document.getElementById('err_email_ktRong').innerHTML = '';
    // }
    // if(sv.diemToan.trim() === ''){
    //     document.getElementById('err_diemToan_ktRong').innerHTML = 'Điểm toán không được bỏ trống!'
    //     //return; // Lệnh trả về và không làm tiếp các đoạn code phía sau
    //     valid = false;
    // }else{
    //     document.getElementById('err_diemToan_ktRong').innerHTML = '';
    // }
    // if(sv.diemLy.trim() === ''){
    //     document.getElementById('err_diemLy_ktRong').innerHTML = 'Điểm lý không được bỏ trống!'
    //     //return; // Lệnh trả về và không làm tiếp các đoạn code phía sau
    //     valid = false;
    // }else{
    //     document.getElementById('err_diemLy_ktRong').innerHTML = '';
    // }
    // if(sv.diemHoa.trim() === ''){
    //     document.getElementById('err_diemHoa_ktRong').innerHTML = 'Điểm hoá không được bỏ trống!'
    //     //return; // Lệnh trả về và không làm tiếp các đoạn code phía sau
    //     valid = false;
    // }else{
    //     document.getElementById('err_diemHoa_ktRong').innerHTML = '';
    // }
    // if(sv.diemRenLuyen.trim() === ''){
    //     document.getElementById('err_diemRenLuyen_ktRong').innerHTML = 'Điểm rèn luyện không được bỏ trống!'
    //     //return; // Lệnh trả về và không làm tiếp các đoạn code phía sau
    //     valid = false;
    // }else{
    //     document.getElementById('err_diemRenLuyen_ktRong').innerHTML = '';
    // }
    // ------Kiểm tra tất cả là ký tự ------------
    // var regexAllLetters = /^[A-Z a-z]+$/;
    // if(!regexAllLetters.test(sv.tenSinhVien)){
    //     document.getElementById('err_tenSinhVien_allLetters').innerHTML = 'Tên sinh viên phải nhập chữ!';
    //     valid = false;
    // }else{
    //     document.getElementById('err_tenSinhVien_allLetters').innerHTML = '';
    // }
    // if(!valid){
    //     return;
    // }

    // Kiểm tra định dạng của chuỗi regex
    //var regex = /cyberlearn/ig;
    // var regex = /[ab]/ig;
    // var inputString = 'frontendCyerlearn';
    // console.log(regex.test(inputString));
    //-------------------------
    //console.log('mangSinhVien', mangSinhVien);
    mangSinhVien.push(sv); // Đưa thông tin sinh viên vào mảng
    // Gọi hàm tạo bảng
    taoBang(mangSinhVien);
    luuLocalStorage();
}
var taoBang = function (arrSinhVien) {
    var contentTable = '';
    // Duyệt qua mảng sinhVien tạo ra các dòng tr
    for (var index = 0; index < arrSinhVien.length; index++) {
        // Mỗi lần duyệt lấy ra 1 đối tượng sinhVien từ trong mảng
        var sv = arrSinhVien[index];

        //Tạo đối tượng
        var sinhVien = new SinhVien(sv.maSinhVien, sv.tenSinhVien, sv.email, sv.diemToan, sv.diemLy, sv.diemHoa, sv.diemRenLuyen, sv.loaiSinhVien);
        // sinhVien.maSinhVien = sv.maSinhVien;
        // sinhVien.tenSinhVien = sv.tenSinhVien;
        // sinhVien.email = sv.email;
        // sinhVien.diemHoa = sv.diemHoa;
        // sinhVien.diemLy = sv.diemLy;
        // sinhVien.diemToan = sv.diemToan;
        // sinhVien.diemRenLuyen = sv.diemRenLuyen;
        // Tạo thẻ tr + dồn vào nội dung contentTable
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.tinhDiemTrungBinh()}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-primary" onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xoá</button></td>
            </tr>
        `
    }
    //console.log('contentTable', contentTable); //=> log ra chuỗi nhiều thẻ <tr></tr> chứa thông tin sinh viên
    document.getElementById('tblSinhVien').innerHTML = contentTable;
}

var chinhSuaSinhVien = function (maSV) {
    // Khoá nút chỉnh sửa mã sinh viên
    document.getElementById('maSinhVien').disabled = true;
    // Tìm sinh vien có mã sinh viên trong mảng
    for (var index = 0; index < mangSinhVien.length; index++) {
        // Mỗi lần duyệt lấy ra 1 sinh viên
        var sv = mangSinhVien[index];
        // Kiểm tra từng sv => xem sv nào có mã = maSV khi click => gán lên control phía trên
        if (sv.maSinhVien === maSV) {
            document.getElementById('maSinhVien').value = sv.maSinhVien;
            document.getElementById('tenSinhVien').value = sv.tenSinhVien;
            document.getElementById('email').value = sv.email;
            document.getElementById('diemToan').value = sv.diemToan;
            document.getElementById('diemLy').value = sv.diemLy;
            document.getElementById('diemHoa').value = sv.diemHoa;
            document.getElementById('diemRenLuyen').value = sv.diemRenLuyen;
            document.getElementById('dropdownlist').value = sv.loaiSinhVien;
        }
    }
    // Gán thông tin sinh viên tìm được lên các control (thẻ input) phía trên
}
// Xây dựng phương thức cập nhật sinh viên
document.getElementById('btnCapNhatSinhVien').onclick = function () {
    // Lấy thông tin người dùng nhập từ giao diện => gán cho đối tượng sinh viên
    var svUpdate = new SinhVien();
    svUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    svUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    svUpdate.email = document.getElementById('email').value;
    svUpdate.diemToan = document.getElementById('diemToan').value;
    svUpdate.diemLy = document.getElementById('diemLy').value;
    svUpdate.diemHoa = document.getElementById('diemHoa').value;
    svUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    svUpdate.loaiSinhVien = document.getElementById('dropdownlist').value;
    //console.log('svUpdate',svUpdate);

    // Tìn svUpdate có mã trùng với maSV trong mảng => Gán dữ liệu sinhVien đó = svUpdate
    for (var index = 0; index < mangSinhVien.length; index++) {
        var sv = mangSinhVien[index];
        if (sv.maSinhVien === svUpdate.maSinhVien) {
            sv.maSinhVien = svUpdate.maSinhVien;
            sv.tenSinhVien = svUpdate.tenSinhVien;
            sv.email = svUpdate.email;
            sv.diemToan = svUpdate.diemToan;
            sv.diemLy = svUpdate.diemLy;
            sv.diemHoa = svUpdate.diemHoa;
            sv.diemRenLuyen = svUpdate.diemRenLuyen;
            sv.loaiSinhVien = svUpdate.loaiSinhVien;
        }
    }
    // Gọi hàm tạo lại bảng
    taoBang(mangSinhVien);
    luuLocalStorage();

    // Clear tất cả thông tin và bật lại input mã
    document.getElementById('maSinhVien').disabled = false;
    var mangTheInput = document.querySelectorAll('input');
    for (var i = 0; i < mangTheInput.length; i++) {
        var tagInput = mangTheInput[i];
        // Gán lại value = rỗng cho từng thẻ 1
        tagInput.value = '';
    }
}
var xoaSinhVien = function (maSV) {
    //alert(maSV);
    // mangSinhVien là biến toàn cục khai báo phía trên đầu file
    // Xoá mã trùng
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        var sv = mangSinhVien[index];

        // Kiểm tra từng phần tử sinhVien có mã = với maSV được click ở nút xoá hay không?
        if (sv.maSinhVien == maSV) {
            mangSinhVien.splice(index, 1); // Hàm xoá phần tử của mảng trong js, index: vị trí xoá, 
            //1 là tại vị trí đó xoá 1 phần tử 
        }
    }
    // Sau khi xoá thì tạo lại bảng = mảng dữ liệu đã xoá
    taoBang(mangSinhVien);
    // Lưu vào localstorage sau khi xoá sinh viên
    luuLocalStorage();
}

// Khi người dùng nhập sai thì phải nhập từ đầu tốn thời gian, nên dùng cách này để lấy lại dữ diệu
var luuLocalStorage = function () {
    // Các bước lưu trữ mảng sinh viên xuống localStorage
    var sMangSinhVien = JSON.stringify(mangSinhVien); //=> Biến mảng sinh viên thành chuỗi
    //console.log(sMangSinhVien);
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}
var layDuLieuLocalStorage = function () {
    // Kiểm tra dữ liệu có trong localstorage chưa ?
    if (localStorage.getItem('mangSinhVien')) {
        // Lấy dữ liệu từ localStorage
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        // Biến đổi dữ liệu từ chuỗi json => mảng
        mangSinhVien = JSON.parse(sMangSinhVien);
        // Gọi hàm tạo bảng => tạo html
        taoBang(mangSinhVien);
    }

}
// Gọi hàm localStorage khi trình duyệt vừa load
layDuLieuLocalStorage();