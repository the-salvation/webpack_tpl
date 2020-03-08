import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/styles.css';
// import json from './assets/json';
import WebpackLogo from './assets/webpack-logo.png';
import './babel';
import xml from './assets/data.xml';
import csv from './assets/HOT.csv';
import './styles/styles.css';
// import './styles/less.less';
import './styles/scss.scss';

const post = new Post('WP post title', WebpackLogo)

$('pre').html(post.toString());
// console.log('hi', post.toString())
console.log('XML', xml)
console.log('CSV', csv)