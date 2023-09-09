const categories = [
    {id: '01', name: '메인',
        content: [
            { //판매중 true, 품절 false
                productId: '1',
                menuName: '해물육개장칼국수',
                price: '22,900',
                status: true,
                image: require('../source/menu1.png'),
                menuIntro: '이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.'
            }, {
                productId: '2',
                menuName: '바지락술찜 파스타',
                price: '18,900',
                status: false,
                image: require('../source/menu1.png'),
                menuIntro: '이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.'
            },{
                productId: '3',
                menuName: '부추훈제오리구이',
                price: '18,900',
                status: false,
                image: require('../source/menu1.png'),
                menuIntro: '이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.'
            },{
                productId: '4',
                menuName: '두부김치',
                price: '14,900',
                status: false,
                image: require('../source/menu1.png'),
                menuIntro: '이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.'
            },{
                productId: '05',
                menuName: '된장찌개',
                price: '14,900',
                status: true,
                image: require('../source/menu1.png'),
                menuIntro: '이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.'
            },{
                productId: '06',
                menuName: '육개장',
                price: '14,900',
                status: true,
                image: require('../source/menu1.png'),
                menuIntro: '이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.'
            },{
                productId: '07',
                menuName: '육개장',
                price: '14,900',
                status: true,
                image: require('../source/menu1.png'),
                menuIntro: '이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.'
            }
        ]},
    {id: '02', name: '사이드',
    content: [
        {   
            productId: '08',
            menuName: '통닭크림파스타',
            price: '22,900',
            status: true,
            image: require('../source/menu1.png'),
            menuIntro: '이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.이것은 맛있는 짜파게티 계란 치즈입니다.'
        }, {
            productId: '09',
            menuName: '바지락술찜 파스타',
            price: '18,900',
            status: false,
            image: require('../source/menu1.png'),
        }]},
    {id: '03', name: '탕류',
        content: [
            {
                productId: '10',
                menuName: '메뉴1',
                price: '10,000',
                status: false,
                image: require('../source/menu1.png'),
            }, {
                productId: '11',
                menuName: '메뉴2',
                price: '12,000',
                status: false,
                image: require('../source/menu1.png'),
            }]},
    {id: '04', name: '튀김류',
    content: [
        {
            productId: '12',
            menuName: '메뉴1',
            price: '10,000',
            status: false,
            image: require('../source/menu1.png'),
        }, {
            productId: '13',
            menuName: '메뉴2',
            price: '12,000',
            status: false,
            image: require('../source/menu1.png'),
        }]},
    {id: '05', name: '주류',
        content: [
            {   
                productId: '14',
                menuName: '메뉴1',
                price: '10,000',
                status: false,
                image: require('../source/menu1.png'),
            }, {
                productId: '15',
                menuName: '메뉴2',
                price: '12,000',
                status: false,
                image: require('../source/menu1.png'),
            }]},
    {id: '06', name: '기타',
    content: [
        {
            productId: '16',
            menuName: '메뉴1',
            price: '10,000',
            status: false,
            image: require('../source/menu1.png'),
        }, {
            productId: '17',
            menuName: '메뉴3',
            price: '12,000',
            status: false,
            image: require('../source/menu1.png'),
        }]}
];

export default categories;