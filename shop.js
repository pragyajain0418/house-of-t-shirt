const search = ()=>{
    const box = document.getElementById("search-item").value.toUpperCase();
    const item = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname = item.getElementsByTagName("h2")

    for (let i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0]
        if(match){
            let textvalue = match.textContent || match.innerHTML
            
            if(textvalue.toUpperCase().indexOf(box) > -1){
                product[i].style.display=""
            
        } else{
            product[i].style.display = "none";
        }
        
    }
}
}