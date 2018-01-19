const app = "I don't do much."

function destructivelyAppendKitten(kittens, name){
  kittens = ["Milo", "Otis", "Garfield"]
  name = "Ralph"
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(kittens){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function appendKitten(kittens){
  return [...kittens, "Broom"]
}

function prependKitten(kittens){
  return ["Arnold", ...kittens]
}

function removeLastKitten(kittens){
  kittens.slice(0, kittens.length - 1)
  return kittens
}

function removeFirstKitten(kittens){
  kittens.slice(1)
  return kittens
}