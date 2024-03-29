import { ADDMOVIE, DELETEMOVIE, EDITMOVIE } from "./Actiontype"

const initialState = {
    movies:[
        {
          id: 1,
          title: 'F9',
          date: '2021-06-25',
          genre: ' Action, Adventure, Crime, Thriller',
          description:
            "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
          posterURL:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qIicLxr7B7gIt5hxZxo423BJLlK.jpg',
          trailer: 'https://www.youtube.com/embed/PC5blZ9n810',
          rating: 4,
        },
        {
          id: 2,
          title: 'Wrath of Man',
          date: '2021-05-07',
          genre: ' Crime, Action, Thriller',
          description:
            "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
          posterURL:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/M7SUK85sKjaStg4TKhlAVyGlz3.jpg',
          trailer: 'https://www.youtube.com/embed/EFYEni2gsK0',
          rating: 2,
        },
        {
          id: 3,
          title: 'Fatherhood',
          date: '2021-06-18',
          genre: ' Drama, Family, Comedy',
          description:
            'A widowed new dad copes with doubts, fears, heartache and dirty diapers as he sets out to raise his daughter on his own. Inspired by a true story.',
          posterURL:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pR2fzm82fl0giommpo310LBOMbV.jpg',
          trailer: 'https://www.youtube.com/embed/T3mwUEoZdrI',
          rating: 3,
        },
        {
          id: 4,
          title: 'The Marksman',
          date: '2021-01-15',
          genre: ' Action, Thriller, Crime ',
          description:
            'Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.',
          posterURL:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
          trailer: 'https://www.youtube.com/embed/lEBPNi4bEbc',
          rating: 3,
        },
        {
          id: 5,
          title: 'Joker',
          date: '2019-10-04',
          genre: ' Crime, Thriller, Drama',
          description:
            'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
          posterURL:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
          trailer: 'https://www.youtube.com/embed/t433PEQGErc',
          rating: 4,
        },
      ]
}

export const Reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDMOVIE:
    return { ...state, movies:[...state.movies,payload] }
case DELETEMOVIE:
    return{...state,movies:state.movies.filter(e=>e.id!==payload)}
    case EDITMOVIE:
        return {...state,movies:state.movies.map(e=>e.id==payload.id?e=payload.data:e)}
  default:
    return state
  }
}
