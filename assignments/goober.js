const goober = maxNumberOfKids => {
    const lastName = "Goober"
    const kidLimit = maxNumberOfKids || 500 // 👀
    const kidCount = 0

    const newChildFactory = firstName => {
        if (kidCount <= kidLimit) {
            return {
                firstName: firstName,
                lastName: lastName,
                holla: () => {
                    return `They call me ${firstName}. But it's Mr. ${lastName} to you!`
                }
            }
        }
    }

    return newChildFactory
}

// There's only gonna be 3 Goobers in this world
const customGooberMaker = goober(3)

// Let's makes some Goober babies
// Because of our closure func,
// We get to gift them these beautiful names
const doobie = customGooberMaker("Doobie")
const ruby = customGooberMaker("Ruby")
const scooby = customGooberMaker("Scooby")

// We can try to make a 4th Goober baby
// But we implemented birth control up there...
// So we're shit out of luck
const booby = customGooberMaker("Booby") // undefined

// Let's put the kids in a list for shits and giggles
const theGooberKids = [doobie, ruby, scooby]

// This is the part where all the Goober kids introduce themselves
theGooberKids.forEach(gooberKid => {
    console.log(gooberKid.holla())
    // They call me Doobie. But it's Mr. Goober to you!
    // They call me Ruby. But it's Mr. Goober to you!
    // They call me Scooby. But it's Mr. Goober to you!
})

// Your Mission, If You're as Bored as I am:
// Notice how the prefix to their name is not woke at all!
// Rid the world of misogyny and other ailments by adding appropriate gender prefixes to the holla() method
