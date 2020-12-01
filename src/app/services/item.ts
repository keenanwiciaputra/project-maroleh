import { LocationChangeListener } from '@angular/common';

export class Item {
    id: string;
    nama: string;
    harga: number;
    lokasi: string;
    khas: string;
    terjual: number;
    bintang: number;
    berat: string;
    kondisi: string;
    min: number;
    kategori: string;
    deskripsi: string;
    constructor(id: string, nama: string, harga: number, lokasi: string, khas: string, terjual: number, bintang: number, berat: string, kondisi: string, min: number, kategori: string, deskripsi: string) {}
}