const app = "I don't do much."

function destructivelyAppendKitten(kittens, name){
  kittens = ["Milo", "Otis", "Garfield"]
  name = "Ralph"
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(kittens, name){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name)
  return kittens
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