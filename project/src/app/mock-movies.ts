import { Movie } from './movie'

export const MOVIES: Movie[] = [
  { id: 1, title: 'Parasite', year: 2019, rating: 9.45,
  description: 'Bong Joon Ho’s family thriller capped off its triumphant 2019 by placing first on IndieWire’s Critics Poll. The movie world premiered at the Cannes Film Festival, where it became the first South Korean film to win the festival’s prestigious Palme d’Or. Since then, “Parasite” has became a box office sensation (over $20 million in the U.S. and over $100 million worldwide) and a top Oscar contender in categories such as Best Picture, Best Director, and more.',
  cast: ['Kang-ho Song', 'Sun-kyun Lee', 'Yeo-jeong Jo', 'Woo-sik Choi'],
  genres: ['Комедия', 'Драма', 'Триллер'],
  imgSrc: 'assets/images/parasite.webp'},

  { id: 2, title: 'John Wick: Chapter 3', year: 2019, rating: 7.14,
  description: 'John reaches out to the Director, the head of the Ruska Roma, with the crucifix and requests her help in getting safe passage to Casablanca. The Director reluctantly helps, as John is a former protégé and is from Belarus, knowing that this act will violate her peace treaty with the High Table.',
  cast: ['Keanu Reeves', 'Halle Berry', 'Ian McShane', 'Laurence Fishburne'],
  genres: ['Экшен', 'Криминал', 'Триллер'],
  imgSrc: 'assets/images/John_Wick_3.jpg'},

  { id: 3, title: 'Avengers: Endgame', year: 2019, rating: 8.4,
  description: 'After the devastating events of Мстители: Война бесконечности (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
  cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'],
  genres: ['Экшен', 'Драма', 'Фантастика'],
  imgSrc: 'assets/images/Avengers_Endgame_poster.jpg'},

  { id: 4, title: 'Green Book', year: 2018, rating: 8.2,
  description: 'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.',
  cast: ['Viggo Mortensen', 'Mahershala Ali', 'Linda Cardellini', 'Sebastian Maniscalco'],
  genres: ['Комедия', 'Драма'],
  imgSrc: 'assets/images/kniga.jpg'},

  { id: 5, title: 'Joker', year: 2019, rating: 8.5,
  description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
  cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz', 'Frances Conroy'],
  genres: ['Криминал', 'Драма', 'Триллер'],
  imgSrc: 'assets/images/joker.png'},

  {
    id: 6, title: 'Достать ножи', year: 2019, rating: 7.83,
    description: 'На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мёртвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан. Тем же утром он получил конверт с наличными от неизвестного и заказ на расследование смерти Харлана. Не нужно быть опытным следователем, чтобы понять, что все приукрашивают свои отношения с почившим главой семейства, но Блану достаётся настоящий подарок — медсестра покойного, которая физически не выносит ложь.',
    cast: ['Дэниэл Крэйг', 'Ана де Армас', 'Крис Эванс', 'Джейми Ли Кёртис'],
    genres: ['Детектив', 'Комедия', 'Драма', 'Криминал'],
    imgSrc: 'assets/images/knife.png'},

    { id: 7, title: 'Пассажир', year: 2018, rating: 6.583,
    description: 'Еще вчера его день начинался с поездки на работу в одном и том же поезде, в компании уже давно знакомых лиц, но сегодня таинственная незнакомка предлагает ему поучаствовать в эксперименте. Одна остановка, чтобы принять решение, и единственный шанс из тысячи победить. Осторожно, игра начинается…',
    cast: ['Лиам Нисон', 'Вера Фармига', 'Патрик Уилсон', 'Джонатан Бэнкс'],
    genres: ['Боевик', 'Детектив', 'Триллер'],
    imgSrc: 'assets/images/passa.jpg'},

    { id: 8, title: 'Нерв', year: 2016, rating: 6.493,
    description: 'Поддавшись на уговоры одноклассниц, тихоня Ви открывает для себя мир популярной онлайн-игры «Нерв», где участники выполняют задания разной степени сложности, которые придумывают для них другие пользователи. В случае успеха игроки получают очень неплохие деньги. Ви проявляет неожиданную для самой себя смелость и отсутствие комплексов, и в очередном раунде знакомится с парнем по имени Иэн. Красивая пара нравится зрителям игры, и они решают, что следующие задания Ви и Иэн должны выполнять только вместе. Ставки растут, задания становятся все опаснее, и Ви постепенно понимает, что выйти из игры по собственной воле не получится. Те, кто считают себя игроками, на самом деле всего лишь пешки в руках таинственного сообщества Наблюдателей. И никто из участников игры не знает, какое задание станет следующим — или последним.',
    cast: ['Эмма Робертс', 'Дэйв Франко', 'Эмили Мид', 'Майлс Хейзер'],
    genres: ['Драма', 'Детектив', 'Триллер', 'Криминал'],
    imgSrc: 'assets/images/nerv.jpg'},

    { id: 9, title: 'Шерлок Холмс: Игра теней', year: 2011, rating: 7.849,
    description: '1891 год. В Вене и Страсбурге проходит серия терактов, организованных анархистами или националистами, а по всей Европе происходят таинственные убийства. Шерлок Холмс считает, что за всем этим стоит профессор Джеймс Мориарти — математический гений, автор знаменитых лекций и трудов.',
    cast: ['Роберт Дауни мл.', 'Джуд Лоу', 'Нуми Рапас', 'Джаред Харрис'],
    genres: ['Боевик', 'Детектив', 'Триллер', 'Криминал'],
    imgSrc: 'assets/images/sher.jpg'},

    { id: 10, title: 'Иллюзия обмана', year: 2013, rating: 7.713,
    description: 'Они не просто фокусники и даже не иллюзионисты, они нечто большее, нечто, на первый взгляд, не поддающееся анализу или разгадке. Группа, состоящая из четырех, казалось бы, обычных молодых людей, не просто развлекает публику, а проворачивает совершенно невероятные и не совсем законные трюки. Они способны за пару секунд преодолеть пространство и время, чтобы похитить из парижского банка несколько миллионов.',
    cast: ['Мелани Лоран', 'Морган Фриман', 'Майкл Кейн', 'Джесси Айзенберг', 'Марк Руффало'],
    genres: ['Детектив', 'Триллер', 'Криминал'],
    imgSrc: 'assets/images/obman.jpg'},
]
