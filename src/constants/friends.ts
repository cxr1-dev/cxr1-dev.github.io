import type { Friend } from "../types/friend";

// 导入头像
import maodeAvatar from '../assets/images/friends/maode.jpg';
import binaryTreeAvatar from '../assets/images/friends/2x.jpg';
import rukaaxAvatar from '../assets/images/friends/rukaax.jpg';

export const friends: Friend[] = [
  {
    name: "Maode的个人网站",
    link: "https://maode.top",
    avatar: maodeAvatar.src,
    description: "一位厉害的人。"
  },
  {
    name: "二叉树树的博客",
    link: "https://2x.nz",
    avatar: binaryTreeAvatar.src,
    description: "博客的灵感来源"
  },
  {
    name: "Rukaax",
    link: "https://rukaax.top",
    avatar: rukaaxAvatar.src,
    description: "好朋友，工作室的运维说是"
  }
];
