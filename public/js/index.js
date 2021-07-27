//get data
const db = firebase.firestore()
db.collection('product').get().then((snapshot)=>{
  snapshot.forEach((doc) => {
    console.log(doc.data())
    let template = `<div class="product">
        <div class="thumbnail" style="background-image: url('https://via.placeholder.com/350')"></div>
        <div class="flex-grow-1 p-4">
          <h5 class="title">${doc.data().name}</h5>
          <p class="date">2030년 1월 8일</p>
          <p class="price">${doc.data().price}원</p>
          <p class="float-end">🤍0</p>
        </div>
      </div>
    </div>`
    $('.container').append(template)
  });
})
