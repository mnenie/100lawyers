new Vue({
  el: '.site',
  data: {
    showMobile: true,
    btnSeoText: 'Показать весь текст',
    isTextChange: false,
    showP: true,
    clickCount: 0,
    search: '',
    searchCall1: '',
    searchCall2: '',
    textAreaInput: '',
    emailInput: '',
    passwordInput: '',
    showCall: true,
  },
  methods: {
    scrollInputBtn(){
      const reviewsBlock = this.$refs.reviewsBlock
      const questionsBlock = this.$refs.questionsBlock 
      const lawyersBlock = this.$refs.lawyersBlock
      const articlesBlock = this.$refs.articlesBlock
      const contactsBlock = this.$refs.contactsBlock
      if(this.search === "Отзывы" || this.search === "Отзыв" || this.search.toLowerCase() === "отзыв" || this.search.toLowerCase() === "отзывы" || this.search.toUpperCase() === "отзыв" || this.search.toUpperCase() === "отзывы"){
        this.scrollInputReviews(reviewsBlock)
        this.search = ''
      }
      else if(this.search === "Вопросы" || this.search === "Вопрос" || this.search.toLowerCase() === "вопрос" || this.search.toLowerCase() === "вопросы" || this.search.toUpperCase() === "вопрос" || this.search.toUpperCase() === "вопросы"){
        this.scrollInputQuestions(questionsBlock)
        this.search = ''
      }
      else if(this.search === "Юристы" || this.search === "Юрист" || this.search === "Наш" || this.search === "Наши" || this.search === "Наши Юристы"|| this.search.toLowerCase() === "юрист" || this.search.toLowerCase() === "юристы" || this.search.toUpperCase() === "юристы" || this.search.toUpperCase() === "юрист" || this.search.toLowerCase() === "наш" || this.search.toLowerCase() === "наши" || this.search.toLowerCase() === "наши юристы" || this.search.toUpperCase() === "наш" || this.search.toUpperCase() === "наши" || this.search.toUpperCase() === "наши юристы"){
        this.scrollInputLawyers(lawyersBlock)
        this.search = ''
      }
      else if(this.search === "Статьи" || this.search === "Статья" || this.search.toLowerCase() === "статьи" || this.search.toLowerCase() === "статья" || this.search.toUpperCase() === "статьи" || this.search.toUpperCase() === "статья"){
        this.scrollInputArticles(articlesBlock)
        this.search = ''
      }
      else if(this.search === "Контакты" || this.search === "Контакт" || this.search.toLowerCase() === "контакты" || this.search.toLowerCase() === "контакт" || this.search.toUpperCase() === "контакты" || this.search.toUpperCase() === "контакт"){
        this.scrollInputContacts(contactsBlock)
        this.search = ''
      }
      document.querySelector('.collapse__input').classList.remove('show')
    },
    scrollInputReviews(el){
      if(el){
        const yOffset = el.getBoundingClientRect().top + window.pageYOffset
        const y = yOffset - (window.innerHeight / 8)
        window.scrollTo({
          top: y, 
          behavior: 'smooth'
        })
      }
    },
    scrollInputQuestions(el){
      if(el){
        const yOffset = el.getBoundingClientRect().top + window.pageYOffset
        const y = yOffset - (window.innerHeight / 4)
        window.scrollTo({
          top: y, 
          behavior: 'smooth'
        })
      }
    },
    scrollInputLawyers(el){
      if(el){
        const yOffset = el.getBoundingClientRect().top + window.pageYOffset
        const y = yOffset - (window.innerHeight / 18)
        window.scrollTo({
          top: y, 
          behavior: 'smooth'
        })
      }
    },
    scrollInputArticles(el){
      if(el){
        const yOffset = el.getBoundingClientRect().top + window.pageYOffset
        const y = yOffset - (window.innerHeight / 18)
        window.scrollTo({
          top: y, 
          behavior: 'smooth'
        })
      }
    },
    scrollInputContacts(el){
      if(el){
        const yOffset = el.getBoundingClientRect().top + window.pageYOffset
        const y = yOffset - (window.innerHeight / 4)
        window.scrollTo({
          top: y, 
          behavior: 'smooth'
        })
      }
    },
    scrollReviews(el){
      el.preventDefault();
      const reviewsBlock = this.$refs.reviewsBlock
      const yOffset = reviewsBlock.getBoundingClientRect().top + window.pageYOffset
      const y = yOffset - (window.innerHeight / 8)
      window.scrollTo({
        top: y, 
        behavior: 'smooth'
      })
    },
    scrollToQuestions(el){
      el.preventDefault();
      const questionsBlock = this.$refs.questionsBlock
      const yOffset = questionsBlock.getBoundingClientRect().top + window.pageYOffset
      const y = yOffset - (window.innerHeight / 4)
      window.scrollTo({
        top: y, 
        behavior: 'smooth'
      })
    },
    scrollToLawyers(el){
      el.preventDefault();
      const lawyersBlock = this.$refs.lawyersBlock
      const yOffset = lawyersBlock.getBoundingClientRect().top + window.pageYOffset
      const y = yOffset - (window.innerHeight / 18)
      window.scrollTo({
        top: y, 
        behavior: 'smooth'
      })
    },
    scrollToArticles(el){
      el.preventDefault();
      const articlesBlock = this.$refs.articlesBlock
      const yOffset = articlesBlock.getBoundingClientRect().top + window.pageYOffset
      // const y = articlesBlock.offsetTop
      const y = yOffset - (window.innerHeight / 18)
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    },
    scrollToContacts(el){
      el.preventDefault();
      const contactsBlock = this.$refs.contactsBlock
      const yOffset = contactsBlock.getBoundingClientRect().top + window.pageYOffset
      const y = yOffset - (window.innerHeight / 4)
      window.scrollTo({
        top: y,
        behavior: "smooth"
      })
    },
    btnRegistration(){
      this.emailInput = ''
      this.passwordInput = ''
      this.searchCall1 = ''
      this.searchCall2 = ''
    },
    btnApplication(){
      this.searchCall2 = ''
      this.searchCall1 = ''
      this.textAreaInput = ''
      Swal.fire({
        title: 'Спасибо, ваша заявка принята',
        text: 'Мы свяжемся с вами в течение х минут',
        icon: 'success',
        confirmButtonText: 'Закрыть окно',
        showCloseButton: true,
      })
    },
    btnConfirm(){
      this.searchCall2 = ''
      this.searchCall1 = ''
      setTimeout(()=>{
        Swal.fire({
          title: 'Спасибо, ваша заявка принята',
          text: 'Мы свяжемся с вами в течение х минут',
          icon: 'success',
          confirmButtonText: 'Закрыть окно',
          showCloseButton: true,
        })
      }, 300)
    },
    resizeMobile(){
      this.showMobile = window.innerWidth <= 726 
    },
    btnReload(){
      window.location.reload()
    },
    changeText(){
      this.isTextChange = !this.isTextChange
      if(this.isTextChange){
        this.btnSeoText = 'Скрыть весь текст'
        this.showP = false
      }
      else {
        this.btnSeoText = 'Показать  весь текст'
        this.showP = true
      }
    },
    clearInput() {
      this.search = '';
      // document.querySelector('.collapse').classList.remove('show')
    },
    clickOutside(event) {
      if (!this.$refs.inputClean.contains(event.target)) {
        this.clearInput();
      }
    },
    keyDown(event) {
      if (event.key === 'Enter') {
        this.clearInput();
      }
    },
    openTg(){
      const tglink = 'https://t.me/youngjuicycashrussia'
      window.open(tglink, '_blank')
    },
    openVk(){
      const vklink = 'https://vk.com/mnenie_mozhno'
      window.open(vklink, '_blank')
    },
    openGit(){
      const gitlink = 'https://github.com/mnenie?tab=repositories'
      window.open(gitlink, '_blank')
    },
    openInst(){
      const instlink = 'https://www.instagram.com/prod_youngjuicycash/'
      window.open(instlink, '_blank')
    },
    storageWork(){
      localStorage.setItem('email', this.emailInput)
      localStorage.setItem('password', this.passwordInput)  
      // localStorage.setItem('check', document.querySelector('.form-check-input:checked'))
      this.clickCount ++
      if(this.clickCount % 2 != 0){
        document.querySelector('.input__form__registration1 input').style.backgroundColor = 'rgba(51, 131, 110, 0.1)'
        document.querySelector('.input__form__registration2 input').style.backgroundColor = 'rgba(51, 131, 110, 0.1)'
      } else {
        document.querySelector('.input__form__registration1 input').style.backgroundColor = 'rgba(255, 255, 255, 1)'
        document.querySelector('.input__form__registration2 input').style.backgroundColor = 'rgba(255, 255, 255, 1)'
      }
    },
    storageGet(){
      this.emailInput = localStorage.getItem('email') || ''
      this.passwordInput = localStorage.getItem('password') || ''
    },
  },  
  mounted() {
    document.addEventListener('click', this.clickOutside)
    document.addEventListener('keydown', this.keyDown)
    this.showMobile = window.innerWidth <= 726
    window.addEventListener('resize', this.resizeMobile)
    this.emailInput = localStorage.getItem('email') || ''
    this.passwordInput = localStorage.getItem('password') || ''
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickOutside)
    document.removeEventListener('keydown', this.keyDown)
    window.removeEventListener('resize', this.resizeMobile)
  },
});