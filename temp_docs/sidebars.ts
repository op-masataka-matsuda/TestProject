import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 基本設計書のサイドバー
  basicDesignSidebar: [
    'intro',
    {
      type: 'category',
      label: 'システム概要',
      items: ['system-overview/index'],
    },
    {
      type: 'category',
      label: '機能要件',
      items: ['functional-req/index'],
    },
    {
      type: 'category',
      label: '非機能要件',
      items: ['non-functional-req/index'],
    },
    {
      type: 'category',
      label: 'アーキテクチャ設計',
      items: ['architecture/index'],
    },
    {
      type: 'category',
      label: 'データベース設計',
      items: ['database/index'],
    },
  ],
};

export default sidebars;
