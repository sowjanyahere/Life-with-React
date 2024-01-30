const AccordianNestCards = (props) => {
    const {resNestedCard} = props;
    const resNestedCardData = [];
    for(let i=0;i < resNestedCard.length;i++ ){
        for(let k=0;k < resNestedCard[i].length; k++){
            resNestedCardData.push(resNestedCard[i][k]);
        }
    }

    return <>
        {resNestedCardData.map((res)=>(           <div className="accordianCardsList">
           <div className="accordianCardsListLeft">
            <div className="accordianCardsListLeftNested">
                <p className="smallIconHere"></p>
                {console.log(res.id)};
                <h3>{res.name}</h3>
                <h6>{res.price/100}/-</h6>
                <p>
                {res.description}
                </p>
            </div>             
           </div>
           <div className="accordianCardsListRight">
             <img
               alt="dish Image"
               src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b5678129d8f9f81b8e2849cf033aebe6"
             ></img>
           </div>
         </div>
        ))}
        {/* <p>name-- {name}</p>
        <p>name-- {name1}</p>
        <p>category-- {category}</p>
        <p>name-- {category1}</p> */}
    </>
} 
export default AccordianNestCards;