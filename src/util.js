import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: 'Beaver Creek',
            cover: 'https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg',
            artist: 'Aso, Middle School, Aviino',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=17087',
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true
        },
        {
            name: 'Alyosha',
            cover: 'https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg',
            artist: 'Monma, Misha',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Swun Cycles',
            cover: 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
            artist: 'Cycles',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=15237',
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Melodiya',
            cover: 'https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg',
            artist: 'Psalm Trees, FloFilz',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=17087',
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        }
    ];
}

export default chillHop;