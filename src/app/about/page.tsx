import type { NextPage } from "next";
import React from "react";

const About: NextPage = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center h-screen">
      <h1 className="font-heading text-center text-4xl sm:text-5xl md:text-7xl duration-500">
        ABOUT
      </h1>
      <h2 className="font-body text-center font-bold pt-2 text-base sm:text-xl md:text-2xl duration-500 sm:pt-4">
        フロントエンドエンジニア
      </h2>
      <div className="font-body w-10/12 mt-7 md:mt-9 text-xs duration-500 max-w-4xl sm:mt-9 sm:text-sm md:text-base lg:text-lg">
        <p className="leading-7">
          1999年生まれ、広島在住のフロントエンドエンジニア。2022年9月より、フロントエンドエンジニアとしての活動を開始。その後、2023年に現在の会社に入社。
        </p>
        <h3 className="text-xl py-4 font-extrabold third-heading flex items-center sm:py-6 md:text-2xl lg:text-3xl lg:py-7">
          主な業務内容
        </h3>
        <ul className="leading-7 list-disc list-inside md:leading-9">
          <li>WordPressサイトの制作</li>
          <li>既存のWordPressサイトの管理、運用、保守</li>
          <li>カスタムフィールド等のカスタマイズ機能の実装</li>
          <li>WordPressサイトをNext.jsを使用してNetlifyへ移設</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
