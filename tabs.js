class TabLink {
  constructor(element) {
    this.element = element

    this.data = element.dataset.tab
    console.log(this.data)

    this.itemElement = document.querySelector(`.card[data-tab='${this.data}']`)
    console.log(this.item)

    this.tabItem = new TabItem(this.itemElement);

    this.element.addEventListener('click', () => this.select())
  };

  select() {
    const links = document.querySelectorAll(".tab")

    Array.from(links).forEach(link =>
      link.classList.remove('btn-danger'))

      this.element.classList.add('btn-danger')

      this.tabItem.select()
  }

}
 
class TabItem {
  constructor(element) {
    this.element = element
  }

  select() {
    const items = document.querySelectorAll('.card')

    items.forEach(element => element.classList.remove('card-selected'))

    this.element.classList.add('card-selected')
  }
}


const links = document.querySelectorAll(".tab");

links.forEach(function(link){
  new TabLink(link)
}); 


const btn = document.querySelector(".btn"); 

btn.addEventListener('click', function(){
  document.location.href = 'https://ecstatic-boyd-937833.netlify.com/'
});