export const getProducts= async()=>{
    try{
        const response=await fetch("https://fakestoreapi.com/products");
        if(!response.ok){
            throw new Error(`Failed to fetch products: ${response.status}`);
        }
        const data=await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export const getProductsById= async(id)=>{
    try{
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        if(!response.ok){
            throw new Error("Product not found!!");
        }

        let data;
        try{
            data= await response.json();
        }catch{
            throw new Error("Product not found!");
        }
        
        if(!data || !data.id){
            throw new Error("Product not found!");
        }
        return data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
};