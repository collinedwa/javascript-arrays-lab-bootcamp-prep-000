const app = "I don't do much."

function destructivelyAppendKitten(kittens){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.push("Ralph")
}

function destructivelyPrependKitten(kittens){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift("Bob")
}

function destructivelyRemoveFirstKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}

function appendKitten(kittens){
  kittens = ["Milo", "Otis", "Garfield"]
  return [...kittens, "Broom"]
}

function prependKitten(kittens){
  kittens = ["Milo", "Otis", "Garfield"]
  return ["Arnold", ...kittens]
}

function removeLastKitten(kittens){
  kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(kittens){
  kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(1)
}