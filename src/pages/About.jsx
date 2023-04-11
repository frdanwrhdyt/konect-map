import React from "react";

const about = [
  {
    title: "Tentang Produk",
    description: `
    Aplikasi Map ini merupakan sebuah platform berbasis web yang
    dikembangkan oleh tim PTI Telkomsat. Aplikasi ini berisi informasi
    mengenai keterangan desa, data BTS seluler, dan antena USO Telkomsat
    dalam satu platform. Aplikasi ini dirancang untuk membantu pengguna
    internal Telkomsat dalam memperoleh informasi yang dibutuhkan terkait
    keterangan desa, data BTS seluler, dan antena USO Telkomsat.
    `,
  },
  {
    title: "Spesifikasi dan Sumber Data",
    description: `
    Aplikasi Map ini menggunakan 
    teknologi React dan Leaflet untuk frontend, 
    serta Flask untuk backend. Data yang digunakan dalam 
    aplikasi Map ini berasal dari beberapa sumber, yaitu Dukcapil untuk keterangan desa, 
    OpenCellid.org untuk data BTS seluler, dan database Telkomsat untuk antena USO Telkomsat. 
    Perlu diketahui bahwa data keterangan desa telah diperbarui hingga tahun 2022 berdasarkan peningkatan penduduk, 
    sementara data BTS seluler terakhir diupdate pada tahun 2017 dengan jumlah data lebih dari 200 ribu.
    `,
  },
  {
    title: "Developer",
    description: `
    Aplikasi Map ini dikembangkan oleh tim PTI Telkomsat, 
    yang merupakan bagian dari Telkomsat, sebuah perusahaan penyedia jasa telekomunikasi di Indonesia. 
    Pengembangan aplikasi ini dilakukan oleh tim yang terdiri dari beberapa 
    developer yang terampil dan berpengalaman di bidang teknologi informasi.
    `,
  },
  {
    title: "Versi",
    description: `
    Aplikasi Map telah mencapai tahap pengujian beta V1.0.0 setelah melalui serangkaian evaluasi fungsi dan fitur pada tahap alpha V0.0.1 serta melakukan perbaikan atas kesalahan yang terdeteksi pada tahap tersebut. Tahap pengujian ini bertujuan untuk memastikan stabilitas, keamanan, dan kinerja yang optimal pada sistem sebelum dilakukan peluncuran resmi.
    `,
  },
];

export default function About() {
  return (
    <div className="w-full h-fit container text-start p-7">
      <div className="sm:w-2/3 mx-auto">
        {about.map((d, i) => {
          return (
            <div key={i} className="py-5">
              <div className="text-2xl font-bold">{d.title}</div>
              <div>{d.description}</div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
