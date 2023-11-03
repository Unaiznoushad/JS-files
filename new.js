function timeToMixJuice(name) {
    switch (name){
      case 'Pure Strawberry Joy':
        return 0.5
        
      case 'Energizer':
      case 'Green Garden':
        return 1.5
        
      case 'Tropical Island':
        return 3
        
      case 'All or Nothing':
       return  5
        
      default:
       return  2.5
        
    }
    }



    function remainingOrders(timeLeft, orders) {
        let timeTaken=0
        let i=0
        while(timeTaken<timeLeft&&orders[i]){
          timeTaken+=timeToMixJuice(orders[i])
          console.log(orders,i)
          orders.splice(0,1)
          i++
          console.log(timeTaken)
          
        }
        return orders
      }

      console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))