# e-Kredensial - Sistem Manajemen Kredensial Keperawatan

Aplikasi e-Kredensial untuk Staff Keperawatan dan Bidan RSU dr. Suyudi Paciran yang dibangun dengan React, TypeScript, dan Supabase.

## Fitur Utama

### 🏥 Multi-Role Dashboard
- **Perawat**: Kelola kredensial pribadi, ajukan RKK, monitor status
- **Admin Komite**: Verifikasi pengajuan, kelola dokumen, kirim reminder
- **Supervisor**: Monitor tim, supervisi compliance
- **Direktur**: Dashboard eksekutif, persetujuan final

### 📋 Manajemen Kredensial
- Tracking kredensial aktif dan masa berlaku
- Notifikasi otomatis untuk kredensial yang akan berakhir
- Upload dan manajemen dokumen digital
- Riwayat perpanjangan dan pembaruan

### 🔄 Workflow Pengajuan RKK
- Pengajuan RKK baru, perpanjangan, dan update
- Sistem approval bertingkat
- Tracking status real-time
- Notifikasi otomatis untuk semua stakeholder

### 📊 Reporting & Analytics
- Dashboard statistik untuk setiap role
- Laporan compliance dan performance
- Export data untuk audit
- Visualisasi data dengan chart

### 🔔 Sistem Notifikasi
- Reminder otomatis untuk dokumen yang akan berakhir
- Notifikasi status pengajuan
- Alert untuk dokumen yang belum lengkap
- Email dan in-app notifications

## Teknologi yang Digunakan

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS dengan custom design system
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form dengan Zod validation
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Instalasi dan Setup

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- Akun Supabase

### 1. Clone Repository
```bash
git clone <repository-url>
cd e-kredensial
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```bash
cp .env.example .env
```

Edit file `.env` dan isi dengan kredensial Supabase Anda:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Setup Database
Klik tombol "Connect to Supabase" di aplikasi untuk setup database otomatis, atau jalankan migration SQL berikut di Supabase SQL Editor.

### 5. Run Development Server
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## Struktur Database

### Tables
- `users` - Data pengguna dengan role-based access
- `credentials` - Kredensial dan sertifikat perawat
- `applications` - Pengajuan RKK dan statusnya
- `notifications` - Sistem notifikasi

### User Roles
- `nurse` - Perawat/Bidan
- `admin` - Admin Komite Keperawatan
- `supervisor` - Supervisor/Kepala Ruangan
- `director` - Direktur RS

## Fitur yang Akan Datang

- [ ] Modul Kredensial lengkap dengan CRUD
- [ ] Sistem pengajuan RKK end-to-end
- [ ] Integrasi email notifications
- [ ] Advanced reporting dan analytics
- [ ] Mobile responsive optimization
- [ ] Audit trail dan logging
- [ ] Integration dengan sistem HIS rumah sakit
- [ ] Bulk operations untuk admin
- [ ] Advanced search dan filtering
- [ ] Document versioning

## Customization

### Theme Customization
Edit `tailwind.config.js` untuk mengubah color scheme dan styling:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Ubah warna primary sesuai brand RS
      }
    }
  }
}
```

### Role-based Features
Tambah atau modifikasi fitur berdasarkan role di:
- `src/components/layout/Sidebar.tsx` - Navigation menu
- `src/components/dashboard/` - Dashboard components
- `src/hooks/useAuth.ts` - Authentication logic

### Database Schema
Modifikasi schema di `src/types/database.ts` dan buat migration baru di Supabase.

## Deployment

### Build untuk Production
```bash
npm run build
```

### Deploy ke Netlify/Vercel
1. Connect repository ke platform deployment
2. Set environment variables
3. Deploy otomatis dari main branch

## Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Support

Untuk pertanyaan dan support, hubungi:
- Email: admin@rsdrsuyudi.com
- Phone: (031) 123-4567

## License

Aplikasi ini dikembangkan khusus untuk RS Umum dr. Suyudi Paciran.

---

**e-Kredensial v1.0** - Sistem Manajemen Kredensial Keperawatan Modern