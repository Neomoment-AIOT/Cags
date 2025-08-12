// app/papers/page.tsx
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb'; // Assuming a shared component
import styles from "@/app/products/products.module.css";     // Assuming a shared component

// The type definition for a paper product
type Product = {
  id: number;
  brand: string;
  name: string;
  size: '1 1/4' | 'Regular' | 'King Size' | 'King Size Slim' | 'King Size XXL';
  description: string;
  imageUrl: string;
  detailUrl: string;
};

// The list of all paper products
const allProducts: Product[] = [
    { id: 325, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap Blue', size: '1 1/4',
      description:'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
      imageUrl: '/products/papers/c3afe70350844fc2b329831d3ada741b.png', detailUrl: '/products/productsAr/papers/325'},
    { id: 326, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap Black', size: '1 1/4',
       description:'Introducing CRP 1 1/4 Rolling Papers - Closing Flap Black. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 14gsm slow burning thin paper, they ensure a smooth and enjoyable smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with non-GMO French Paper and sealed with natural Arabic gum, they are suitable for vegans.',
      imageUrl: '/products/papers/1a27a04563b240dc8edb543b8ff1b36c.png', detailUrl: '/products/productsAr/papers/326' },
    { id: 327, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap Beige', size: '1 1/4',
       description:'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
      imageUrl: '/products/papers/9f2544277d534d12ba7b21f6fa92cea8.png', detailUrl: '/products/productsAr/papers/327' },
    
    { id: 328, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap Brown', size: '1 1/4',
    description: 'Introducing CRP 1 1/4 Rolling Papers - Closing Flap Brown. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 12gsm unbleached brown virgin paper, they offer a natural and eco-friendly smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with non-GMO French Paper and sealed with natural Arabic gum, they are suitable for vegans. Plus, they are chlorine-free, ensuring a clean and pure smoking experience.',
    imageUrl: '/products/papers/a3484f6776e04db798936794fda4bb08.png', detailUrl: '/products/productsAr/papers/328' },
  { id: 329, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap Red', size: '1 1/4',
    description: 'Introducing CRP 1 1/4 Rolling Papers - Closing Flap Red. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans.',
    imageUrl: '/products/papers/e8a53e50134643f2badc9ccfbea26ff3.png', detailUrl: '/products/productsAr/papers/329' },
  { id: 330, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap Superior', size: '1 1/4',
    description: 'Introducing CRP 1 1/4 Rolling Papers - Closing Flap Superior. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with the world\'s thinnest 10gsm paper, they provide a smooth and light smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness until you\'re ready to use them. Made with non-GMO French Paper and sealed with natural Arabic gum, they are suitable for vegans.',
    imageUrl: '/products/papers/723d562603ca465aa70c5256b459a0f0.png', detailUrl: '/products/productsAr/papers/330' },
  { id: 331, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap White', size: '1 1/4',
    description: 'Introducing CRP 1 1/4 Rolling Papers - Closing Flap White. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 14gsm thin wood paper, they ensure a smooth and enjoyable smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with non-GMO French Paper and sealed with natural Arabic gum, they are suitable for vegans.',
    imageUrl: '/products/papers/531c286f103e4ad18e51f861b353bb88.png', detailUrl: '/products/productsAr/papers/331' },
  { id: 332, brand: 'CRP', name: 'CRP King Size + Tips - Closing Flap Beige', size: 'King Size', 
    description:'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
     
      imageUrl: '/products/papers/565c5a5256e54fd8aa619854d35392a8.png', detailUrl: '/products/productsAr/papers/332' },
    { id: 333, brand: 'CRP', name: 'CRP King Size + Tips - Closing Flap Black', size: 'King Size',
       description:'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
     
      imageUrl: '/products/papers/78036dfccb5b4747b38ffb32b6897bd0.png', detailUrl: '/products/productsAr/papers/333' },
    
    { id: 334, brand: 'CRP', name: 'CRP King Size + Tips - Closing Flap Brown', size: 'King Size',
    description: 'Introducing CRP King Size Rolling Papers + Tips - Closing Flap Brown. These papers offer convenience and quality, with 32 leaves per booklet and a size of 98 by 53 millimeters. Made with high-quality 12gsm unbleached brown virgin paper, they provide a natural and eco-friendly smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. Individually wrapped in a cello wrap, the papers retain their freshness until you\'re ready to enjoy them. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly, chlorine-free, and made with unbleached brown virgin paper for a more natural smoking experience.',
    imageUrl: '/products/papers/899e9b3d3d3f48a6b54f19d3e755595e.png', detailUrl: '/products/productsAr/papers/334' },
  { id: 335, brand: 'CRP', name: 'CRP King Size + Tips - Closing Flap Superior', size: 'King Size',
    description: 'Introducing CRP King Size Rolling Papers + Tips - Closing Flap Superior. These papers offer convenience and quality, with 32 leaves per booklet and a size of 98 by 53 millimeters. Made with high-quality 10gsm world\'s thinnest paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. Individually wrapped in a cello wrap, the papers retain their freshness until you\'re ready to enjoy them. Made with a mix of materials, they are non-GMO, vegan-friendly, and made with the world\'s thinnest paper for a unique smoking experience.',
    imageUrl: '/products/papers/f1068b8056794693afd9d43ebe64e59d.png', detailUrl: '/products/productsAr/papers/335' },
  { id: 336, brand: 'CRP', name: 'CRP King Size + Tips - Closing Flap White', size: 'King Size',
    description: 'Introducing CRP King Size Rolling Papers + Tips - Closing Flap White. These papers offer convenience and quality, with 32 leaves per booklet and a size of 98 by 53 millimeters. Made with high-quality 14gsm thin wood paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. Individually wrapped in a cello wrap, the papers retain their freshness until you\'re ready to enjoy them. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly, delivering a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/9307fdea90774577bae03ad49d7e6b67.png', detailUrl: '/products/productsAr/papers/336' },
  { id: 337, brand: 'CRP', name: 'CRP King Size Slim + Tips - Closing Flap Beige', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Rolling Papers + Tips - Closing Flap Black. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 14gsm slow-burning thin paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. They are individually wrapped in a cello wrap for freshness. Made with a mix of materials, they are vegan-friendly and made with non-GMO French Paper and natural Arabic gum, ensuring a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/9427ead500ce49308a189fec850ccf4e.png', detailUrl: '/products/productsAr/papers/337' },
  { id: 338, brand: 'CRP', name: 'CRP King Size Slim + Tips - Closing Flap Black', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Rolling Papers + Tips - Closing Flap Black. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 14gsm slow-burning thin paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. They are individually wrapped in a cello wrap for freshness. Made with a mix of materials, they are vegan-friendly and made with non-GMO French Paper and natural Arabic gum, ensuring a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/366ddaf4253e41c0876766ecd99dd8ec.png', detailUrl: '/products/productsAr/papers/338' },
  { id: 339, brand: 'CRP', name: 'CRP King Size Slim + Tips - Closing Flap Blue', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Rolling Papers + Tips - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 21gsm fast-burning wood paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. They are individually wrapped in a cello wrap for freshness. Made with wood, they are vegan-friendly and made with natural Arabic gum, ensuring a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/5e725db105b84863829b9b7e720b9bab.png', detailUrl: '/products/productsAr/papers/339' },
  { id: 340, brand: 'CRP', name: 'CRP King Size Slim + Tips - Closing Flap Brown', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Rolling Papers + Tips - Closing Flap Brown. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 12gsm unbleached brown virgin paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. They are individually wrapped in a cello wrap for freshness. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly and chlorine-free.',
    imageUrl: '/products/papers/35e25267e0e64e88b3e2bd487820c970.png', detailUrl: '/products/productsAr/papers/340' },
  { id: 341, brand: 'CRP', name: 'CRP King Size Slim + Tips - Closing Flap Superior', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Rolling Papers + Tips - Closing Flap Superior. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with the world\'s thinnest paper at 10gsm, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. They are individually wrapped in a cello wrap for freshness. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly, ensuring a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/3567228efded4f93bbd63e36511f7e10.png', detailUrl: '/products/productsAr/papers/341' },
  { id: 342, brand: 'CRP', name: 'CRP King Size Slim + Tips - Closing Flap White', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Rolling Papers + Tips - Closing Flap White. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 14gsm thin wood paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. They are individually wrapped in a cello wrap for freshness. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly, ensuring a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/0270e5e4ffca4313a71dd5b0e911601b.png', detailUrl: '/products/productsAr/papers/342' },
  { id: 343, brand: 'CRP', name: 'CRP King Size Slim 4x4', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim 4x4. These papers offer convenience and quality, with 4 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 14gsm slow-burning thin paper, they provide a smooth and enjoyable smoking experience. The papers are individually wrapped in a cello wrap for freshness. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly, ensuring a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/4f5a94c803e842fcad3052b40b9a04e5.png', detailUrl: '/products/productsAr/papers/343' },
  { id: 344, brand: 'CRP', name: 'CRP King Size Slim Beige', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Beige. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 13gsm organic hemp paper, they provide a natural, chlorine-free and vegan-friendly smoking experience. The papers are individually wrapped in a cello wrap for freshness. Made with non-GMO French Paper and natural Arabic gum, they ensure a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/746cf99300b8462395a1901560c7e3ea.png', detailUrl: '/products/productsAr/papers/344' },
  { id: 345, brand: 'CRP', name: 'CRP King Size Slim Black', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Black. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 14gsm slow burning thin paper, they provide a smooth and controlled smoking experience. The papers are individually wrapped in a single booklet cello wrap, ensuring their freshness. Crafted with non-GMO French Paper and sealed with natural Arabic gum, they are vegan-friendly and deliver a reliable smoking session. ',
    imageUrl: '/products/papers/d19b36c13b8c4b67a5523bad60a0dddb.png', detailUrl: '/products/productsAr/papers/345' },
  { id: 346, brand: 'CRP', name: 'CRP King Size Slim Brown', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Brown. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 12gsm unbleached brown virgin paper, they provide a natural and eco-friendly smoking experience. The papers are chlorine-free, vegan and individually wrapped in a cello wrap for freshness. Made with non-GMO French Paper and natural Arabic gum, they ensure a reliable and enjoyable smoking session. ',
    imageUrl: '/products/papers/ec37e1b09ebe42cfbd1399010d50b3f9.png', detailUrl: '/products/productsAr/papers/346' },
  { id: 347, brand: 'CRP', name: 'CRP King Size Slim Superior', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim Superior. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with the world thinnest paper at 10gsm, they provide a smooth and enjoyable smoking experience. The papers are individually wrapped in a cello wrap for freshness. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly and ensure a reliable smoking session.',
    imageUrl: '/products/papers/1cf710f4d4184af9912510bf15c1985b.png', detailUrl: '/products/productsAr/papers/347' },
  { id: 348, brand: 'CRP', name: 'CRP King Size Slim White', size: 'King Size Slim',
    description: 'Introducing CRP King Size Slim White. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 44 millimeters. Made with high-quality 14gsm thin wood paper, they provide a smooth and enjoyable smoking experience. The papers are individually wrapped in a single booklet cello wrap, ensuring freshness until you are ready to use them. Crafted with non-GMO French Paper and sealed with natural Arabic gum, they are vegan-friendly and deliver a reliable smoking session. ',
    imageUrl: '/products/papers/a0ad5f2e87ad48a0a7295beebf97c878.png', detailUrl: '/products/productsAr/papers/348' },
  { id: 349, brand: 'CRP', name: 'CRP King Size XXL + Tips - Closing Flap Black', size: 'King Size XXL',
    description: 'Introducing CRP King Size XXL + Tips - Closing Flap Black. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 53 millimeters. Made with high-quality 14gsm slow-burning thin paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. Individually wrapped in a cello wrap, the papers retain their freshness until you are ready to enjoy them. Made with a mix of materials, they are non-GMO, vegan-friendly, and made with slow-burning thin paper for a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/e0921616704e4157b7ac50f71fc86d4b.png', detailUrl: '/products/productsAr/papers/349' },
  { id: 350, brand: 'CRP', name: 'CRP King Size XXL + Tips - Closing Flap Beige', size: 'King Size XXL',
    description: 'Introducing CRP King Size XXL + Tips - Closing Flap Beige. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 53 millimeters. Made with high-quality 13gsm organic hemp paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. Individually wrapped in a cello wrap, the papers retain their freshness until you are ready to enjoy them. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly, chlorine-free, and made with organic hemp paper for a natural smoking experience.',
    imageUrl: '/products/papers/848b1cd968394187ab5192a11b293e93.png', detailUrl: '/products/productsAr/papers/350' },
  { id: 351, brand: 'CRP', name: 'CRP King Size XXL + Tips - Closing Flap Brown', size: 'King Size XXL',
    description: 'Introducing CRP King Size XXL + Tips - Closing Flap Brown. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 53 millimeters. Made with high-quality 12gsm unbleached brown virgin paper, they provide a natural and eco-friendly smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. Individually wrapped in a cello wrap, the papers retain their freshness until you are ready to enjoy them. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly, chlorine-free, and made with unbleached brown virgin paper for a pure smoking experience.',
    imageUrl: '/products/papers/b548ab4dce5a4e869093f4222b62cae1.png', detailUrl: '/products/productsAr/papers/351' },
  { id: 352, brand: 'CRP', name: 'CRP King Size XXL + Tips - Closing Flap Superior', size: 'King Size XXL',
    description: 'Introducing CRP King Size XXL + Tips - Closing Flap Superior. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 53 millimeters. Made with high-quality 10gsm mix of materials, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. Individually wrapped in a cello wrap, the papers retain their freshness until you are ready to enjoy them. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly, delivering a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/69a1c30689ef42ecb4b46f5f3651a071.png', detailUrl: '/products/productsAr/papers/352' },
  { id: 353, brand: 'CRP', name: 'CRP King Size XXL + Tips - Closing Flap White', size: 'King Size XXL',
    description: 'Introducing CRP King Size XXL + Tips - Closing Flap White. These papers offer convenience and quality, with 32 leaves per booklet and a larger size of 110 by 53 millimeters. Made with high-quality 14gsm thin wood paper, they provide a smooth and enjoyable smoking experience. The papers come with integrated tips and an adjustable paper tip size for added convenience. Individually wrapped in a cello wrap, the papers retain their freshness until you are ready to enjoy them. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly and deliver a reliable and enjoyable smoking session.',
    imageUrl: '/products/papers/a810cdcb833344a2b1ded9e32b575731.png', detailUrl: '/products/productsAr/papers/353' },
      { id: 354, brand: 'CRP', name: 'CRP Regular Beige', size: 'Regular',
       description:'Introducing CRP Regular Beige. These papers offer convenience and quality, with 50 leaves per booklet and a size of 70 by 37 millimeters. Made with high-quality 13gsm organic hemp paper, they provide a natural and eco-friendly smoking experience. The papers are crafted with organic hemp paper, ensuring a sustainable and earth-friendly choice. Individually wrapped in a cello wrap, the papers retain their freshness until you are ready to enjoy them. Made with non-GMO French Paper and natural Arabic gum, they are vegan-friendly, chlorine-free, and deliver a reliable and enjoyable smoking session.',
      imageUrl: '/products/papers/6e9d659f3148473f8bd5cdcf9edd73da.png', detailUrl: '/products/productsAr/papers/354' },
  { id: 355, brand: 'CRP', name: 'CRP Regular Black', size: 'Regular',
    description: 'CRP Regular Black offers a classic, reliable smoke with slow-burning paper. The regular size is perfect for your everyday rolling needs.',
    imageUrl: '/products/papers/aabe8cb6ffa74f18aa81b6b55dd1236f.png', detailUrl: '/products/productsAr/papers/355' },
  { id: 356, brand: 'CRP', name: 'CRP Regular Blue', size: 'Regular',
    description: 'A staple for any smoker, CRP Regular Blue papers are easy to roll and provide a smooth, consistent burn from start to finish.',
    imageUrl: '/products/papers/d5749ea8a21848df9c35f746e29b3c9c.png', detailUrl: '/products/productsAr/papers/356' },
  { id: 357, brand: 'CRP', name: 'CRP Regular Brown', size: 'Regular',
    description: 'For a pure and untainted flavor, choose CRP Regular Brown. These unbleached papers allow you to fully taste your herbs without any added chemicals.',
    imageUrl: '/products/papers/816295f7f41b45b2bffd0ee2eaa9aed3.png', detailUrl: '/products/productsAr/papers/357' },
  { id: 358, brand: 'CRP', name: 'CRP Regular Red', size: 'Regular',
    description: 'Known for its slow-burning properties, CRP Regular Red ensures a long-lasting and enjoyable smoke. A trusted choice for seasoned rollers.',
    imageUrl: '/products/papers/32d8ac979ae34875822f1c3e27bbca4c.png', detailUrl: '/products/productsAr/papers/358' },
  { id: 359, brand: 'CRP', name: 'CRP Regular Superior', size: 'Regular',
    description: 'Experience a premium roll with CRP Regular Superior. These ultra-thin papers are crafted for the connoisseur, providing a clean taste and minimal ash.',
    imageUrl: '/products/papers/e3c60fea05a046db82b4f06bf07fc172.png', detailUrl: '/products/productsAr/papers/359' },
  { id: 360, brand: 'CRP', name: 'CRP Regular White', size: 'Regular',
    description: 'The timeless CRP Regular White papers are a must-have for any smoker. Clean, classic, and reliable, they deliver a perfect roll every time.',
    imageUrl: '/products/papers/0564f9fd6b8f4e4981ad976441cb3dbf.png', detailUrl: '/products/productsAr/papers/360' },
      { id: 361, brand: 'Sir Badger', name: 'Sir Badger 1 1/4 - Closing Flap Beige', size: '1 1/4',
       description:'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
      imageUrl: '/products/papers/dfa0b41ada4b4630bd795e8ecf244453.png', detailUrl: '/products/productsAr/papers/361' },
 
 { id: 362, brand: 'Sir Badger', name: 'Sir Badger 1 1/4 - Closing Flap Beige', size: '1 1/4',
       description:'Sir Badger King Size + Tips - Closing Flap Beige. Crafted with high-quality 13gsm organic hemp paper, they offer a natural and enjoyable smoking experience. Individually wrapped in a single booklet cello wrap, they maintain freshness. Featuring adjustable paper tip size, made with non-GMO French Paper and sealed with natural Arabic gum, they are vegan-friendly and chlorine-free.',
      imageUrl: '/products/papers/5a6566e450c848cb9f11f7dfe73f4cdd.png', detailUrl: '/products/productsAr/papers/362' },
 
 
 
      { id: 363, brand: 'Sir Badger', name: 'Sir Badger King Size Slim Beige', size: 'King Size Slim',
       description:'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
      imageUrl: '/products/papers/6b348c75c8da49a294cb0c5329b063a5.png', detailUrl: '/products/productsAr/papers/363' },
 { id: 364, brand: 'Sir Badger', name: 'Sir Badger King Size XXL + Tips - Closing Flap Beige', size: 'King Size XXL',
    description: 'Go extra large with Sir Badger King Size XXL papers. This all-in-one pack includes unbleached beige papers and tips, secured in a convenient closing flap booklet for the ultimate rolling experience.',
    imageUrl: '/products/papers/0daa5840b2e94757a5747cec6c34feb6.png', detailUrl: '/products/productsAr/papers/364' },
  { id: 365, brand: 'Sir Badger', name: 'Sir Badger King Size Slim + Tips - Closing Flap Beige', size: 'King Size Slim',
    description: 'Sir Badger King Size Slim + Tips offers a refined, natural smoke. The unbleached beige papers are paired with tips in a travel-friendly booklet with a closing flap.',
    imageUrl: '/products/papers/bfbb7651299a42d89b7eb6535705c992.png', detailUrl: '/products/productsAr/papers/365' },
  { id: 366, brand: 'Sir Badger', name: 'Sir Badger Regular Beige', size: 'Regular',
    description: 'Enjoy a pure and simple smoke with Sir Badger Regular Beige papers. Crafted from unbleached paper, this classic size is perfect for a quick, flavorful roll.',
    imageUrl: '/products/papers/a9157d2b1ed6434381d1dbfec2d8dae2.png', detailUrl: '/products/productsAr/papers/366' },
  { id: 367, brand: 'The Saint', name: 'The Saint 1 1/4 - Closing Flap White', size: '1 1/4',
    description: 'The Saint 1 1/4 papers offer a divine smoking experience with classic white, ultra-thin paper. Each booklet is protected by a closing flap to maintain freshness.',
    imageUrl: '/products/papers/f96144c6b71d4717b33a3735ee41a842.png', detailUrl: '/products/productsAr/papers/367' },
  { id: 368, brand: 'The Saint', name: 'The Saint King Size + Tips - Closing Flap White', size: 'King Size',
    description: 'Achieve rolling perfection with The Saint King Size + Tips. This convenient package includes clean-burning white papers and filter tips in a secure closing flap booklet.',
    imageUrl: '/products/papers/e3199b462c554b4aabc12d372071818e.png', detailUrl: '/products/productsAr/papers/368' },
  { id: 369, brand: 'The Saint', name: 'The Saint King Size Slim White', size: 'King Size Slim',
    description: 'The Saint King Size Slim White papers are crafted for those who prefer a more elegant and slender smoke. The ultra-thin paper ensures a slow, even burn with minimal ash.',
    imageUrl: '/products/papers/d03d39fad32d49fa91a5e9ca1ca76dde.png', detailUrl: '/products/productsAr/papers/369' },
  { id: 370, brand: 'The Saint', name: 'The Saint King Size Slim + Tips - Closing Flap White', size: 'King Size Slim',
    description: 'Enjoy the convenience and quality of The Saint King Size Slim + Tips. Each booklet contains ultra-thin white papers and tips, perfect for a refined smoking experience.',
    imageUrl: '/products/papers/f9fe1a752c034838a046ff6f87fabd2d.png', detailUrl: '/products/productsAr/papers/370' },
  { id: 371, brand: 'The Saint', name: 'The Saint King Size XXL + Tips - Closing Flap White', size: 'King Size XXL',
    description: 'For a heavenly large roll, The Saint King Size XXL + Tips is the answer. This pack includes extra-large white papers and filter tips in a protective closing flap booklet.',
    imageUrl: '/products/papers/dce77439a7b94db0a161471116cedee4.png', detailUrl: '/products/productsAr/papers/371' },
  { id: 372, brand: 'The Saint', name: 'The Saint Regular White', size: 'Regular',
       description:'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
      imageUrl: '/products/papers/674b0c0c32004bdfa53333c682067255.png', detailUrl: '/products/productsAr/papers/372' },
  { id: 373, brand: 'Watson', name: 'Watson 1 1/4 - Closing Flap Beige', size: '1 1/4',
       description:'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
      imageUrl: '/products/papers/4726061228c74094bd68c6e0a0de7555.png', detailUrl: '/products/productsAr/papers/373' },
   { id: 374, brand: 'Watson', name: 'Watson 1 1/4 - Closing Flap Black', size: '1 1/4',
    description: 'Watson 1 1/4 - Closing Flap Black papers offer a classic smoking experience. These 1 1/4 size papers come in a convenient booklet with a closing flap to keep your papers fresh and protected.',
    imageUrl: '/products/papers/5df955efabf6410c9757d5115358553f.png', detailUrl: '/products/productsAr/papers/374' },
  { id: 375, brand: 'Watson', name: 'Watson 1 1/4 - Closing Flap Blue', size: '1 1/4',
    description: 'Watson 1 1/4 - Closing Flap Blue papers provide a classic, smooth burn. Sized for personal enjoyment, each booklet features a closing flap to keep papers pristine and ready for use.',
    imageUrl: '/products/papers/d8f5b7ea851d409e9acb3f97903d2d31.png', detailUrl: '/products/productsAr/papers/375' },
  { id: 376, brand: 'Watson', name: 'Watson 1 1/4 - Closing Flap Brown', size: '1 1/4',
    description: 'Watson\'s 1 1/4 - Closing Flap Brown papers are unbleached for a pure and natural taste. The convenient closing flap protects each leaf, ensuring a perfect roll every time.',
    imageUrl: '/products/papers/4060ecbcca8944e399ce80aae8137caf.png', detailUrl: '/products/productsAr/papers/376' },
  { id: 377, brand: 'Watson', name: 'Watson 1 1/4 - Closing Flap Red', size: '1 1/4',
    description: 'Experience the trusted quality of Watson with these 1 1/4 - Closing Flap Red papers. They offer a slow, even burn and come in a booklet designed to keep your papers in perfect condition.',
    imageUrl: '/products/papers/fdf92978864642789713e49c8132cac1.png', detailUrl: '/products/productsAr/papers/377' },
  { id: 378, brand: 'Watson', name: 'Watson 1 1/4 - Closing Flap White', size: '1 1/4',
    description: 'Watson 1 1/4 - Closing Flap White papers are a classic choice for a clean and smooth smoke. The ultra-thin paper ensures your focus remains on the flavor of your herbs.',
    imageUrl: '/products/papers/8ed517b6f779456694b0f50bd2b99ae1.png', detailUrl: '/products/productsAr/papers/378' },
  { id: 379, brand: 'Watson', name: 'Watson King Size Beige', size: 'King Size',
    description: 'Watson King Size Beige papers are crafted from unbleached fibers for a pure, untainted smoke. The king size format is ideal for sharing with friends or for a longer session.',
    imageUrl: '/products/papers/c78f5ee324104ed4aa0d40ffe6809189.png', detailUrl: '/products/productsAr/papers/379' },
  { id: 380, brand: 'Watson', name: 'Watson King Size Brown', size: 'King Size',
    description: 'Enjoy a natural and authentic experience with Watson King Size Brown papers. Made from unbleached wood pulp, they provide a slow and even burn from start to finish.',
    imageUrl: '/products/papers/631d8def07494e789b1067625f9f56e4.png', detailUrl: '/products/productsAr/papers/380' },
  { id: 381, brand: 'Watson', name: 'Watson King Size + Tips - Closing Flap Black', size: 'King Size',
    description: 'The all-in-one solution for a perfect roll. Watson King Size + Tips in Black includes premium papers and filter tips in a convenient pack with a secure closing flap.',
    imageUrl: '/products/papers/27405571aff44e919f56f33abc34498b.png', detailUrl: '/products/productsAr/papers/381' },
  { id: 382, brand: 'Watson', name: 'Watson King Size + Tips - Closing Flap Beige', size: 'King Size',
    description: 'Roll with convenience using Watson King Size + Tips. This beige, unbleached version provides papers and tips together in a pack with a closing flap for ultimate freshness.',
    imageUrl: '/products/papers/2eaeb85dbaa44854a308503b1545872f.png', detailUrl: '/products/productsAr/papers/382' },
  { id: 383, brand: 'Watson', name: 'Watson King Size + Tips - Closing Flap Brown', size: 'King Size',
    description: 'Everything you need in one booklet. Watson King Size + Tips in brown offers unbleached papers and quality filter tips, kept secure by a closing flap.',
    imageUrl: '/products/papers/8793fa6706c04af892f020d3ba4f72cc.png', detailUrl: '/products/productsAr/papers/383' },
  { id: 384, brand: 'Watson', name: 'Watson King Size + Tips - Closing Flap White', size: 'King Size',
    description: 'Get the complete package with Watson King Size + Tips in white. These ultra-thin papers are paired with filter tips in a travel-friendly booklet with a closing flap.',
    imageUrl: '/products/papers/8153701e6035436797b1518995223e61.png', detailUrl: '/products/productsAr/papers/384' },
  { id: 385, brand: 'Watson', name: 'Watson King Size Black', size: 'King Size',
    description: 'Watson King Size Black papers offer a sleek look and a high-quality, slow burn. Perfect for rolling substantial cigarettes to enjoy over a longer period.',
    imageUrl: '/products/papers/547ce5bffb7b4a1696afe020050ebbfb.png', detailUrl: '/products/productsAr/papers/385' },
  { id: 386, brand: 'Watson', name: 'Watson King Size White', size: 'King Size',
    description: 'The classic Watson King Size White papers are designed for a clean, pure taste. Their generous size allows for a satisfying and extended smoking session.',
    imageUrl: '/products/papers/133a24271fff49468cdb7a259071b5ff.png', detailUrl: '/products/productsAr/papers/386' },
  { id: 387, brand: 'Watson', name: 'Watson King Size Slim White', size: 'King Size Slim',
    description: 'Watson King Size Slim White papers are for those who prefer a finer roll. These lightweight papers provide a smooth, slow burn with minimal paper taste.',
    imageUrl: '/products/papers/af834f3a5f5e4698adb7b3c697b89ba4.png', detailUrl: '/products/productsAr/papers/387' },
  {
    id: 388,
    brand: 'Watson',
    name: 'Watson King Size Slim + Tips - Closing Flap Beige',
    size: 'King Size Slim',
    description: 'A complete and natural package. Watson King Size Slim + Tips in unbleached beige comes with tips and a closing flap, perfect for the discerning smoker.',
    imageUrl: '/products/papers/af5ee9a1c2bc441e98439ab8b457e3af.png',
    detailUrl: '/products/productsAr/papers/388'
  },
  {
    id: 389,
    brand: 'Watson',
    name: 'Watson King Size Slim Black',
    size: 'King Size Slim',
    description: 'Sleek and refined, the Watson King Size Slim Black papers offer a superior rolling experience. The slim design ensures a perfect, elegant cigarette every time.',
    imageUrl: '/products/papers/0474af7b71f649b8a9ce18544f34ff0a.png',
    detailUrl: '/products/productsAr/papers/389'
  },
  {
    id: 390,
    brand: 'Watson',
    name: 'Watson King Size Slim + Tips - Magnet Close Black',
    size: 'King Size Slim',
    description: 'Experience premium convenience with Watson King Size Slim + Tips. This black booklet features a magnetic closure to keep your papers and tips perfectly secure.',
    imageUrl: '/products/papers/8e074fb1f4304fc18f173ec66c6a2316.png',
    detailUrl: '/products/productsAr/papers/390'
  },
  {
    id: 391,
    brand: 'Watson',
    name: 'Watson King Size Slim + Tips - Closing Flap Black',
    size: 'King Size Slim',
    description: 'Watson King Size Slim + Tips in a black closing flap booklet offers both style and function. Enjoy slim papers paired with filter tips for the perfect roll.',
    imageUrl: '/products/papers/cf44e1a6d40043f1b489209b8f44730e.png',
    detailUrl: '/products/productsAr/papers/391'
  },
  {
    id: 392,
    brand: 'Watson',
    name: 'Watson King Size Slim + Tips - Closing Flap Brown',
    size: 'King Size Slim',
    description: 'For the natural enthusiast, Watson King Size Slim + Tips in brown provides unbleached papers and tips. The closing flap ensures everything stays in place.',
    imageUrl: '/products/papers/e4659165a38b49a999ab9669c60dff82.png',
    detailUrl: '/products/productsAr/papers/392'
  },
  {
    id: 393,
    brand: 'Watson',
    name: 'Watson King Size Slim + Tips - Closing Flap White',
    size: 'King Size Slim',
    description: 'The classic white paper in a convenient format. Watson King Size Slim + Tips includes everything you need for a refined smoke, protected by a closing flap.',
    imageUrl: '/products/papers/aaf7128bd0b84c6e961d61c5d8ed8f2c.png',
    detailUrl: '/products/productsAr/papers/393'
  },
  {
    id: 394,
    brand: 'Watson',
    name: 'Watson King Size Slim + Tips - Easy Close Black',
    size: 'King Size Slim',
    description: 'Function meets style with Watson King Size Slim + Tips in an Easy Close Black pack. This innovative booklet keeps your slim papers and tips secure with minimal effort.',
    imageUrl: '/products/papers/827d030335b349bab106a9ff643ce780.png',
    detailUrl: '/products/productsAr/papers/394'
  },
  {
    id: 395,
    brand: 'Watson',
    name: 'Watson King Size Slim Beige',
    size: 'King Size Slim',
    description: 'Enjoy a pure and unadulterated smoke with Watson King Size Slim Beige papers. These unbleached, slim papers are perfect for the connoisseur who appreciates natural quality.',
    imageUrl: '/products/papers/482c5ca5f6c648a28f508a2215312293.png',
    detailUrl: '/products/productsAr/papers/395'
  },
  {
    id: 396,
    brand: 'Watson',
    name: 'Watson King Size Slim Brown',
    size: 'King Size Slim',
    description: 'Watson King Size Slim Brown papers are unbleached for an authentic experience. Their slim profile and slow burn make them a favorite among discerning smokers.',
    imageUrl: '/products/papers/05dd177dd14f48eea7875a3ff6502ab3.png',
    detailUrl: '/products/productsAr/papers/396'
  },
  {
    id: 397,
    brand: 'Watson',
    name: 'Watson King Size XXL + Tips - Closing Flap Black',
    size: 'King Size XXL',
    description: 'Go big with Watson King Size XXL + Tips. These extra-large papers are perfect for sharing and come with tips in a stylish black booklet with a closing flap.',
    imageUrl: '/products/papers/1bf3360386f0406d81af637bb53ae1d5.png',
    detailUrl: '/products/productsAr/papers/397'
  },
  {
    id: 398,
    brand: 'Watson',
    name: 'Watson King Size XXL + Tips - Closing Flap Beige',
    size: 'King Size XXL',
    description: 'For the ultimate natural smoke, choose Watson King Size XXL + Tips in beige. These unbleached, extra-large papers include tips for a superior rolling experience.',
    imageUrl: '/products/papers/71169614cae543d7b6b4a558bd1a7881.png',
    detailUrl: '/products/productsAr/papers/398'
  },
  {
    id: 399,
    brand: 'Watson',
    name: 'Watson King Size XXL + Tips - Closing Flap Brown',
    size: 'King Size XXL',
    description: 'Watson\'s largest offering, the King Size XXL + Tips in brown, provides unbleached papers and tips for an extended, all-natural session. The closing flap keeps them fresh.',
    imageUrl: '/products/papers/140d16c6606c4a6fb37b4e735cf69246.png',
    detailUrl: '/products/productsAr/papers/399'
  },
  {
    id: 400,
    brand: 'Watson',
    name: 'Watson King Size XXL + Tips - Closing Flap White',
    size: 'King Size XXL',
    description: 'When size matters, Watson King Size XXL + Tips in classic white delivers. These extra-large papers come with tips in a secure closing flap booklet.',
    imageUrl: '/products/papers/15b238aff29f4b0991720e7c3db772f5.png',
    detailUrl: '/products/productsAr/papers/400'
  },
  {
    id: 401,
    brand: 'Watson',
    name: 'Watson Regular Beige',
    size: 'Regular',
    description: 'Watson Regular Beige papers offer a classic, no-frills smoke with unbleached paper for natural flavor. The regular size is perfect for a quick, personal roll.',
    imageUrl: '/products/papers/0359c1fbdeca48abbbc01aeaf40fdd65.png',
    detailUrl: '/products/productsAr/papers/401'
  },
  {
    id: 402,
    brand: 'Watson',
    name: 'Watson Regular Black',
    size: 'Regular',
    description: 'The original Watson Regular Black papers are a timeless choice. This standard size is ideal for rolling your own with thin, slow-burning paper.',
    imageUrl: '/products/papers/cbac1febbb5549a683d0c537cb193591.png',
    detailUrl: '/products/productsAr/papers/402'
  },
  {
    id: 403,
    brand: 'Watson',
    name: 'Watson Regular Blue',
    size: 'Regular',
    description: 'Watson Regular Blue papers are a go-to choice for everyday smokers. Reliable and easy to roll, these papers provide a consistent and enjoyable experience.',
    imageUrl: '/products/papers/9232095607ff43d99f7132bcc50a9247.png',
    detailUrl: '/products/productsAr/papers/403'
  },
  {
    id: 404,
    brand: 'Watson',
    name: 'Watson Regular Brown',
    size: 'Regular',
    description: 'For a pure and unrefined smoke, Watson Regular Brown papers are the perfect choice. Made from unbleached paper, they let the natural flavor of your herbs shine.',
    imageUrl: '/products/papers/14da0c2a2449496cb76a556ebf986047.png',
    detailUrl: '/products/productsAr/papers/404'
  },
  {
    id: 405,
    brand: 'Watson',
    name: 'Watson Regular Red',
    size: 'Regular',
    description: 'Watson Regular Red papers are known for their slow-burning quality. This regular size is perfect for a quick and satisfying smoke anytime, anywhere.',
    imageUrl: '/products/papers/e710ae25e38041f2b9880086548ee92d.png',
    detailUrl: '/products/productsAr/papers/405'
  },
  {
    id: 406,
    brand: 'Watson',
    name: 'Watson Regular White',
    size: 'Regular',
    description: 'The essential Watson Regular White papers are perfect for everyday use. Clean, classic, and reliable, they provide a smooth burn every single time.',
    imageUrl: '/products/papers/f888c9ffc92d43a7b0f1356cd458b6b5.png',
    detailUrl: '/products/productsAr/papers/406'
  },
  {
    id: 407,
    brand: 'Young Master',
    name: 'Young Master 1 1/4 - Closing Flap Brown',
    size: '1 1/4',
    description: 'Young Master 1 1/4 - Closing Flap Brown papers are crafted for a natural and authentic smoking experience. The unbleached paper and secure flap make this a premium choice.',
    imageUrl: '/products/papers/e296822796cf411d83e326a0b8f7fdeb.png',
    detailUrl: '/products/productsAr/papers/407'
  },
  {
    id: 408,
    brand: 'Young Master',
    name: 'Young Master King Size + Tips - Closing Flap Brown',
    size: 'King Size',
    description: 'Young Master King Size + Tips offers the ultimate convenience with unbleached brown papers and included tips. The closing flap booklet is perfect for on-the-go.',
    imageUrl: '/products/papers/e74cfeb4a11549f8bd5ca519b267ab0a.png',
    detailUrl: '/products/productsAr/papers/408'
  },
  {
    id: 409,
    brand: 'Young Master',
    name: 'Young Master King Size Slim + Tips',
    size: 'King Size Slim',
    description: 'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
    imageUrl: '/products/papers/4ebde2b8c795482e856ce179ce6e65c7.png',
    detailUrl: '/products/productsAr/papers/409'
  },
  {
    id: 410,
    brand: 'Young Master',
    name: 'Young Master King Size Slim + Tips - Magnet Close Brown',
    size: 'King Size Slim',
    description: 'Young Master King Size Slim + Tips - Magnet Close Brown combines sleek packaging with functionality. With natural Arabic gum and wood pulp construction, it ensures a smooth roll and a clean burn.',
    imageUrl: '/products/papers/ee5f94f4461543e59784fdeca464307d.png',
    detailUrl: '/products/productsAr/papers/410'
  },
  {
    id: 411,
    brand: 'Young Master',
    name: 'Young Master King Size Slim Black',
    size: 'King Size Slim',
    description: 'Young Master King Size Slim Black is crafted from high-quality wood pulp for a smooth smoking experience. The slim design is ideal for those who prefer a longer roll with minimal paper taste.',
    imageUrl: '/products/papers/a73c9ae7cb7940c7a1295ca8523a7206.png',
    detailUrl: '/products/productsAr/papers/411'
  },
  {
    id: 412,
    brand: 'Young Master',
    name: 'Young Master King Size Slim Brown',
    size: 'King Size Slim',
    description: 'Young Master King Size Slim Brown provides a smooth, slow-burning experience. Made from natural materials and sealed with Arabic gum, it\'s perfect for eco-conscious consumers.',
    imageUrl: '/products/papers/a76319d5ec5d49f1bf0cde41ca525bb0.png',
    detailUrl: '/products/productsAr/papers/412'
  },
  {
    id: 413,
    brand: 'Young Master',
    name: 'Young Master King Size Slim + Tips - Easy Close Black',
    size: 'King Size Slim',
    description: 'Young Master King Size Slim + Tips - Easy Close Black is a convenient rolling paper option with added tips. The easy-close flap and quality construction make it ideal for daily use.',
    imageUrl: '/products/papers/f77abefa9bd64d6ea008ed9a050d275a.png',
    detailUrl: '/products/productsAr/papers/413'
  },
  {
    id: 414,
    brand: 'Young Master',
    name: 'Young Master King Size Slim + Tips - Easy Close Brown',
    size: 'King Size Slim',
    description: 'Young Master King Size Slim + Tips - Easy Close Brown offers an eco-friendly and stylish choice. Comes with tips, sealed with Arabic gum, and features a practical easy-close flap.',
    imageUrl: '/products/papers/e92487ac1d984d1aa463b5cb8d3078c3.png',
    detailUrl: '/products/productsAr/papers/414'
  },
  {
    id: 415,
    brand: 'Young Master',
    name: 'Young Master King Size Slim + Tips - Magnet Close Black',
    size: 'King Size Slim',
    description: 'Young Master King Size Slim + Tips - Magnet Close Black delivers a premium feel with magnet-close packaging and natural Arabic gum. Comes with included tips for added convenience.',
    imageUrl: '/products/papers/1127ef0b2f0643e5950172af2f1b01e9.png',
    detailUrl: '/products/productsAr/papers/415'
  },
  { id: 416, brand: 'Young Master', name: 'Young Master King Size XXL + Tips', size: 'King Size XXL',
       description:'Introducing 1 1/4 Rolling Papers - Closing Flap Blue. These papers offer convenience and quality, with 32 leaves per booklet. The leaf size is 78 by 44 millimeters, providing a perfect fit for your smoking needs. Made with high-quality 21gsm fast-burning wood paper, they ensure a satisfying smoking experience. Individually wrapped in a single booklet cello wrap, they retain their freshness. Made with French Paper and sealed with natural Arabic gum, they are suitable for vegans. Test  Test',
      imageUrl: '/products/papers/087a921322314928ae8dd45fa00931df.png', detailUrl: '/products/productsAr/papers/416' 
  },
  {
    id: 417,
    brand: 'Young Master',
    name: 'Young Master Regular Brown',
    size: 'Regular',
    description: 'Young Master Regular Brown is a compact, eco-friendly option for casual smokers. These high-quality wood pulp papers ensure an even burn and come sealed with natural Arabic gum.',
    imageUrl: '/products/papers/04c70a62358e401f9225aa14187c082a.png',
    detailUrl: '/products/productsAr/papers/417'
  }




 
  
  
  
  
 
  

  


    ];

// --- Static Filter Options (UPDATED) ---
// These arrays are based on the HTML you provided.
const filterBrands = [
    { value: 'all', label: '- العلامات التجارية -' },
    { value: 'CRP', label: 'CRP' },
    { value: 'CRT', label: 'CRT' },
    { value: 'IMPRT', label: 'IMPRT' },
    { value: 'Sir Badger', label: 'Sir Badger' },
    { value: 'The Saint', label: 'The Saint' },
    { value: 'Watson', label: 'Watson' },
    { value: 'Young Master', label: 'Young Master' },
];

const filterSizes = [
    { value: 'all', label: '- النوع -' },
    { value: '1 1/4', label: '1 1/4' },
    { value: 'Regular', label: 'Regular' },
    { value: 'King Size', label: 'King Size' },
    { value: 'King Size Slim', label: 'King Size Slim' },
    { value: 'King Size XXL', label: 'King Size XXL' },
];


export default function PapersPage() {
  const [tempBrand, setTempBrand] = useState('all');
  const [tempSize, setTempSize] = useState('all');
  const [appliedBrand, setAppliedBrand] = useState('all');
  const [appliedSize, setAppliedSize] = useState('all');

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const brandMatch = appliedBrand === 'all' || product.brand === appliedBrand;
      const sizeMatch = appliedSize === 'all' || product.size === appliedSize;
      return brandMatch && sizeMatch;
    });
  }, [appliedBrand, appliedSize]);

  const handleApplyFilters = () => {
    setAppliedBrand(tempBrand);
    setAppliedSize(tempSize);
  };

  return (
    <section className={styles.pageSection}>
      <Breadcrumb />
      <div className={styles.container}>

        {/* --- Filter Controls (UPDATED) --- */}
        <div className={styles.filterContainer}>
          {/* Brand Select now uses the static list */}
          <div className="flex-1">
            <select
              id="brand-select"
              aria-label="Filter by brand"
              value={tempBrand}
              onChange={(e) => setTempBrand(e.target.value)}
              className={styles.filterSelect}
            >
              {filterBrands.map(brand => (
                <option key={brand.value} value={brand.value}>
                  {brand.label}
                </option>
              ))}
            </select>
          </div>

          {/* Size Select now uses the static list */}
          <div className="flex-1">
            <select
              id="size-select"
              aria-label="Filter by size"
              value={tempSize}
              onChange={(e) => setTempSize(e.target.value)}
              className={styles.filterSelect}
            >
              {filterSizes.map(size => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Button */}
          <div>
            <button
              onClick={handleApplyFilters}
              className={styles.filterButton}
            >
             الفلتر
            </button>
          </div>
        </div>

        {/* --- Product Grid --- */}
        <div className={styles.productGrid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className={styles.productCard}>
                <Link href={product.detailUrl} className={styles.imageContainer}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    className={styles.productImage}
                  />
                </Link>
                <div className={styles.cardContent}>
                  <h3 className={styles.productName}>
                    <Link href={product.detailUrl}>
                      {product.name}
                    </Link>
                  </h3>
                  <div className={styles.productMeta}>
                    <span>{product.brand}</span> • {product.size}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noProducts}>
              <h3 className="text-xl font-semibold text-gray-500">No products match your selection.</h3>
              <p className="mt-2 text-gray-400">Please try a different filter combination.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}