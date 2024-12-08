
export const loaderProductHome= async () => {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}`)
    const data = await res.json();
    return {data};
}


export const loaderProductByCategory = async (category) => {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}products/category/${category}`)
    const data = await res.json();
    return {data};
}

export const loaderProductDetail = async (_id) => {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}products/${_id}`)
    const data = await res.json();
    console.log('_id recibido:', _id);
    return {data};
}

/*
export const loaderProductEdit = async (_id) => {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}dashboard/edit/${_id}`)
    const data = await res .json();
    return {data};
}*/



