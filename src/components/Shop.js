import { useCallback, useEffect, useState, useMemo } from 'react';
import { useContext } from "react";
import { CartContext } from './CartContext';

function Shop() {
    const { addCart } = useContext(CartContext);
    const [category, setCategory] = useState([])
    const [data, setData] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [filterParam, setFilterParam] = useState("ALL");
    const [sortParam, setSortParam] = useState("ALL");
    var sortArrayData = [{
        name:"Price: low to high",
        id: 1
         },
         {
            name:"Price: high to low",
            id: 2
             },
             {
                name:"Rating: low to high",
                id: 3
                 },
                 {
                    name:"Rating: high to low",
                    id: 4
                     }
    ]


    const sortedItems = useMemo(() => {
        console.log(sortParam,"===========sortParam")
       // let sorted = [...filteredItems];

        switch (sortParam) {
            case "priceAsc":
                filteredItems.sort((a, b) => a.price - b.price);
                break;
            case "priceDesc":
                filteredItems.sort((a, b) => b.price - a.price);
                break;
            case "ratingAsc":
                filteredItems.sort((a, b) => a.rating - b.rating);
                break;
            case "ratingDesc":
                filteredItems.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }
        return filteredItems;
    }, [sortParam]);

    const filterItems = useCallback(()=>{
        if (filterParam !== "ALL") {
            const filterByItem = data.filter((item, index, self) =>
                item.category === filterParam
            );
            setFilteredItems(filterByItem);
        } else {
            setFilteredItems(data)
        }
    },[filterParam, data])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://dummyjson.com/products');
            const result = await data.json();
            setData(result.products);
            const categoryTemp = result.products.filter((item, index, self) =>
                self.findIndex((obj) => obj.category === item.category) === index
            );
            setCategory(categoryTemp);
        }
        fetchData()
    }, []);

    useEffect(() => {
        if (data) {
          filterItems();
        }
      }, [data, filterParam]);

    function addCartItem(item) {
        addCart(item)
    }
    function filterUp(item) {
        setFilterParam(item)
    }
    function handleSortData(item) {
        setSortParam(item)
    }
    return (
        <div className="App">
            {/* <Navbar cartData = {cart}></Navbar> */}
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <button type="button" onClick={() => filterUp("ALL")} className="btn btn-secondary">ALL</button>
                {
                    category.map((item, i) => (
                        <button key={i} type="button" onClick={() => filterUp(item.category)} className="btn btn-secondary">{item.category}</button>
                    ))
                }
            </div>
             <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={()=> handleSortData("priceAsc")} href="#">Price: low to high</a></li>
                    <li><a className="dropdown-item" onClick={()=> handleSortData("priceDesc")} href="#">Price: high to low</a></li>
                    <li><a className="dropdown-item" onClick={()=> handleSortData("ratingAsc")} href="#">Rating: low to high</a></li>
                    <li><a className="dropdown-item" onClick={()=> handleSortData("ratingDesc")} href="#">Rating: high to low</a></li>
                </ul>
            </div>
            <div className="row row-cols-12 row-cols-md-3 g-3">
                {
                    filteredItems.map((item, i) => (
                        <div key={i} className="card border-5" style={{ width: '19rem', height: 'auto' }}>
                            <img src={item.images[0]} className="card-img-top w-50 h-50" alt="..." style={{ alignSelf: 'center' }} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{`Price: $${item.price}`}</p>
                                <p className="card-text">{`Rating: ${item.rating}`}</p>
                                <a className="btn btn-primary" href="#" onClick={() => addCartItem(item)}>Add to cart</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Shop;
