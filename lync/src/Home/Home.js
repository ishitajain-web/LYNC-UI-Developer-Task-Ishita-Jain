import React from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import Grid from './Assets/Grid.png';
import BackgroundHead from './Assets/BGPattern.png';
import RightArrow from './Assets/Arrow_alt_lright_alt.png';
import backedImg1 from './Assets/AxelarLogoFullWhite1.png';
import backedImg2 from './Assets/image 39.png';
import backedImg3 from './Assets/LongHashXWhite1.png';
import Line1 from './Assets/Line 250.png'
import Line2 from './Assets/Line 251.png';
import bg from './Assets/Background.png';
import Company from './Assets/Company.png';
import Asset from './Assets/Asset 1 1.png';
import Game from './Assets/game-RzeJqVj6NM.jpg';
import Image99 from './Assets/image 99.png';

const ProductData = [
    {
        cardTitle: 'LYNC Wallet SDK',
        cardInfo: "Empowering developers to integrate account abstraction in their game,dapp, metaverse and more inminutes.",
        cardImg: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQumdxAgWqxHG2VcvNqyNtOqCWKtgj5leqfh-KggMVVrcfw7V18"
    }, {
        cardTitle: 'LYNC Wallet SDK',
        cardInfo: "Empowering developers to integrate account abstraction in their game,dapp, metaverse and more inminutes.",
        cardImg: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQumdxAgWqxHG2VcvNqyNtOqCWKtgj5leqfh-KggMVVrcfw7V18"
    }, {
        cardTitle: 'LYNC Wallet SDK',
        cardInfo: "Empowering developers to integrate account abstraction in their game,dapp, metaverse and more inminutes.",
        cardImg: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQumdxAgWqxHG2VcvNqyNtOqCWKtgj5leqfh-KggMVVrcfw7V18"
    }, {
        cardTitle: 'LYNC Wallet SDK',
        cardInfo: "Empowering developers to integrate account abstraction in their game,dapp, metaverse and more inminutes.",
        cardImg: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQumdxAgWqxHG2VcvNqyNtOqCWKtgj5leqfh-KggMVVrcfw7V18"
    }, {
        cardTitle: 'LYNC Wallet SDK',
        cardInfo: "Empowering developers to integrate account abstraction in their game,dapp, metaverse and more inminutes.",
        cardImg: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQumdxAgWqxHG2VcvNqyNtOqCWKtgj5leqfh-KggMVVrcfw7V18"
    }, {
        cardTitle: 'LYNC Wallet SDK',
        cardInfo: "Empowering developers to integrate account abstraction in their game,dapp, metaverse and more inminutes.",
        cardImg: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQumdxAgWqxHG2VcvNqyNtOqCWKtgj5leqfh-KggMVVrcfw7V18"
    },
]

const chainData = [{
    img: "https://s3-alpha-sig.figma.com/img/05b2/7e70/22612ec04465be574573d8c129924042?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bcnhYiXGSBRL9qDEgY0HWn7D5ZdAPpGCo8upB8gBnsXNLOs3Lsd0l84ofov-vgC9K7zDUtM-9XYXNmUTm6cucRUHN-KprOmXwPraDk5E7wJhj9ojj~oGn56iOVZVK888yNDtfWlPBv3Ijdvvq0D0WHp0J2JvupN~38Qd9oVki2kX-f0JoW~AaaKQGrbzTpV0gXgUtJn8rG5Y-e8tdNCaXn3wuTWHw2EZzmLanZAGSa5YWuCcJuJT0MgUU6SgsZre1UwVrVOSfJLc4i7c1EjMdoB1zVo5WNYHIhqLsgnjGu6Mcj7ve9t7bKUEmArjpjEiZz0S6KXvyCOXqRF6hHGuDQ__",
},
{
    img: "https://s3-alpha-sig.figma.com/img/10e3/bd89/34c70fd14d6c8c56712cc8d392a6be45?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A6Qs1qjjxg4jtMpBNccPN-lu5MkHQnZTPx7kJy52iG9r3o0zN8f15yYcyAoGFA4Q2ZRhKC~d-O0r80VooOM0VZdcnskps3NaY2MSNDYyLww-1PoXEjI8pi~ygp4QCHUH9cAbDTROLOagDQfuIUm9vBB~4yiCBRXiPlLaQhZ2f4Lx8H5peN3l8VFvXg16iUTJPx3Qk1faHYI~9-Dwki9166UPtsEnUBGAlLmAPlujuUtolKBIb6huyVEGs1qjrMEJp8x15hwxm2K61zkwfu5RasgbknenFiPRHUhC15d8Q89SmSYoDcRC-J4hw3jFud91l850rTMxeELu~xZcHq79nA__",
},
{
    img: "https://s3-alpha-sig.figma.com/img/33eb/9619/fa7f0818a7086b6006e751b02f342aa2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oYPDria7opCdnaEiOzR1jdQ3EUI0qQTA7bkbX-ml4J2GoZM8JAf7Uy9mXJzKXAu0jof1hdZ0Wg7X5b1eDdZwkZILCq48~4CuIhAatVuNmFWl3tEIL1utSNU~TgWV-adW2bVfnX7qUuZjKk1piFyQMKbEzaAOndhEPlHW5a5zEP3Qg4ptUb8JwIGYE39j5gdWqzwZRBpwaXMayKsjLxHTTgUeXhZNKqzPR2eSElA6rhUFigDg9QF6M2ndNjosdIP3StDHm2Ti8YwIKU7Zuf3wjXEmEwXVYoOKS2~H33tlLSxyjzvesJt9K-DqNF5569fEZkubZG~L4wT22CQxWT9ogA__",
},
{
    img: "https://s3-alpha-sig.figma.com/img/5673/25c0/de4f9e6f9856507de5cebb373f08eb46?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWUJ3H5SW2a6xc6u9oSmyzQ9qstLVUxXBr6afJT6J0QE15fwSlKdf9iZ-JaIJYx~0x8Lqtcofzhvf6OUGbvkY7734nzTXqhn-W9uWdbLzCLNn~7cwt29E975ienTE0YGl1c331cJD0Wv7dM2K2MKEg65obayAWcxpEIXVweQUTIYJKMHo9mzFW2ULHDvMHL79KdlngiC~IJyxwGUqTVuk6aBEjv0udhAqgKWuywNGNJ9OIMb7dC6~3TUaG~a5TAlAV-SXZQCkxPfqM8ATTLKlErPcXDf7TuJmD9uPFLESy4HMXgTGh80HfVavM-wNuIrUUi3iXmWcqEUGNhJcqocKg__"
},
{
    img: "https://s3-alpha-sig.figma.com/img/2832/d688/ade51d824b8f49958b637caadde447a2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Di7DDrmbme6H75oRgWmQuHMXr5n1-SB6BKTowiEokKKlWUq3qXfjL7AaO61zYSloCaC3gGKxSwKBSNtZxof39Uhhm2-zl0TcdXkF50YsMjyoRMMPioPjh2MamY5XwG95dpuqOrQnW4OQb7HbIDeG9jwxtOh401wFjDbB7wXVhd5Vf4SwS3pWjFDiu58jxeuvJA6eNNKJY56T6oVktAV3HoW-XQv5JUyzY9g4lTrN67ZoJ4X9WTRM3Pm~OqFs~C9mq3UTyjKGxiO8c2M5todV6KWfitTJiqS~s-pdkD6Z1f9Es82xCCikm~zMI12a41yhgePq92zOl-tNYdWC0bQULQ__"
},
{
    img: "https://s3-alpha-sig.figma.com/img/ec76/ce3a/68c9260d69d979f7a0382fc4893a76c2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Miny0ENnjw1E2IoOkyPIYAgJM7n9pHj382k2T3fXH39mFpiP61XS9hSEuqwj1Cmr4E8y8S2N1Iyvgv7l6xxg6WjcCL4guADYEj4M6kg5zNyfpTQBUEmULtFUutf3wmaqU-o4XqCP~DWJxzmapM7wfi5weDNqfVf-kWfCmUSCoh6ps2IHo8SA3gGtinZeI8MZjSbXfhrclEKG11r20OmosqFmaD5NBGd5NLEW9SfUXaV7UJzVJg4ptaNYLhmuT1ufAOm9ROkk52O4-P7ysn1gB6kt3ca34H-nXUeCndOIPJ~AQpGPbU0aHY6AGocJDHYGQaA2ZYArI4B7oqQS2sKSnA__"
},
{
    img: "https://s3-alpha-sig.figma.com/img/910f/f9e2/c02d6980cc9cb0c1c61800211cd48aa2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lNZHuocs2MTpDC3065IzrO5Il5xFpewkms5A7rlzRpuKUv8yJm1AD4UX0kAZEG~x2pxCMX7XhAsWiqsSJ41RhYODnEJ~Lg4OicGOI6G5UEorN8DIscb1uXgJOwqYuvRHs764QvOCqg5K-fgHkiLoYztqiNiZTzuXzpWyBHLo6B-UP3uKXrt5VbYpxMR8Uaup2O5BS02W0Xm5L5NPLTzb9rBrUv4CKl5A6thPdhSzjvDp82wkTp5USiB6eUtPDyXCG3h6DaOb~0JOJW8TxKFv3CaFsnLfBiDFgMw4HkiH4V4UiAb~94ecthcsdX6IUfnq45rcrmB~27Madnmo0ow69A__"
}, {
    img: "https://s3-alpha-sig.figma.com/img/05b2/7e70/22612ec04465be574573d8c129924042?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bcnhYiXGSBRL9qDEgY0HWn7D5ZdAPpGCo8upB8gBnsXNLOs3Lsd0l84ofov-vgC9K7zDUtM-9XYXNmUTm6cucRUHN-KprOmXwPraDk5E7wJhj9ojj~oGn56iOVZVK888yNDtfWlPBv3Ijdvvq0D0WHp0J2JvupN~38Qd9oVki2kX-f0JoW~AaaKQGrbzTpV0gXgUtJn8rG5Y-e8tdNCaXn3wuTWHw2EZzmLanZAGSa5YWuCcJuJT0MgUU6SgsZre1UwVrVOSfJLc4i7c1EjMdoB1zVo5WNYHIhqLsgnjGu6Mcj7ve9t7bKUEmArjpjEiZz0S6KXvyCOXqRF6hHGuDQ__",
},
]

const blogData = [
    {
        img: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QN2h1CPVjL~lGAh5rxwHJ5Sqkbc9TmxUonKUHKVHMfuWR8K9iTZzR-WthCxKiXit13SVqv1xaVYFuZpDgA95TZo7VnNtvWXuE-h3LHYpUe9Or8ueYBtGZcmdI-VDB6SNHUZHX3K0A9Iwm9nh35o7oHXiCy53opgTdSUq2upFuLoZVTNjiuf8bP4tMDwpPQr1pMcV1VtcIjS-csfLeJbnevcicb6u2qa5fo8AbaOG99php~sMaDxRSUp-cZX37vH7nBaoOtjltH7gwydGTLEVMHRNRI-t2c2j54u7BpPq-kdK7WhAlVHYIBTfW8VH96GGfbh2OrCCJpuh89bIjeDBbQ__",
        blogTitle: "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
        blogInfo: "LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.",
        btnText: "Read More"
    }, {
        img: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QN2h1CPVjL~lGAh5rxwHJ5Sqkbc9TmxUonKUHKVHMfuWR8K9iTZzR-WthCxKiXit13SVqv1xaVYFuZpDgA95TZo7VnNtvWXuE-h3LHYpUe9Or8ueYBtGZcmdI-VDB6SNHUZHX3K0A9Iwm9nh35o7oHXiCy53opgTdSUq2upFuLoZVTNjiuf8bP4tMDwpPQr1pMcV1VtcIjS-csfLeJbnevcicb6u2qa5fo8AbaOG99php~sMaDxRSUp-cZX37vH7nBaoOtjltH7gwydGTLEVMHRNRI-t2c2j54u7BpPq-kdK7WhAlVHYIBTfW8VH96GGfbh2OrCCJpuh89bIjeDBbQ__",
        blogTitle: "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
        blogInfo: "LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.",
        btnText: "Read More"
    }, {
        img: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QN2h1CPVjL~lGAh5rxwHJ5Sqkbc9TmxUonKUHKVHMfuWR8K9iTZzR-WthCxKiXit13SVqv1xaVYFuZpDgA95TZo7VnNtvWXuE-h3LHYpUe9Or8ueYBtGZcmdI-VDB6SNHUZHX3K0A9Iwm9nh35o7oHXiCy53opgTdSUq2upFuLoZVTNjiuf8bP4tMDwpPQr1pMcV1VtcIjS-csfLeJbnevcicb6u2qa5fo8AbaOG99php~sMaDxRSUp-cZX37vH7nBaoOtjltH7gwydGTLEVMHRNRI-t2c2j54u7BpPq-kdK7WhAlVHYIBTfW8VH96GGfbh2OrCCJpuh89bIjeDBbQ__",
        blogTitle: "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
        blogInfo: "LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.",
        btnText: "Read More"
    },
    // {
    //     img: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QN2h1CPVjL~lGAh5rxwHJ5Sqkbc9TmxUonKUHKVHMfuWR8K9iTZzR-WthCxKiXit13SVqv1xaVYFuZpDgA95TZo7VnNtvWXuE-h3LHYpUe9Or8ueYBtGZcmdI-VDB6SNHUZHX3K0A9Iwm9nh35o7oHXiCy53opgTdSUq2upFuLoZVTNjiuf8bP4tMDwpPQr1pMcV1VtcIjS-csfLeJbnevcicb6u2qa5fo8AbaOG99php~sMaDxRSUp-cZX37vH7nBaoOtjltH7gwydGTLEVMHRNRI-t2c2j54u7BpPq-kdK7WhAlVHYIBTfW8VH96GGfbh2OrCCJpuh89bIjeDBbQ__",
    //     blogTitle: "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    //     blogInfo : "LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.",
    //     btnText : "Read More"
    // },
]

const review = [
    {
        review: "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
        reviewerName: "Alex George",
        reviewweDetail: "CEO, Polygon"
    }, {
        review: "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
        reviewerName: "Alex George",
        reviewweDetail: "CEO, Polygon"
    }, {
        review: "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
        reviewerName: "Alex George",
        reviewweDetail: "CEO, Polygon"
    },
]

const believer = [
    {
        img: "https://s3-alpha-sig.figma.com/img/dbdc/7e9a/bfcd02ad161d771b33c514344895a2c0?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Am5a7jwuV1EIwW83fpFkLVZrpzq58XlD6~gGor8gmTZsogQws1dT2PnHkqfsmbHA0lwl~Inq~c9kE1BBEUOUg5DPQYQ8~VQmTcQCrNiNyNHNTGAzt6~1rgl2UsZf9T5cc0-K0yaNU5YOZQ6GGY0rm6YW67cai0GHYaOMAksvskUvZMaKZLS1-gifL0YJ60~FruawpUaWidU7oUY5JBiUcyC~zJR7rUaJxyy-NnFTBczcv2BdKNYTQPFbngMho-CGV0sQ6Yb1gtjDCheHPGKf8zwQMDkP~vkt4yFxb9~1htPzP2~D1OrTSuT2L4vQ9Jk~YfrNbGVskO4nEYXNosv93g__"
    }, {
        img: "https://s3-alpha-sig.figma.com/img/ae78/38b8/871df777e93df73a5eca0771db48737f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SVaoU0bNulY0-i1w7g8G~BQtOtOGkCbE-dUPJytQH-GIRqrQr3tCTjJXHLx06ot3JFLSkqJ7LGl1d83tC0DPwfwecQ8LR5LEUS7TWIm7NS8VTYQk-PbH4zXQ91zVn~ES-zHu27iieP6qbwBvzuz~dBZQhoq-VUtmzy9fVdNMkHKZI7OsP3yx4SbAwKrqDE45hrONKrBxwDEo3rrrJyCuaR1kkhaZs3HQjfQIhpdNHFMnYYAg9vmQ85Ed8GNfJEKIxu4vKeOgKZJT~mUizGT6sU1WMA4OOOhImB0S2CJ1QrVhDc3sovccwzxp4Aosw7YqnEhY2CQiKhKVOIdq5EKJOQ__"
    }, {
        img: "https://s3-alpha-sig.figma.com/img/28cc/1bac/9c4b1085b4ee2317b5bdfdc01efe136b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFsj13OdPhXzJ5tGqtYAdBx07fjXZ5bJZ1MG-mAvTHqBZNUgJNB5I0h4Hsg3ZRTJhij0SvOow5gx5STC-3BJ~eY-RzUpPGGYMnTHh5UJzaHWmsNykj~yZNlm-9aysJLxVWr93eD~yhoJf4KGUpQcKihSf921gjryfrOg9Z02sN2vvBWvLYmb2dHveAYw6Ykr74A32CI1~ZPLQ8zQznZHLY1kTvoQSIWS6frUD8Ut9u8A6E4YiNrgAGuMmp4PKI9vt1mLxv9DAwdA~ssC1JWWoAVB7-He5dV3cKk-e0uMglh3OcgAUkWX66-0y~2qJFLgYk94bxBmPgNMzIA45sczrg__"
    }, {
        img: "https://s3-alpha-sig.figma.com/img/d0f1/fa05/c75ea6b22b9e8845470e5ddc2392aef9?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxRwWn1SayajmULMzSirTY7NDcjGzSq1SOXJp3d9jh5rILaG~m3lk2JzSSOrxIq2Htc9OwsVGgR51C6dlrLCew2mf5-o6lAPYbqM4c-Sj5ZvAe9INOPQrBD1oyOPlDM9UGaaEqDO1zwuJSZ9A~bV7ru9HwgW4iYMV8abI2vhsdlkBE5v1LSBbPOEggnMbiBhN2RugsKw8r7ShLjCKYoIwZD3hEKsx7tqLLNTu05lu9~4aIlwcA02BW~cKhSqsfT~9ReMSMpqd1gQFP54Sc-K3uzxMMW3kJzVMvl1qDtKYxCTNVKcWQC2kRmLPa-5TFDpgTvulCU4k0MsgomkPXL9VA__"
    }, {
        img: "https://s3-alpha-sig.figma.com/img/6d02/42bc/cb12b63990c168a2947fb279265e41a9?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nY8bBR3I-e-bQ03zd2wLP6gQW7AtvelI8F4QVUt-d3eToiOFgQ6A4HP7vOKJOI05OrKQCkguoOlBvVz5-~-wiC58Yx6SYQw66xlxn8SPk4YRHWFe48IFLMqBiPPFvxfOGidSxanFfDuQqmqTEhWQXIR9GYUx3Q7dr5bfR39jz842qs2S-Cal6R32F7-2bn-QMqb5HrDfsWZfbbYD1BGTTcmaQAstCa0fXGFu7LHw~EZG32SrvBp3wkEeA4TGRkiRY45zAsganF-g-SDtXNNSoic9kQNHUVIBlDsQJBWRbDiOFDNV4pK5yT3zM1R0j5NAgwkf7kdp6hTfbxsqm7VZSA__"
    }, {
        img: "https://s3-alpha-sig.figma.com/img/cc00/c22a/7a1f2c315ede4dafc1e75d85610d6de9?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9fKt7THwrP2m1aXDQUMx7GaW~NGad3zpX47JFOfnBcIgjEIsftoD8jQdw0KS80yqrJr71dBRf821uis16SN~-SbW49OwyfckWfC4VQNPQbMrrj1CU9tiFQ~rw428xUO56gKLmFKOAYsGZLfMw5QaDvOVuBKERgma0AfP7C0ZAJO0UGrqNKJ5IRwCIFX~~zuAKVfen5~fxLOuR2hZ2uOqsWTNQ-sS3MHW~BOSzoCFMh0cSvQS5t5FrGjXPIaTlxFTTBWZzTbUYfLzKU6ZJotSag3WWQFRrF1Cl072c4DYt-Xf3Q312Xe8Fpg-T834CEHjHECpMUDGYX04JwVms3yXQ__"
    }, {
        img: "https://s3-alpha-sig.figma.com/img/28cc/1bac/9c4b1085b4ee2317b5bdfdc01efe136b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFsj13OdPhXzJ5tGqtYAdBx07fjXZ5bJZ1MG-mAvTHqBZNUgJNB5I0h4Hsg3ZRTJhij0SvOow5gx5STC-3BJ~eY-RzUpPGGYMnTHh5UJzaHWmsNykj~yZNlm-9aysJLxVWr93eD~yhoJf4KGUpQcKihSf921gjryfrOg9Z02sN2vvBWvLYmb2dHveAYw6Ykr74A32CI1~ZPLQ8zQznZHLY1kTvoQSIWS6frUD8Ut9u8A6E4YiNrgAGuMmp4PKI9vt1mLxv9DAwdA~ssC1JWWoAVB7-He5dV3cKk-e0uMglh3OcgAUkWX66-0y~2qJFLgYk94bxBmPgNMzIA45sczrg__"
    }, {
        img: "https://s3-alpha-sig.figma.com/img/f773/e7cb/2a5b181e33c8a3dbfc6485db0af345a8?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c6jUN47nZQ89u7pFeWMLNC34~~RJ~gw5iXPeO3BIsIaR3vszAXm6txP7y8-H7jZc1Ma2Mtq5lED7-QJRige5i54YQVi3IfMDFBt-CU7vWLxowawPM0~biew2lLPQshdvQkSAdvn~1qDdekeq12q4WYxJ7FkkW9mgNMq7IiXMHcQS3Nfj0Hvj5PpGMASDtkuKBQagHDpauwPKwRxqsRdntrIf2Sy1HR9AwrABMBAAOwyp1Lk~CYdQmw9HtOVBDHz7c31qRvIrf4HqVuKb-bRxLfeOZErQgnvGSAx8dHR~3yrcCjCo0WVXiaQv2ilHq24-B~eqBZq8FDbonZSBQJYqIw__"
    }
]

const company = [
    { img: "https://s3-alpha-sig.figma.com/img/059a/1bab/95069ff79460ce17b682d17ff6441f63?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPUU1b4s1Z89Pz01zNmhyNvB2veqBDbj4nu8hj2OeMyLZdnIdqNoMqEjXpt8LXQjeTcjECNt9ZejYmJ3Hhf7k~0Le2iAB3cts5uZHQeePTyDhdVYCSimLtrhMuQ7lCh6ZraCS-wAFhoZbvg0DRPV66I4WzxSfnk1o87lQeU6SCdRityGKpO~7Jp9ndv7PgqrByT75Dl2r4p3E~RkLLGMHN0NdeHQEnuvLvOycuvrFacOP07Ae552fkPoSSuR70M75Z7LlPmNR4kdGs-vilI746gQ2XCqRl~aMks-UZd3mNxD3LlmN5b0TO45IHLh8M3jmxXDUpXYQhIuQh1zIKyxdA__" },
    { img: "https://s3-alpha-sig.figma.com/img/d938/94a6/7755df241cad30aef5f2436f2c892fef?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PA4xQD6hjJTiNi3y2P18v8ufn5Yha2zYvhLvBUWuEUKpHzyG2UV6jfNRG6gYTZqJ2rgh0rR2sfY-iRS3cBXUD8DhjUiJysqxBvtDfOWUvfP1m-A5MjebAId3LUCPQrrf4rhr~YdOScyVt04Tb1P7-3CimMhh71kDBw~wNIcIvdpfxjM45-2RnY00mLIxFCLkZ9M3pvWP6qQxe8S8EsvxiMtBCG3FMnQgCgkob5wB~jlJFbBakSdG-8T4X2ZcBfYE~kwohsKlTM1VJtDeE~v9iAe65oNrUd4cNgBPjX-R66br6PvFHWzJtXrppRdBhMio5D6xWF-B5u~9Ghv1SAFM0w__" },
    { img: "https://s3-alpha-sig.figma.com/img/4766/3b0d/e9e5f25ae0b914f94a4ef63fb376f963?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VpRtnhHnOX6ZThOqLlqK7l62iXLIV0z4ypVren4eDw1tMjjKSESG4KnVBFWN3p9ySk0JajC0ErCuBxr9ROu1ZJGJLYQYvnRFAVaNi06kCAg82vshEFb1Mp-volLkTMX5NQEKuLWMng2Mx~86iDZ7go8NoAmorTd0k9XeR1adlrvot5oJZaLmj2lnZ90HvvP1SsRTbGeUxeIaxG7VUaMqo7StB7ES6~8Hhfw-dbXS4tpmWygg15j-1QKq0Hd2TFnnTZhFmtpWek27lCn--8m9YaEBywdNIRTBn5ZsM95dARhh2GX-q1JpH749x-bZ0cM3S5HakHi4fx4Y7CEiItC1oA__" },
    { img: "https://s3-alpha-sig.figma.com/img/55fd/3e6c/8e66289529064e96b51f3dc7b63dd6dc?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2heWjqsG2QRBhMym7BOA1E~6CTeMkjoaludgp9yPDg5UAU-0pipIdXvnzsd5hfuaAtoXL~q4T3rqJFimK5MPEp0POpH9VCBwHQnnzdqGAkt13m9l97yD9ClrHAk4~u4iyi0cT4HB0GLDasSpYINfd-c6GIwJ4QKt0K4igD6eIqPoIvKQgwJmq~74sDzK70ADn5n1ugF1SkG9T8jMUmuHJSBhS~d12HSSn8H0KsCwHIUAzQorAjc73xZFEUoOfZlk2peszeI7uxx3KCQ6b6vCRy1qyR9fgWZFFBeaIE3--Dzvi6RqpMcRi~zw~nBbRg03SKEHRNZHkbUdO7wL5vF5A__" },
    { img: "https://s3-alpha-sig.figma.com/img/e747/a045/d39b1dd0d53b736ed27f3f600377836a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ATQxHJ5bYsehGPmL~Bkl4JowFd224yfeuXq9AiOyksz9~E0ilopxujdj8jeaISydnBokjygDbkXhQ3o3CTuTPkgebZfdHC5rSYPTdxGz60qSewHAEs8jrlsavr~YrBtMbXdy13R5hGO97GGX3rfo-sSVubNiF8-qPeTHO0BeftPUip-JPU58qfb39304IH24qw-sBMnRpEQTbbIJowjDADIMuXsNwNA4yRvNBCT~bwY~9lSAYhGuuQZP1spbPmpIRejtYROHnCkYOes0gboysPNC3Ie3PgnVA5QfXShYSpkjsFttPGv6d-HCdgkWNKHSlXLS2dhUmRLQyJj0AR83JQ__" }
]

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
      };

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='home'>
            {/* <img alt=""className='bgGrid' src={Grid} alt="grid" width="100%" height="100%" /> */}
            <div className='mainContent'>
                <nav className='navBar'>
                    {/* <div> */}
                    <div onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" style={{ fill: '#fffff' }} className='hamburger'>
                            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                        </svg>
                    </div>
                    {isOpen && (
                        <div className="menu">
                            <button className="close-button" onClick={closeMenu}>X</button>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>
                    )}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEUHBwf///8AAADQ0NCPj48KCgrg4ODExMQFBQXt7e09PT0ODg7n5+dUVFT8/Pz39/ezs7OEhIRKSkpnZ2fr6+uTk5MWFhZbW1uenp47OztCQkJxcXGlpaV8fHyQkJBoaGjX19cpKSkfHx8xMTFYWFi5ubl3d3dNTU00NDSampqtfEqLAAAEUUlEQVR4nO3b23aiMBQGYLM1iAXBw4Dnqdp22r7/C86OoiIlYTMzXUNc/3fRi7bpKj/JTiKk1wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPRX/XXGvzNaSzf/EP/X/a9n1t/dH9r+nIhLGeb35t5utzLlrSssPISot6EPeQ8TZI1Fmy386Iwu/+p78XzfvDehnppvvNXYko+6HuxQPO0+eeQpmyyShyX5rmTpYlNS3TqdeVhX7aIknUjpwlRWuaVfvIRfDicSj2TNgzWSuwSYsGjrYbf8eP47p4VLxaQ+E5nCaOSMzQ057WWue9VmpGtvVLRG+qrpbcLH2dgBoySbgu1N7unLbOhqabTT2tKQ2ZqDSvX6fQpiESY+wYeh3WlIn6UbvYoDxpGDnGyM8puTETFddVBeoLuolSkwfNRO2rF8YLk4WglxgrH0MRZKKGlZ7Cu769KBHT1MNViiQTMwTKVxaG78JIlDp4OB+LMlHb+wmkYbVWlnk4eGSZqJ93l0YjcSbB42bC+8FbT6G1OBKlcv9CkWZS3g+K2xjzh80kMYvSaxt5OTG7nv95eX+kxT2fXaYQ4YLt7O2hM0kPxfChoEUmw4fORI2Ketli2lGq/9iZ8H7wNHqQSdn6dIHIBJm4PSETZIJMCsjkK2TyFTL5Cpl85XxebMtkiExuio/h22wCfcxk2iaTQ5EJxcJnGX5msmiTyfUTlEhcUnzMpM1nq+nto7ZjKuwpPmZC0kGg7p4I0krYxsNMWtXL7e36NI1VIonTy0ya3iMpWZQy0TQXtfEyk5k4kvTuOaemX4+aSY/nVaHKmxNatAa+ZaKj0Lyh3PjWbQfwCkVYZp8qmUS0bJUJB3JY5URh10PRPUplkQwrr8vy/RY8/bpmEtLhtCeIdx68aiCrC2YRW72/WrD1KTLhTvWs+u9Ex4y/1fn33ELZc726tyZ49mlqe+knXMuzfDoYzHm5N+x8JrwoFRSUfW0ZiKhpfXPNJB5yTQ5i/sa69Oy5qzQ1vXeUqJGtCFDDvFVkwt1kRdOU6IlXOf3uP0SOmpcayYflOA+XlMhZoy+ZTBM6ZTLm6Wsw6nwmpiy4Q0lXtiMa5pjXiyuUSybLmDNRwYg3CLRLu5+JCeXVUVPioymK1rro3A9e+4niTJLNVlFImQf95DQEcusMMmk4txW56tElkw8urGbsjPiv7btfT4yIp+Rd7RgI3jkR19FAXqzz2qMhkx7t96eaMlf5onju7APi4le9pP2z5HCfpl0c1IqLTZKmF+5vR17eH9fJpPvrkxuixaQ0tQbLJ9GSszhPazl+evoV3v69q9F0fZi/Ka8iOZ+dzl8Hn8vl53TdOx8WluxOQl37a2F0OaXMPyfacjdM+mPrOamuCnvVW/xXf6007sy+OMw9Pqz+Tb3b1+NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPA4fgN5/DA3V9Yn6wAAAABJRU5ErkJggg=="
                        width={50}
                        alt="logo" />
                    {/* </div> */}
                    <div className='navFlex'>
                        <a href='/home' className='navBtn'>
                            <p >Home</p>
                        </a>
                        <a href='/Documentation' className='navBtn'>
                            <p >Documentation</p>
                        </a>
                        <a href='/Blog' className='navBtn'>
                            <p >Blog</p>
                        </a>
                        <a href='/LYNC-Portal' className='navBtn'>
                            <p >LYNC Portal</p>
                        </a>
                        <a href='/Request Demo' className='navBtn'>
                            <p>Request Demo</p>
                        </a>
                    </div>
                    <button className='primaryBtn'>Get Started</button>
                </nav>
                <div className='heading'>
                    <div>
                        <img alt=""className='BackgroundHead'
                            src={BackgroundHead}
                        />
                        <div className='head'>
                            <div>
                                <h1 className='mainHeading'>Launch your game </h1>
                                <h1 className=' mainHeading2'>on <span className='pinkText'>web 3.0</span>  in minutes</h1>

                                <p className='subHeading'>We help game developers to launch their game on Web 3.0, by keeping blockchain complexities aside with WebWorld SDKs!</p>
                            </div>


                        </div>
                        <div className='btnFlex'>
                            <button className='secBtn' width='24px'>Get Started
                                <img alt=""className='rightArrow' src={RightArrow} />
                            </button>
                            <div className='btnFlex2'>
                                <div className='tertiaryBtn'>
                                    view Docs
                                </div>
                                <img alt=""src={RightArrow} width='24px' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='backedBy' >
                    <p>Backed by</p>
                    <div className='backdBox'>
                        <img alt=""src={backedImg1} />
                        <img alt=""src={backedImg2} />
                        <img alt=""src={backedImg3} />

                    </div>
                </div>
                <div className='provides'>
                    <img alt=""style={{ width: '100%' }} src={Line1} className='line1' />
                    <p className='provideText'>LYNC provides a scalable infrastructure for launching web3 games, without hampering the <span className='blueText'> gaming experience.</span><br />So that you can deliver the next big hit!</p>
                    <img alt=""style={{ width: '100%' }} src={Line2} className='line2' />
                </div>
                <div className='blockchain'>
                    <div>
                        {/* <img alt=""className='bgImg' src={bg} /> */}
                        <div className='box'>
                            <p className='blockchainText'>Making blockchain gaming<p className='blueText'>accessible to everyone!</p>
                            </p>
                            <div className='blockFlex'>
                                {company.map((item) => (<>

                                    <img alt=""width={180} style={{maxHeight: "100%"}}
                                        src={item.img}></img>
                                </>))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='powerUp'>
                    <div className='powerUpText'>Power Up Your Web3 Game <span>Development, With  <span className='blueText'>LYNC SDKs</span>  </span>
                        <p className='powerSubText'>LYNC SDKs can be easily integrated into game engines like Unity 3D and Unreal Engine in a few clicks.</p>
                        <div className='powerBox'>
                            <div className='powerFlex'>
                                <p >Don't Worry about the<span className='pinkText'>Web3</span>  Complexities</p>
                                <ul>
                                    <li className='text'>Save 9-12 months of development time</li>
                                    <li className='text'> Focus completely on Game Dev and Mechanics </li>
                                    <li className='text'>Save Up to $500K+ on Salaries & Smart Contract Auditing</li>
                                    <li className='text'>Go Cross-Chain in a few clicks</li>
                                </ul>
                                <img alt=""className='assetImg' src={Asset} />
                            </div>
                        </div>
                    </div>
                    {/* <img alt=""className='bgImg' src={bg} /> */}
                </div>
                <div className='gamePlay'>
                    <div className='playBox'>
                        <div>
                            <p className='text'>Elevate Your Gameplay<br /> with Essential Insights!</p>
                            <p className='subText'>Unleash Your Potential - Explore<br /> the Knowledge Hub Today!</p>
                            <button className='primaryBtn'>View Docs</button>
                        </div>
                        <img alt=""className='playImg' src={Game} />
                    </div>
                    <div className='playFlex'>
                        <div className='playGrid'>
                            <div className='gridBox'>
                                <p className='count'>2000+</p>
                                <p className='gameText'>Projects have downloaded & integrated LYNC SDKs</p>
                            </div>
                            <div className='gridBox'>
                                <p className='count2'>2000+</p>
                                <p className='gameText'>Projects have downloaded & integrated LYNC SDKs</p>
                            </div>
                        </div>
                        <div className='gridBox1'>
                            <p className='count2'>50000+</p>
                            <p className='gameText'>User ops created in 10 hours</p>

                        </div>
                    </div>

                </div>
                <div className='product'>
                    <div className='productSite'>
                        {/* <img alt=""className='bgImg' src={bg} /> */}
                        <div className='productBox'>
                            <p className='productTitle' >Product <span className='blueText'>Site</span> </p>
                            <div className='productConatiner'>
                                {ProductData.map((item) => (
                                    <div>
                                        <div className='productCard'>
                                            <img alt=""className='cardImg' src={item.cardImg} />
                                            <div></div>
                                            <p className='cardTitle'>{item.cardTitle}</p>
                                            <p className='cardInfo'>{item.cardInfo}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='chainContainer'>
                    <p className='title'>With LYNC, build on your favorite chain.</p>
                    <div className='chainBox'>
                        {chainData.map((item) => (
                            <img alt=""className='chainImg' width="150px" src={item.img}></img>
                        ))}
                    </div>
                </div>
                <div className='blog'>
                    <p className='title'> From
                        <span className='pinkText'>Our Blog</span>
                    </p>
                    <p className='blogSubtitle'>Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights, Tips, and Innovations in Gaming SDKs!</p>
                    <div className='blogBox'>
                        <Slider {...settings}>
                            {blogData.map((item) => (

                                <div className='blogCard'>
                                    <img alt=""width="200px" src={item.img} />
                                    <div style={{ padding: "0 3rem 3rem 3rem" }}>
                                        <p className='blogTitle'>{item.blogTitle}</p>
                                        <p className='blogInfo'>{item.blogInfo}</p>
                                        <button className='primaryBtn'>{item.btnText}</button></div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
                <div className='review'>
                    <div className='title'>Valueable  <span className='blueText'>Reviews</span>
                    </div>
                    <div className='reviewBox'>
                        <Slider {...settings}>
                            {review.map((item) => (
                                <div>
                                    <p className='reviewText'>{item.review}</p>
                                    <div className='reviewer'>
                                        <div>
                                            <div className='reviewerAvatar'></div>
                                            <div style={{ textAlign: 'left' }}>
                                                <p className='reviewerName'>{item.reviewerName}</p>
                                                <p className='reviewerDetail'>{item.reviewweDetail}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>


                </div>
                <div className='network'>
                    <img alt=""className='networkImg' src={Image99} />
                    <div className='joinNetwork'>
                        <div className='title'>strong web 3 <p className='blueText'>Community</p> </div>
                        <div className='btnFlex'>
                            <button className='secBtn' width='24px'>JOin Telegram
                                <img alt=""className='rightArrow' src={RightArrow} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='believer'>
                    <p className='title'>Our <span className='blueText'>Believers and Partners</span> </p>
                    <div className='believerFlex'>
                        {believer.map((item) => (
                            <div className='believerLogo'>
                                <img alt=""width={100} src={item.img} />
                            </div>
                        ))}
                    </div>
                </div>
                <div >
                    <div className='lync'>
                        <div style={{ position: "relative" }}>
                            <div className='lyncText'>LYNCS  </div>
                            <div className='lyncBox' >
                                <p className='title'>Got a game idea ?</p>
                                <p className='title'>Let's make it big together !!!</p>
                                <div className='btnFlex'>
                                    <button className='secBtn' width='24px'>Join Telegram
                                        <img alt=""className='rightArrow' src={RightArrow} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>







                <footer className='footer'>
                    <div className='footerFlex'>
                        <div>
                            <p className='footerLogo'>LYNC</p>
                            <p className='footerInfo'>A GameFi Infrastructure</p>
                            <div className='socialLinks'>
                                <div className='social'>
                                    <img alt=""width="38" src='https://img.icons8.com/?size=100&id=98960&format=png&color=FFFFFF' />
                                </div>
                                <div className='social'>
                                    <img alt=""width="38" src='https://img.icons8.com/?size=100&id=8824&format=png&color=FFFFFF' />
                                </div>
                                <div className='social'>
                                    <img alt=""width="38" src='https://img.icons8.com/?size=100&id=59813&format=png&color=FFFFFF' />
                                </div>
                            </div>
                        </div>
                        <div className='footerLinks'>
                            <ul>product
                                <li>SDK </li>
                                <li>API Transfer </li>
                                <li>Token APi </li>
                                <li>NFT </li>
                            </ul>
                            <ul>Company
                                <li>About us </li>
                                <li>press kit </li>
                                <li>services </li>
                                <li>privacy </li>
                            </ul>
                            <ul>Contact
                                <li>telegram </li>
                                <li>press </li>
                                <li>Email </li>
                                <li>Discord </li>
                            </ul>
                        </div>
                        <div className='newsLetter'>
                            <p className='newletter'>Supercharge your inbox</p>
                            <p className='newletterText'>sign up  for our newsletter</p>
                            <div style={{ display: "flex" }}>
                                <input className='inputBox' placeholder='enter your email address' type='text' />
                                <button className='secBtn'>Submit</button>

                            </div>
                        </div>
                    </div>

                </footer>


            </div>
        </div>
    )
}

export default Home;