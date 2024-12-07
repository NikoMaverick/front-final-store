
export const loaderProductHome= async () => {
    const res = await fetch('http://localhost:8080/')
    const data = await res .json();

    return {data};
}


export const loaderProductByCategory = async (category) => {
    const res = await fetch(`http://localhost:8080/products/category/${category}`)
    const data = await res .json();

    return {data};
}

export const loaderProductDetail = async (_id) => {
    console.log('_id recibido:', _id);
    const res = await fetch(`http://localhost:8080/products/${_id}`)
    const data = await res .json();

    return {data};
}
/*
export const loaderProductEdit = async (_id) => {
    const res = await fetch(`http://localhost:8080/dashboard/edit/${_id}`)
    const data = await res .json();
    return {data};
}*/

export const loaderProductNew = async () => {
    const res = await fetch('http://localhost:8080/dashboard/new');
    if (!res.ok) {
        throw new Error('Error loading product data');
    }
    const data = await res.json();
    return { data };
};
/*
export const loaderCreateProduct = async (_id) => {
    const res = await fetch(`http://localhost:8080/dashboard`) //POST
    const data = await res .json();

    return {data};
}*/

