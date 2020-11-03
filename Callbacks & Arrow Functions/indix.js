 // ex.1


 // ex.2

 
 // ex.3 



  // ex.4 

const add = (x, y,z) => {
    return x + y +z
  }
  
  const sum = add(1, 2, 3) 
  console.log(sum) 

 
  // ex.5
   const capitalize= (String) => String.toUpperCase(); 
   capitalize1=capitalize("bOb") // returns Bob
   capitalize2=capitalize("TAYLOR") // returns Taylor
   capitalize3=capitalize("feliSHIA") // returns Felishia
   console.log (capitalize1)
   console.log (capitalize2)
   console.log (capitalize3)
    // ex.6

      // ex.7
      const explode = (lightFunc, soundFunc, sound) => {
        lightFunc()
        soundFunc(sound)
      }
        
      const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
        
      const makeSound = sound => alert(sound)
        
      explode(shineLight, makeSound, "BOOM")

    


      











