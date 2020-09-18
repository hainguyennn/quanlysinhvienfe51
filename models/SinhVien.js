var SinhVien = function (masv, tensv, email, diemtoan, diemly, diemhoa, diemrenluyen, loaisinhvien) { 
    // Lớp đối tượng sinh viên, bên dưới là các thuộc tính của class sinh viên
    this.maSinhVien = masv;
    this.tenSinhVien = tensv;
    this.email = email;
    this.diemToan = diemtoan;
    this.diemLy = diemly;
    this.diemHoa = diemhoa;
    this.diemRenLuyen = diemrenluyen;
    this.loaiSinhVien = loaisinhvien;
    this.tinhDiemTrungBinh = function () {
        return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
    }
}