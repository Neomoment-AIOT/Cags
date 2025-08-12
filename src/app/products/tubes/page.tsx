// app/tubes/page.tsx
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb'; // Assuming a shared component
import styles from '../products.module.css';     // Reusing the same shared product styles
import Footer from '@/app/components/Footer';

// --- 1. Product Type Definition (FIXED) ---
// The 'size' type is now updated to match the data for Cigarette Tubes.
type TubeProduct = {
  id: number;
  brand: string;
  name: string;
  size: 'King Size' | 'Slim Size' | 'Ultra Slim' | 'Micro Slim';
  imageUrl: string;
  detailUrl: string;
};

// --- 2. Product Data ---
// This is the data for your Cigarette Tubes page.
const allTubeProducts: TubeProduct[] = [

  { "id": 2, "brand": "CRT", "name": "CRT King Size Black Carbon 200", "size": "King Size", "imageUrl": "/products/tubes/df9d2c7cd64e460f838a0b594f622139.png", "detailUrl": "/products/tubes/2" },
  { "id": 3, "brand": "IMPRT", "name": "IMPRT King Size Red Long 200", "size": "King Size", "imageUrl": "/products/tubes/aca6aaea441648e7bd5ff33aab900836.png", "detailUrl": "/products/tubes/3" },
  { "id": 4, "brand": "IMPRT", "name": "IMPRT King Size Blue Long 200", "size": "King Size", "imageUrl": "/products/tubes/052486c27a844dcab116f60047aec346.png", "detailUrl": "/products/tubes/4" },
  { "id": 5, "brand": "IMPRT", "name": "IMPRT Slim Size Red Long 200", "size": "Slim Size", "imageUrl": "/products/tubes/93dbc660e0b741db890e2d5da1e25a3d.png", "detailUrl": "/products/tubes/5" },
  { "id": 6, "brand": "IMPRT", "name": "IMPRT Slim Size Blue Long 200", "size": "Slim Size", "imageUrl": "/products/tubes/eb890d5df00340fd89a2ad6b7b6052f8.png", "detailUrl": "/products/tubes/6" },
  { "id": 7, "brand": "IMPRT", "name": "IMPRT Ultra Slim Red Long 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/1647a0c084c7497aaeb443c02365b79b.png", "detailUrl": "/products/tubes/7" },
  { "id": 8, "brand": "IMPRT", "name": "IMPRT Ultra Slim Blue Long 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/e00847792f86437e8180004fe2f31688.png", "detailUrl": "/products/tubes/8" },
  { "id": 9, "brand": "IMPRT", "name": "IMPRT Ultra Slim Red Long 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/dff00bd155104abda23c6ad76fd58323.png", "detailUrl": "/products/tubes/9" },
  { "id": 10, "brand": "IMPRT", "name": "IMPRT Ultra Slim Blue Long 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/0c8fabd5975348c58965c913cf90f39d.png", "detailUrl": "/products/tubes/10" },
  { "id": 11, "brand": "IMPRT", "name": "IMPRT Ultra Slim Red Long 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/d7bd5c37896e4456b9a32b21152798d2.png", "detailUrl": "/products/tubes/11" },
  { "id": 12, "brand": "IMPRT", "name": "IMPRT Ultra Slim Blue Long 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/4c0966d3d1304a23b1f6442f430271cb.png", "detailUrl": "/products/tubes/12" },
  { "id": 13, "brand": "IMPRT", "name": "IMPRT Micro Slim Red Long 200", "size": "Micro Slim", "imageUrl": "/products/tubes/2cfb619f4f1b48e88d017542d5cdf6b5.png", "detailUrl": "/products/tubes/13" },
  { "id": 14, "brand": "IMPRT", "name": "IMPRT Micro Slim Blue Long 200", "size": "Micro Slim", "imageUrl": "/products/tubes/3bdc89496c6743e9b0e2a39c41ed4b59.png", "detailUrl": "/products/tubes/14" },
  { "id": 15, "brand": "IMPRT", "name": "IMPRT Micro Slim Red Long 500", "size": "Micro Slim", "imageUrl": "/products/tubes/6824bd276373479e804fdbc468ef3c66.png", "detailUrl": "/products/tubes/15" },
  { "id": 16, "brand": "IMPRT", "name": "IMPRT Micro Slim Blue Long 500", "size": "Micro Slim", "imageUrl": "/products/tubes/1f235cb814c94186b05a3e33573be929.png", "detailUrl": "/products/tubes/16" },
  { "id": 17, "brand": "IMPRT", "name": "IMPRT King Size Gray Long 200", "size": "King Size", "imageUrl": "/products/tubes/06692e7d83dc4127950883af109af38f.png", "detailUrl": "/products/tubes/17" },
  { "id": 18, "brand": "IMPRT", "name": "IMPRT Slim Size Gray Long 200", "size": "Slim Size", "imageUrl": "/products/tubes/4a472f9ed2274bd4b84fb2a2a28dfc3d.png", "detailUrl": "/products/tubes/18" },
  { "id": 19, "brand": "IMPRT", "name": "IMPRT Ultra Slim Gray Long 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/97b1ed7e982c4c96ad02e5d9f9ede053.png", "detailUrl": "/products/tubes/19" },
  { "id": 20, "brand": "IMPRT", "name": "IMPRT Ultra Slim Gray Long 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/939bdaf04f6a48668c996b6b7267a325.png", "detailUrl": "/products/tubes/20" },
  { "id": 21, "brand": "IMPRT", "name": "IMPRT Ultra Slim Gray Long 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/1ec23bc338d54c0fa273b3ed06a03512.png", "detailUrl": "/products/tubes/21" },
  { "id": 22, "brand": "IMPRT", "name": "IMPRT Micro Slim Gray Long 200", "size": "Micro Slim", "imageUrl": "/products/tubes/463eba64472441e09e8cd66daf9b362c.png", "detailUrl": "/products/tubes/22" },
  { "id": 23, "brand": "IMPRT", "name": "IMPRT Micro Slim Gray Long 500", "size": "Micro Slim", "imageUrl": "/products/tubes/cafb0356a25a4b4ebab07cb4cd16d737.png", "detailUrl": "/products/tubes/23" },
  { "id": 24, "brand": "IMPRT", "name": "IMPRT King Size Brown 200", "size": "King Size", "imageUrl": "/products/tubes/ac4aca0f83604b12b2fcc04641686869.png", "detailUrl": "/products/tubes/24" },
  { "id": 25, "brand": "IMPRT", "name": "IMPRT Slim Size Brown 200", "size": "Slim Size", "imageUrl": "/products/tubes/7213466a74d945a786833f71dcf73989.png", "detailUrl": "/products/tubes/25" },
  { "id": 26, "brand": "IMPRT", "name": "IMPRT Ultra Slim Brown 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/f71b7154c599462b98e89dd405e73e3f.png", "detailUrl": "/products/tubes/26" },
  { "id": 27, "brand": "IMPRT", "name": "IMPRT Ultra Slim Brown 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/d4617f77011a439b80173f29fbd733d0.png", "detailUrl": "/products/tubes/27" },
  { "id": 28, "brand": "IMPRT", "name": "IMPRT Ultra Slim Brown 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/5e06a90818a04dd882b7bc2a521a95aa.png", "detailUrl": "/products/tubes/28" },
  { "id": 29, "brand": "IMPRT", "name": "IMPRT Micro Slim Brown 200", "size": "Micro Slim", "imageUrl": "/products/tubes/09965c3f1b6841d5b5602399dc496e09.png", "detailUrl": "/products/tubes/29" },
  { "id": 30, "brand": "IMPRT", "name": "IMPRT Micro Slim Brown 500", "size": "Micro Slim", "imageUrl": "/products/tubes/8c348febcaa04ddab097fc94229002c5.png", "detailUrl": "/products/tubes/30" },
  { "id": 31, "brand": "IMPRT", "name": "IMPRT King Size Black Carbon 200", "size": "King Size", "imageUrl": "/products/tubes/b7794d76da3143ac8197f89062f537df.png", "detailUrl": "/products/tubes/31" },
  { "id": 32, "brand": "IMPRT", "name": "IMPRT King Size Gray 200", "size": "King Size", "imageUrl": "/products/tubes/8bb1fcd4705649c8a8199b487aea0ffe.png", "detailUrl": "/products/tubes/32" },
  { "id": 33, "brand": "IMPRT", "name": "IMPRT Slim Size Gray 200", "size": "Slim Size", "imageUrl": "/products/tubes/4f4e56c91c0a40c2a7554327f0c43d81.png", "detailUrl": "/products/tubes/33" },
  { "id": 34, "brand": "IMPRT", "name": "IMPRT Ultra Slim Gray 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/73c3ec6687ba453d80f4f3235870dbe9.png", "detailUrl": "/products/tubes/34" },
  { "id": 35, "brand": "IMPRT", "name": "IMPRT Ultra Slim Gray 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/1aab6076aadd4236b4f0a4f1a4b220d1.png", "detailUrl": "/products/tubes/35" },
  { "id": 36, "brand": "IMPRT", "name": "IMPRT Ultra Slim Gray 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/5009f63db4da48dd802d8375f3b3dfde.png", "detailUrl": "/products/tubes/36" },
  { "id": 37, "brand": "IMPRT", "name": "IMPRT Micro Slim Gray 200", "size": "Micro Slim", "imageUrl": "/products/tubes/3caeaca59b7d4b9e91ff5bd56363e689.png", "detailUrl": "/products/tubes/37" },
  { "id": 38, "brand": "IMPRT", "name": "IMPRT Micro Slim Gray 500", "size": "Micro Slim", "imageUrl": "/products/tubes/28809e4390a04c1fbc9a82cb4b97b879.png", "detailUrl": "/products/tubes/38" },
  { "id": 39, "brand": "IMPRT", "name": "IMPRT King Size Blue 100", "size": "King Size", "imageUrl": "/products/tubes/30a5fbbddfb84c71bf393120d462607c.png", "detailUrl": "/products/tubes/39" },
  { "id": 40, "brand": "IMPRT", "name": "IMPRT King Size Red 200", "size": "King Size", "imageUrl": "/products/tubes/1ee4191ee52044cc83b2d6f82d8fe57d.png", "detailUrl": "/products/tubes/40" },
  { "id": 41, "brand": "IMPRT", "name": "IMPRT King Size Blue 200", "size": "King Size", "imageUrl": "/products/tubes/35708f519b444e448535351a00f4c6f7.png", "detailUrl": "/products/tubes/41" },
  { "id": 42, "brand": "IMPRT", "name": "IMPRT Slim Size Red 200", "size": "Slim Size", "imageUrl": "/products/tubes/4fa9d0594d8341369b9f50b7a023adcd.png", "detailUrl": "/products/tubes/42" },
  { "id": 43, "brand": "IMPRT", "name": "IMPRT Slim Size Blue 200", "size": "Slim Size", "imageUrl": "/products/tubes/0cf3bad5c4ac4d0c91297efa220c5789.png", "detailUrl": "/products/tubes/43" },
  { "id": 44, "brand": "IMPRT", "name": "IMPRT Ultra Slim Red 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/f450d7b3d2884dc78cba19785f65fa02.png", "detailUrl": "/products/tubes/44" },
  { "id": 45, "brand": "IMPRT", "name": "IMPRT Ultra Slim Blue 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/90b0a53501e7412ca9f0fad804c367db.png", "detailUrl": "/products/tubes/45" },
  { "id": 46, "brand": "IMPRT", "name": "IMPRT Ultra Slim Red 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/af2450962aec4d5da9d246e7e88b593b.png", "detailUrl": "/products/tubes/46" },
  { "id": 47, "brand": "IMPRT", "name": "IMPRT Ultra Slim Blue 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/3d19540a82a244918a589a8d3e63bb74.png", "detailUrl": "/products/tubes/47" },
  { "id": 48, "brand": "IMPRT", "name": "IMPRT Ultra Slim Red 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/35c53dd5eeac417796cfe8e02abfba76.png", "detailUrl": "/products/tubes/48" },
  { "id": 49, "brand": "IMPRT", "name": "IMPRT Ultra Slim Blue 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/c946e8f34c204841929bd60bdbcf34b5.png", "detailUrl": "/products/tubes/49" },
  { "id": 50, "brand": "IMPRT", "name": "IMPRT Micro Slim Red 200", "size": "Micro Slim", "imageUrl": "/products/tubes/67963e4e27bd42fdb4a9ab24e90a2177.png", "detailUrl": "/products/tubes/50" },
  { "id": 51, "brand": "IMPRT", "name": "IMPRT Micro Slim Blue 200", "size": "Micro Slim", "imageUrl": "/products/tubes/24ba43a8e50949e0b67be399a5b494bf.png", "detailUrl": "/products/tubes/51" },
  { "id": 52, "brand": "IMPRT", "name": "IMPRT Micro Slim Red 500", "size": "Micro Slim", "imageUrl": "/products/tubes/8cf9b2587f104f9aa7536bb3796f9ecf.png", "detailUrl": "/products/tubes/52" },
  { "id": 53, "brand": "IMPRT", "name": "IMPRT Micro Slim Blue 500", "size": "Micro Slim", "imageUrl": "/products/tubes/47530718e2cd473cad092b47b9c30817.png", "detailUrl": "/products/tubes/53" },
  { "id": 54, "brand": "Sir Badger", "name": "Sir Badger King Size Beige 200", "size": "King Size", "imageUrl": "/products/tubes/632846c488c74eafac303d4a994a61c6.png", "detailUrl": "/products/tubes/54" },
  { "id": 55, "brand": "Sir Badger", "name": "Sir Badger Slim Size Beige 200", "size": "Slim Size", "imageUrl": "/products/tubes/bcb4b7b0a0d74ad791f02f6bd5ffb874.png", "detailUrl": "/products/tubes/55" },
  { "id": 56, "brand": "The Saint", "name": "The Saint King Size White 200", "size": "King Size", "imageUrl": "/products/tubes/76994102381243069fc8ffba4eb43b82.png", "detailUrl": "/products/tubes/56" },
  { "id": 57, "brand": "The Saint", "name": "The Saint Slim Size White 200", "size": "Slim Size", "imageUrl": "/products/tubes/0a7eaa2263ca45548e4107e2a57d0a9f.png", "detailUrl": "/products/tubes/57" },
  { "id": 58, "brand": "Watson", "name": "Watson King Size Red Medium 200", "size": "King Size", "imageUrl": "/products/tubes/9ab0a9a914424f9e8828cd97e6c41ea7.png", "detailUrl": "/products/tubes/58" },
  { "id": 59, "brand": "Watson", "name": "Watson King Size Blue Medium 200", "size": "King Size", "imageUrl": "/products/tubes/6008e2494cc94b0fb2a3cd15a7b7e518.png", "detailUrl": "/products/tubes/59" },
  { "id": 60, "brand": "Watson", "name": "Watson King Size Red Long 100", "size": "King Size", "imageUrl": "/products/tubes/45870d28e9234172b96de37b4f38f306.png", "detailUrl": "/products/tubes/60" },
  { "id": 61, "brand": "Watson", "name": "Watson King Size Blue Long 100", "size": "King Size", "imageUrl": "/products/tubes/81a08790e0274b0787f0813662bf639b.png", "detailUrl": "/products/tubes/61" },
  { "id": 62, "brand": "Watson", "name": "Watson King Size Red Long 200", "size": "King Size", "imageUrl": "/products/tubes/4aac0d7607b14d4bbeace9223ad4c914.png", "detailUrl": "/products/tubes/62" },
  { "id": 63, "brand": "Watson", "name": "Watson King Size Blue Long 200", "size": "King Size", "imageUrl": "/products/tubes/1bb8cda92c084db0aad804d9706b6d75.png", "detailUrl": "/products/tubes/63" },
  { "id": 64, "brand": "Watson", "name": "Watson Slim Size Red Long 200", "size": "Slim Size", "imageUrl": "/products/tubes/55df7d77960f4f04965e1a3b00bcd55b.png", "detailUrl": "/products/tubes/64" },
  { "id": 65, "brand": "Watson", "name": "Watson Slim Size Blue Long 200", "size": "Slim Size", "imageUrl": "/products/tubes/34c4ad3e796d426bb4621a9d7c532ad7.png", "detailUrl": "/products/tubes/65" },
  { "id": 66, "brand": "Watson", "name": "Watson Ultra Slim Red Long 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/c8e54a475adc406398497d9818e94b94.png", "detailUrl": "/products/tubes/66" },
  { "id": 67, "brand": "Watson", "name": "Watson Ultra Slim Blue Long 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/1c508b079c33465ba026adba83fa2bcf.png", "detailUrl": "/products/tubes/67" },
  { "id": 68, "brand": "Watson", "name": "Watson Ultra Slim Red Long 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/7c143663bdbe4690a2671b18e69930c6.png", "detailUrl": "/products/tubes/68" },
  { "id": 69, "brand": "Watson", "name": "Watson Ultra Slim Blue Long 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/ea38193a3dc247d49bf5c64389435688.png", "detailUrl": "/products/tubes/69" },
  { "id": 70, "brand": "Watson", "name": "Watson Ultra Slim Red Long 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/85c3e0b29d634d45932053f8720fdaa9.png", "detailUrl": "/products/tubes/70" },
  { "id": 71, "brand": "Watson", "name": "Watson Ultra Slim Blue Long 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/d7a84ef45b6149a095ab40be0259ffa7.png", "detailUrl": "/products/tubes/71" },
  { "id": 72, "brand": "Watson", "name": "Watson Micro Slim Red Long 200", "size": "Micro Slim", "imageUrl": "/products/tubes/2b85285bcba840e684684783ab8eeeb3.png", "detailUrl": "/products/tubes/72" },
  { "id": 73, "brand": "Watson", "name": "Watson Micro Slim Blue Long 200", "size": "Micro Slim", "imageUrl": "/products/tubes/58e8770e6b7b4cee8c9f700cf6ee0299.png", "detailUrl": "/products/tubes/73" },
  { "id": 74, "brand": "Watson", "name": "Watson Micro Slim Red Long 500", "size": "Micro Slim", "imageUrl": "/products/tubes/5aa7fc43b929471e9c7b853396308589.png", "detailUrl": "/products/tubes/74" },
  { "id": 75, "brand": "Watson", "name": "Watson Micro Slim Blue Long 500", "size": "Micro Slim", "imageUrl": "/products/tubes/36da7772af1046c8a2e45a3be4e8ada2.png", "detailUrl": "/products/tubes/75" },
  { "id": 76, "brand": "Watson", "name": "Watson King Size Gray Long 200", "size": "King Size", "imageUrl": "/products/tubes/37534deb013f43aab162afe60f226cdd.png", "detailUrl": "/products/tubes/76" },
  { "id": 77, "brand": "Watson", "name": "Watson Slim Size Gray Long 200", "size": "Slim Size", "imageUrl": "/products/tubes/fb1a2d196cd0436d93af8c18a33ea63f.png", "detailUrl": "/products/tubes/77" },
  { "id": 78, "brand": "Watson", "name": "Watson King Size Brown 200", "size": "King Size", "imageUrl": "/products/tubes/6acdd6d5673e43f988dadf053fdc1d99.png", "detailUrl": "/products/tubes/78" },
  { "id": 79, "brand": "Watson", "name": "Watson King Size Brown 500", "size": "King Size", "imageUrl": "/products/tubes/0dac4c5898fc499784afce39b58fd110.png", "detailUrl": "/products/tubes/79" },
  { "id": 80, "brand": "Watson", "name": "Watson Slim Size Brown 200", "size": "Slim Size", "imageUrl": "/products/tubes/6f2eae30c5ba4a71ab552d02644b1e2e.png", "detailUrl": "/products/tubes/80" },
  { "id": 81, "brand": "Watson", "name": "Watson Ultra Slim Brown 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/e7188e40ec8640d9b84117b8c2fe22d5.png", "detailUrl": "/products/tubes/81" },
  { "id": 82, "brand": "Watson", "name": "Watson Ultra Slim Brown 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/5f7ac9f3101d45d5baf4fa7951f526e1.png", "detailUrl": "/products/tubes/82" },
  { "id": 83, "brand": "Watson", "name": "Watson Ultra Slim Brown 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/fe54054028444e7e8968d4b0fcc60414.png", "detailUrl": "/products/tubes/83" },
  { "id": 84, "brand": "Watson", "name": "Watson Micro Slim Brown 200", "size": "Micro Slim", "imageUrl": "/products/tubes/35a2bfcc1ed340259a7746a05f1f9a91.png", "detailUrl": "/products/tubes/84" },
  { "id": 85, "brand": "Watson", "name": "Watson Micro Slim Brown 500", "size": "Micro Slim", "imageUrl": "/products/tubes/81e257ade9104188b57f9f4e231e7c59.png", "detailUrl": "/products/tubes/85" },
  { "id": 86, "brand": "Watson", "name": "Watson King Size Black Carbon 200", "size": "King Size", "imageUrl": "/products/tubes/2ee0da2f0b9c48b8a639528ecb02f706.png", "detailUrl": "/products/tubes/86" },
  { "id": 87, "brand": "Watson", "name": "Watson King Size Black Carbon 500", "size": "King Size", "imageUrl": "/products/tubes/e2dedc772a5b4df0991c8770cd27a29f.png", "detailUrl": "/products/tubes/87" },
  { "id": 88, "brand": "Watson", "name": "Watson King Size Gray 100", "size": "King Size", "imageUrl": "/products/tubes/3d9974f0779741479b36e33a98c7818e.png", "detailUrl": "/products/tubes/88" },
  { "id": 89, "brand": "Watson", "name": "Watson King Size Gray 200", "size": "King Size", "imageUrl": "/products/tubes/1bb3631a158c4462b71d8e4d70eec718.png", "detailUrl": "/products/tubes/89" },
  { "id": 90, "brand": "Watson", "name": "Watson King Size Gray 500", "size": "King Size", "imageUrl": "/products/tubes/3afe320656354513a7a9c1a995509ab2.png", "detailUrl": "/products/tubes/90" },
  { "id": 91, "brand": "Watson", "name": "Watson Slim Size Gray 200", "size": "Slim Size", "imageUrl": "/products/tubes/3a689288b5da44cfade6b1a70190c7b7.png", "detailUrl": "/products/tubes/91" },
  { "id": 92, "brand": "Watson", "name": "Watson Ultra Slim Gray 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/b8800ae76ccd44b184554cc6304f3050.png", "detailUrl": "/products/tubes/92" },
  { "id": 93, "brand": "Watson", "name": "Watson Ultra Slim Gray 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/009c22583e294a6d8d4721155fc9fdce.png", "detailUrl": "/products/tubes/93" },
  { "id": 94, "brand": "Watson", "name": "Watson Ultra Slim Gray 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/7efd9a61abf34741a27ed297755d78ba.png", "detailUrl": "/products/tubes/94" },
  { "id": 95, "brand": "Watson", "name": "Watson Micro Slim Gray 200", "size": "Micro Slim", "imageUrl": "/products/tubes/e2b4f104a13f49c8b6d9f4646653b3d7.png", "detailUrl": "/products/tubes/95" },
  { "id": 96, "brand": "Watson", "name": "Watson Micro Slim Gray 500", "size": "Micro Slim", "imageUrl": "/products/tubes/a7e59e218bbe4143808d2dc033ad25e9.png", "detailUrl": "/products/tubes/96" },
  { "id": 97, "brand": "Watson", "name": "Watson King Size Red 100", "size": "King Size", "imageUrl": "/products/tubes/361d97a0aae44f838962e80fc9621073.png", "detailUrl": "/products/tubes/97" },
  { "id": 98, "brand": "Watson", "name": "Watson King Size Blue 100", "size": "King Size", "imageUrl": "/products/tubes/de09b60dd3894b52af38edc3e312b476.png", "detailUrl": "/products/tubes/98" },
  { "id": 99, "brand": "Watson", "name": "Watson King Size Red 200", "size": "King Size", "imageUrl": "/products/tubes/e374e51af9bc46eebcb9cab653f63787.png", "detailUrl": "/products/tubes/99" },
  { "id": 100, "brand": "Watson", "name": "Watson King Size Blue 200", "size": "King Size", "imageUrl": "/products/tubes/c37bceb27d364905a65bfa05d285da91.png", "detailUrl": "/products/tubes/100" },
  { "id": 101, "brand": "Watson", "name": "Watson King Size Red 500", "size": "King Size", "imageUrl": "/products/tubes/0f494ca711de4c539da950d88735a46d.png", "detailUrl": "/products/tubes/101" },
  { "id": 102, "brand": "Watson", "name": "Watson King Size Blue 500", "size": "King Size", "imageUrl": "/products/tubes/7efb3812dc7b4b069246146bfd749801.png", "detailUrl": "/products/tubes/102" },
  { "id": 103, "brand": "Watson", "name": "Watson Slim Size Red 200", "size": "Slim Size", "imageUrl": "/products/tubes/98f91a443ba148308df2ab88fafd4127.png", "detailUrl": "/products/tubes/103" },
  { "id": 104, "brand": "Watson", "name": "Watson Slim Size Blue 200", "size": "Slim Size", "imageUrl": "/products/tubes/b9855ce9bae946028bd15da48fb46fb1.png", "detailUrl": "/products/tubes/104" },
  { "id": 105, "brand": "Watson", "name": "Watson Ultra Slim Red 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/474689883dc5412eaed0209d76c9670b.png", "detailUrl": "/products/tubes/105" },
  { "id": 106, "brand": "Watson", "name": "Watson Ultra Slim Blue 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/f98bd6d7bb3e42b5b54d90f648635b5a.png", "detailUrl": "/products/tubes/106" },
  { "id": 107, "brand": "Watson", "name": "Watson Ultra Slim Red 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/8f87695d606b40d6952a49da01dd5bc6.png", "detailUrl": "/products/tubes/107" },
  { "id": 108, "brand": "Watson", "name": "Watson Ultra Slim Blue 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/b11ac337e4ae4136bbcc45291ce43d40.png", "detailUrl": "/products/tubes/108" },
  { "id": 109, "brand": "Watson", "name": "Watson Ultra Slim Red 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/e1b31a34e81e4f038483a1aae647344b.png", "detailUrl": "/products/tubes/109" },
  { "id": 110, "brand": "Watson", "name": "Watson Ultra Slim Blue 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/2df033e62cb040f0a04bf1829617d0fd.png", "detailUrl": "/products/tubes/110" },
  { "id": 111, "brand": "Watson", "name": "Watson Micro Slim Red 200", "size": "Micro Slim", "imageUrl": "/products/tubes/c2f7a8641fda46948c6c3f655dc1f0ad.png", "detailUrl": "/products/tubes/111" },
  { "id": 112, "brand": "Watson", "name": "Watson Micro Slim Blue 200", "size": "Micro Slim", "imageUrl": "/products/tubes/ce7a536bda714bcbafca1a3839c2ab1c.png", "detailUrl": "/products/tubes/112" },
  { "id": 113, "brand": "Watson", "name": "Watson Micro Slim Red 500", "size": "Micro Slim", "imageUrl": "/products/tubes/ece6418e2017428aa619697b5366a51b.png", "detailUrl": "/products/tubes/113" },
  { "id": 114, "brand": "Watson", "name": "Watson Micro Slim Blue 500", "size": "Micro Slim", "imageUrl": "/products/tubes/d086c049c87248338c40349f84443995.png", "detailUrl": "/products/tubes/114" },
  { "id": 115, "brand": "Watson", "name": "Watson King Size Red Long 500", "size": "King Size", "imageUrl": "/products/tubes/6ac32d7484374327bc9fc13575c81dbc.png", "detailUrl": "/products/tubes/115" },
  { "id": 116, "brand": "Watson", "name": "Watson King Size Blue Long 500", "size": "King Size", "imageUrl": "/products/tubes/3ed38bcdc4d240ce857be3ccc139c10f.png", "detailUrl": "/products/tubes/116" },
  { "id": 117, "brand": "Young Master", "name": "Young Master King Size Red Long 100", "size": "King Size", "imageUrl": "/products/tubes/804b34c122ff4e37b59037c6e75b92ca.png", "detailUrl": "/products/tubes/117" },
  { "id": 118, "brand": "Young Master", "name": "Young Master King Size Blue Long 100", "size": "King Size", "imageUrl": "/products/tubes/598fc4a717284450bb4cca088e2f5405.png", "detailUrl": "/products/tubes/118" },
  { "id": 119, "brand": "Young Master", "name": "Young Master King Size Red Long 200", "size": "King Size", "imageUrl": "/products/tubes/5cc75830fb2946408e35221abea6831d.png", "detailUrl": "/products/tubes/119" },
  { "id": 120, "brand": "Young Master", "name": "Young Master King Size Blue Long 200", "size": "King Size", "imageUrl": "/products/tubes/b97eb305b82543f386719004fbed5f5a.png", "detailUrl": "/products/tubes/120" },
  { "id": 121, "brand": "Young Master", "name": "Young Master Slim Size Red Long 200", "size": "Slim Size", "imageUrl": "/products/tubes/53b8c149a8d84c52a93099365201f0e1.png", "detailUrl": "/products/tubes/121" },
  { "id": 122, "brand": "Young Master", "name": "Young Master Slim Size Blue Long 200", "size": "Slim Size", "imageUrl": "/products/tubes/a506faaae1e84daa8899eea3ffda64a5.png", "detailUrl": "/products/tubes/122" },
  { "id": 123, "brand": "Young Master", "name": "Young Master Ultra Slim Red Long 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/aa5fdaa8694c4461b236e568cd980f64.png", "detailUrl": "/products/tubes/123" },
  { "id": 124, "brand": "Young Master", "name": "Young Master Ultra Slim Blue Long 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/df9f2bbc7d494322af332d07ccbf2e7d.png", "detailUrl": "/products/tubes/124" },
  { "id": 125, "brand": "Young Master", "name": "Young Master Ultra Slim Red Long 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/4393df1a13714a35bd54180389bf2476.png", "detailUrl": "/products/tubes/125" },
  { "id": 126, "brand": "Young Master", "name": "Young Master Ultra Slim Blue Long 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/1ec89266eb2444359495df2df5e90a2e.png", "detailUrl": "/products/tubes/126" },
  { "id": 127, "brand": "Young Master", "name": "Young Master Ultra Slim Red Long 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/ef5c06b60f4d47c5af4f3f74059a56c9.png", "detailUrl": "/products/tubes/127" },
  { "id": 128, "brand": "Young Master", "name": "Young Master Ultra Slim Blue Long 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/dd63f96479704544a1db46db4ddeb119.png", "detailUrl": "/products/tubes/128" },
  { "id": 129, "brand": "Young Master", "name": "Young Master Micro Slim Red Long 200", "size": "Micro Slim", "imageUrl": "/products/tubes/033eb060772042fe9d83aea2da655afa.png", "detailUrl": "/products/tubes/129" },
  { "id": 130, "brand": "Young Master", "name": "Young Master Micro Slim Blue Long 200", "size": "Micro Slim", "imageUrl": "/products/tubes/5c6ed382809d437c90b7e832e7cb17ac.png", "detailUrl": "/products/tubes/130" },
  { "id": 131, "brand": "Young Master", "name": "Young Master Micro Slim Red Long 500", "size": "Micro Slim", "imageUrl": "/products/tubes/de1a296594bf42f8bc4dbfeb1d4df999.png", "detailUrl": "/products/tubes/131" },
  { "id": 132, "brand": "Young Master", "name": "Young Master Micro Slim Blue Long 500", "size": "Micro Slim", "imageUrl": "/products/tubes/af6585c95d0d49b697b3b9437ad0bada.png", "detailUrl": "/products/tubes/132" },
  { "id": 133, "brand": "Young Master", "name": "Young Master King Size Gray Long 200", "size": "King Size", "imageUrl": "/products/tubes/8df80010015243128942a59c022cd803.png", "detailUrl": "/products/tubes/133" },
  { "id": 134, "brand": "Young Master", "name": "Young Master Slim Size Gray Long 200", "size": "Slim Size", "imageUrl": "/products/tubes/57c5378be9c647fb858353b05700cd0e.png", "detailUrl": "/products/tubes/134" },
  { "id": 135, "brand": "Young Master", "name": "Young Master Ultra Slim Gray Long 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/1d4db45f044c4cbfb2de775bbfe2d020.png", "detailUrl": "/products/tubes/135" },
  { "id": 136, "brand": "Young Master", "name": "Young Master Ultra Slim Gray Long 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/d663daf6e5cc4451be133ed681e379d5.png", "detailUrl": "/products/tubes/136" },
  { "id": 137, "brand": "Young Master", "name": "Young Master Ultra Slim Gray Long 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/8ed34676938549b79959195e5884d5a2.png", "detailUrl": "/products/tubes/137" },
  { "id": 138, "brand": "Young Master", "name": "Young Master Micro Slim Gray Long 200", "size": "Micro Slim", "imageUrl": "/products/tubes/bb4aea532df24e86a435a5eb0702522e.png", "detailUrl": "/products/tubes/138" },
  { "id": 139, "brand": "Young Master", "name": "Young Master Micro Slim Gray Long 500", "size": "Micro Slim", "imageUrl": "/products/tubes/1a964c7918f94349adce482f46136c19.png", "detailUrl": "/products/tubes/139" },
  { "id": 140, "brand": "Young Master", "name": "Young Master King Size Brown 100", "size": "King Size", "imageUrl": "/products/tubes/274a2d4203aa4765a2728906d1a1e89f.png", "detailUrl": "/products/tubes/140" },
  { "id": 141, "brand": "Young Master", "name": "Young Master King Size Brown 200", "size": "King Size", "imageUrl": "/products/tubes/2ab83e3015ad4ea8bd5a29b994113964.png", "detailUrl": "/products/tubes/141" },
  { "id": 142, "brand": "Young Master", "name": "Young Master Slim Size Brown 200", "size": "Slim Size", "imageUrl": "/products/tubes/915c645c87544b1d8262d462b0fc3ce4.png", "detailUrl": "/products/tubes/142" },
  { "id": 143, "brand": "Young Master", "name": "Young Master Ultra Slim Brown 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/702e1b094cbe435e988cea06fdc084a0.png", "detailUrl": "/products/tubes/143" },
  { "id": 144, "brand": "Young Master", "name": "Young Master Ultra Slim Brown 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/0a78c8d0f08d4b438a6221d86aa06a70.png", "detailUrl": "/products/tubes/144" },
  { "id": 145, "brand": "Young Master", "name": "Young Master Ultra Slim Brown 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/d8ad5f4b39ea4a5a8777a3f1b50fcbd7.png", "detailUrl": "/products/tubes/145" },
  { "id": 146, "brand": "Young Master", "name": "Young Master Micro Slim Brown 200", "size": "Micro Slim", "imageUrl": "/products/tubes/0cc4e82656204678b2caf8000f7b139c.png", "detailUrl": "/products/tubes/146" },
  { "id": 147, "brand": "Young Master", "name": "Young Master Micro Slim Brown 500", "size": "Micro Slim", "imageUrl": "/products/tubes/bb19b334eeee4a809128eac2b4040127.png", "detailUrl": "/products/tubes/147" },
  { "id": 148, "brand": "Young Master", "name": "Young Master King Size Black Carbon 100", "size": "King Size", "imageUrl": "/products/tubes/5dc21825222d4abe930740c29ceee695.png", "detailUrl": "/products/tubes/148" },
  { "id": 149, "brand": "Young Master", "name": "Young Master King Size Black Carbon 200", "size": "King Size", "imageUrl": "/products/tubes/ed68b0214eff4038915bfadb54ad49e4.png", "detailUrl": "/products/tubes/149" },
  { "id": 150, "brand": "Young Master", "name": "Young Master King Size Gray 100", "size": "King Size", "imageUrl": "/products/tubes/260b03b2f50049dda5d7380c08ec2caf.png", "detailUrl": "/products/tubes/150" },
  { "id": 151, "brand": "Young Master", "name": "Young Master King Size Gray 200", "size": "King Size", "imageUrl": "/products/tubes/310ac119e4324f31b38e70e91ba941eb.png", "detailUrl": "/products/tubes/151" },
  { "id": 152, "brand": "Young Master", "name": "Young Master Slim Size Gray 200", "size": "Slim Size", "imageUrl": "/products/tubes/82033ef92ecc4728b78970a279bc3a2b.png", "detailUrl": "/products/tubes/152" },
  { "id": 153, "brand": "Young Master", "name": "Young Master Ultra Slim Gray 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/3babd0fb3c654c35b78b06fe110d66c2.png", "detailUrl": "/products/tubes/153" },
  { "id": 154, "brand": "Young Master", "name": "Young Master Ultra Slim Gray 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/480e532775554305a70bf5269fb14746.png", "detailUrl": "/products/tubes/154" },
  { "id": 155, "brand": "Young Master", "name": "Young Master Ultra Slim Gray 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/57fa3cc7692447878171ab6c3980ed17.png", "detailUrl": "/products/tubes/155" },
  { "id": 156, "brand": "Young Master", "name": "Young Master Micro Slim Gray 200", "size": "Micro Slim", "imageUrl": "/products/tubes/7e67692b81c844b3aa03e8a0d326a3c5.png", "detailUrl": "/products/tubes/156" },
  { "id": 157, "brand": "Young Master", "name": "Young Master Micro Slim Gray 500", "size": "Micro Slim", "imageUrl": "/products/tubes/7cac9540117c44169e4cdc1e555c5e08.png", "detailUrl": "/products/tubes/157" },
  { "id": 158, "brand": "Young Master", "name": "Young Master King Size Red 100", "size": "King Size", "imageUrl": "/products/tubes/43f4a749c89b4611bf57087ccdcbef4b.png", "detailUrl": "/products/tubes/158" },
  { "id": 159, "brand": "Young Master", "name": "Young Master King Size Blue 100", "size": "King Size", "imageUrl": "/products/tubes/1c74b56f568a458c95e67459c3ca6c57.png", "detailUrl": "/products/tubes/159" },
  { "id": 160, "brand": "Young Master", "name": "Young Master King Size Red 200", "size": "King Size", "imageUrl": "/products/tubes/a5d6a4fc61e440fb8d57c26c09956a5f.png", "detailUrl": "/products/tubes/160" },
  { "id": 161, "brand": "Young Master", "name": "Young Master King Size Blue 200", "size": "King Size", "imageUrl": "/products/tubes/d327b03019e14b34b53912372b819664.png", "detailUrl": "/products/tubes/161" },
  { "id": 162, "brand": "Young Master", "name": "Young Master Slim Size Red 200", "size": "Slim Size", "imageUrl": "/products/tubes/e795727d0924418bafc60596e5ccbe58.png", "detailUrl": "/products/tubes/162" },
  { "id": 163, "brand": "Young Master", "name": "Young Master Slim Size Blue 200", "size": "Slim Size", "imageUrl": "/products/tubes/51317f9d5cae44829f34cc5ecffcec9e.png", "detailUrl": "/products/tubes/163" },
  { "id": 164, "brand": "Young Master", "name": "Young Master Ultra Slim Red 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/7a598c895f224960bd398fa0173a6f56.png", "detailUrl": "/products/tubes/164" },
  { "id": 165, "brand": "Young Master", "name": "Young Master Ultra Slim Blue 100", "size": "Ultra Slim", "imageUrl": "/products/tubes/b8b970f2d45247b9a50b15e5a121a69b.png", "detailUrl": "/products/tubes/165" },
  { "id": 166, "brand": "Young Master", "name": "Young Master Ultra Slim Red 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/45b5643f5b384eefa79f9d2dd7e73ad3.png", "detailUrl": "/products/tubes/166" },
  { "id": 167, "brand": "Young Master", "name": "Young Master Ultra Slim Blue 200", "size": "Ultra Slim", "imageUrl": "/products/tubes/0b9296f322d547488dea09e54cd320ae.png", "detailUrl": "/products/tubes/167" },
  { "id": 168, "brand": "Young Master", "name": "Young Master Ultra Slim Red 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/2b29361f2f1446af86a0ec5cd399995b.png", "detailUrl": "/products/tubes/168" },
  { "id": 169, "brand": "Young Master", "name": "Young Master Ultra Slim Blue 500", "size": "Ultra Slim", "imageUrl": "/products/tubes/d7eea0e4798d4ea19157ebafb27604f9.png", "detailUrl": "/products/tubes/169" },
  { "id": 170, "brand": "Young Master", "name": "Young Master Micro Slim Red 200", "size": "Micro Slim", "imageUrl": "/products/tubes/849481aba49543feb240acea81fc56cf.png", "detailUrl": "/products/tubes/170" },
  { "id": 171, "brand": "Young Master", "name": "Young Master Micro Slim Blue 200", "size": "Micro Slim", "imageUrl": "/products/tubes/6e41f27f250349e98ddc509e66f9a4eb.png", "detailUrl": "/products/tubes/171" },
  { "id": 172, "brand": "Young Master", "name": "Young Master Micro Slim Red 500", "size": "Micro Slim", "imageUrl": "/products/tubes/9d9fb6bb041f43d2b01045fe744fbdd3.png", "detailUrl": "/products/tubes/172" },
  { "id": 173, "brand": "Young Master", "name": "Young Master Micro Slim Blue 500", "size": "Micro Slim", "imageUrl": "/products/tubes/73ef57fc3369477e9da1167d70172118.png", "detailUrl": "/products/tubes/173" },

];

// --- 3. Static Filter Options (UPDATED) ---
// These arrays are based on the HTML you provided.
const filterBrands = [
    { value: 'all', label: '- Brand -' },
    { value: 'CRP', label: 'CRP' },
    { value: 'CRT', label: 'CRT' },
    { value: 'IMPRT', label: 'IMPRT' },
    { value: 'Sir Badger', label: 'Sir Badger' },
    { value: 'The Saint', label: 'The Saint' },
    { value: 'Watson', label: 'Watson' },
    { value: 'Young Master', label: 'Young Master' },
];

const filterSizes = [
    { value: 'all', label: '- Size -' },
    { value: 'Micro Slim', label: 'Micro Slim' },
    { value: 'Ultra Slim', label: 'Ultra Slim' },
    { value: 'Slim Size', label: 'Slim Size' },
    { value: 'King Size', label: 'King Size' },
];

export default function TubesPage() {
  const [tempBrand, setTempBrand] = useState('all');
  const [tempSize, setTempSize] = useState('all');
  const [appliedBrand, setAppliedBrand] = useState('all');
  const [appliedSize, setAppliedSize] = useState('all');
  
  const filteredProducts = useMemo(() => {
    return allTubeProducts.filter(product => {
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
        
        {/* --- Filter Controls using your static options --- */}
        <div className={styles.filterContainer}>
          {/* Brand Select */}
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

          {/* Size Select */}
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
              Filter
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
      <Footer />
    </section>
    
  );
}