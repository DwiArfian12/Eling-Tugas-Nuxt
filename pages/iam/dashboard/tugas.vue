<template>
    <div>
        <main>
            <div class="tugas">
                <h1>Daftar Tugas</h1>
                <a href="#" class="tambah">Tambah +</a>
                <table class="data">
                    <tr>
                        <th>Matkul</th>
                        <th>Job</th>
                        <th>Jenis</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                    <tr>
                        <td>Pemrograman Web</td>
                        <td>Laprak Modul 7</td>
                        <td>Individu</td>
                        <td>21 April 2023 (23.59)</td>
                        <td>belum</td>
                        <td>
                            <a class="aksi edit" href="#">Edit</a>
                            <a class="aksi hapus" href="#">Hapus</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Pemrograman 2</td>
                        <td>Studi Kasus Inheritance</td>
                        <td>Kelompok</td>
                        <td>23 April 2023 (11.50)</td>
                        <td>proses</td>
                        <td>
                            <a class="aksi edit" href="#">Edit</a>
                            <a class="aksi hapus" href="#">Hapus</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Pers. Diferensial</td>
                        <td>Latsoal 2 nomor</td>
                        <td>Individu</td>
                        <td>1 Mei 2023 (12.00)</td>
                        <td>selesai</td>
                        <td>
                            <a class="aksi edit" href="#">Edit</a>
                            <a class="aksi hapus" href="#">Hapus</a>
                        </td>
                    </tr>
                </table>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Tugas"
})
</script>
