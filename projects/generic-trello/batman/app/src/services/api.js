export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar HTML',
          labels: ['#32CD32'],
          user: 'https://static.vecteezy.com/system/resources/previews/001/200/028/non_2x/dog-png.png'
        },
        {
          id: 2,
          content: 'Estudar CSS',
          labels: ['#32CD32'],
          user: 'https://static.vecteezy.com/system/resources/previews/001/200/028/non_2x/dog-png.png'
        },
        {
          id: 3,
          content: 'Estudar JavaScript',
          labels: ['#32CD32'],
          user: 'https://static.vecteezy.com/system/resources/previews/001/200/028/non_2x/dog-png.png'
        },
        {
          id: 4,
          content: 'Estudar Node',
          labels: ['#FF6347'],
          user: 'https://static.vecteezy.com/system/resources/previews/001/200/028/non_2x/dog-png.png'
        },
        {
          id: 5,
          content: 'Estudar React',
          labels: ['#FF6347'],
          user: 'https://static.vecteezy.com/system/resources/previews/001/200/028/non_2x/dog-png.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Estudar Banco de dados',
          labels: [],
          user: 'https://static.vecteezy.com/system/resources/previews/001/200/028/non_2x/dog-png.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Projeto 3',
          labels: ['#32CD32'],
          user: 'https://static.vecteezy.com/system/resources/previews/001/200/028/non_2x/dog-png.png'
        },
        {
          id: 8,
          content: 'Desafio 3',
          labels: ['#FF6347'],
          user: 'https://static.vecteezy.com/system/resources/previews/001/200/028/non_2x/dog-png.png'
        },
        {
          id: 9,
          content: 'Desafio 1',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Desafio 2',
          labels: [],
        },
        {
          id: 12,
          content: 'Projeto 1',
          labels: ['#FF6347'],
        },
        {
          id: 13,
          content: 'Projeto 2',
          labels: ['#32CD32'],
        }
      ]
    },
  ]
}