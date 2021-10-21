
export default class BookstoreService {

  data = [
    { id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowlwer',
      price: 32,
      coverImage: 'https://www.oreilly.com/library/view/production-ready-microservices/9781491965962/assets/cover.png'},
    { id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://img-gorod.ru/24/838/2483810_detail.jpg' }
  ];
    
    getBooks () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
              if(Math.random() > 0.75) {
                reject(new Error('Something bad happened'));
              } else {
                resolve(this.data);
              }
            }, 700);
        });
    }
}