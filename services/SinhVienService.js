// folder service dùng để chứa code liên quan đến backend
console.log(2);

// Phương thức giao tiếp BACKEND qua api => lấy thông tin sinh viên từ server về
var SinhVienService = function(){
    this.layDanhSachSinhVien = function(){
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // Đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
            method: 'GET' // Giao thức backend cung cấp
        });
        return promise;
    }
    this.xoaSinhVien = function(maSinhVien){
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`, // Đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
            method: 'DELETE' // Giao thức backend cung cấp
        })
        return promise;
    }
    this.layThongTinSinhVien = function(maSinhVien){
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`, // Đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
            method: 'GET' // Giao thức backend cung cấp
        })
        return promise;
    }
    this.capNhatThongTinSinhVien = function(maSinhVien,sinhVienUpdate){
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSinhVien}`, // Đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
            method: 'PUT', // Giao thức backend cung cấp
            data:sinhVienUpdate
        })
        return promise;
    }
}
