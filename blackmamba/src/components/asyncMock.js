const Products = [

]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(Products)
        },1500 )
    })
}