let tamagochi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function(){
        if(this.meal <= 0 || this.energy <= 0){
            return `${this.name} умер:(`
          }
        
        const foodest = this.meal < 3 ? "я голоден" : "я не гододен";
         const energy1 = this.energy < 3 ? "я хочу спать" : "я не хочу спать"
         const mood1 = this.mood < 3 ? "мне скучно" : "мне весело"
        return `имя:${this.name}, Еда: ${foodest} (${this.meal}), Энергия: ${energy1} (${this.energy}), Настроение:${mood1} (${this.mood}).`

      },

      setName: function(text){
      this.name = text
      },
    
      eat: function(){
      if(this.meal <= 5){
        this.meal++
      }this.mood--
      },
  
      sleep: function(){
       if(this.energy <= 5){
           this.energy++
       }
       this.meal--
      },
  
      play: function(){
       if(this.mood <= 5){
           this.mood++
       }
       this.energy--
      },
  };
  tamagochi.getStatus()
  console.log(tamagochi.getStatus())
  tamagochi.setName('Jamic')
  console.log(tamagochi.getStatus())
  tamagochi.eat()
  console.log(tamagochi.getStatus())
  tamagochi.sleep()
  console.log(tamagochi.getStatus())
  tamagochi.play()
  console.log(tamagochi.getStatus())
  
  
