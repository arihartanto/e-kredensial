# e-kredensial
E-Kredensial untuk Staff Keperawatan dan Bidan RSU dr Suyudi
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>e-Kredensial | RS Umum dr. Suyudi Paciran</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .dashboard-card {
            transition: all 0.3s ease;
        }
        .dashboard-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
        }
        .sidebar-item.active {
            background-color: #3b82f6;
            color: white;
        }
        .sidebar-item:hover:not(.active) {
            background-color: #f1f5f9;
        }
        .progress-bar {
            transition: width 0.6s ease;
        }
    </style>
</head>
<body class="bg-gray-50">
    <div class="flex h-screen">
        <!-- Sidebar -->
        <div class="w-64 bg-white shadow-lg flex flex-col">
            <div class="p-4 flex items-center justify-center border-b">
                <img src="https://placehold.co/150x50?text=RS+Dr.Suyudi" alt="Logo Rumah Sakit Umum dr. Suyudi Paciran" class="h-12">
            </div>
            <div class="p-4 border-b">
                <div class="flex items-center space-x-4">
                    <img src="https://placehold.co/50x50?text=👨‍⚕️" alt="Foto profil pengguna" class="rounded-full h-10 w-10">
                    <div>
                        <p class="font-semibold">Dr. Ahmad Fauzi</p>
                        <p class="text-sm text-gray-500">Admin Komite</p>
                    </div>
                </div>
            </div>
            <nav class="flex-1 overflow-y-auto">
                <ul class="p-2">
                    <li class="mb-1">
                        <a href="#" class="sidebar-item active flex items-center p-3 rounded-lg">
                            <i class="fas fa-tachometer-alt mr-3"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="mb-1">
                        <a href="#" class="sidebar-item flex items-center p-3 rounded-lg">
                            <i class="fas fa-file-alt mr-3"></i>
                            <span>Pengajuan RKK</span>
                            <span class="notification-badge bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">3</span>
                        </a>
                    </li>
                    <li class="mb-1">
                        <a href="#" class="sidebar-item flex items-center p-3 rounded-lg">
                            <i class="fas fa-clipboard-check mr-3"></i>
                            <span>Validasi</span>
                        </a>
                    </li>
                    <li class="mb-1">
                        <a href="#" class="sidebar-item flex items-center p-3 rounded-lg">
                            <i class="fas fa-chart-bar mr-3"></i>
                            <span>Laporan</span>
                        </a>
                    </li>
                    <li class="mb-1">
                        <a href="#" class="sidebar-item flex items-center p-3 rounded-lg">
                            <i class="fas fa-calendar-alt mr-3"></i>
                            <span>Kalender</span>
                        </a>
                    </li>
                    <li class="mb-1">
                        <a href="#" class="sidebar-item flex items-center p-3 rounded-lg">
                            <i class="fas fa-cog mr-3"></i>
                            <span>Pengaturan</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="p-4 border-t">
                <a href="#" class="flex items-center text-red-500">
                    <i class="fas fa-sign-out-alt mr-2"></i>
                    Keluar
                </a>
            </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 overflow-y-auto">
            <header class="bg-white shadow-sm">
                <div class="px-6 py-4 flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-gray-800">Dashboard e-Kredensial</h1>
                    <div class="flex items-center space-x-4">
                        <div class="relative">
                            <button class="p-2 rounded-full hover:bg-gray-100">
                                <i class="fas fa-bell"></i>
                                <span class="notification-badge bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
                            </button>
                        </div>
                        <div class="relative">
                            <button class="p-2 rounded-full hover:bg-gray-100">
                                <i class="fas fa-question-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main class="p-6">
                <!-- Welcome Section -->
                <div class="mb-8">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <i class="fas fa-info-circle text-blue-500 text-xl"></i>
                            </div>
                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-gray-800">Selamat datang kembali, <span class="font-semibold">Dr. Ahmad Fauzi</span>!</h3>
                                <p class="mt-1 text-sm text-gray-600">Terakhir login: Kamis, 1 Juni 2023, 09:45 WIB</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Role Switch Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="dashboard-card bg-white rounded-lg shadow p-6 cursor-pointer hover:border-blue-500 border-2 border-transparent">
                        <div class="flex items-center">
                            <div class="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                                <i class="fas fa-user-md text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Perawat</h3>
                                <p class="text-gray-500 text-sm">Dashboard untuk perawat</p>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-card bg-white rounded-lg shadow p-6 cursor-pointer hover:border-green-500 border-2 border-transparent">
                        <div class="flex items-center">
                            <div class="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                                <i class="fas fa-user-cog text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Admin Komite</h3>
                                <p class="text-gray-500 text-sm">Dashboard untuk admin komite</p>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-card bg-white rounded-lg shadow p-6 cursor-pointer hover:border-yellow-500 border-2 border-transparent">
                        <div class="flex items-center">
                            <div class="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                                <i class="fas fa-user-shield text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Supervisor</h3>
                                <p class="text-gray-500 text-sm">Dashboard untuk supervisor</p>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-card bg-white rounded-lg shadow p-6 cursor-pointer hover:border-purple-500 border-2 border-transparent">
                        <div class="flex items-center">
                            <div class="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                                <i class="fas fa-user-tie text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Direktur</h3>
                                <p class="text-gray-500 text-sm">Dashboard untuk direktur</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dashboard Content Based on Selected Role -->
                <div class="mb-8" id="admin-komite-content">
                    <div class="bg-white rounded-lg shadow overflow-hidden">
                        <div class="px-6 py-4 border-b">
                            <h2 class="text-xl font-semibold text-gray-800">Dashboard Admin Komite Keperawatan</h2>
                        </div>
                        <div class="p-6">
                            <!-- Stats Cards -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div class="bg-blue-50 rounded-lg p-6">
                                    <h3 class="text-sm font-medium text-blue-800">Pengajuan Masuk Hari Ini</h3>
                                    <p class="mt-2 text-3xl font-semibold text-blue-600">12</p>
                                    <div class="flex items-center mt-1 text-sm text-blue-500">
                                        <span class="mr-1">+2 dari kemarin</span>
                                        <i class="fas fa-arrow-up"></i>
                                    </div>
                                </div>
                                <div class="bg-green-50 rounded-lg p-6">
                                    <h3 class="text-sm font-medium text-green-800">Pengajuan Minggu Ini</h3>
                                    <p class="mt-2 text-3xl font-semibold text-green-600">45</p>
                                    <div class="flex items-center mt-1 text-sm text-green-500">
                                        <span class="mr-1">+8 dari minggu lalu</span>
                                        <i class="fas fa-arrow-up"></i>
                                    </div>
                                </div>
                                <div class="bg-purple-50 rounded-lg p-6">
                                    <h3 class="text-sm font-medium text-purple-800">Pengajuan Bulan Ini</h3>
                                    <p class="mt-2 text-3xl font-semibold text-purple-600">120</p>
                                    <div class="flex items-center mt-1 text-sm text-purple-500">
                                        <span class="mr-1">-15 dari bulan lalu</span>
                                        <i class="fas fa-arrow-down"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- Progress Chart -->
                            <div class="mb-8">
                                <h3 class="text-lg font-medium text-gray-800 mb-4">Pipeline Pengajuan RKK</h3>
                                <div class="bg-white p-4 rounded-lg shadow">
                                    <canvas id="progressChart" height="150"></canvas>
                                </div>
                            </div>

                            <!-- Status Evaluasi Kredensial -->
                            <div class="mb-8">
                                <h3 class="text-lg font-medium text-gray-800 mb-4">Status Evaluasi Kredensial</h3>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div class="border rounded-lg p-4">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <h4 class="text-sm font-medium text-gray-500">Belum Diperiksa</h4>
                                                <p class="mt-2 text-2xl font-semibold text-orange-500">23</p>
                                            </div>
                                            <div class="p-2 rounded-full bg-orange-100 text-orange-500">
                                                <i class="fas fa-clock"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border rounded-lg p-4">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <h4 class="text-sm font-medium text-gray-500">Sudah Diverifikasi</h4>
                                                <p class="mt-2 text-2xl font-semibold text-blue-500">54</p>
                                            </div>
                                            <div class="p-2 rounded-full bg-blue-100 text-blue-500">
                                                <i class="fas fa-check-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border rounded-lg p-4">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <h4 class="text-sm font-medium text-gray-500">Disetujui Direktur</h4>
                                                <p class="mt-2 text-2xl font-semibold text-green-500">42</p>
                                            </div>
                                            <div class="p-2 rounded-full bg-green-100 text-green-500">
                                                <i class="fas fa-file-signature"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Dokumen Belum Lengkap -->
                            <div class="mb-8">
                                <h3 class="text-lg font-medium text-gray-800 mb-4">Reminder Dokumen Belum Lengkap</h3>
                                <div class="bg-white rounded-lg shadow overflow-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Perawat</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Kerja</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dokumen Kurang</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tindakan</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap">Nia Kusuma Wardhani</td>
                                                <td class="px-6 py-4 whitespace-nowrap">IGD</td>
                                                <td class="px-6 py-4 whitespace-nowrap">Sertifikat Pelatihan</td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <button class="text-blue-600 hover:text-blue-800">Kirim Notifikasi</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap">Asep Saepudin</td>
                                                <td class="px-6 py-4 whitespace-nowrap">Ruang Bedah</td>
                                                <td class="px-6 py-4 whitespace-nowrap">STR, SKP</td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <button class="text-blue-600 hover:text-blue-800">Kirim Notifikasi</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap">Rina Marlina</td>
                                                <td class="px-6 py-4 whitespace-nowrap">ICU</td>
                                                <td class="px-6 py-4 whitespace-nowrap">Surat Keterangan Sehat</td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <button class="text-blue-600 hover:text-blue-800">Kirim Notifikasi</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Quick Actions -->
                            <div>
                                <h3 class="text-lg font-medium text-gray-800 mb-4">Aksi Cepat</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button class="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-3 px-4 rounded-lg text-left">
                                        <div class="flex items-center">
                                            <i class="fas fa-plus-circle text-xl mr-3"></i>
                                            <span>Tambah RKK Baru</span>
                                        </div>
                                    </button>
                                    <button class="bg-green-100 hover:bg-green-200 text-green-800 font-medium py-3 px-4 rounded-lg text-left">
                                        <div class="flex items-center">
                                            <i class="fas fa-edit text-xl mr-3"></i>
                                            <span>Input Hasil Evaluasi</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Notifikasi Penting -->
                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Notifikasi Penting</h2>
                    <div class="space-y-4">
                        <div class="flex items-start bg-white p-4 rounded-lg shadow">
                            <div class="flex-shrink-0 text-yellow-500">
                                <i class="fas fa-exclamation-triangle"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-800">2 dokumen RKK Anda akan kedaluwarsa dalam 14 hari</p>
                                <p class="text-xs text-gray-500 mt-1">Dokumen STR dan Sertifikat BHD akan kedaluwarsa pada 15 Juni 2023</p>
                            </div>
                        </div>
                        <div class="flex items-start bg-white p-4 rounded-lg shadow">
                            <div class="flex-shrink-0 text-blue-500">
                                <i class="fas fa-info-circle"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-800">Evaluasi kredensial bulanan akan dilakukan pada 10 Juni 2023</p>
                                <p class="text-xs text-gray-500 mt-1">Pastikan semua dokumen telah lengkap</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Aktivitas Terbaru</h2>
                    <div class="bg-white rounded-lg shadow overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktivitas</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">01 Juni 2023, 10:30</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Al Wijaya mengajukan RKK baru</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Menunggu Verifikasi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">31 Mei 2023, 15:45</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Nia Kusuma melengkapi dokumen</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Selesai</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">30 Mei 2023, 09:20</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Rina Marlina memperpanjang RKK</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">Disetujui</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <script>
        // Initialize charts
        document.addEventListener('DOMContentLoaded', function() {
            // Progress Chart
            const progressCtx = document.getElementById('progressChart').getContext('2d');
            const progressChart = new Chart(progressCtx, {
                type: 'bar',
                data: {
                    labels: ['Submisi', 'Verifikasi Admin', 'Validasi Komite', 'Persetujuan Direktur'],
                    datasets: [{
                        label: 'Jumlah Pengajuan',
                        data: [45, 38, 25, 12],
                        backgroundColor: [
                            'rgba(59, 130, 246, 0.7)',
                            'rgba(16, 185, 129, 0.7)',
                            'rgba(245, 158, 11, 0.7)',
                            'rgba(139, 92, 246, 0.7)'
                        ],
                        borderColor: [
                            'rgba(59, 130, 246, 1)',
                            'rgba(16, 185, 129, 1)',
                            'rgba(245, 158, 11, 1)',
                            'rgba(139, 92, 246, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Simulate role switching
            const roleCards = document.querySelectorAll('.dashboard-card');
            roleCards.forEach(card => {
                card.addEventListener('click', function() {
                    // Remove active class from all cards
                    roleCards.forEach(c => {
                        c.classList.remove('border-2', 'border-blue-500', 'border-green-500', 'border-yellow-500', 'border-purple-500');
                    });
                    
                    // Add active class to clicked card
                    const cardTitle = this.querySelector('h3').textContent;
                    if (cardTitle === 'Perawat') {
                        this.classList.add('border-blue-500', 'border-2');
                    } else if (cardTitle === 'Admin Komite') {
                        this.classList.add('border-green-500', 'border-2');
                    } else if (cardTitle === 'Supervisor') {
                        this.classList.add('border-yellow-500', 'border-2');
                    } else if (cardTitle === 'Direktur') {
                        this.classList.add('border-purple-500', 'border-2');
                    }
                    
                    // Here you would typically load different dashboard content based on role
                    // For demo, we just show a toast notification
                    showToast(`Berhasil beralih ke dashboard ${cardTitle}`);
                });
            });

            // Function to show toast notification
            function showToast(message) {
                const toast = document.createElement('div');
                toast.className = 'fixed top-4 right-4 bg-white border-l-4 border-blue-500 p-4 shadow-lg rounded max-w-xs animate-fade-in';
                toast.innerHTML = `
                    <div class="flex items-start">
                        <div class="flex-shrink-0 text-blue-500">
                            <i class="fas fa-info-circle"></i>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm font-medium text-gray-800">${message}</p>
                        </div>
                        <button onclick="this.parentElement.remove()" class="ml-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8">
                            <span class="sr-only">Close</span>
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                document.body.appendChild(toast);
                
                // Remove toast after 5 seconds
                setTimeout(() => {
                    toast.remove();
                }, 5000);
            }
            
            // Add style for animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `;
            document.head.appendChild(style);
        });
    </script>
</body>
</html>

Bookmark message
Copy message
Export


