# 📑 Sistem Administrasi Biro Jasa (GAS Edition)

[![Google Apps Script](https://shields.io)](https://google.com)
![Version](https://shields.io)

Aplikasi berbasis cloud untuk mengelola administrasi Biro Jasa (STNK/SIM). Sistem ini menggunakan **Google Sheets** sebagai database dan **Google Web Apps** sebagai antarmuka pengguna (UI).

## 🚀 Fitur Utama

*   **Google Sheets DB:** Data pelanggan dan transaksi tersimpan aman di spreadsheet.
*   **Form Input Digital:** Form khusus untuk input data berkas baru (STNK/SIM/BPKB).
*   **WhatsApp Notification:** Integrasi (via API pihak ketiga) untuk kirim notifikasi status berkas.
*   **PDF Invoice Generator:** Generate invoice otomatis ke dalam Google Drive.
*   **Tracking Dashboard:** Pantau status berkas langsung dari browser.

## 🛠️ Prasyarat

*   Akun Google (Google Drive & Sheets).
*   [clasp](https://github.com) (Opsional - Jika ingin push kode dari komputer lokal ke GAS).

## 📥 Cara Instalasi (Deployment)

1. **Persiapan Spreadsheet**
   * Buat Google Sheets baru.
   * Buat sheet dengan nama: `Database`, `Transaksi`, dan `Pengaturan`.

2. **Setup Kode di GAS**
   * Buka [://google.com](https://google.com).
   * Buat proyek baru.
   * Salin semua file `.gs` dan `.html` dari folder `/src` di repo ini ke editor GAS.

3. **Hubungkan Spreadsheet ID**
   * Buka file `Code.gs`.
   * Masukkan ID Spreadsheet Anda pada variabel global:
     ```javascript
     const SPREADSHEET_ID = 'ID_SPREADSHEET_ANDA_DISINI';
     ```

4. **Deploy sebagai Web App**
   * Klik **Deploy** > **New Deployment**.
   * Pilih Type: **Web App**.
   * Execute as: **Me**.
   * Who has access: **Anyone with Google Account**.
   * Klik **Deploy** dan simpan URL yang dihasilkan.

## 📂 Struktur File Repo

*   `src/Code.gs` - Logika backend (Server-side).
*   `src/Index.html` - Antarmuka pengguna utama (Frontend).
*   `src/Javascript.html` - Script client-side untuk interaksi UI.
*   `appsscript.json` - File manifest proyek GAS.
*   `.clasp.json` - Konfigurasi jika Anda menggunakan CLASP untuk sinkronisasi GitHub-GAS.

## ⚙️ Integrasi GitHub ke GAS
Jika Anda ingin melakukan sinkronisasi otomatis, disarankan menggunakan:
1. **Chrome Extension:** *Google Apps Script GitHub Assistant*.
2. **CLASP:** Untuk workflow developer profesional (Local development).

---

**Catatan:** Pastikan untuk memberikan izin (Authorization) saat pertama kali menjalankan skrip agar aplikasi dapat mengakses Drive dan Sheets Anda.
