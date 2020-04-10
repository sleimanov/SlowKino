import { Movie } from './movie'
import { Genre } from './genre'

export const MOVIES: Movie[] = [
  { id: 1, title: 'Parasite', year: 2019, rating: 9.45,
  description: 'Bong Joon Ho’s family thriller capped off its triumphant 2019 by placing first on IndieWire’s Critics Poll. The movie world premiered at the Cannes Film Festival, where it became the first South Korean film to win the festival’s prestigious Palme d’Or. Since then, “Parasite” has became a box office sensation (over $20 million in the U.S. and over $100 million worldwide) and a top Oscar contender in categories such as Best Picture, Best Director, and more.',
  cast: ['Kang-ho Song', 'Sun-kyun Lee', 'Yeo-jeong Jo', 'Woo-sik Choi'],
  genres: ['Comedy', 'Drama', 'Thriller'] },

  { id: 2, title: 'John Wick: Chapter 3', year: 2019, rating: 7.14,
  description: 'John reaches out to the Director, the head of the Ruska Roma, with the crucifix and requests her help in getting safe passage to Casablanca. The Director reluctantly helps, as John is a former protégé and is from Belarus, knowing that this act will violate her peace treaty with the High Table.',
  cast: ['Keanu Reeves', 'Halle Berry', 'Ian McShane', 'Laurence Fishburne'],
  genres: ['Action', 'Crime', 'Thriller'] },

  { id: 3, title: 'Avengers: Endgame', year: 2019, rating: 8.4,
  description: 'After the devastating events of Мстители: Война бесконечности (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
  cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'],
  genres: ['Action', 'Drama', 'Fantasy'] },

  { id: 4, title: 'Green Book', year: 2018, rating: 8.2,
  description: 'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.',
  cast: ['Viggo Mortensen', 'Mahershala Ali', 'Linda Cardellini', 'Sebastian Maniscalco'],
  genres: ['Comedy', 'Drama'] },

  { id: 5, title: 'Joker', year: 2019, rating: 8.5,
  description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
  cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz', 'Frances Conroy'],
  genres: ['Crime', 'Drama', 'Thriller'] }
]
